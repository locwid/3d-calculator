import { Interpreter } from "./Interpreter";
import { Parser } from "./Parser";
import { Printer } from "./Printer";
import { Scanner } from "./Scanner";

type CalculatorResult =
	| {
			status: "success";
			value: number;
			printed: string;
	  }
	| {
			status: "error";
			message: string;
	  }
	| {
			status: "incomplete";
			printed: string;
	  };

export class Calculation {
	calculate(source: string): CalculatorResult {
		try {
			const printer = new Printer();
			const scanner = new Scanner(source);
			const tokens = scanner.scanTokens();
			const parser = new Parser(tokens);
			const expression = parser.parse();
			if (parser.isIncompleted) {
				return {
					status: "incomplete",
					printed: printer.print(expression),
				};
			}
			const interpreter = new Interpreter(expression);
			const result = interpreter.interpret();
			if (typeof result !== "number") {
				throw new Error("Result is not a number");
			}
			return {
				status: "success",
				value: result,
				printed: printer.print(expression),
			};
		} catch (e) {
			if (e instanceof Error) {
				return {
					status: "error",
					message: e.message,
				};
			}
			return {
				status: "error",
				message: "Unknown error",
			};
		}
	}
}
