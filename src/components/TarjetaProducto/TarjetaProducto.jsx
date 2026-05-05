import styles from "./tarjetaProducto.module.css";
import Button from "../Buttons/Button";
import Contador from "../Contador/Contador"

const TarjetaProducto = ({ name, price, image }) => {
  return (
    <div className={styles.tarjeta}>
      <img src={image} alt={name} className={styles.img} />
      <h3>{name}</h3>
      <p>Precio x Kg: ${price}</p>
      <Contador/>
      <Button>Comprar</Button>
    </div>
  );
};

export default TarjetaProducto;