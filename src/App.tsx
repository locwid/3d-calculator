import styles from "./App.module.less";
import { Calculator } from "./components/Calculator";
import { Scene } from "./components/Scene";
import { defaultAppConfig } from "./config";

export const App: React.FC = () => {
  const { scene, calculator } = defaultAppConfig;

  return (
    <div className={styles.wrapper}>
      <Scene config={scene}>
        <Calculator config={calculator} />
      </Scene>
    </div>
  );
};
