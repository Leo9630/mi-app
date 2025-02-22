import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Lottie from 'lottie-react';
import natureAnimation from './assets/nature.json';
import './WelcomePage.css';

const WelcomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
      window.location.href = "/dashboard"; // Redirigir después del login
    } catch (error) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="welcome-container">
      <div className="lottie-background">
        <Lottie animationData={natureAnimation} loop={true} className="lottie-nature" />
      </div>
      <div className="header-section">
        <h1 className="main-title">¡Bienvenido a Caja Segura Natha!</h1>
        <p className="subtitle">Tu espacio de tranquilidad y bienestar</p>
      </div>
      <div className="login-card">
        <h2 className="card-title">Iniciar Sesión</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn-login">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
