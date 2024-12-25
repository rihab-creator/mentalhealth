import React from 'react';
import { Link } from 'react-router-dom'; // Import Link pour la navigation
import '../styles/DashboardAdmin.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Lien pour revenir à une autre page (ex. page d'accueil) */}
        <h2>
          <Link to="/" className="sidebar-logo-link">Ana M3ak</Link>
        </h2>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/utilisateurs">Utilisateurs</Link>
          </li>
          <li>
            <Link to="/dashboard/events">Evénements</Link>
          </li>
          <li>
            <Link to="/dashboard/articles">Articles</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="search-profile">
            <input type="text" placeholder="Search here" />
            <div className="profile">
              <img
                src=""
                alt="Profile"
                className="profile-pic"
              />
              <span>Admin</span>
            </div>
          </div>
        </header>
        {/* Ajoute le contenu principal ici */}
        <div className="content">
          <p>Bienvenue dans le tableau de bord admin.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
