import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.section}>
          <p className={styles.email}>info@tierrapecan.com</p>
        </div>

        <div className={styles.section}>
          <p className={styles.brand}>Tierra Pecán</p>
        </div>
        
        <div className={styles.section}>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.link}>Instagram</a>
            <a href="#" className={styles.link}>WhatsApp</a>
          </div>
        </div>

      </div>

      <hr className={styles.divider} />

      <p className={styles.copyright}>
        &copy; 2026 Nueces & Pecanes. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;