import styles from './footer.module.css'

function Footer(){
    return(
     
       <footer className={styles.footer}>
          
        <p>&copy; 2026 Nueces & Pecanes. Todos los derechos reservados.</p>
        <div className={styles.socialLinks}>
  <a href="#" className={styles.link}>Instagram</a>
  <a href="#" className={styles.link}>WhatsApp</a>
</div>
    

        </footer>    
    );
}

export default Footer;