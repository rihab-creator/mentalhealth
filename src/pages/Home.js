import React from 'react';
import '../styles/Home.css'; // Chemin mis à jour
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Bannière principale */}
      <header className="header-section">
  <div className="content-container">
    <div className="text-section">
      <h1>Votre Bien-Être, Notre Priorité</h1>
      <p>
        Une plateforme anonyme pour accéder à des professionnels de santé mentale et découvrir des ressources utiles.
      </p>
      <Link to="/signup" className="cta-button">Commencez Maintenant</Link>
    </div>
    <div className="image-section">
    <img src="/mental.jpg" alt="Image illustrant le bien-être" />
    </div>
  </div>
</header>


      {/* Section Avantages */}
      <section className="features">
  <h2>Pourquoi Nous Choisir ?</h2>
  <div className="feature-cards">
    <div className="card">
      <img src="/soignants.jpg" alt="Illustration santé" />
      <p>Notre équipe est composée de professionnels qualifiés, spécialisés en santé mentale, ayant des années d’expérience dans l’écoute et l’accompagnement.</p>
    </div>
    <div className="card">
      <img src="/consultations.jpg" alt="Illustration abordable" />
      <p>Nous croyons en un accès équitable aux soins de santé mentale, c'est pourquoi nous proposons des consultations gratuites ou à prix réduit.</p>
    </div>
    <div className="card">
      <img src="/free therapy online.jpg" alt="Illustration ressources" />
      <p>Nous œuvrons activement pour sensibiliser à l'importance de la santé mentale et briser les stigmas qui y sont associés.</p>
    </div>
  </div>
</section>

      {/* Section Témoignages */}
      <section className="testimonials">
        <h2>Ce que disent nos utilisateurs</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Une plateforme qui m'a aidé à retrouver confiance en moi. Merci infiniment !"</p>
            <span>- Anonyme</span>
          </div>
          <div className="testimonial">
            <p>"Je n'avais jamais osé consulter avant. C'est simple, discret et bienveillant."</p>
            <span>- Utilisateur satisfait</span>
          </div>
        </div>
      </section>

      {/* Section Appel à l'action */}
      <section className="cta">
        <h2>Prêt à faire le premier pas ?</h2>
        <Link to="/signup" className="cta-button">Inscrivez-vous maintenant</Link>
      </section>
    </div>
  );
};

export default Home;
