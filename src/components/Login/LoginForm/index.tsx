import type { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./index.module.css";

interface LoginFormProps {
  onLoginClick: (email: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onLoginClick }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Geçersiz email").required("Email zorunlu"),
      password: Yup.string().required("Şifre zorunlu"),
    }),
    onSubmit: (values) => {
      onLoginClick(values.email, values.password);
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <div className={styles.email}>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={styles.error}>{formik.errors.email}</div>
        )}
      </div>

      <div className={styles.password}>
        <label className={styles.label} htmlFor="password">
          Şifre
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={styles.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}
      </div>

      <div className={styles.forgotpassword}>
        <div className={styles.textWrapper}>
          <b className={styles.text}>Şifremi Unuttum</b>
        </div>
      </div>

      <button type="submit" className={styles.login}>
        <div className={styles.text}>Giriş Yap</div>
      </button>
    </form>
  );
};

export default LoginForm;
