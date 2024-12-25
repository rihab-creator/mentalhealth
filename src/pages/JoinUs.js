import React, { useState } from "react";
import "../styles/JoinUs.css";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    poste: "",
    cv: null,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      setFormData({ ...formData, cv: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation des champs obligatoires
    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.telephone ||
      !formData.email ||
      !formData.poste ||
      !formData.cv
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("nom", formData.nom);
    formDataToSend.append("prenom", formData.prenom);
    formDataToSend.append("telephone", formData.telephone);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("poste", formData.poste);
    formDataToSend.append("cv", formData.cv);
    formDataToSend.append("message", formData.message);

    // Exemple d'envoi de données à une API
    fetch("https://api.example.com/submit-candidature", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Votre candidature a été envoyée avec succès !");
        setFormData({
          nom: "",
          prenom: "",
          telephone: "",
          email: "",
          poste: "",
          cv: null,
          message: "",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue. Veuillez réessayer.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="join-us-container">
      <h2>Déposez votre candidature</h2>
      <form className="join-us-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom*</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="prenom">Prénom*</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telephone">Numéro de téléphone*</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="poste">Poste souhaité*</label>
          <select
            id="poste"
            name="poste"
            value={formData.poste}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionnez un poste</option>
            <option value="Secrétaire Général(e)">Secrétaire Général(e)</option>
            <option value="Community Manager">Community Manager</option>
            <option value="Designer Graphique">Designer Graphique</option>
            <option value="Dévelopeur(se) Informatique">Dévelopeur(se) Informatique</option>
            <option value="ssistante de Direction">Assistante de Direction</option>
            <option value="Directeur(trice) Généeral(e)">Directeur(trice) Généeral(e)</option>
            <option value="Agent de Sécurité">Agent de Sécurité</option>
            <option value="Femme de Ménage">Femme de Ménage</option>
            <option value="Concierge">Concierge</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="cv">Votre CV*</label>
          <input
            type="file"
            id="cv"
            name="cv"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default JoinUs;
