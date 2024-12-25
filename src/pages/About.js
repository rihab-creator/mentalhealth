import React from "react";
import "../styles/About.css";
import Typing from "react-typing-effect";

function About() {
  return (
    <div className="about-container">
      {/* Section Qui sommes-nous */}
      <section className="about-section">
        <div className="about-text">
          <h2>
            <Typing text="Qui sommes-nous ?" speed={100} />
          </h2>
          <p>
            Ana M3ak est une plateforme dédiée à la sensibilisation et au soutien en matière de santé mentale. Elle
            offre un accès anonyme à des professionnels qualifiés et propose des consultations gratuites ou à prix
            réduit. Avec un accent sur l'accessibilité, la confidentialité et l'accompagnement professionnel, Ana M3ak
            soutient les individus dans leur parcours de santé mentale, en favorisant une vie plus saine et équilibrée
            pour tous.
          </p>
        </div>
        <div className="image-grid">
          <div className="image-item">
            <img src="/mentalhealth.jpg" alt="Santé mentale" />
          </div>
          <div className="image-item">
            <img src="/diagnostic.jpg" alt="Diagnostic" />
          </div>
          <div className="image-item">
            <img src="/solitude.jpg" alt="Solitude" />
          </div>
          <div className="image-item">
            <img src="/best Colleges for Psychology.jpg" alt="Psychologie" />
          </div>
        </div>
      </section>

      {/* Section Notre Mission */}
      <section className="features">
        <div className="about-text">
          <h2>Nos Missions</h2>
          <div className="feature-cards">
            <div className="card" style={{backgroundColor:"#ADD8E6"}}>
              <p>
              Accessibilité pour Tous
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#E6E6FA"}}>
              <p>
              Anonymat et Sécurité
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#FAFAD2"}}>
              <p>
              Sensibilisation et Éducation
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#FFF0F5"}}>
              <p>
              Consultations Abordables ou Gratuites
              </p>
            </div>
            <div className="card" style={{backgroundColor:"#98FB98"}}>
              <p>
              Accompagnement professionnel certifié
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section pour Valeur  */}
      <section className="values">
  <div className="text">
    <h2>Nos valeurs</h2>
    <div className="pyramid">
      <div className="pyramid-level level-1">
        <div className="pyramid-card">
          <p>Écoute active constante</p>
          <span className="level-label">01</span>
        </div>
      </div>
      <div className="pyramid-level level-2">
        <div className="pyramid-card">
          <p>Respect de la diversité</p>
          <span className="level-label">02</span>
        </div>
      </div>
      <div className="pyramid-level level-3">
        <div className="pyramid-card">
          <p>Solidarité collective</p>
          <span className="level-label">03</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Section pour fondateur*/}
<section className="fondateur">
  <div className="content">
    <div className="text">
      <h2>
    <Typing text="A la rencotre de notre fondatrice" speed={100} /></h2>
      <p>
        Je suis <strong>RIHAB MORAFIQ</strong>, fondatrice de <strong>Ana M3ak</strong>, une initiative née d’une profonde conviction : 
        la santé mentale est essentielle pour un bien-être global. Forte de mon expérience et de mes observations 
        sur les défis auxquels de nombreuses personnes font face, j'ai créé cette plateforme pour offrir une solution accessible, 
        anonyme et respectueuse. Mon objectif est d’éliminer les stigmates autour de la santé mentale et de permettre à chacun 
        d’accéder à un accompagnement adapté à ses besoins, sans jugement ni barrière.  
      </p>

      <p>
        À travers <strong>Ana M3ak</strong>, je m'engage à sensibiliser le grand public, à soutenir les personnes en difficulté et à 
        construire un espace où l’empathie et le respect sont au cœur de chaque interaction. Je veux offrir plus qu’un simple service : 
        une communauté où chaque individu peut se sentir compris, valorisé et encouragé à aller de l’avant.
      </p>

      <p>
        Mon ambition est de collaborer avec des professionnels qualifiés, de développer des outils innovants et de contribuer activement 
        à changer les mentalités. Parce que personne ne devrait se sentir seul face à ses défis, je souhaite faire de Ana M3ak une lumière 
        d’espoir et une ressource indispensable pour toutes les générations.
      </p>
    </div>
    <div className="image">
      <img src="/founder.jpeg" alt="Fondatrice" />
      <blockquote className="mental-health-quote">
        "La santé mentale n'est pas un luxe, c'est un droit. Prenez soin de votre esprit comme de votre corps."
      </blockquote>
    </div>
  </div>
</section>



    </div>
  );
}

export default About;
