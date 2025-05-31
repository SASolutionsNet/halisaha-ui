import { type FC, useCallback } from "react";
import styles from "./LoginOwner.module.css";

import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import LoginForm from "../../components/Login/LoginForm";
import FooterActions from "../../components/Login/FooterActions";
import SidePhoto from "../../components/Login/SidePhoto";

const LoginOwner: FC = () => {

  const onLoginClick = useCallback((email: string, password: string) => {
    console.log("Form gönderildi:", email, password);
  }, []);

  const onRegisterClick = useCallback(() => {
    console.log("Kayıt Ol bağlantısına tıklandı");
  }, []);

  return (
    <div className={styles.loginOwner}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
        <div className={styles.line}></div>
          <HeaderSection />
          <RoleSelector selectedRole="owner" />
          <LoginForm onLoginClick={onLoginClick} />
          <FooterActions onRegisterClick={onRegisterClick} />
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default LoginOwner;
