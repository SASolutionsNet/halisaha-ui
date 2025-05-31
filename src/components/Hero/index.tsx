import type { FC } from 'react';
import styles from './index.module.css';

const Hero: FC = () => {
  return (
    <section className={styles.footballPitchWrapper}>
      <div className={styles.footballPitch}>
        <div className={styles.textContentTitle}>
          <b className={styles.title}>Book Your Pitch Today!</b>
        </div>
      </div>
    </section>
  );
};

export default Hero;
