import styles from "./makeBooking.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";

const MakeBooking = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Reserva con nosotros</h3>
      <div className={styles.buttonsContainer}>
        <a
          href="https://wa.me/529871377590"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={styles.container__iconWhats}
            icon={faWhatsapp}
          />
        </a>
        <a
          //href="http://m.me/omkara-spa-1113464802092295"
          href="https://www.facebook.com/Omkara-SPA-1113464802092295/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={styles.container__iconMessenger}
            icon={faFacebookMessenger}
          />
        </a>
      </div>
    </div>
  );
};

export default MakeBooking;
