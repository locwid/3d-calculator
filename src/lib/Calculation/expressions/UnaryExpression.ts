import type { Token } from "../Token";
import { Expression, type ExpressionVisitor } from "./Expression";

export class UnaryExpression extends Expression {
  operator: Token;
  right: Expression;

  constructor(operator: Token, right: Expression) {
    super();
    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitUnaryExpr(this);
  }
}
