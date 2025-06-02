import {type FC } from "react";
import { useFormikContext } from "formik";
import styles from "./index.module.css";

const RegisterFormStep2: FC = () => {
  const formik = useFormikContext<any>();

  const amenities = [
    "Servis",
    "Kamera",
    "Duş",
    "İkram",
    "Eldiven, Krampon vb. kiralama"
  ];

  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar"
  ];

  return (
    <div className={styles.form}>
      <div className={styles.left}>
        <div className={styles.field}>
          <label className={styles.label}>Saha Adı</label>
          <input
            name="pitchName"
            value={formik.values.pitchName}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Adres</label>
          <input
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Açılış Saati</label>
          <input
            name="openingTime"
            type="time"
            value={formik.values.openingTime}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Kapanış Saati</label>
          <input
            name="closingTime"
            type="time"
            value={formik.values.closingTime}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Saatlik Fiyat</label>
          <input
            name="pricePerHour"
            type="number"
            value={formik.values.pricePerHour}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.terms}>
          <input
            type="checkbox"
            name="agreement"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          <label>Kullanıcı sözleşmesini okudum kabul ediyorum</label>
        </div>
      </div>

      <div className={styles.left}>
        <div className={styles.field}>
          <label className={styles.label}>Şehir</label>
          <input
            name="facilityCity"
            value={formik.values.facilityCity}
            onChange={formik.handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.multiField}>
          <label className={styles.label}>Açık Günler</label>
          <div className={styles.checkboxGroup}>
            {days.map((day) => (
              <label key={day} className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="openDays"
                  value={day}
                  checked={formik.values.openDays?.includes(day)}
                  onChange={formik.handleChange}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.multiField}>
          <label className={styles.label}>İmkanlar</label>
          <div className={styles.checkboxGroup}>
            {amenities.map((item) => (
              <label key={item} className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  name="facilities"
                  value={item}
                  checked={formik.values.facilities?.includes(item)}
                  onChange={formik.handleChange}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default RegisterFormStep2;
