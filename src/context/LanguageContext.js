"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
const LanguageContext = createContext();

// Provider qui enveloppera toute l'application
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr"); // Valeur par défaut

  useEffect(() => {
    // Charger la langue depuis localStorage après le montage
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => useContext(LanguageContext);
