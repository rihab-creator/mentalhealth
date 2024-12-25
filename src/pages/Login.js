import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google...');
    // Add Google login logic here
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <h2>Bon retour parmi nous</h2>
          <p>Améliorez le Bien-Être Mental de Votre Public</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
            />
            <button type="submit">Connexion</button>
          </form>
          
          {/* Separator */}
          <div className="or-separator">
            <span>ou</span>
          </div>

          {/* Google Login Button */}
          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <img src="/google icon.png" alt="Google Icon" />
            Continuer avec Google
          </button>

          <div className="forgot-password">
            <a href="#">Mot de passe oublié ?</a>
          </div>
          <div className="register">
            <p>
              Vous n'avez de compte ? <a href="/signup">S'inscrire</a>
            </p>
          </div>
        </div>
        <div className="login-right">
          <img src="/brain.jpg" alt="Login illustration" />
        </div>
      </div>
    </div>
  );
};

export default Login;
