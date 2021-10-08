import styles from "./types.module.scss";

import MassageList from "./MassageList";

function Types() {
  const massagesContent = MassageList.map((massage) => {
    return (
      <div className={styles.container} key={massage.Key}>
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
