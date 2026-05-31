import React from 'react';
import { useCart } from '../../context/useCart.jsx';
import styles from './cart.module.css';

const Cart = () => {
  const { cart, getCartTotal, clearCart, removeFromCart } = useCart();

  return (
    <div className={styles.container}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className={styles.empty}>El carrito está vacío</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map(item => (
              <li key={item.id} className={styles.item}>
                <img src={item.image} alt={item.name} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span>Cantidad: {item.quantity} kg</span>
                  <span>${(item.price * item.quantity).toLocaleString()}</span>
                </div>
                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <p className={styles.total}>Total: ${getCartTotal().toLocaleString()}</p>
            <button className={styles.clearBtn} onClick={clearCart}>Vaciar carrito</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
