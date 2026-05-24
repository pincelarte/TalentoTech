import styles from "./tarjetaProducto.module.css";
import Button from "../Buttons/Button";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

const TarjetaProducto = ({ name, price, image, id, stock, clickable = true }) => {
  return (
    <div className={styles.tarjeta}>
      {clickable ? (
        <Link to={`/producto/${id}`}>
          <div className={styles.imgWrapper}>
            <img src={image} alt={name} className={styles.img} />
          </div>
        </Link>
      ) : (
        <div className={styles.imgWrapper}>
          <img src={image} alt={name} className={styles.img} />
        </div>
      )}
      <h3>{name}</h3>
      <p>Precio x Kg: ${price}</p>
      {stock !== undefined && <p>Stock disponible: {stock} kg</p>}
      <Contador/>
      <Button>Comprar</Button>
    </div>
  );
};

export default TarjetaProducto;