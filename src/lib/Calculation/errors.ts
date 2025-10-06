import type { Token } from "./Token";

export class ParserError extends Error {
  token: Token;

  constructor(token: Token, message: string) {
    super(`${token.toString()} | ${message}`);
    this.token = token;
  }
}

export class ScannerError extends Error {
  cursor: number;
  char: string;

  constructor(cursor: number, char: string, message: string) {
    super(`${char} [at ${cursor}]: ${message}`);
    this.cursor = cursor;
    this.char = char;
  }
}

export class InterpreterError extends Error {
  constructor(message: string) {
    super(`InterpreterError: ${message}`);
  }
}
