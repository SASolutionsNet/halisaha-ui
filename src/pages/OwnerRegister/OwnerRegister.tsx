import { type FC, useState } from "react";
import styles from "./OwnerRegister.module.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import TabIndicator from "../../components/Register/TabIndicator";
import HeaderSection from "../../components/Login/HeaderSection";
import RoleSelector from "../../components/Login/RoleSelector";
import ProfileImage from "../../components/Register/ProfileImage";
import RegisterForm from "../../components/Register/RegisterForm";
import RegisterFormStep2 from "../../components/Register/RegisterFormStep2";
import SidePhoto from "../../components/Login/SidePhoto";

const OwnerRegister: FC = () => {
  const [step, setStep] = useState(1);
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
    pitchName: "",
    address: "",
    openingTime: "",
    closingTime: "",
    pricePerHour: "",
    facilityCity: "",
    openDays: [],
    facilities: [],
  };

  const validationSchemas = [
    Yup.object({
      name: Yup.string().required("Ad gerekli"),
      surname: Yup.string().required("Soyad gerekli"),
      username: Yup.string().required("Kullanıcı adı gerekli"),
      email: Yup.string().email("Geçersiz email").required("Email gerekli"),
      phone: Yup.string().required("Telefon gerekli"),
      city: Yup.string().required("Şehir gerekli"),
    }),
    Yup.object({
      password: Yup.string().required("Şifre gerekli"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
        .required("Şifre doğrulama gerekli"),
      agreement: Yup.boolean().oneOf([true], "Onay gerekli"),
    }),
  ];

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Halı Saha Sahibi kaydı:", values);
    navigate("/owner-login");
  };

  return (
    <div className={styles.ownerRegister}>
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <TabIndicator />
          <HeaderSection />
          <RoleSelector selectedRole="owner-register" />
          <ProfileImage />

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemas[step - 1]}
            onSubmit={(values) => {
              console.log("✅ onSubmit çalıştı"); // ← EKLE

              if (step === 1) {
                setStep(2);
              } else {
                console.log("🎯 Navigasyon başlıyor...");
                handleSubmit(values);
              }
            }}
          >
            {(formik) => (
              <Form className={styles.formContainer}>
                {step === 1 && <RegisterForm />}
                {step === 2 && <RegisterFormStep2 />}

                <div className={styles.buttonGroup}>
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className={styles.backButton}
                    >
                      Geri
                    </button>
                  )}
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={async () => {
                      const errors = await formik.validateForm();
                      if (Object.keys(errors).length === 0) {
                        if (step === 1) {
                          console.log("✅ İlk adım doğrulandı, ikinci adıma geçiliyor");
                          setStep(2);
                        } else {
                          // await formik.submitForm();
                          
                          handleSubmit(formik.values);
                        }
                      } else {
                        formik.setTouched(
                          Object.keys(errors).reduce(
                            (acc, key) => ({ ...acc, [key]: true }),
                            {}
                          )
                        );
                      }
                    }}
                  >
                    {step === 1 ? "Sonraki" : "Kayıt Ol"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <SidePhoto />
    </div>
  );
};

export default OwnerRegister;
