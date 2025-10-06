import { Expression, type ExpressionVisitor } from "./Expression";

export class GroupingExpression extends Expression {
  expression: Expression;
  closed: boolean;

  constructor(expr: Expression, closed: boolean) {
    super();
    this.expression = expr;
    this.closed = closed;
  }

  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitGroupingExpr(this);
  }
}
