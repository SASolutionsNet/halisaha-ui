import type { FC } from 'react';
import styles from './index.module.css';

const HeaderSection: FC = () => {
  return (
    <div className={styles.title}>
      <div className={styles.header}>
        <div className={styles.titleText}>SahaGo’ya Hoş Geldiniz</div>
      </div>
      <div className={styles.subtitle}>
        <div className={styles.titleText}>Anında Halı Saha Rezarvasyonu</div>
      </div>
    </div>
  );
};

export default HeaderSection;
