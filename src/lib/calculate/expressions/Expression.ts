import type { BinaryExpression } from "./BinaryExpression";
import type { BlankExpression } from "./BlankExpression";
import type { GroupingExpression } from "./GroupingExpression";
import type { LiteralExpression } from "./LiteralExpression";
import type { UnaryExpression } from "./UnaryExpression";

export interface ExpressionVisitor<T> {
	visitBinaryExpr(expr: BinaryExpression): T;
	visitGroupingExpr(expr: GroupingExpression): T;
	visitLiteralExpr(expr: LiteralExpression): T;
	visitUnaryExpr(expr: UnaryExpression): T;
	visitBlankExpr(expr: BlankExpression): T;
}

export abstract class Expression {
	abstract accept<T>(visitor: ExpressionVisitor<T>): T;
}
