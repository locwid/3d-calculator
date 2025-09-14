import { Edges, MeshTransmissionMaterial, Text } from "@react-three/drei";

interface DisplayProps {
	expression: string;
	prevExpression: string;
}

export const Display: React.FC<DisplayProps> = ({
	expression,
	prevExpression,
}) => {
	return (
		<group position={[0, 6, 2]}>
			<mesh>
				<boxGeometry args={[10, 4.5, 1]} />
				<MeshTransmissionMaterial color="pink" roughness={0} metalness={0} />
				<Edges color="#000" />
			</mesh>
			<Text
				font="/font.ttf"
				position={[4.5, 0.25, 0.51]}
				fontSize={1.4}
				lineHeight={0.5}
				letterSpacing={-0.025}
				anchorX="right"
				anchorY="middle"
			>
				{expression}
			</Text>
			<Text
				position={[4.5, -1, 0.51]}
				fontSize={0.6}
				lineHeight={0.5}
				letterSpacing={-0.025}
				anchorX="right"
				anchorY="middle"
			>
				{prevExpression}
			</Text>
		</group>
	);
};
