'use client';
import Image from "next/image";
import educationEn from "./education-en.json";
import educationFr from "./education-fr.json";
import ReactMarkdown from "react-markdown";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";



const Education = () => {

    const {language, setLanguage} = useLanguage();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
    setIsClient(true); // Attendre le chargement client
    }, []);

    if (!isClient) {
    return null; // Évite l'erreur d'hydration mismatch
    }

    // Sélectionner le bon fichier JSON en fonction de la langue
    const education = language === "fr" ? educationFr : educationEn;

    return (

        <div className="container py-3">
            <div className="text-center py-3">
                <h2 className="my-3 pt-3">{education.sectionName}</h2>
            </div>

            {/* <div className="row justify-content-center">
                
                <div className="card col-md-3 col-sm-8 mx-4 my-1 bg-education-cards">

                    <div className="card-img-top text-center">

                        <Image src="/prepa.png" alt="prepa" width={100} height={100} />
                    </div>

                    <div className="card-body">

                        <p>
                            <i class="bi bi-calendar"></i> 2020-2022
                        </p>

                        <p>
                            <i class="bi bi-geo-alt"></i> Nancy (France)
                        </p>
                        <p>
                            Preparatory class for engineering schools
                        </p>
                    </div>
                </div>

                <div className="card col-md-3 col-sm-8 mx-4 my-1 bg-education-cards">
                    <div className="card-img-top text-center m-3">

                        <Image src="/tn.png" alt="telecom nancy" width={150} height={75} />
                    </div>
                    <div className="card-body">
                        <p>
                            <i class="bi bi-calendar"></i> 2022-2025
                        </p>

                        <p>
                            <i class="bi bi-geo-alt"></i> Nancy (France)
                        </p>

                        <p>Master's degree in computer science
                        </p>
                        <p>
                            Specialization in <strong>data science</strong> during the last semester
                        </p>

                    </div>
                </div>

                <div className="card col-md-3 col-sm-8 mx-4 my-1 bg-education-cards">


                    <div className="card-img-top text-center  m-3">
                        <Image src="/uqac.png" alt="uqac" width={150} height={100} />
                    </div>


                    <div className="card-body">
                        <p>
                            <i class="bi bi-calendar"></i> 2024-2025
                        </p>

                        <p>
                            <i class="bi bi-geo-alt"></i> Chicoutimi (Canada)
                        </p>

                        <p>Dual degree in computer science with a focus on <strong>video games</strong></p>


                        <div className='accordion' id="ac1">
                            <div className='accordion-item'>
                                <h4 className='accordion-header'>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
                                        Courses taken
                                    </button>
                                </h4>
                                <div id="flush-collapseOne1" className="accordion-collapse collapse" data-bs-parent="#ac1">
                                    <div className="accordion-body">

                                        Fall 2024 trimester:
                                        <ul>
                                            <li>Game development principles</li>
                                            <li>Game engine principles</li>
                                            <li>Mathematics and physics for video games</li>
                                            <li>Machine learning</li>
                                        </ul>

                                        Winter 2025 trimester:
                                        <ul>
                                            <li>Practical video game workshop</li>
                                            <li>3D interaction and virtual reality</li>
                                            <li>Mobile applications development</li>
                                            <li>Deep learning</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div> */}

            <div className='row'>

                <div className='col-sm-3'>
                    <div className='text-center'>

                        <Image src="/uqac.png" alt="uqac" width={150} height={100} />
                    </div>
                </div>

                <div className='col-sm-2'>
                    <p>2024-2025</p>
                </div>
                <div className='col justify-content-center'>
                    <h5>UQAC - Université du Québec à Chicoutimi (Canada)</h5>
                    {/* <p>Dual degree in computer science with a focus on <strong>video games</strong></p> */}
                    <ReactMarkdown>{education.uqacDescription}</ReactMarkdown>

                    <div className='accordion' id="ac1">
                        <div className='accordion-item'>
                            <h4 className='accordion-header'>
                            <button className="accordion-button " type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#flush-collapseOne1" 
                                aria-controls="flush-collapseOne1">
                                {education.courses}
                            </button>
                            </h4>
                            <div id="flush-collapseOne1" className="accordion-collapse collapse" data-bs-parent="#ac1">
                                <div className="accordion-body">
                                    

                                    {education.fallTrim}
                                    <ul>
                                        {education.fallDescription.map((des, index) => (
                                            <li key={index}>{des}</li>
                                        ))}
                                    </ul>

                                    {education.winterTrim}

                                    <ul>
                                    {education.winterDescription.map((des, index) => (
                                            <li key={index}>{des}</li>
                                        ))}
                                    </ul>

                                    {education.summerTrim}
                                    <ul>
                                    {education.summerDescription.map((des, index) => (
                                            <li key={index}>{des}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            <hr className="bg-dark border-1 border-top border-secondary" />
            <div className='row'>
                <div className='col-sm-3'>

                    <div className='text-center'>

                        <Image src="/tn.png" alt="telecom nancy" width={150} height={75} />
                    </div>
                </div>
                <div className='col-sm-2'>
                    <p>2022-2025</p>
                </div>

                <div className='col'>
                    <h5>Telecom Nancy (France)</h5>

                {education.telecomDescription.map((des, index) => (
                    <ReactMarkdown key={index}>{des}</ReactMarkdown>
                ))}
                    {/* <div className='accordion' id="ac2">
                        <div className='accordion-item'>
                            <h4 className='accordion-header'>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
                                    Courses
                                </button>
                            </h4>
                            <div id="flush-collapseOne2" className="accordion-collapse collapse" data-bs-parent="#ac2">
                                <div className="accordion-body">

                                    

                                </div>
                            </div>
                        </div>
                    </div>  */}

                </div>
            </div>
            <hr className="bg-dark border-1 border-top border-secondary" />
            <div className='row'>
                <div className='col-sm-3'>
                    <div className='text-center'>

                        <Image src="/prepa.png" alt="prepa" width={100} height={100} />
                    </div>
                </div>
                <div className='col-sm-2'>
                    <p>2020-2022</p>
                </div>

                <div className='col'>
                    <h5>La Prépa des INP Nancy (France)</h5>
                    <p>{education.prepaDescription}</p>

                </div>
            </div>


        </div>

    );
};

export default Education;