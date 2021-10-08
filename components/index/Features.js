import styles from "./features.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";
import { faHandshake, faGrin } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.features__box}>
        <FontAwesomeIcon icon={faGrin} className={styles.icon} />
        <div className={styles.textContainer}>
          <h3>Visión</h3>
          <p>
            Nuestra visión es... blah blah blah blah blah blah blah blah blah
          </p>
        </div>
      </div>
      <div className={styles.features__box}>
        <FontAwesomeIcon icon={faChild} className={styles.icon} />
        <div className={styles.textContainer}>
          <h3>Misión</h3>
          <p>
            Nuestra misión es... blah blah blah blah blah blah blah blah blah
          </p>
        </div>
      </div>
      <div className={styles.features__box}>
        <FontAwesomeIcon icon={faHandshake} className={styles.icon} />
        <div className={styles.textContainer}>
          <h3>Valores</h3>
          <p>
            Nuestros valores son... blah blah blah blah blah blah blah blah blah
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
