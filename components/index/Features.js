import styles from "./features.module.scss";

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.features__box}>Vision?</div>
      <div className={styles.features__box}>Mision?</div>
      <div className={styles.features__box}>Valores?</div>
    </div>
  );
}

export default Features;
