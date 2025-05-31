import { type FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./index.module.css";

const RegisterForm: FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      phone: "",
      city: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ad gerekli"),
      surname: Yup.string().required("Soyad gerekli"),
      username: Yup.string().required("Kullanıcı adı gerekli"),
      email: Yup.string().email("Geçersiz email").required("Email gerekli"),
      phone: Yup.string().required("Telefon gerekli"),
      city: Yup.string().required("Şehir gerekli"),
      password: Yup.string().required("Şifre gerekli"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
        .required("Şifre doğrulama gerekli")
    }),
    onSubmit: values => {
      console.log("Kayıt bilgileri:", values);
    }
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.left}>
        <div className={styles.field}>
          <label className={styles.label}>Ad</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.name && formik.errors.name && (
            <div className={styles.error}>{formik.errors.name}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Kullanıcı Adı</label>
          <input
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.username && formik.errors.username && (
            <div className={styles.error}>{formik.errors.username}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Telefon Numarası</label>
          <input
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className={styles.error}>{formik.errors.phone}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Şifre</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.field}>
          <label className={styles.label}>Soyad</label>
          <input
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.surname && formik.errors.surname && (
            <div className={styles.error}>{formik.errors.surname}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Şehir</label>
          <input
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.city && formik.errors.city && (
            <div className={styles.error}>{formik.errors.city}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Şifre Doğrulama</label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className={styles.error}>{formik.errors.confirmPassword}</div>
          )}
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
