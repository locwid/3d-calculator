import {
  type CalculatorConfig,
  defaultCalculatorConfig,
} from "./components/Calculator";
import { defaultSceneConfig, type SceneConfig } from "./components/Scene";

export interface AppConfig {
  calculator: CalculatorConfig;
  scene: SceneConfig;
}

export const defaultAppConfig: AppConfig = {
  calculator: defaultCalculatorConfig,
  scene: defaultSceneConfig,
};
