import { type FC } from "react";
import styles from "./index.module.css";

const ProfileImage: FC = () => {
  return (
    <img
      className={styles.photo}
      alt="Profil Fotoğrafı"
      src="Photo.png"
    />
  );
};

export default ProfileImage;
