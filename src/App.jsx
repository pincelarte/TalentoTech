import Layout from "./components/Layout/Layout"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import "./App.css";


function App() {
  
  return (

    <Layout>
      <img src="/images/fondo.png" alt="foto de fondo" className="imagenPrincipal" />

      <div className="productos-container">
       
        <ItemListContainer mensaje="Nuestras Variedades de Pecán" />
      </div>
      
    </Layout>
  )
}

export default App
