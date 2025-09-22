export interface SceneConfig {
	camera: {
		position: [number, number, number];
		zoom: number;
	};
	ambientLight: {
		position: [number, number, number];
		intensity: number;
	};
}

export const defaultSceneConfig: SceneConfig = {
	camera: {
		position: [5, 0, 16],
		zoom: 0.9,
	},
	ambientLight: {
		position: [10, 10, 10],
		intensity: 0.8,
	},
};
