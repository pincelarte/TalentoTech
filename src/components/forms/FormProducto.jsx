import styles from './Formproducto.module.css';

function Formproducto({ datosForm, manejarCambio, manejarEnvio, modoEdicion }) {
  return (
    <div className={styles.form}>
      <h3>{modoEdicion ? 'Editar producto' : 'Agregar nuevo producto'}</h3>

      <label>Nombre</label>
      <input
        name="Nombre"
        value={datosForm.Nombre}
        onChange={manejarCambio}
        placeholder="Nombre del producto"
      />

      <label>Precio ($ x kg)</label>
      <input
        name="Precio"
        type="number"
        value={datosForm.Precio}
        onChange={manejarCambio}
        placeholder="0"
      />

      <label>Stock (kg)</label>
      <input
        name="Stock"
        type="number"
        value={datosForm.Stock}
        onChange={manejarCambio}
        placeholder="0"
      />

      <label>Descripción</label>
      <textarea
        name="Descripcion"
        value={datosForm.Descripcion}
        onChange={manejarCambio}
        placeholder="Contale al cliente qué hace especial a este producto..."
        rows={4}
      />

      <label>URL de imagen</label>
      <input
        name="Imagen"
        value={datosForm.Imagen}
        onChange={manejarCambio}
        placeholder="https://..."
      />

      {modoEdicion && datosForm.Imagen && (
        <div>
          <p>Imagen actual:</p>
          <img src={datosForm.Imagen} alt="Vista previa" className={styles.preview} />
        </div>
      )}

      <button type="button" onClick={manejarEnvio}>
        {modoEdicion ? 'Actualizar producto' : 'Guardar producto'}
      </button>
    </div>
  );
}

export default Formproducto;
