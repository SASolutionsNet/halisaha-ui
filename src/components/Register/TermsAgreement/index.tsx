import { type FC, useState } from "react";
import styles from "./index.module.css";

const TermsAgreement: FC = () => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(prev => !prev);
  };

  return (
    <div className={styles.terms}>
      <div className={styles.checkParent} onClick={handleToggle}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className={styles.checkbox}
        />
        <div className={styles.text}>
          Kullanıcı sözleşmesini okudum ve kabul ediyorum
        </div>
      </div>
    </div>
  );
};

export default TermsAgreement;
