import { useState, useEffect } from "react";
import CardPerson from "../CardPerson/CardPerson";
import styles from "./footer.module.css";

function Footer() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    fetch("/data/personas.json")
      .then((r) => r.json())
      .then((data) => setEquipo(data))
      .catch((e) => console.error("Error cargando equipo:", e));
  }, []);

  return (
    <footer className={styles.footer}>
        <h1 style = {{ marginBottom:"40px", color: "black", borderTop:"solid 2px" }}>Somos un Equipo</h1>
      <div className={styles.equipo}>
        {equipo.map((persona) => (
          <CardPerson key={persona.nombre} {...persona} />
        ))}
      </div>

      <p>&copy; 2026 Nueces & Pecanes. Todos los derechos reservados.</p>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.link}>Instagram</a>
        <a href="#" className={styles.link}>WhatsApp</a>
      </div>
    </footer>
  );
}

export default Footer;