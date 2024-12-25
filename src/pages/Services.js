import React from 'react';
import '../styles/Services.css'; // Import CSS for styling

const servicesData = [
  {
    title: 'Consultations Anonymes en Ligne',
    description: 'Bénéficiez de consultations avec des professionnels de la santé mentale, directement depuis chez vous, en toute confidentialité.',
    icon: '💻', // You can replace this with actual icon components
  },
  {
    title: 'Soutien Psychologique Gratuit ou Réduit',
    description: 'Profitez un soutien psychologique à des prix accessibles, adapté à votre situation financière.',
    icon: '🤝',
  },
  {
    title: 'Accès à des Ressources Éducatives',
    description: 'Explorez nos articles, vidéos et guides pour mieux comprendre et gérer votre santé mentale.',
    icon: '📚',
  },
  {
    title: 'Prévention et Sensibilisation',
    description: 'Participez à des campagnes de sensibilisation pour briser les tabous et normaliser les discussions autour de la santé mentale.',
    icon: '🌟',
  },
  {
    title: 'Événements éducatifs',
    description: 'Prenez part à nos ateliers interactifs pour développer des outils pratiques et mieux gérer votre bien-être mental.',
    icon: '🎤',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Nos services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;