import TarjetaProducto from "../TarjetaProducto/TarjetaProducto.jsx";
import styles from "./ItemList.module.css";

export const ItemList = ({ productos }) => {
  return (
    <div className={styles.grid}>
      {productos.map((prod) => (
        <TarjetaProducto 
          key={prod.id} 
          name={prod.nombre} 
          price={prod.precio} 
          image={prod.imagen} 
        />
      ))}
    </div>
  );
};