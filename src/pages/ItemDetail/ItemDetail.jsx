import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TarjetaProducto from "../../components/item/TarjetaProducto";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from "./ItemDetail.module.css";

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "nueces", id);
    getDoc(docRef).then((snap) => {
      if (snap.exists()) {
        setProducto({ id: snap.id, ...snap.data() });
      }
    });
  }, [id]);

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <TarjetaProducto
        name={producto.Nombre}
        price={producto.Precio}
        Imagen={producto.Imagen}
        stock={producto.Stock}
        clickable={false}
      />
      {producto.Descripcion && (
        <div className={styles.descripcion}>{producto.Descripcion}</div>
      )}
    </div>
  );
}

export default ItemDetail;
