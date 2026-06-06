import TarjetaProducto from "../item/TarjetaProducto.jsx";
import styles from "./ItemList.module.css";

export const ItemList = ({ productos }) => {
  return (
    <div className={styles.grid}>
      {productos.map((prod) => (
        <TarjetaProducto
          key={prod.id}
          id={prod.id}
          name={prod.Nombre}
          price={prod.Precio}
          Imagen={prod.Imagen}
          stock={prod.Stock}
        />
      ))}
    </div>
  );
};
