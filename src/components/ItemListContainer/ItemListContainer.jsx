import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import styles from "./ItemListContainer.module.css";

export const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.error("Error cargando productos:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>{mensaje}</h2>
      <ItemList productos={productos} />
    </div>
  );
};