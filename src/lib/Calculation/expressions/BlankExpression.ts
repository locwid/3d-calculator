import { Expression, type ExpressionVisitor } from "./Expression";

export class BlankExpression extends Expression {
	accept<T>(visitor: ExpressionVisitor<T>): T {
		return visitor.visitBlankExpr(this);
	}
}
