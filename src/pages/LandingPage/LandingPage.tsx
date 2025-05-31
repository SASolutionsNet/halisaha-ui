import type { FunctionComponent } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import ImageShowcase from '../../components/ImageShowcase';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import styles from './LandingPage.module.css';

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <Hero />
      <ImageShowcase />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;