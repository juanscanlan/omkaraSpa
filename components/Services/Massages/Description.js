import styles from "./description.module.scss";

function Ictioterapia() {
  return (
    <div className={styles.container}>
      <h2>Ictioterapia</h2>
      <div className={styles.container__text}>
        <p>
          La ictioterapia se trata de una limpieza profunda de los pies,
          mediante la inmersión de los mismos en una pecera llena de los peces
          garra rufa, llamados también peces doctor. Estos peces turcos
          consiguen eliminar toda la piel muerta de los pies, dejándolos limpios
          y suaves.
        </p>
        <br />
        <p>
          Con la ictioterapia se consiguen unos pies libres de callos, grietas y
          durezas, bien hidratados y libres de impurezas. También mejora la
          circulación, disminuye el mal olor de los pies y elimina el pie de
          atleta. Incluso se dice que los peces actúan en los mismos puntos que
          la acupuntura, regulando el sistema nervioso, relajando los músculos y
          reduciendo la fatiga.
        </p>
        <br />
        <p>
          Esta pedicuría natural tarda entre 15 y 30 minutos aproximadamente, y
          también incluye un masaje en los pies.
        </p>
      </div>
    </div>
  );
}

export default Ictioterapia;
