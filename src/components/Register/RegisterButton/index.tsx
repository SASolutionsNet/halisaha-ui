import {type FC } from "react";
import styles from "./index.module.css";

interface RegisterButtonProps {
  onClick?: () => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.register} onClick={onClick}>
      <div className={styles.text}>Kayıt Ol</div>
    </button>
</div>
    
  );
};

export default RegisterButton;
