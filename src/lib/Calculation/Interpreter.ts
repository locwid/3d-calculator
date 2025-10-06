import type { BinaryExpression } from "./expressions/BinaryExpression";
import type { Expression, ExpressionVisitor } from "./expressions/Expression";
import type { GroupingExpression } from "./expressions/GroupingExpression";
import type { LiteralExpression } from "./expressions/LiteralExpression";
import type { UnaryExpression } from "./expressions/UnaryExpression";
import { TokenType } from "./TokenType";

export class Interpreter implements ExpressionVisitor<unknown> {
  private expression: Expression;

  constructor(expression: Expression) {
    this.expression = expression;
  }

  interpret(): unknown {
    return this.expression.accept(this);
  }

  private evalute(expression: Expression): unknown {
    return expression.accept(this);
  }

  visitBinaryExpr(expr: BinaryExpression): unknown {
    const left = this.evalute(expr.left);
    const right = this.evalute(expr.right);

    switch (expr.operator.type) {
      case TokenType.PLUS:
        this.checkNumberOperands(left, right);
        return Number(left) + Number(right);
      case TokenType.MINUS:
        this.checkNumberOperands(left, right);
        return Number(left) - Number(right);
      case TokenType.STAR:
        this.checkNumberOperands(left, right);
        return Number(left) * Number(right);
      case TokenType.SLASH:
        this.checkNumberOperands(left, right);
        if (Number(right) === 0) {
          throw Error("Division by zero");
        }
        return Number(left) / Number(right);
      default:
        throw Error(`Unknown operator: ${expr.operator.type}`);
    }
  }

  visitGroupingExpr(expr: GroupingExpression): unknown {
    return this.evalute(expr.expression);
  }

  visitLiteralExpr(expr: LiteralExpression): unknown {
    return expr.value;
  }

  visitUnaryExpr(expr: UnaryExpression): unknown {
    const right = this.evalute(expr.right);

    switch (expr.operator.type) {
      case TokenType.MINUS:
        this.checkNumberOperand(right);
        return -Number(right);
    }

    throw Error(`Unknown unary operator: ${expr.operator.type}`);
  }

  visitBlankExpr(): unknown {
    throw Error("Blank expression cannot be evaluated");
  }

  private checkNumberOperand(operand: unknown) {
    if (typeof operand !== "number") {
      throw Error("Operand must be number.");
    }
  }

  private checkNumberOperands(left: unknown, right: unknown) {
    if (typeof left !== "number" || typeof right !== "number") {
      throw Error("Operands must be numbers.");
    }
  }
}
