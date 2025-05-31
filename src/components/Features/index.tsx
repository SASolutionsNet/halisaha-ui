import type { FC } from 'react';
import styles from './index.module.css';
import FeatureCard from './FeatureCard';

const Features: FC = () => {
  const cardData = [
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 1',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 2',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 3',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 4',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 5',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
    {
      iconSrc: 'info-icon.svg',
      title: 'Title 6',
      description: 'Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.',
    },
  ];

  return (
    <section className={styles.cardGrid}>
      <div className={styles.headingGroup}>
        <div className={styles.heading}>Heading</div>
        <div className={styles.subheading}>Subheading</div>
      </div>
      <div className={styles.cards}>
        {cardData.map((card, index) => (
          <FeatureCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Features;
