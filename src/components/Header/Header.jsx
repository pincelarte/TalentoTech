import { Link } from 'react-router-dom';
import styles from './header.module.css'

function Header(){
    return (
        <header className={styles.header}>
            <h1>🐿️ Nueces & Pecanes</h1>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/producto/1">ProductoDetalle</Link></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;