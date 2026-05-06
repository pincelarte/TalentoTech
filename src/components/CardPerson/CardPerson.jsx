import styles from "./CardPerson.module.css";

const TarjetaPersona = ({ nombre, posicion, img }) => {
  return (
    <div className={styles.tarjeta}>
      <img src={img} alt={nombre} className={styles.img} />
      <h3>{nombre}</h3>
      <p className={styles.posicion}>{posicion}</p>
    </div>
  );
};

export default TarjetaPersona;