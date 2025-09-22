import type { TokenType } from "./TokenType";

export class Token {
	type: TokenType;
	lexeme: string;
	literal: unknown;

	constructor(type: TokenType, lexeme: string, literal: unknown) {
		this.type = type;
		this.lexeme = lexeme;
		this.literal = literal;
	}

	toString() {
		return `${this.type} ${this.lexeme} ${this.literal}`;
	}
}
