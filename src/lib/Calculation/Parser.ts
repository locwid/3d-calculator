import { ParserError } from "./errors";
import { BinaryExpression } from "./expressions/BinaryExpression";
import { BlankExpression } from "./expressions/BlankExpression";
import type { Expression } from "./expressions/Expression";
import { GroupingExpression } from "./expressions/GroupingExpression";
import { LiteralExpression } from "./expressions/LiteralExpression";
import { UnaryExpression } from "./expressions/UnaryExpression";
import type { Token } from "./Token";
import { TokenType } from "./TokenType";

export class Parser {
  private tokens: Token[];
  private current = 0;
  private incompleted = false;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  get isIncompleted() {
    return this.incompleted;
  }

  parse() {
    if (this.isAtEnd()) {
      throw new ParserError(this.peek(), "Empty input");
    }
    return this.expression();
  }

  private expression(): Expression {
    return this.term();
  }

  private term(): Expression {
    let expr = this.factor();

    while (this.match(TokenType.MINUS, TokenType.PLUS)) {
      const operator = this.previous();
      const right = this.factor();
      expr = new BinaryExpression(expr, operator, right);
    }

    return expr;
  }

  private factor(): Expression {
    let expr = this.unary();

    while (this.match(TokenType.SLASH, TokenType.STAR)) {
      const operator = this.previous();
      const right = this.unary();
      expr = new BinaryExpression(expr, operator, right);
    }

    return expr;
  }

  private unary(): Expression {
    if (this.match(TokenType.MINUS)) {
      const operator = this.previous();
      const right = this.primary();
      return new UnaryExpression(operator, right);
    }

    return this.primary();
  }

  private primary(): Expression {
    if (this.match(TokenType.LEFT_PAREN)) {
      const expr = this.expression();
      const rightParen = this.consume(TokenType.RIGHT_PAREN);
      if (!rightParen) {
        this.incompleted = true;
      }
      return new GroupingExpression(expr, !!rightParen);
    }

    if (this.match(TokenType.NUMBER)) {
      return new LiteralExpression(this.previous().literal);
    }

    if (this.isAtEnd()) {
      return this.blank();
    }

    throw new ParserError(this.peek(), "Expect expression.");
  }

  private match(...types: TokenType[]) {
    for (const type of types) {
      if (this.check(type)) {
        this.advance();
        return true;
      }
    }
    return false;
  }

  private check(type: TokenType) {
    if (this.isAtEnd()) return false;
    return this.peek().type === type;
  }

  private advance() {
    if (!this.isAtEnd()) this.current++;
    return this.previous();
  }

  private isAtEnd() {
    return this.peek().type === TokenType.END;
  }

  private peek() {
    return this.tokens[this.current];
  }

  private previous() {
    return this.tokens[this.current - 1];
  }

  private consume(type: TokenType) {
    if (this.check(type)) {
      return this.advance();
    }
    return null;
  }

  private blank(): Expression {
    this.incompleted = true;
    return new BlankExpression();
  }
}
