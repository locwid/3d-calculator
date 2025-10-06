import { defineEnum, type Enum } from "@/lib/defineEnum";

export const TokenType = defineEnum([
  "LEFT_PAREN",
  "RIGHT_PAREN",
  "NUMBER",
  "PLUS",
  "MINUS",
  "SLASH",
  "STAR",
  "END",
]);
export type TokenType = Enum<typeof TokenType>;
