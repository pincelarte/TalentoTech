import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import Cart from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Login from "./pages/Login/Login";
import Dashboard from "./components/forms/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from './pages/Register/Register';
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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
