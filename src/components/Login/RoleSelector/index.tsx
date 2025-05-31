import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";


interface RoleSelectorProps {
  selectedRole?: "player" | "owner";
}


const RoleSelector:  FC<RoleSelectorProps> = ({selectedRole}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.playerowner}>
      <div
        className={
          selectedRole === "player" ? styles.selected : styles.unSelected
        }
        onClick={() => {
          if (selectedRole !== "player") navigate("/login");
        }}
      >
        <div className={styles.text}>Oyuncu</div>
      </div>
      <div
        className={
          selectedRole === "owner" ? styles.selected : styles.unSelected
        }
        onClick={() => {
          if (selectedRole !== "owner") navigate("/owner-login");
        }}
      >
        <div className={styles.text}>Halı Saha Sahibi</div>
      </div>
    </div>
  );
};

export default RoleSelector;
