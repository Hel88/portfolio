'use client';
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import navTextEn from "./navBar-en.json"
import navTextFr from "./navBar-fr.json"

const Navigation = () => {

  const {language, setLanguage} = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Attendre le chargement client
  }, []);

  if (!isClient) {
    return null; // Évite l'erreur d'hydration mismatch
  }

  // Sélectionner le bon fichier JSON en fonction de la langue
  const navText = language === "fr" ? navTextFr : navTextEn;

  return (
    <nav className="navbar navbar-expand-lg  fixed-top container-fluid mx-auto">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Héléna Barbillon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          
            <li className="nav-item">
              <a className="nav-link" href="#title-projects">
              <i className="bi bi-laptop"></i> {navText.projects}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-skills">
              <i className="bi bi-code"></i> {navText.skills}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-education">
              <i className="bi bi-backpack"></i> {navText.education}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-contact">
              <i className="bi bi-link-45deg"></i> {navText.links}
              </a>
            </li>
            {/* Bouton de changement de langue */}
            <li className="nav-item dropdown">
              <button className="btn btn-light dropdown-toggle" type="button" id="langDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {language === "fr" ? "🇫🇷 FR" : "🇬🇧 EN"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="langDropdown">
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => setLanguage("fr")}>
                    🇫🇷 <span className="ms-2">FR</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex align-items-center" onClick={() => setLanguage("en")}>
                    🇬🇧 <span className="ms-2">EN</span>
                  </button>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
