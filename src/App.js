import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FAQ from './pages/FAQ';
import JoinUs from './pages/JoinUs';
import DashboardAdmin from './pages/DashboardAdmin';
import Utilisateurs from './pages/Utilisateurs';
import Evenements from './pages/Evenements';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const hideNavbarFooter = location.pathname.startsWith('/dashboardadmin');

  return (
    <>
      {/* Si l'URL commence par `/dashboardadmin`, on cache Navbar et Footer */}
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/joinus" element={<JoinUs />} />

        {/* Dashboard Admin et ses sous-pages */}
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/dashboardadmin/utilisateurs" element={<Utilisateurs />} />
        <Route path="/dashboardadmin/evenements" element={<Evenements />} />
        <Route path="/dashboardadmin/articles" element={<Articles />} />
      </Routes>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

export default App;
