import type { Token } from "../Token";
import { Expression, type ExpressionVisitor } from "./Expression";

export class BinaryExpression extends Expression {
  left: Expression;
  right: Expression;
  operator: Token;

  constructor(left: Expression, operator: Token, right: Expression) {
    super();
    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitBinaryExpr(this);
  }
}
