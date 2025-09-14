import type { BinaryExpression } from "./expressions/BinaryExpression";
import { BlankExpression } from "./expressions/BlankExpression";
import type { Expression, ExpressionVisitor } from "./expressions/Expression";
import type { GroupingExpression } from "./expressions/GroupingExpression";
import type { LiteralExpression } from "./expressions/LiteralExpression";
import type { UnaryExpression } from "./expressions/UnaryExpression";

export class Printer implements ExpressionVisitor<string> {
	print(expr: Expression) {
		return expr.accept(this);
	}

	visitBinaryExpr(expr: BinaryExpression): string {
		return `${expr.left.accept(this)}${expr.operator.lexeme}${expr.right.accept(this)}`;
	}

	visitGroupingExpr(expr: GroupingExpression): string {
		return `(${expr.expression.accept(this)}${expr.closed ? ")" : ""}`;
	}

	visitLiteralExpr(expr: LiteralExpression): string {
		return String(expr.value);
	}

	visitUnaryExpr(expr: UnaryExpression): string {
		return `${expr.operator.lexeme}${expr.right.accept(this)}`;
	}

	visitBlankExpr(): string {
		return "";
	}
}
