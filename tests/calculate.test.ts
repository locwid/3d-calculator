import { describe, expect, test } from "bun:test";
import { Calculation } from "@/lib/Calculation";

const calculate = (source: string) => {
	const calculation = new Calculation();
	return calculation.calculate(source);
};

describe("new Calculation()", () => {
	test("Literal expression: 12", () => {
		const result = calculate("12");
		expect(result).toEqual({
			status: "success",
			value: 12,
			printed: "12",
		});
	});

	test("Literal expression: -20", () => {
		const result = calculate("-20");
		expect(result).toEqual({
			status: "success",
			value: -20,
			printed: "-20",
		});
	});

	test("Literal expression: 0000002", () => {
		const result = calculate("0000002");
		expect(result).toEqual({
			status: "success",
			value: 2,
			printed: "2",
		});
	});

	test("Literal expression: 13,65", () => {
		const result = calculate("13,65");
		expect(result).toEqual({
			status: "success",
			value: 13.65,
			printed: "13.65",
		});
	});

	test("Literal expression: 1, -> 1", () => {
		const result = calculate("1,");
		expect(result).toEqual({
			status: "success",
			value: 1,
			printed: "1",
		});
	});

	test("Addition: 1+2", () => {
		const result = calculate("1+2");
		expect(result).toEqual({
			status: "success",
			value: 3,
			printed: "1+2",
		});
	});

	test("Addition: 1+2+3,6", () => {
		const result = calculate("1+2+3,6");
		expect(result).toEqual({
			status: "success",
			value: 6.6,
			printed: "1+2+3.6",
		});
	});

	test("Addition with unary minus: 1+-2", () => {
		const result = calculate("1+-2");
		expect(result).toEqual({
			status: "success",
			value: -1,
			printed: "1+-2",
		});
	});

	test("Subtraction: 5-3", () => {
		const result = calculate("5-3");
		expect(result).toEqual({
			status: "success",
			value: 2,
			printed: "5-3",
		});
	});

	test("Multiplication: 2*3", () => {
		const result = calculate("2*3");
		expect(result).toEqual({
			status: "success",
			value: 6,
			printed: "2*3",
		});
	});

	test("Division: 6/2", () => {
		const result = calculate("6/2");
		expect(result).toEqual({
			status: "success",
			value: 3,
			printed: "6/2",
		});
	});

	test("Division by zero: 6/0", () => {
		const result = calculate("6/0");
		expect(result).toEqual({
			status: "error",
			message: "Division by zero",
		});
	});

	test("Grouping: (2+2)*2", () => {
		const result = calculate("(2+2)*2");
		expect(result).toEqual({
			status: "success",
			value: 8,
			printed: "(2+2)*2",
		});
	});

	test("Incomplete grouping: (3+1", () => {
		const result = calculate("(3+1");
		expect(result).toEqual({
			status: "incomplete",
			printed: "(3+1",
		});
	});

	test("Incomplete binary operator: 3+", () => {
		const result = calculate("3+");
		expect(result).toEqual({
			status: "incomplete",
			printed: "3+",
		});
	});

	test("Incomplete binary operator: 4*-", () => {
		const result = calculate("4*-");
		expect(result).toEqual({
			status: "incomplete",
			printed: "4*-",
		});
	});
});
