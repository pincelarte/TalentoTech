import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { useCart } from '../../context/useCart.jsx';
import { useAuth } from '../../context/AuthContext';

function Header() {
  const { getCartQuantity } = useCart();
  const cantidad = getCartQuantity();
  const { usuario, rol, logout } = useAuth();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
    setMenuAbierto(false);
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <h1>🐿️ Tierra Pecán</h1>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuAbierto((prev) => !prev)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuAbierto}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>
      <nav className={`${styles.nav} ${menuAbierto ? styles.navAbierto : ''}`}>
        <ul>
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/shop" onClick={cerrarMenu}>Shop</Link></li>
          <li>
            <Link to="/carrito" className={styles.cartLink} onClick={cerrarMenu}>
              🛒 Carrito
              {cantidad > 0 && (
                <span className={styles.badge}>{cantidad}</span>
              )}
            </Link>
          </li>

          {!usuario && (
            <li><Link to="/login" onClick={cerrarMenu}>Iniciar sesión</Link></li>
          )}

          {usuario && rol === 'admin' && (
            <li><Link to="/admin" onClick={cerrarMenu}>Dashboard</Link></li>
          )}

          {usuario && rol !== 'admin' && (
            <li><Link to="/shop" onClick={cerrarMenu}>Mi cuenta</Link></li>
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