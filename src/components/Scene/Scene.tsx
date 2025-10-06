import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { PropsWithChildren } from "react";
import type { SceneConfig } from "./config";

interface SceneProps {
  config: SceneConfig;
}

export const Scene: React.FC<PropsWithChildren<SceneProps>> = ({
  children,
  config,
}) => {
  return (
    <Canvas
      shadows
      camera={{
        position: config.camera.position,
        zoom: config.camera.zoom,
      }}
    >
      <ambientLight
        position={config.ambientLight.position}
        intensity={config.ambientLight.intensity}
      />
      {children}
      <OrbitControls />
      <Sky />
    </Canvas>
  );
};
