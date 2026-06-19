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
  <a
    href="https://instagram.com/TU_USUARIO"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
    aria-label="Instagram de Tierra Pecán"
  >
    <img
      src="/images/instagram-wordmark.svg"
      alt="Instagram"
      className={styles.socialIcon}
    />
  </a>

  <a
    href="https://wa.me/549XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
    aria-label="WhatsApp de Tierra Pecán"
  >
    <img
      src="/images/whatsapp-wordmark.svg"
      alt="WhatsApp"
      className={styles.socialIcon}
    />
  </a>
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