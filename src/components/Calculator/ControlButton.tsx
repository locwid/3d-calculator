import { Edges, Text, useCursor } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

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
}

export const ControlButton: React.FC<ControlButtonProps> = ({
	children,
	position,
	onClick,
}) => {
	const [hovered, setHovered] = useState(false);
	const [pressed, setPressed] = useState(false);
	const [pressProgress, setPressProgress] = useState(0);
	useCursor(hovered);

	useFrame(() => {
		if (pressed && hovered) {
			setPressProgress(Math.min(1, pressProgress + 0.1));
		} else {
			setPressProgress(Math.max(0, pressProgress - 0.1));
		}
	});

	const thickness = mapRange(pressProgress, 0, 1, 1, 0.5);
	const textOffset = mapRange(pressProgress, 0, 1, 0.51, 0.26);
	const buttonOffset = mapRange(pressProgress, 0, 1, 0, -0.25);

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
				<boxGeometry args={[2, 2, thickness]} />
				<meshBasicMaterial color="#ccc" />

				<Edges color="#000" />
			</mesh>
			<Text
				font="/font.ttf"
				fontSize={0.9}
				color="#000"
				position={[0, 0.1, textOffset]}
			>
				{children}
			</Text>
		</group>
	);
};
