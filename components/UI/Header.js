import styles from "./header.module.scss";

import Link from "next/link";

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
            <span>998 262 4981</span>
          </div>
        </div>
        <div className={`${styles.box} ${styles.emailBox}`}>
          <FontAwesomeIcon className={styles.box__icon} icon={faEnvelope} />
          <span className={styles.emailText}>omkaraspacozumel@hotmail.com</span>
        </div>
      </div>
      <Link href="/" passHref>
        <a>
          <img
            className={styles.header__logo}
            src="/navbar/OmkaraWhole.jpg"
            alt="Omkara Logo"
          />
        </a>
      </Link>

      <div className={styles.social}>
        <a href="https://www.facebook.com/Omkara-SPA-1113464802092295">
          <FontAwesomeIcon
            className={styles.social__icon}
            icon={faFacebookSquare}
            target="_blank"
          />
        </a>

        <a href="https://www.instagram.com/omkara.spa/">
          <FontAwesomeIcon
            className={styles.social__icon}
            icon={faInstagram}
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
