import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TarjetaProducto from "../../components/TarjetaProducto/TarjetaProducto";
import styles from "./ItemDetail.module.css";

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then(res => res.json())
      .then(data => {
        const prod = data.find(p => p.id === parseInt(id));
        setProducto(prod);
      });
  }, [id]);

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <TarjetaProducto 
        name={producto.nombre}
        price={producto.precio}
        image={producto.imagen}
        stock={producto.stock}
        clickable={false}
      />
    </div>
  );
}

export default ItemDetail;