import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Pagination } from "../Pagination/Pagination";
import { usePagination } from "../../hooks/usePagination.jsx";
import styles from "./ItemListContainer.module.css";
// 1. Importamos las herramientas de Firebase y tu configuración
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"; // Asegurate de que la ruta a tu config.js sea la correcta

export const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // 2. Apuntamos a la colección "nueces" en Firestore
    const productosDB = collection(db, "nueces");
    
    // 3. Pedimos los documentos a la base de datos remota
    getDocs(productosDB)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          })
        );
      })
      .catch((error) => console.error("Error cargando productos de Firebase:", error));
  }, []); // Se sigue ejecutando una sola vez al cargar el componente

  const { currentItems, currentPage, totalPages, goToPage, nextPage, prevPage, isFirstPage, isLastPage } =
    usePagination(productos, 6);

  return (
    <div className={styles.container}>
      <h2>{mensaje}</h2>
      <ItemList productos={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        nextPage={nextPage}
        prevPage={prevPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </div>
  );
};