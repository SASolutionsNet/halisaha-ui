import type { FC } from "react";
import styles from "./PlayerRegister.module.css";

import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import SidePhoto from "../../components/Login/SidePhoto";
import ProfileImage from "../../components/Register/ProfileImage";
import TermsAgreement from "../../components/Register/TermsAgreement";
import RegisterForm from "../../components/Register/RegisterForm";
import RegisterButton from "../../components/Register/RegisterButton";

const PlayerRegister: FC = () => {
  return (
    <div className={styles.playerRegister}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <div className={styles.line}></div>
          <HeaderSection />
          <RoleSelector selectedRole="player"/>
          <ProfileImage />
          <RegisterForm />
          <TermsAgreement />
          <RegisterButton />
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default PlayerRegister;
