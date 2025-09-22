import { useState } from "react";
import { Calculation } from "@/lib/Calculation";
import { ControlButton } from "./ControlButton";
import { type CalculatorConfig, defaultCalculatorConfig } from "./config";
import { type Control, ControlType, controls } from "./controls";
import { Display } from "./Display";
import { formatNum } from "./formatNum";
import { Wrapper } from "./Wrapper";

interface CalculatorProps {
	config?: CalculatorConfig;
}

export const Calculator: React.FC<CalculatorProps> = ({
	config = defaultCalculatorConfig,
}) => {
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
				handleToken(control.value);
				break;
			case ControlType.ACTION:
				switch (control.value) {
					case "CLR":
						handleClear();
						break;
					case "=":
						handleEqual();
						break;
				}
				break;
		}
	};

	const controlButtons = controls.flat().map((control, index) => (
		<ControlButton
			key={control.value}
			onClick={() => handleClick(control)}
			position={[
				(index % layout.columns) * dimensions.button.spacing,
				Math.floor(index / layout.columns) * dimensions.button.spacing,
				0,
			]}
			config={config}
		>
			{control.value}
		</ControlButton>
	));

	return (
		<group>
			<Wrapper config={config} />
			<Display
				expression={expression}
				prevExpression={prevExpression}
				config={config}
			/>
			<group position={layout.buttonsStartPosition}>{controlButtons}</group>
		</group>
	);
};
