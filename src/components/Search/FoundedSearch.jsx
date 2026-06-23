import { useEffect, useState } from "react";
import { useBusqueda } from "../../context/contextSearch.jsx";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import TarjetaProducto from "../item/TarjetaProducto.jsx";
import styles from "./FoundedSearch.module.css";

const FoundedSearch = () => {
  const { busqueda } = useBusqueda();
  const navigate = useNavigate();

  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Redirige al inicio si la búsqueda se vacía
  useEffect(() => {
    if (!busqueda || busqueda.trim() === "") {
      navigate("/");
    }
  }, [busqueda, navigate]);

  // Trae todos los productos de Firestore una sola vez
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosDB = collection(db, "nueces");
        const resp = await getDocs(productosDB);
        const docs = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(docs);
      } catch (error) {
        console.error("Error cargando productos de Firebase:", error);
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.Nombre?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Productos encontrados</h2>

      {cargando ? (
        <p className={styles.cargando}>Buscando productos...</p>
      ) : (
        <div className={styles.grid}>
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <TarjetaProducto
                key={producto.id}
                id={producto.id}
                name={producto.Nombre}
                price={producto.Precio}
                Imagen={producto.Imagen}
                stock={producto.Stock}
              />
            ))
          ) : (
            <p className={styles.noResultados}>
              No hay productos que coincidan con la búsqueda.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default FoundedSearch;
