import styles from "./description.module.scss";

function Ictioterapia() {
  return (
    <div className={styles.container}>
      <h2>Faciales</h2>
      <div className={styles.container__text}>
        <p>
          La limpieza facial profunda es un tratamiento que nos ayuda a eliminar
          las impurezas del rostro a causa de la contaminación o los residuos de
          maquillaje, mejora nuestra piel, la revitaliza, le da un aspecto
          fresco, luminoso, elimina puntos negros y permite que la epidermis
          respire para regenerar las células que estimulan la producción de
          colágeno y elastina.
        </p>
      </div>
    </div>
  );
}

export default Ictioterapia;
