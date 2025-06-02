import { type FC, useCallback } from "react";
import styles from "./LoginOwner.module.css";

import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import LoginForm from "../../components/Login/LoginForm";
import FooterActions from "../../components/Login/FooterActions";
import SidePhoto from "../../components/Login/SidePhoto";
import { useNavigate } from "react-router-dom";

const LoginOwner: FC = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback((email: string, password: string) => {
    console.log("Form gönderildi:", email, password);
    navigate("/owner-login");
  }, []);

  const onRegisterClick = useCallback(() => {
    navigate("/owner-register");
    console.log("Kayıt Ol bağlantısına tıklandı");
  }, []);

  return (
    <div className={styles.loginOwner}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
        <div className={styles.line}></div>
          <HeaderSection />
          <RoleSelector selectedRole="owner-login" />
          <LoginForm onLoginClick={onLoginClick} />
          <FooterActions onRegisterClick={onRegisterClick} />
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default LoginOwner;
