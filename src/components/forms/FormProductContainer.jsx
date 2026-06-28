import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Formproducto from './FormProducto';

const estadoInicialForm = {
  Nombre: '',
  Precio: '',
  Stock: '',
  Imagen: '',
  Descripcion: '',
};

function FormProductContainer({ productoAEditar, onGuardado, onCancelar }) {
  const [datosForm, setDatosForm] = useState(estadoInicialForm);

  
  useEffect(() => {
    if (productoAEditar) {
      setDatosForm(productoAEditar);
    } else {
      setDatosForm(estadoInicialForm);
    }
  }, [productoAEditar]);

  const manejarCambio = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async () => {
    const productoFinal = {
      Nombre: datosForm.Nombre,
      Precio: Number(datosForm.Precio),
      Stock: Number(datosForm.Stock),
      Imagen: datosForm.Imagen,
      Descripcion: datosForm.Descripcion || '',
    };

    try {
      if (productoAEditar) {
        // UPDATE
        const docRef = doc(db, 'nueces', productoAEditar.id);
        await updateDoc(docRef, productoFinal);
        alert('Producto actualizado con éxito.');
      } else {
        // CREATE
        await addDoc(collection(db, 'nueces'), productoFinal);
        alert('Producto guardado con éxito.');
      }
      setDatosForm(estadoInicialForm);
      onGuardado(); 
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al guardar.');
    }
  };

  return (
    <Formproducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      modoEdicion={!!productoAEditar}
    />
  );
}

export default FormProductContainer;
