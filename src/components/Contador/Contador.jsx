import Button from "../Buttons/Button";
import styles from "./contador.module.css"

function Contador({ stock, quantity, setQuantity }) {
  const incrementar = () => {
    if (quantity < (stock ?? Infinity)) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementar = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className={styles.contador}>
      <p className={styles.valor}>Cantidad: {quantity}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={decrementar}>-</Button>
        <Button onClick={incrementar}>+</Button>
      </div>
    </div>
  );
}

export default Contador;