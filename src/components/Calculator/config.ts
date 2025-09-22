export interface CalculatorConfig {
	// Размеры и позиционирование
	dimensions: {
		wrapper: {
			width: number;
			height: number;
			depth: number;
			color: string;
		};
		display: {
			width: number;
			height: number;
			depth: number;
			position: [number, number, number];
			color: string;
			roughness: number;
			metalness: number;
		};
		button: {
			width: number;
			height: number;
			maxDepth: number;
			minDepth: number;
			color: string;
			spacing: number;
		};
	};

	// Layout кнопок
	layout: {
		columns: number;
		buttonsStartPosition: [number, number, number];
	};

	// Настройки текста
	text: {
		font: string;
		display: {
			primary: {
				fontSize: number;
				position: [number, number, number];
				lineHeight: number;
				letterSpacing: number;
				anchorX: "left" | "center" | "right";
				anchorY: "top" | "middle" | "bottom";
			};
			secondary: {
				fontSize: number;
				position: [number, number, number];
				lineHeight: number;
				letterSpacing: number;
				anchorX: "left" | "center" | "right";
				anchorY: "top" | "middle" | "bottom";
			};
		};
		button: {
			fontSize: number;
			color: string;
			yOffset: number;
		};
	};

	// Анимация
	animation: {
		buttonPress: {
			speed: number; // скорость анимации нажатия кнопки
		};
	};

	// Цвета и стили
	colors: {
		edges: string;
		wrapper: string;
		display: string;
		button: {
			default: string;
			text: string;
		};
	};
}

export const defaultCalculatorConfig: CalculatorConfig = {
	dimensions: {
		wrapper: {
			width: 12,
			height: 21,
			depth: 3,
			color: "#555",
		},
		display: {
			width: 10,
			height: 4.5,
			depth: 1,
			position: [0, 6, 2],
			color: "pink",
			roughness: 0,
			metalness: 0,
		},
		button: {
			width: 2,
			height: 2,
			maxDepth: 1,
			minDepth: 0.5,
			color: "#ccc",
			spacing: 2.5,
		},
	},

	layout: {
		columns: 4,
		buttonsStartPosition: [-3.75, -8, 2],
	},

	text: {
		font: "/font.ttf",
		display: {
			primary: {
				fontSize: 1.4,
				position: [4.5, 0.25, 0.51],
				lineHeight: 0.5,
				letterSpacing: -0.025,
				anchorX: "right",
				anchorY: "middle",
			},
			secondary: {
				fontSize: 0.6,
				position: [4.5, -1, 0.51],
				lineHeight: 0.5,
				letterSpacing: -0.025,
				anchorX: "right",
				anchorY: "middle",
			},
		},
		button: {
			fontSize: 0.9,
			color: "#000",
			yOffset: 0.1,
		},
	},

	animation: {
		buttonPress: {
			speed: 0.1,
		},
	},

	colors: {
		edges: "#000",
		wrapper: "#555",
		display: "pink",
		button: {
			default: "#ccc",
			text: "#000",
		},
	},
};
