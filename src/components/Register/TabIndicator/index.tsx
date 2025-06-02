import { type FC } from "react";
import styles from "./index.module.css";

const TabIndicator: FC = () => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tab}></div>
      <div className={styles.tab}></div>
    </div>
  );
};

export default TabIndicator;
