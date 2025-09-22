import { Edges, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { type CalculatorConfig, defaultCalculatorConfig } from "./config";

const mapRange = (
	value: number,
	inMin: number,
	inMax: number,
	outMin: number,
	outMax: number,
) => {
	return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

interface ControlButtonProps {
	children: React.ReactNode;
	position: [number, number, number];
	onClick?: () => void;
	config?: CalculatorConfig;
}

export const ControlButton: React.FC<ControlButtonProps> = ({
	children,
	position,
	onClick,
	config = defaultCalculatorConfig,
}) => {
	const [hovered, setHovered] = useState(false);
	const [pressed, setPressed] = useState(false);
	const [pressProgress, setPressProgress] = useState(0);
	useCursor(hovered);

	const { dimensions, text, colors, animation } = config;

	useFrame(() => {
		if (pressed && hovered) {
			setPressProgress(
				Math.min(1, pressProgress + animation.buttonPress.speed),
			);
		} else {
			setPressProgress(
				Math.max(0, pressProgress - animation.buttonPress.speed),
			);
		}
	});

	const thickness = mapRange(
		pressProgress,
		0,
		1,
		dimensions.button.maxDepth,
		dimensions.button.minDepth,
	);
	const textOffset = mapRange(
		pressProgress,
		0,
		1,
		dimensions.button.maxDepth / 2 + 0.01,
		dimensions.button.minDepth / 2 + 0.01,
	);
	const buttonOffset = mapRange(
		pressProgress,
		0,
		1,
		0,
		(dimensions.button.minDepth - dimensions.button.maxDepth) / 2,
	);

	const currentPosition: [number, number, number] = [
		position[0],
		position[1],
		position[2] + buttonOffset,
	];

	return (
		<group position={currentPosition}>
			<mesh
				onClick={onClick}
				onPointerOver={(e) => {
					e.stopPropagation();
					setHovered(true);
				}}
				onPointerOut={(e) => {
					e.stopPropagation();
					setHovered(false);
					setPressed(false);
				}}
				onPointerDown={() => {
					setPressed(true);
				}}
				onPointerUp={() => {
					setPressed(false);
				}}
			>
				<boxGeometry
					args={[dimensions.button.width, dimensions.button.height, thickness]}
				/>
				<meshBasicMaterial color={colors.button.default} />

				<Edges color={colors.edges} />
			</mesh>
			<Text
				font={text.font}
				fontSize={text.button.fontSize}
				color={colors.button.text}
				position={[0, text.button.yOffset, textOffset]}
			>
				{children}
			</Text>
		</group>
	);
};
