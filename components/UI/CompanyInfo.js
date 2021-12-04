import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./companyInfo.module.scss";

function CompanyInfo() {
  return (
    <div className={styles.companyInfo}>
      <div className={styles.box}>
        <h4 className={styles.box__title}>Horarios</h4>
        <div className={styles.box__description}>
          <span>Lunes a Sábado de 9am a 10pm</span>
        </div>
      </div>
      <div className={styles.box}>
        <h4 className={styles.box__title}>Contacto</h4>
        <div className={styles.box__description}>
          <div className={styles.phone}>
            <FontAwesomeIcon className={styles.phone__icon} icon={faPhoneAlt} />
            <span className={styles.phone__text}>
              <a
                href="https://wa.me/529982624981"
                target="_blank"
                rel="noreferrer"
              >
                9982624981
              </a>
            </span>
          </div>
          <div className={styles.phone}>
            <FontAwesomeIcon className={styles.phone__icon} icon={faEnvelope} />
            <span className={styles.phone__text}>
              omkaraspacozumel@hotmail.com
            </span>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <h4 className={styles.box__title}>Redes Sociales</h4>
        <div className={styles.box__description}>
          <div className={styles.phone}>
            <FontAwesomeIcon
              className={styles.phone__icon}
              icon={faFacebookSquare}
            />
            <a
              href="https://www.facebook.com/Omkara-SPA-1113464802092295"
              target="_blank"
              className={styles.phone__text}
              rel="noreferrer"
            >
              Omkara Spa
            </a>
          </div>
          <div className={styles.phone}>
            <FontAwesomeIcon
              className={styles.phone__icon}
              icon={faInstagram}
            />
            <a
              href="https://www.instagram.com/omkara.spa/"
              target="_blank"
              className={styles.phone__text}
              rel="noreferrer"
            >
              Omkara.spa
            </a>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <h4 className={styles.box__title}>Enlaces rápidos</h4>
        <div className={styles.box__description}>
          <span>Política de servicio</span>
          <span>Pregunats Frequentes</span>
          <span>...</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
