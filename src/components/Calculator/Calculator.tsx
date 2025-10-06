import { useState } from "react";
import { Calculation } from "@/lib/Calculation";
import { CalculatorProvider } from "./contex";
import { ControlButton } from "./ControlButton";
import { ControlCode, controls, ControlType, type Control } from "./constants";
import { Display } from "./Display";
import { formatNum } from "./helpers/formatNum";
import { Wrapper } from "./Wrapper";
import type { CalculatorConfig } from "./config";

interface CalculatorProps {
  config: CalculatorConfig;
}

export const Calculator: React.FC<CalculatorProps> = ({ config }) => {
  const [expression, setExpression] = useState("");
  const [prevExpression, setPrevExpression] = useState("");

  const { layout, dimensions } = config;

  const handleClear = () => {
    setExpression("");
    setPrevExpression("");
  };

  const handleEqual = () => {
    const calc = new Calculation();
    const result = calc.calculate(expression);
    if (result.status === "success") {
      setPrevExpression(expression);
      setExpression(formatNum(result.value));
    }
  };

  const handleToken = (token: string) => {
    const value = expression + token;
    const calc = new Calculation();
    const result = calc.calculate(value);
    if (result.status !== "error") {
      setExpression(result.printed);
    }
  };

  const handleClick = (control: Control) => {
    switch (control.type) {
      case ControlType.TOKEN:
        handleToken(control.code);
        break;
      case ControlType.ACTION:
        switch (control.code) {
          case ControlCode.CLEAR:
            handleClear();
            break;
          case ControlCode.EQUAL:
            handleEqual();
            break;
        }
        break;
    }
  };

  return (
    <CalculatorProvider config={config}>
      <group>
        <Wrapper />
        <Display expression={expression} prevExpression={prevExpression} />
        <group position={layout.buttonsStartPosition}>
          {controls.flat().map((control, index) => (
            <ControlButton
              key={control.code}
              onClick={() => handleClick(control)}
              position={[
                (index % layout.columns) * dimensions.button.spacing,
                Math.floor(index / layout.columns) * dimensions.button.spacing,
                0,
              ]}
            >
              {control.code}
            </ControlButton>
          ))}
        </group>
      </group>
    </CalculatorProvider>
  );
};
