import styles from "./services.module.scss";

import Link from "next/link";

function Services() {
  return (
    <div className={styles.container} id="services">
      <h3 className={styles.container__title}>Servicios</h3>
      <div className={styles.services}>
        <Link href="/Ictioterapia" passHref>
          <a>
            <div className={`${styles.services__box} ${styles.fishSpa}`}>
              Ictioterapia
            </div>
          </a>
        </Link>
        <Link href="/Masajes" passHref>
          <a>
            <div className={`${styles.services__box} ${styles.masajes}`}>
              Masajes
            </div>
          </a>
        </Link>
        <Link href="/Velados" passHref>
          <a>
            <div className={`${styles.services__box} ${styles.velado}`}>
              Velado de Oído
            </div>
          </a>
        </Link>
        <Link href="/Faciales" passHref>
          <a>
            <div className={`${styles.services__box} ${styles.faciales}`}>
              Faciales
            </div>
          </a>
        </Link>
        <Link href="/Nails" passHref>
          <a>
            <div className={`${styles.services__box} ${styles.nails}`}>
              Uñas
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Services;
