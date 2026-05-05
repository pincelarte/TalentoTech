import styles from './header.module.css'

function Header (){
    return (
        <header className={styles.header}>
            <h1>🐿️ Nueces & Pecanes</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;