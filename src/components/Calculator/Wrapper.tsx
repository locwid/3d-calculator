import { Edges } from "@react-three/drei";

export const Wrapper = () => (
	<mesh castShadow receiveShadow>
		<boxGeometry args={[12, 21, 3]} />
		<meshBasicMaterial color="#555" />
		<Edges color="#000" />
	</mesh>
);
