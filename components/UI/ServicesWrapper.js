import styles from "./types.module.scss";

// import MassageList from "./MassageList";

function ServiceWrapper(props) {
  const serviceContent = props.serviceData.map((service) => {
    return (
      <div className={styles.container} key={service.Key}>
        <div>
          <img
            className={styles.image}
            src={service.Image}
            alt={service.Name}
          />
        </div>
        <div className={styles.content}>
          <h3>{service.Name}</h3>
          <div>{service.Paragraph}</div>
        </div>
      </div>
    );
  });

  return <>{serviceContent}</>;
}

export default ServiceWrapper;
