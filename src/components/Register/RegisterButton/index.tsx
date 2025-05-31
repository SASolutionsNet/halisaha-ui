import {type FC } from "react";
import styles from "./index.module.css";

interface RegisterButtonProps {
  onClick?: () => void;
}

const RegisterButton: FC<RegisterButtonProps> = ({ onClick }) => {
  return (
    <div className={styles.register} onClick={onClick}>
      <div className={styles.text}>Kayıt Ol</div>
    </div>
  );
};

export default RegisterButton;
