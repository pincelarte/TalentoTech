import React from 'react';
import { useCart } from '../../context/useCart.jsx';
import styles from './cart.module.css';

const PASO = 1;

const Cart = () => {
  const { cart, getCartTotal, clearCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className={styles.container}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className={styles.empty}>El carrito está vacío</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cart.map(item => {
              const alcanzoStock = item.stock !== undefined && item.quantity >= item.stock;
              return (
                <li key={item.id} className={styles.item}>
                  <img src={item.Imagen} alt={item.name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.name}</span>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => decreaseQuantity(item.id, PASO)}
                        aria-label="Quitar"
                      >
                        −
                      </button>
                      <span className={styles.qtyValue}>{item.quantity} kg</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => increaseQuantity(item.id, PASO)}
                        disabled={alcanzoStock}
                        aria-label="Agregar"
                      >
                        +
                      </button>
                    </div>
                    {alcanzoStock && (
                      <span className={styles.stockAviso}>Stock máximo alcanzado</span>
                    )}
                    <span>${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                </li>
              );
            })}
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
