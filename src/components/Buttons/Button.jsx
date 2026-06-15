import styles from "./button.module.css";

const Button = ({ children, onClick, disabled = false }) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

