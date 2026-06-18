import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import FormProductContainer from './FormProductContainer';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [productos, setProductos] = useState([]);
  const [productoAEditar, setProductoAEditar] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const cargarProductos = () => {
    getDocs(collection(db, 'nueces')).then((resp) => {
      setProductos(resp.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleEditClick = (producto) => {
    setProductoAEditar(producto);
    setModalAbierto(true);
  };

  const handleAgregarClick = () => {
    setProductoAEditar(null);
    setModalAbierto(true);
  };

  const handleEliminar = async (id) => {
    if (!confirm('¿Seguro que querés eliminar este producto?')) return;
    await deleteDoc(doc(db, 'nueces', id));
    cargarProductos();
  };

  const handleGuardado = () => {
    setModalAbierto(false);
    setProductoAEditar(null);
    cargarProductos();
  };

  const handleCancelar = () => {
    setModalAbierto(false);
    setProductoAEditar(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Panel de Administración</h2>
        <button className={styles.btnAgregar} onClick={handleAgregarClick}>
          + Agregar producto
        </button>
      </div>

      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td data-label="Imagen">
                <img src={p.Imagen} alt={p.Nombre} className={styles.imgTabla} />
              </td>
              <td data-label="Nombre">{p.Nombre}</td>
              <td data-label="Precio">${p.Precio}</td>
              <td data-label="Stock">{p.Stock} kg</td>
              <td data-label="Acciones" className={styles.celdaAcciones}>
                <button className={styles.btnEditar} onClick={() => handleEditClick(p)}>
                  Editar
                </button>
                <button className={styles.btnEliminar} onClick={() => handleEliminar(p.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {modalAbierto && (
        <div className={styles.modalOverlay} onClick={handleCancelar}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.btnCerrar} onClick={handleCancelar}>✕</button>
            <FormProductContainer
              productoAEditar={productoAEditar}
              onGuardado={handleGuardado}
              onCancelar={handleCancelar}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
