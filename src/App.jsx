import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto.jsx";
import Layout from "./components/Layout/Layout"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";



function App() {
  
  return (
    <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<TarjetaProducto/>} />
        <Route path="/producto/:id" element={<TarjetaProducto />} />
      </Route> 
    </Routes>
        
      
    
    </>
  )
}

export default App
