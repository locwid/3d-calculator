import { Edges } from "@react-three/drei";
import { type CalculatorConfig, defaultCalculatorConfig } from "./config";

interface WrapperProps {
	config?: CalculatorConfig;
}

export const Wrapper: React.FC<WrapperProps> = ({
	config = defaultCalculatorConfig,
}) => {
	const { dimensions, colors } = config;

	return (
		<mesh castShadow receiveShadow>
			<boxGeometry
				args={[
					dimensions.wrapper.width,
					dimensions.wrapper.height,
					dimensions.wrapper.depth,
				]}
			/>
			<meshBasicMaterial color={colors.wrapper} />
			<Edges color={colors.edges} />
		</mesh>
	);
};
