import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';

const Navbar: FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Henüz bu sayfa yoksa yönlendirme yine çalışır, sonra eklersin.
  };

  return (
    <header className={styles.header}>
      <div className={styles.block}>
        <img className={styles.logoIcon} alt="SahaGO Logo" src="logo.png" />
        <div className={styles.title}>
          <b className={styles.sahago}>SahaGo</b>
        </div>
      </div>
      <div className={styles.headerAuth}>
        <div className={styles.signin} onClick={handleLoginClick}>
          <div className={styles.girisYap}>Giriş Yapın</div>
        </div>
        <div className={styles.register} onClick={handleRegisterClick}>
          <div className={styles.kayitOl}>Kayıt Olun</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
