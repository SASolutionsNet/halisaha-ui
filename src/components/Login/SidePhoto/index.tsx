import type { FC } from "react";
import styles from "./index.module.css";

const SidePhoto: FC = () => {
  return (
    <div className={styles.sidePhotoWrapper}>
      <div className={styles.sidePhoto}>
        <div className={styles.textContentTitle}>
          <b className={styles.title3}>Book Your Pitch Today!</b>
        </div>
      </div>
    </div>
  );
};

export default SidePhoto;
