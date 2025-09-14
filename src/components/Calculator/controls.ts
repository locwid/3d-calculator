import { defineEnum, type Enum } from "@/lib/defineEnum";

export const ControlType = defineEnum(["ACTION", "TOKEN"]);
export type ControlType = Enum<typeof ControlType>;

export interface Control {
	label: string;
	value: string;
	type: ControlType;
}

export const controls: Control[][] = [
	[
		{ label: "EXT", value: "EXT", type: ControlType.ACTION },
		{ label: "0", value: "0", type: ControlType.TOKEN },
		{ label: ",", value: ",", type: ControlType.TOKEN },
		{ label: "=", value: "=", type: ControlType.ACTION },
	],
	[
		{ label: "1", value: "1", type: ControlType.TOKEN },
		{ label: "2", value: "2", type: ControlType.TOKEN },
		{ label: "3", value: "3", type: ControlType.TOKEN },
		{ label: "+", value: "+", type: ControlType.TOKEN },
	],
	[
		{ label: "4", value: "4", type: ControlType.TOKEN },
		{ label: "5", value: "5", type: ControlType.TOKEN },
		{ label: "6", value: "6", type: ControlType.TOKEN },
		{ label: "-", value: "-", type: ControlType.TOKEN },
	],
	[
		{ label: "7", value: "7", type: ControlType.TOKEN },
		{ label: "8", value: "8", type: ControlType.TOKEN },
		{ label: "9", value: "9", type: ControlType.TOKEN },
		{ label: "*", value: "*", type: ControlType.TOKEN },
	],
	[
		{ label: "CLR", value: "CLR", type: ControlType.ACTION },
		{ label: "(", value: "(", type: ControlType.TOKEN },
		{ label: ")", value: ")", type: ControlType.TOKEN },
		{ label: "/", value: "/", type: ControlType.TOKEN },
	],
];
