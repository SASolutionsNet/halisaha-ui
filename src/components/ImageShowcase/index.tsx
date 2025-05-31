import type { FC } from 'react';
import styles from './index.module.css';

const ImageShowcase: FC = () => {
  return (
    <section className={styles.panelImageDouble}>
      <img className={styles.imageIcon} alt="Saha görseli 1" src="pitch-1.png" />
      <img className={styles.imageIcon} alt="Saha görseli 2" src="pitch-2.png" />
    </section>
  );
};

export default ImageShowcase;
