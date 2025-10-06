import { Edges, MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useCalculatorContext } from "./contex";

interface DisplayProps {
  expression: string;
  prevExpression: string;
}

export const Display: React.FC<DisplayProps> = ({
  expression,
  prevExpression,
}) => {
  const { dimensions, text, colors } = useCalculatorContext();

  const fontSize =
    expression.length < 11
      ? text.display.primary.fontSize
      : text.display.primary.fontSize * ((1 / expression.length) * 9);

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
        fontSize={fontSize}
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
