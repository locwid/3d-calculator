import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./App.module.less";
import { Calculator } from "./components/Calculator";

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Canvas
				shadows
				camera={{
					position: [5, 0, 16],
					zoom: 0.9,
				}}
			>
				<ambientLight position={[10, 10, 10]} intensity={0.8} />
				<Calculator />
				<OrbitControls />
				<Sky />
			</Canvas>
		</div>
	);
};
