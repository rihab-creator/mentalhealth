import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Fonctionnement de la plateforme",
      questions: [
        { q: "Comment puis-je m'inscrire ?", a: "Vous pouvez vous inscrire en cliquant sur 'Commencez Maintenant'." },
        { q: "Combien de temps faut-il pour s'inscrire ?", a: "Le processus prend environ 2 minutes." },
        { q: "Puis-je envoyer des messages multimédias ?", a: "Oui, notre plateforme prend en charge les images et GIFs." },
      ],
    },
    {
      category: "Conformité légale",
      questions: [
        { q: "Comment garantissez-vous la protection de mes données ?", a: "Nous respectons la RGPD et sécurisons toutes les informations." },
        { q: "Êtes-vous conformes aux réglementations locales ?", a: "Oui, nous respectons toutes les lois applicables." },
      ],
    },
    {
      category: "Commencer",
      questions: [
        { q: "Quels types d'incitations fonctionnent le mieux ?", a: "Les promotions et remises attirent le plus d'utilisateurs." },
        { q: "Comment fonctionne l'intégration pour les débutants ?", a: "Nous offrons des guides interactifs pour faciliter vos premiers pas." },
      ],
    },
  ];

  return (
    <div className="faq-container">
      {/* Nouvelle section avec texte et image */}
      <div className="platform-section">
  <div className="platform-text">
    <h2>Découvrez notre plateforme</h2>
    <p>
      Notre plateforme est conçue pour rendre vos interactions plus simples et
      efficaces. Profitez d'une expérience sans pareille, grâce à des outils
      intuitifs et puissants.
    </p>
  </div>
  <div className="platform-image">
    <img
      src="faq.png" // Remplacez par le chemin correct de votre image
      alt="Illustration de la plateforme"
    />
  </div>
</div>

      {/* Section FAQ */}
      <h2>FAQ</h2>
      <p>Avez-vous des questions ? Voici quelques réponses aux questions les plus fréquentes.</p>
      
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h3>{section.category}</h3>
          {section.questions.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeIndex === `${sectionIndex}-${index}` ? 'active' : ''}`}
                onClick={() => toggleFAQ(`${sectionIndex}-${index}`)}
              >
                {faq.q}
                <span className="faq-icon">{activeIndex === `${sectionIndex}-${index}` ? '-' : '+'}</span>
              </button>
              {activeIndex === `${sectionIndex}-${index}` && (
                <div className="faq-answer">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
