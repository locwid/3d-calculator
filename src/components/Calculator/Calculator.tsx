import { useMemo, useState } from "react";
import { calculate } from "@/lib/calculate";
import { ControlButton } from "./ControlButton";
import { type Control, ControlType, controls } from "./controls";
import { Display } from "./Display";
import { formatNum } from "./formatNum";
import { Wrapper } from "./Wrapper";

export const Calculator = () => {
	const [expression, setExpression] = useState("");
	const [prevExpression, setPrevExpression] = useState("");

	const handleClear = () => {
		setExpression("");
		setPrevExpression("");
	};

	const handleEqual = () => {
		const result = calculate(expression);
		if (result.status === "success") {
			setPrevExpression(expression);
			setExpression(formatNum(result.value));
		}
	};

	const handleToken = (token: string) => {
		const value = expression + token;
		const result = calculate(value);
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
			position={[(index % 4) * 2.5, Math.floor(index / 4) * 2.5, 0]}
		>
			{control.value}
		</ControlButton>
	));

	return (
		<group>
			<Wrapper />
			<Display expression={expression} prevExpression={prevExpression} />
			<group position={[-3.75, -8, 2]}>{controlButtons}</group>
		</group>
	);
};
