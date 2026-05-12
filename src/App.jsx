
import TarjetaProducto from "./components/TarjetaProducto/TarjetaProducto.jsx";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ItemListContainer mensaje="Nuestros Productos" />} />
          <Route path="/producto/:id" element={<ItemDetail />} />
          <Route path="/carrito" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;