import type { FC } from 'react';
import styles from './index.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandSection}>
        <img className={styles.logoIcon} alt="SahaGo Logo" src="logo.png" />
        <div className={styles.socialIcons}>
          <img alt="X" src="x-icon.svg" />
          <img alt="Instagram" src="instagram-icon.svg" />
          <img alt="YouTube" src="youtube-icon.svg" />
          <img alt="LinkedIn" src="linkedin-icon.svg" />
        </div>
      </div>

      <div className={styles.linkSection}>
        <div className={styles.linkGroup}>
          <div className={styles.groupTitle}>Use cases</div>
          <div className={styles.link}>UI design</div>
          <div className={styles.link}>UX design</div>
          <div className={styles.link}>Wireframing</div>
        </div>
        <div className={styles.linkGroup}>
          <div className={styles.groupTitle}>Explore</div>
          <div className={styles.link}><b>Design</b></div>
          <div className={styles.link}><b>Prototyping</b></div>
          <div className={styles.link}><b>Development features</b></div>
        </div>
        <div className={styles.linkGroup}>
          <div className={styles.groupTitle}>Resources</div>
          <div className={styles.link}>Blog</div>
          <div className={styles.link}>Best practices</div>
          <div className={styles.link}>Colors</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
