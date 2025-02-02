
'use client';
import { useState } from "react";
import Image from "next/image";

const Skills = () => {
    const skills = [
        { "id": "unreal", "title": "Unreal Engine", "description": "Used for video game projects at UQAC. Both Blueprint and C++." },
        { "id": "unity", "title": "Unity", "description": "Used in the virtual reality course at UQAC." },
        { "id": "python", "title": "Python", "description": "Machine learning projects with scikit-learn, web interfaces with Flask, interfaces with Tkinter." },
        { "id": "cpp", "title": "C++", "description": "Used in math and physics courses for video games (openframework), as well as in the game engine course." },
        { "id": "java", "title": "Java", "description": "OOP (Object-Oriented Programming) course at Telecom Nancy, GUI development with JavaFX for three projects and during an internship." },
        { "id": "c", "title": "C", "description": "Data structures course at Telecom Nancy." },
        { "id": "git", "title": "Git", "description": "Used for all projects at Telecom Nancy." },
        { "id": "perforce", "title": "Perforce", "description": "Used for all video game projects at UQAC." },
        { "id": "html", "title": "HTML/CSS", "description": "Used in all web interface projects." },
        { "id": "postgresql", "title": "PostgreSQL", "description": "Used in courses at Telecom Nancy." }
    ]
    ;

    const [selectedSkill, setSelectedSkill] = useState(skills[0]); // Affiche le premier par défaut

   

    return (
        <div>
            <div className="text-center py-3">
                <h2 className="my-3 pt-3">Skills</h2>
            </div>


            <div className="container py-3">
                <div className="row justify-content-center ">
                    <div className="col-md-2 col-sm-4">
                        <h3 className="my-3 pt-3">Languages</h3>
                        <p>French (native)</p>
                        <p>English (proficient)</p>
                        <p>German (beginner)</p>

                    </div>
                    <div className="col-md-3 col-sm-4">
                    <h3 className="my-3 pt-3">Others</h3>
                    <p>Project management (MOOC online course)</p>
                    <p>Drawing (Clip Studio Paint, Inkscape)</p>
                    <p>Basic 3D modeling (Blender)</p>


                    </div>
                    <div className="col-md-7 col-sm-12">
                        <h3 className="my-3 pt-3">Technical</h3>

                        {/* <div className="">
                            <div className="d-flex flex-wrap justify-content gap-3 my-2">
                                <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge" className="skillbadge"
                                data-bs-toggle="tooltip"
                                title="Python: Langage utilisé pour l'IA, Web et plus"></img>
                                <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ Badge" className="skillbadge" ></img>
                                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java Badge" className="skillbadge"></img>
                                <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C Badge" className="skillbadge"></img>
                                <div className="btn btn-outline-dark disabled">Python</div>
                            <img src="https://img.shields.io/badge/Unreal%20Engine-0E1128?style=for-the-badge&logo=unreal-engine&logoColor=white" alt="Unreal Engine Badge" className="skillbadge"></img>
                            </div>

                         
                            
                            <div className="d-flex flex-wrap justify-content gap-3 my-2">
                            <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask Badge" className="skillbadge"></img>
                            <img src="https://img.shields.io/badge/postgresql-A8B9CC?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL Badge" className="skillbadge"></img>
                            </div>
                            
                            <div className="d-flex flex-wrap justify-content gap-3 my-2">
                            <img src="https://img.shields.io/badge/Git-0076A8?style=for-the-badge&logo=git&logoColor=white" alt="git Badge" className="skillbadge"></img>
                            <img src="https://img.shields.io/badge/Perforce-3776AB?style=for-the-badge&logo=perforce&logoColor=white" alt="git Badge" className="skillbadge"></img>
                            </div>
                        </div> */}

                    {/* Zone des boutons */}
                    <div className="d-flex flex-wrap gap-3 my-2">
                        {skills.map((skill) => (
                            <button
                                key={skill.id}
                                className={`btn ${selectedSkill.id === skill.id ? "btn-dark" : "btn-outline-dark"}`}
                                onClick={() => setSelectedSkill(skill)}
                            >
                                {skill.title}
                            </button>
                        ))}
                    </div>

                    {/* Zone d'affichage du contenu */}
                    <div className="mt-3">
                        <div className="card">
                            <div className="card-body">
                                {/* <h4>{selectedSkill.title}</h4> */}
                                <p>{selectedSkill.description}</p>
                            </div>
                        </div>
                    </div>

                    </div>

                </div>
            </div>



            <br></br>


        </div>
    );
};

export default Skills;