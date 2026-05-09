import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img 
        src="/images/fondo.png" 
        alt="foto de fondo" 
        className={styles.imagenPrincipal} 
      />
      <ItemListContainer mensaje="Nuestras Variedades de Pecán" />
    </div>
  );
}

export default Home;
