import { type FC, useCallback } from "react";
import styles from "./LoginUser.module.css";
import { useNavigate } from "react-router-dom";

import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import LoginForm from "../../components/Login/LoginForm";
import FooterActions from "../../components/Login/FooterActions";
import SidePhoto from "../../components/Login/SidePhoto";

const LoginUser: FC = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback((email: string, password: string) => {
    console.log("Form gönderildi:", email, password);
    // Burada API isteği veya yönlendirme yapılabilir
  }, []);

  const onRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.loginUser}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
        <div className={styles.line}></div>
        <HeaderSection />
          <RoleSelector selectedRole="player"/>
          <LoginForm onLoginClick={onLoginClick} />
          <FooterActions onRegisterClick={onRegisterClick} />
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default LoginUser;
