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

export interface Control {
  code: ControlCode;
  type: ControlType;
}

export const controls: Control[][] = [
  [
    { code: ControlCode.EXTENSION, type: ControlType.ACTION },
    { code: ControlCode.NUM_0, type: ControlType.TOKEN },
    { code: ControlCode.COMMA, type: ControlType.TOKEN },
    { code: ControlCode.EQUAL, type: ControlType.ACTION },
  ],
  [
    { code: ControlCode.NUM_1, type: ControlType.TOKEN },
    { code: ControlCode.NUM_2, type: ControlType.TOKEN },
    { code: ControlCode.NUM_3, type: ControlType.TOKEN },
    { code: ControlCode.ADD, type: ControlType.TOKEN },
  ],
  [
    { code: ControlCode.NUM_4, type: ControlType.TOKEN },
    { code: ControlCode.NUM_5, type: ControlType.TOKEN },
    { code: ControlCode.NUM_6, type: ControlType.TOKEN },
    { code: ControlCode.SUB, type: ControlType.TOKEN },
  ],
  [
    { code: ControlCode.NUM_7, type: ControlType.TOKEN },
    { code: ControlCode.NUM_8, type: ControlType.TOKEN },
    { code: ControlCode.NUM_9, type: ControlType.TOKEN },
    { code: ControlCode.MULTIPLY, type: ControlType.TOKEN },
  ],
  [
    { code: ControlCode.CLEAR, type: ControlType.ACTION },
    { code: ControlCode.OPEN_PAREN, type: ControlType.TOKEN },
    { code: ControlCode.CLOSE_PAREN, type: ControlType.TOKEN },
    { code: ControlCode.DIVIDE, type: ControlType.TOKEN },
  ],
];
