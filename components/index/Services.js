import styles from "./services.module.scss";

function Services() {
  return (
    <div className={styles.container}>
      <h3 className={styles.container__title}>Servicios</h3>
      <div className={styles.services}>
        <div className={`${styles.services__box} ${styles.fishSpa}`}>
          Ictioterapia
        </div>
        <div className={`${styles.services__box} ${styles.masajes}`}>
          Masajes
        </div>
        <div className={`${styles.services__box} ${styles.velado}`}>
          Velado de Oído
        </div>
        <div className={`${styles.services__box} ${styles.depilacion}`}>
          Depilación
        </div>
        <div className={`${styles.services__box} ${styles.nails}`}>Uñas</div>
      </div>
    </div>
  );
}

export default Services;
