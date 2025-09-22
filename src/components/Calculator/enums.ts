import { defineEnum, type Enum } from "@/lib/defineEnum";

export const ControlType = defineEnum(["ACTION", "TOKEN"]);
export type ControlType = Enum<typeof ControlType>;

export const ControlCode = {
	EXTENSION: "EXT",
	NUM_0: "0",
	NUM_1: "1",
	NUM_2: "2",
	NUM_3: "3",
	NUM_4: "4",
	NUM_5: "5",
	NUM_6: "6",
	NUM_7: "7",
	NUM_8: "8",
	NUM_9: "9",
	COMMA: ",",
	EQUAL: "=",
	ADD: "+",
	SUB: "-",
	MULTIPLY: "*",
	DIVIDE: "/",
	OPEN_PAREN: "(",
	CLOSE_PAREN: ")",
	CLEAR: "CLR",
} as const;
export type ControlCode = (typeof ControlCode)[keyof typeof ControlCode];
