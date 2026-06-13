import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Asegurate de que la ruta a tu contexto sea correcta

const PrivateRoute = ({ children }) => {
  const { usuario, rol, cargando } = useAuth();

  // 1. Mientras Firestore busca el rol, mostramos una carga
  if (cargando) return <p>Cargando...</p>;

  // 2. Si no está logueado O si su rol NO es "admin", lo rebotamos al login
  if (!usuario || rol !== "admin") {
    return <Navigate to="/login" />;
  }

  // 3. Si pasa las condiciones, lo dejamos ver el Dashboard
  return children;
};

export default PrivateRoute;