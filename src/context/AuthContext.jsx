import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebase/config';

const AuthContext = createContext();

const auth = getAuth(app);
const db = getFirestore(app);

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        setCargando(true);

        if (user) {
          setUsuario(user);

          const docRef = doc(db, "usuarios", user.uid);
          const docSnap = await getDoc(docRef);

          console.log("Usuario Firestore:", {
            uid: user.uid,
            existe: docSnap.exists(),
            datos: docSnap.data(),
          });

          if (docSnap.exists()) {
            setRol(docSnap.data().rol);
          } else {
            setRol(null);
          }
        } else {
          setUsuario(null);
          setRol(null);
        }
      } catch (error) {
        console.error("Error leyendo usuario:", error);
        setUsuario(null);
        setRol(null);
      } finally {
        setCargando(false);
      }
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setCargando(false);
      throw error;
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ usuario, rol, login, logout, cargando }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);