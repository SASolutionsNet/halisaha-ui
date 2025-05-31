import type { FC } from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.card}>
      <img className={styles.infoIcon} src={iconSrc} alt={`${title} icon`} />
      <div className={styles.body}>
        <div className={styles.text}>
          <div className={styles.heading}>{title}</div>
          <div className={styles.bodyText}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
