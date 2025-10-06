import { Edges } from "@react-three/drei";
import { useCalculatorContext } from "./contex";

export const Wrapper: React.FC = () => {
  const { dimensions, colors } = useCalculatorContext();

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
