import type { FC } from "react";
import styles from "./index.module.css";

interface FooterActionsProps {
  onRegisterClick: () => void;
}

const FooterActions: FC<FooterActionsProps> = ({ onRegisterClick }) => {
  return (
    <>
      <div className={styles.lines}>
      <div className={styles.line}></div>
      <div className={styles.text}>Ya Da</div>
      <div className={styles.line}></div>
      </div>
      <div className={styles.signup}>
        <div className={styles.textContainer}>
          <div className={styles.info}>Hesabın yok mu?</div>
        </div>
        <div className={styles.textFrame} onClick={onRegisterClick}>
          <b className={styles.register}>Kayıt Ol</b>
        </div>
      </div>
    </>
  );
};

export default FooterActions;
