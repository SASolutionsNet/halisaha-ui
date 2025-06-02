import {type FC } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import styles from "./PlayerRegister.module.css";
import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import ProfileImage from "../../components/Register/ProfileImage";
import RegisterForm from "../../components/Register/RegisterForm";
import RegisterButton from "../../components/Register/RegisterButton";
import SidePhoto from "../../components/Login/SidePhoto";
import TabIndicator from "../../components/Register/TabIndicator";

const PlayerRegister: FC = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    surname: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad gerekli"),
    surname: Yup.string().required("Soyad gerekli"),
    username: Yup.string().required("Kullanıcı adı gerekli"),
    email: Yup.string().email("Geçersiz email").required("Email gerekli"),
    phone: Yup.string().required("Telefon gerekli"),
    city: Yup.string().required("Şehir gerekli"),
    password: Yup.string().required("Şifre gerekli"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
      .required("Şifre doğrulama gerekli"),
    agreement: Yup.boolean().oneOf([true], "Onay gerekli"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Oyuncu kaydı:", values);
  };

  return (
    <div className={styles.playerRegister}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
        <TabIndicator />
          <HeaderSection />
          <RoleSelector selectedRole="player-register" />
          <ProfileImage />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={styles.formContainer}>
              <RegisterForm />
              <RegisterButton onClick={function (): void {
                navigate("/login");
              } } />
            </Form>
          </Formik>
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default PlayerRegister;
