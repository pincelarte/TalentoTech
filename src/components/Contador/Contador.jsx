import { useState } from 'react';
import Button from "../Buttons/Button";
import styles from "./contador.module.css"

function Contador({stock}) {
    const [contador, setContador] = useState(0);
    <Button onClick={() => setContador(prev => Math.min(stock ?? Infinity, prev + 1))}>+</Button>
    return (
        <div className={styles.contador}>
            <p className={styles.valor}>Cantidad: {contador}</p>
            <div className={styles.buttonContainer}>
                <Button onClick={() => setContador(prev => Math.max(0, prev - 1))}>-</Button>
                <Button onClick={() => setContador(contador + 1)}>+</Button>
            </div>
        </div>
    );
}
export default Contador;