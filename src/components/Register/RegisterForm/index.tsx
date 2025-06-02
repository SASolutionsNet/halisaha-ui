import { type FC } from "react";
import { useFormikContext } from "formik";
import styles from "./index.module.css";

const RegisterForm: FC = () => {
  const formik = useFormikContext<any>();

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <div className={styles.field}>
          <label className={styles.label}>Ad</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.name && typeof formik.errors.name === "string" && (
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
          {formik.touched.username && typeof formik.errors.username === "string" && (
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
          {formik.touched.phone && typeof formik.errors.phone === "string" && (
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
          {formik.touched.password && typeof formik.errors.password === "string" && (
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
          {formik.touched.surname && typeof formik.errors.surname === "string" && (
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
          {formik.touched.email && typeof formik.errors.email === "string" && (
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
          {formik.touched.city && typeof formik.errors.city === "string" && (
            <div className={styles.error}>{formik.errors.city}</div>
          )}
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Şifre Doğrulama</label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={styles.input}
          />
          {formik.touched.password && typeof formik.errors.password === "string" && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
