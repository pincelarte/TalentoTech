import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, rol, usuario, cargando } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cargando && usuario) {
      if (rol === 'admin') {
        navigate('/admin', { replace: true });
      } else {
        navigate('/shop', { replace: true });
      }
    }
  }, [usuario, rol, cargando, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password);
    } catch (err) {
      console.log("ERROR LOGIN:", err.code, err.message);
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        {error && <p className={styles.error}>{error}</p>}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@email.com"
          required
        />
        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••"
          required
        />
        <button type="submit">Ingresar</button>
        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
          ¿No tenés cuenta? <Link to="/register">Registrate</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;