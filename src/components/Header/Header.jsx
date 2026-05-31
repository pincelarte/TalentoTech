import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useCart } from '../../context/useCart.jsx';

function Header() {
  const { getCartQuantity } = useCart();
  const cantidad = getCartQuantity();

  return (
    <header className={styles.header}>
      <h1>🐿️ Nueces & Pecanes</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li>
            <Link to="/carrito" className={styles.cartLink}>
              🛒 Carrito
              {cantidad > 0 && (
                <span className={styles.badge}>{cantidad}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;