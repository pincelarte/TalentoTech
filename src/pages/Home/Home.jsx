import { Link } from "react-router-dom";
import { ItemListContainer } from "../../components/ItemListContainer/ItemListContainer";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroTexture} aria-hidden="true"></div>
        <span className={styles.heroNuez} aria-hidden="true">🌰</span>
        <div className={styles.heroContent}>
          <span className={styles.tag}>Cosecha familiar</span>
          <h1 className={styles.heroTitle}>
            De nuestra tierra,<br />a tu mesa.
          </h1>
          <p className={styles.heroSubtitle}>
            Hace más de 10 años, Juan Pablo y Martín cuidan a mano cada uno de sus más de 200 nogales distribuidos en tres hectáreas. Cada pecán que llega a tu casa pasó primero por sus manos, no por una fábrica; un proceso artesanal que se nota en el sabor.
          </p>
          <div className={styles.heroActions}>
            <Link to="/shop" className={styles.ctaPrimary}>
              Ver variedades
            </Link>
            <span className={styles.heroMascota} aria-hidden="true">🐿️</span>
          </div>
        </div>
      </section>

      <section className={styles.variedades}>
        <div className={styles.variedadesIntro}>
          <h2 className={styles.variedadesTitle}>Seis nueces, seis personalidades</h2>
          <p className={styles.variedadesText}>
            No todas las pecán son iguales. Cada variedad tiene su propio
            tamaño, dulzor y textura, igual que la tierra de donde sale.
            Elegí la tuya o probalas todas.
          </p>
        </div>
        <div className={styles.variedadesImgWrapper}>
          <img
            src="/images/fondo.png"
            alt="Las seis variedades de pecán de Tierra Pecán: Apache, Cheyenne, Kiowa, Pawnee, Sioux y Choctaw"
            className={styles.variedadesImg}
          />
        </div>
      </section>

      <ItemListContainer mensaje="Nuestras Variedades de Pecán" />
    </div>
  );
}

export default Home;
