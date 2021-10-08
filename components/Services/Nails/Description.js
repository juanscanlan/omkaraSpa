import styles from "./description.module.scss";

function Ictioterapia() {
  return (
    <div className={styles.container}>
      <h2>Pedicure</h2>
      <div className={styles.container__text}>
        <p>
          Una pedicura es un tratamiento cosmético de los pies y uñas de los
          pies.
        </p>
        <br />
        <p>
          Las pedicuras incluyen cuidado no sólo para las uñas de los pies; Las
          células muertas de la piel se frotan de la parte inferior de los pies,
          utilizando una piedra áspera (a menudo una piedra pómez) u otro
          material. El cuidado de la piel se proporciona a menudo hasta la
          rodilla, incluyendo exfoliación granular, hidratación y masaje.
        </p>
      </div>
      <br />
      <br />
      <br />
      <h2>Manicure</h2>
      <div className={styles.container__text}>
        <p>
          Una manicura es un tratamiento de belleza cosmético para las uñas y
          manos.
        </p>
      </div>
    </div>
  );
}

export default Ictioterapia;
