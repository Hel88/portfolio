'use client';
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Project from "./Project";
import projectsEn from "./projects-en.json";
import projectsFr from "./projects-fr.json";

const Projects = () => {
  

    const {language, setLanguage} = useLanguage();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    setIsClient(true); // Attendre le chargement client
    }, []);

    if (!isClient) {
    return null; // Évite l'erreur d'hydration mismatch
    }

    // Sélectionner le bon fichier JSON en fonction de la langue
    const projects = language === "fr" ? projectsFr : projectsEn;
    

    return (
        <div>
            <div className="text-center py-3">
                 <h2 className="my-3 pt-3">{projects.sectionName}</h2>
             </div>

             <div className="row row-cols-1 row-cols-md-2 g-4">
                 
                {projects.projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}

             </div>
                      
  
        </div>
    )
};

export default Projects;