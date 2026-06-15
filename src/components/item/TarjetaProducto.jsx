  import { useState } from "react";
  import { useCart } from "../../context/useCart.jsx";
  import styles from "./tarjetaProducto.module.css";
  import Button from "../Buttons/Button.jsx";
  import Contador from "../Contador/Contador.jsx";
  import { Link } from "react-router-dom";

  const TarjetaProducto = ({ name, price, Imagen, id, stock, clickable = true }) => {
    const [quantity, setQuantity] = useState(0);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
      addToCart({ id, name, price, Imagen, stock }, quantity);
      setQuantity(0);
    };

    return (
      <div className={styles.tarjeta}>
        {clickable ? (
          <Link to={`/producto/${id}`}>
            <div className={styles.imgWrapper}>
              <img src={Imagen} alt={name} className={styles.img} />
            </div>
          </Link>
        ) : (
          <div className={styles.imgWrapper}>
            <img src={Imagen} alt={name} className={styles.img} />
          </div>
        )}
        <h3>{name}</h3>
        <p>Precio x Kg: ${price}</p>
        {stock !== undefined && <p>Stock disponible: {stock} kg</p>}
        <Contador quantity={quantity} setQuantity={setQuantity} />
        <Button onClick={handleAddToCart} disabled={quantity === 0}>Agregar al carrito</Button>
      </div>
    );
  };

  export default TarjetaProducto;