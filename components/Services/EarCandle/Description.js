import styles from "./description.module.scss";

function Ictioterapia() {
  return (
    <div className={styles.container}>
      <h2>Velado de Oído</h2>
      <div className={styles.container__text}>
        <p>
          Es una técnica centenaria, la cual es segura, natural y efectiva para
          la limpieza del oído.
        </p>
        <br />
        <p>Útil en los siguientes casos:</p>
        <ul>
          <li>Dolor de oído</li>
          <li>Sordera</li>
          <li>Alergias</li>
          <li>Resfriados</li>
          <li>Dolor de Cabeza</li>
          <li>Garganta irritada</li>
          <li>Infección de senos nasales</li>
        </ul>
      </div>
    </div>
  );
}

export default Ictioterapia;
