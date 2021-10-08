import styles from "./types.module.scss";

import MassageList from "./MassageList";

function Types() {
  const massageTypes = [
    {
      Name: "Terapeutico",
      Paragraph: (
        <>
          <p>
            El masaje terapéutico actúa en diferentes niveles: físico, psíquico.
          </p>
          <p>
            Con diferentes técnicas se trabaja sobre la piel. Los músculos son
            relajados o tonificados. Las articulaciones son lubricadas. También
            se fomenta el buen funcionamiento de los diferentes sistemas del
            cuerpo.
          </p>
          <p>Esto lleva a un mayor placer físico como emocional.</p>
          <p>Incluye:</p>
          <ul>
            <li>Movilización muscular.</li>
            <li>Movimientos osteopáticos.</li>
            <li>Ejercicios para la correcta rehabilitación postural.</li>
          </ul>
        </>
      ),
    },
  ];

  const massagesContent = MassageList.map((massage) => {
    return (
      <div className={styles.container}>
        <div>
          <img
            className={styles.image}
            src={massage.Image}
            alt="Masaje terapéutico"
          />
        </div>
        <div className={styles.content}>
          <h3>{massage.Name}</h3>
          <div>{massage.Paragraph}</div>
        </div>
      </div>
    );
  });

  return <>{massagesContent}</>;
}

export default Types;
