import styles from "./services.module.scss";

import Link from "next/link";

function Services() {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Servicios</h3>
      <div className={styles.services}>
        <Link href="/Ictioterapia">
          <div className={`${styles.services__box} ${styles.fishSpa}`}>
            Ictioterapia
          </div>
        </Link>
        <Link href="/Masajes">
          <div className={`${styles.services__box} ${styles.masajes}`}>
            Masajes
          </div>
        </Link>

        <Link href="/Velados">
          <div className={`${styles.services__box} ${styles.velado}`}>
            Velado de Oído
          </div>
        </Link>

        <Link href="/Depilacion">
          <div className={`${styles.services__box} ${styles.depilacion}`}>
            Depilación
          </div>
        </Link>

        <Link href="/Nails">
          <div className={`${styles.services__box} ${styles.nails}`}>Uñas</div>
        </Link>
      </div>
    </div>
  );
}

export default Services;
