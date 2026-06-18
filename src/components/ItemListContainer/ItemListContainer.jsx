import { useState, useEffect, useCallback } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Pagination } from "../Pagination/Pagination";
import styles from "./ItemListContainer.module.css";
// 1. Importamos las herramientas de Firebase y tu configuración
import { collection, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../../firebase/config"; // Asegurate de que la ruta a tu config.js sea la correcta

const PRODUCTOS_POR_PAGINA = 6;

export const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Guardamos el último documento de cada página ya visitada.
  // cursores[1] = undefined (la página 1 no necesita startAfter)
  // cursores[2] = último doc de la página 1, etc.
  const [cursores, setCursores] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [hayPaginaSiguiente, setHayPaginaSiguiente] = useState(false);

  const cargarPagina = useCallback(
    async (pagina, cursorAnterior) => {
      setCargando(true);
      try {
        const productosDB = collection(db, "nueces");

        // 2. Armamos la consulta: ordenada, limitada a 6, y
        // arrancando después del cursor de la página anterior (si hay).
        const condiciones = [orderBy("Nombre"), limit(PRODUCTOS_POR_PAGINA)];
        if (cursorAnterior) condiciones.push(startAfter(cursorAnterior));

        const consulta = query(productosDB, ...condiciones);
        const resp = await getDocs(consulta);

        const docs = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(docs);

        // 3. Guardamos el último doc de ESTA página, para poder pedir la próxima.
        const ultimoDoc = resp.docs[resp.docs.length - 1];
        if (ultimoDoc) {
          setCursores((prev) => ({ ...prev, [pagina]: ultimoDoc }));
        }

        // 4. ¿Hay una página siguiente? Si Firestore devolvió menos de 6, no.
        setHayPaginaSiguiente(docs.length === PRODUCTOS_POR_PAGINA);
        setCurrentPage(pagina);
      } catch (error) {
        console.error("Error cargando productos de Firebase:", error);
      } finally {
        setCargando(false);
      }
    },
    []
  );

  // Carga inicial: página 1, sin cursor.
  useEffect(() => {
    cargarPagina(1, null);
  }, [cargarPagina]);

  const nextPage = () => {
    if (!hayPaginaSiguiente) return;
    const cursorDeMiPaginaActual = cursores[currentPage];
    cargarPagina(currentPage + 1, cursorDeMiPaginaActual);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    const paginaAnterior = currentPage - 1;
    // Para volver a la página anterior necesitamos el cursor de DOS páginas atrás
    // (el punto desde donde esa página empezó a contar).
    const cursorParaPaginaAnterior = cursores[paginaAnterior - 1] || null;
    cargarPagina(paginaAnterior, cursorParaPaginaAnterior);
  };

  return (
    <div className={styles.container}>
      <h2>{mensaje}</h2>
      {cargando ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList productos={productos} />
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={null}
        goToPage={() => {}}
        nextPage={nextPage}
        prevPage={prevPage}
        isFirstPage={currentPage === 1}
        isLastPage={!hayPaginaSiguiente}
      />
    </div>
  );
};