import { ScannerError } from "./errors";
import { Token } from "./Token";
import { TokenType } from "./TokenType";

export class Scanner {
  private source: string;
  private tokens: Token[] = [];
  private start = 0;
  private current = 0;

  constructor(source: string) {
    this.source = source;
  }

  scanTokens(): Token[] {
    while (!this.isAtEnd()) {
      this.start = this.current;
      this.scanToken();
    }

    this.tokens.push(new Token(TokenType.END, "", null));
    return this.tokens;
  }

  private scanToken() {
    const c = this.advance();
    switch (c) {
      case "(":
        this.addToken(TokenType.LEFT_PAREN);
        break;
      case ")":
        this.addToken(TokenType.RIGHT_PAREN);
        break;
      case "-":
        this.addToken(TokenType.MINUS);
        break;
      case "+":
        this.addToken(TokenType.PLUS);
        break;
      case "/":
        this.addToken(TokenType.SLASH);
        break;
      case "*":
        this.addToken(TokenType.STAR);
        break;
      default:
        if (this.isDigit(c)) {
          this.number();
        } else {
          throw new ScannerError(this.current, c, "Unexpected character");
        }
    }
  }

  private isAtEnd() {
    return this.source.length === this.current;
  }

  private advance() {
    return this.source[this.current++];
  }

  private addToken(type: TokenType, literal: unknown = null) {
    const text = this.source.substring(this.start, this.current);
    this.tokens.push(new Token(type, text, literal));
  }

  private peek() {
    if (this.isAtEnd()) return "";
    return this.source[this.current];
  }

  private peekNext() {
    if (this.current + 1 >= this.source.length) return "";
    return this.source[this.current + 1];
  }

  private number() {
    while (this.isDigit(this.peek())) this.advance();
    let incompleteFloat = false;
    if (this.peek() === ",") {
      if (this.isDigit(this.peekNext())) {
        this.advance();
        while (this.isDigit(this.peek())) this.advance();
      } else {
        this.advance();
        incompleteFloat = true;
      }
    }

    this.addToken(
      TokenType.NUMBER,
      parseFloat(
        `${this.source.substring(this.start, this.current).replaceAll(",", ".")}${incompleteFloat ? "0" : ""}`,
      ),
    );
  }

  private isDigit(c: string): boolean {
    return c >= "0" && c <= "9";
  }
}
