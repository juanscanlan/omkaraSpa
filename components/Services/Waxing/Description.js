import styles from "./description.module.scss";

function Ictioterapia() {
  return (
    <div className={styles.container}>
      <h2>Depilación con Cera Española</h2>
      <div className={styles.container__text}>
        <p>
          La Cera Española es una cera compuesta por la resina del pino y una
          mezcla de ceras micro-cristalinas en proporciones tales que sus puntos
          de fusión son muy bajos ofreciendo un servicio depilatorio suave con
          la piel y más natural. Se utiliza tibia, no tan caliente y líquida
          como las otras ceras.
        </p>
        <br />
        <p>
          Arranca la totalidad del vello con su bulbo; hace que la piel sea
          perfectamente nítida y suave. Este arrancado causa un
          micro-traumatismo en la papila dérmica (base del folículo piloso) que
          aprovisiona sangre al vello. Así, menos alimentado, el vello crece más
          suavemente y más lentamente.
        </p>
        <br />
        <p>
          No produce ningún tipo de irritación en la piel ni tiene efectos
          secundarios, al aplicarse de manera correcta en pieles sanas y sin
          ningún tipo de intoxicación.
        </p>
        <br />
        <ul>
          <li>Es una cera natural</li>
          <li>Respeta la piel</li>
          <li>Brinda excelentes resultados</li>
          <li>Sin agresión</li>
          <li>
            Se adapta a todas las partes del cuerpo y del rostro y a todas las
            anatomías sin riesgos de cortes.
          </li>
          <li>
            Practicada con regularidad, atenúa y retarda el nacimiento del
            vello, permitiendo resultados que duran cada vez más tiempo.
          </li>
          <li>
            Tiene efectos exfoliantes, se extraen células muertas, tiene una
            duración en general de un mes, deja la piel tersa, aterciopelada y
            suave.
          </li>
          <li>
            Casi sin dolor, ideal para pieles sensibles pues se manejan
            diferentes ingredientes naturales.
          </li>
        </ul>
        <br />
        <p>Servicios:</p>
        <ol>
          <li>Ceja</li>
          <li>Bigote</li>
          <li>Bikini</li>
          <li>Brasileño</li>
          <li>Pierna completa</li>
          <li>Media pierna</li>
        </ol>
      </div>
    </div>
  );
}

export default Ictioterapia;
