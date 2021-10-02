import styles from "./header.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.contact}>
        <div className={styles.box}>
          <FontAwesomeIcon className={styles.box__icon} icon={faPhoneAlt} />
          <div className={styles.box__phone}>
            <span>987 106 2862</span>
            <span>998 262 4981</span>
          </div>
        </div>
        <div className={styles.box}>
          <FontAwesomeIcon className={styles.box__icon} icon={faEnvelope} />
          <span>omkaraspacozumel@hotmail.com</span>
        </div>
      </div>
      <img
        className={styles.header__logo}
        src="/navbar/OmkaraWhole.jpg"
        alt="Omkara Logo"
      />
      <div className={styles.social}>
        <FontAwesomeIcon
          className={styles.social__icon}
          icon={faFacebookSquare}
        />
        <FontAwesomeIcon className={styles.social__icon} icon={faInstagram} />
      </div>
    </div>
  );
}

export default Header;
