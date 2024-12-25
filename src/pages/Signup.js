import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
  const [userType, setUserType] = useState('patient');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    city: '',
    specialty: '', // Ce champ est nécessaire uniquement pour les professionnels
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signing up:', { userType, ...formData });
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Inscrivez-vous maintenant, votre bien-être en dépend.</h2>
          <p>Veuillez choisir votre type de compte :</p>
          <div className="user-type">
            <label>
              <input
                type="radio"
                value="patient"
                checked={userType === 'patient'}
                onChange={() => setUserType('patient')}
              />
              Patient
            </label>
            <label>
              <input
                type="radio"
                value="professional"
                checked={userType === 'professional'}
                onChange={() => setUserType('professional')}
              />
              Professionnel
            </label>
          </div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="firstName"
              placeholder="Nom"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Prénom"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="Ville"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {userType === 'professional' && (
              <input
                type="text"
                name="specialty"
                placeholder="Spécialité"
                value={formData.specialty}
                onChange={handleChange}
                required
              />
            )}
            <button type="submit">Créer un compte</button>
          </form>
          <div className="or-separator">
            <span>ou</span>
          </div>

          <div className="google-signup">
            <button className="google-btn">
              <img src="/google icon.png" alt="Google Icon" />
              Continuer avec Google
            </button>
          </div>
          <p className="login-link">
            Vous avez déjà un compte ? <a href="/login">Se connecter</a>
          </p>
        </div>
        <div className="signup-image">
          <img src="/register.jpg" alt="Signup Illustration" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Signup;
