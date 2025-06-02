import { type FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";


interface RoleSelectorProps {
  selectedRole?: "player-login" | "owner-login" | "player-register" | "owner-register";
}


const RoleSelector:  FC<RoleSelectorProps> = ({selectedRole}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.playerowner}>
      <div
        className={
          selectedRole === "player-login" || selectedRole === "player-register"  ? styles.selected : styles.unSelected
        }
        onClick={() => {
          if(selectedRole === "owner-login") 
            navigate("/login");
          if(selectedRole === "owner-register") 
            navigate("/register");
        }}
      >
        <div className={styles.text}>Oyuncu</div>
      </div>
      <div
        className={
          selectedRole === "owner-login" || selectedRole === "owner-register"  ? styles.selected : styles.unSelected
        }
        onClick={() => {
          if (selectedRole === "player-login") 
            navigate("/owner-login");
          if (selectedRole === "player-register") 
            navigate("/owner-register");
        }}
      >
        <div className={styles.text}>Halı Saha Sahibi</div>
      </div>
    </div>
  );
};

export default RoleSelector;
