import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { useCart } from '../../context/useCart.jsx';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { getCartQuantity } = useCart();
  const cantidad = getCartQuantity();
  const { usuario, rol, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

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

          {!usuario && (
            <li><Link to="/login">Iniciar sesión</Link></li>
          )}

          {usuario && rol === 'admin' && (
            <li><Link to="/admin">Dashboard</Link></li>
          )}

          {usuario && rol !== 'admin' && (
            <li><Link to="/shop">Mi cuenta</Link></li>
          )}

          {usuario && (
            <li>
              <button onClick={handleLogout} className={styles.btnLogout}>
                Cerrar sesión
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;