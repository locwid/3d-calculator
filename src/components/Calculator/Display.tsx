import { Edges, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { type CalculatorConfig, defaultCalculatorConfig } from "./config";

interface DisplayProps {
	expression: string;
	prevExpression: string;
	config?: CalculatorConfig;
}

export const Display: React.FC<DisplayProps> = ({
	expression,
	prevExpression,
	config = defaultCalculatorConfig,
}) => {
	const { dimensions, text, colors } = config;

	return (
		<group position={dimensions.display.position}>
			<mesh>
				<boxGeometry
					args={[
						dimensions.display.width,
						dimensions.display.height,
						dimensions.display.depth,
					]}
				/>
				<MeshTransmissionMaterial
					color={dimensions.display.color}
					roughness={dimensions.display.roughness}
					metalness={dimensions.display.metalness}
				/>
				<Edges color={colors.edges} />
			</mesh>
			<Text
				font={text.font}
				position={text.display.primary.position}
				fontSize={text.display.primary.fontSize}
				lineHeight={text.display.primary.lineHeight}
				letterSpacing={text.display.primary.letterSpacing}
				anchorX={text.display.primary.anchorX}
				anchorY={text.display.primary.anchorY}
			>
				{expression}
			</Text>
			<Text
				position={text.display.secondary.position}
				fontSize={text.display.secondary.fontSize}
				lineHeight={text.display.secondary.lineHeight}
				letterSpacing={text.display.secondary.letterSpacing}
				anchorX={text.display.secondary.anchorX}
				anchorY={text.display.secondary.anchorY}
			>
				{prevExpression}
			</Text>
		</group>
	);
};
