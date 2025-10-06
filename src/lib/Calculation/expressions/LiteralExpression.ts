import { Expression, type ExpressionVisitor } from "./Expression";

export class LiteralExpression extends Expression {
  value: unknown;

  constructor(value: unknown) {
    super();
    this.value = value;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitLiteralExpr(this);
  }
}
