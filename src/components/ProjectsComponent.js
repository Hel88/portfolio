'use client';
import Image from "next/image";
import React, { useRef, useState } from "react";

const Projects = () => {
    // États pour chaque vidéo
    const [isMuted1, setIsMuted1] = useState(true);
    const [isMuted2, setIsMuted2] = useState(true);
    const [isMuted3, setIsMuted3] = useState(true);

    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    const toggleMute = (videoRef, setIsMuted) => {
        if (videoRef?.current) {
            videoRef.current.muted = !videoRef.current.muted; // Inverse l'attribut muted
            setIsMuted(videoRef.current.muted); // Met à jour l'état
        }
    };


    return (
        <div>
            <div className="text-center py-3">
                <h2 className="my-3 pt-3">Projects</h2>
            </div>




            <div className="row row-cols-1 row-cols-md-2 g-4">


                {/*Lift To Heaven */}

                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Lift To Heaven</h3>
                            Code game jam 2025
                        </div>

                        <div id="liftToHeaven" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#liftToHeaven" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#liftToHeaven" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#liftToHeaven" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#liftToHeaven" data-bs-slide-to="3"></button>

                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="card-img-top" src="/liftToHeaven1.png" alt="liftToHeaven image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <img className="card-img-top" src="/liftToHeaven2.png" alt="liftToHeaven image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <video
                                    ref={videoRef1} 
                                    className="card-img-top" 
                                    src="/liftToHeaven3.mp4" 
                                    alt="liftToHeaven video" 
                                    style={{ width: "100%" }} 
                                    muted={isMuted1} 
                                    autoPlay loop />
                                    {/* Icône de mute/unmute */}
                                    <div
                                        onClick={()=>toggleMute(videoRef1, setIsMuted1)}
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            cursor: "pointer",
                                            color: "white",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            borderRadius: "50%",
                                            padding: "10px",
                                        }}
                                    >
                                        {isMuted1 ? (
                                            <i className="bi bi-volume-mute-fill" style={{ fontSize: "24px" }}></i>
                                        ) : (
                                            <i className="bi bi-volume-up-fill" style={{ fontSize: "24px" }}></i>
                                        )}
                                </div>
                                </div>
                                <div className="carousel-item">
                                    <video ref={videoRef2} 
                                    className="card-img-top" src="/liftToHeaven4.mp4" alt="liftToHeaven video" style={{ width: "100%" }} muted autoPlay loop />
                                
                                {/* Icône de mute/unmute */}
                                <div
                                        onClick={()=>toggleMute(videoRef2, setIsMuted2)}
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            cursor: "pointer",
                                            color: "white",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            borderRadius: "50%",
                                            padding: "10px",
                                        }}
                                    >
                                        {isMuted2 ? (
                                            <i className="bi bi-volume-mute-fill" style={{ fontSize: "24px" }}></i>
                                        ) : (
                                            <i className="bi bi-volume-up-fill" style={{ fontSize: "24px" }}></i>
                                        )}
                                        </div>
                                        </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#liftToHeaven" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#liftToHeaven" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>




                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 3</span>
                                <span className="badge bg-secondary">30 hours (game jam)</span>
                                <span className="badge bg-secondary">Unreal engine</span>
                            </div>
                            <p className="text-muted mt-3"> In Lift to Heaven, the player must keep the music of the elevator playing by finding and pushing the right button. He/she has to find them in boxes, under hats or rugs, in order to increase the volume of the music.</p>
                            <p className="text-muted mt-3"> This game was made for the 2025 Code Game Jam of Montpellier's IUT school. The theme was "Mélodie à l'infini" (melody to infinity).</p>

                            
                            <a href="https://kiribaton.itch.io/lifttoheaven" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-link"></i> Itch.io page
                        </a>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">Game jam project</div>
                    </div>
                </div>

                {/* Frogy Frog */}
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Frogy Frog</h3>
                            A plateformer game
                        </div>


                        <div id="frogyfrog" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#frogyfrog" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#frogyfrog" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#frogyfrog" data-bs-slide-to="2"></button>
                                <button type="button" data-bs-target="#frogyfrog" data-bs-slide-to="3"></button>

                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="card-img-top" src="/frog3.png" alt="Frogy Frog image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <video className="card-img-top" src="/frogyfrog_gameplay.mp4" alt="frogyfrog video" style={{ width: "100%" }} muted autoPlay loop />
                                </div>
                                <div className="carousel-item">
                                    <img className="card-img-top" src="/frog2.png" alt="frogy frog game image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <img className="card-img-top" src="/frog4.png" alt="frogy frog game image" style={{ width: "100%" }} />
                                </div>


                                <button className="carousel-control-prev" type="button" data-bs-target="#frogyfrog" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#frogyfrog" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>


                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 3</span>
                                <span className="badge bg-secondary">5 weeks</span>
                                <span className="badge bg-secondary">Unreal engine</span>
                            </div>
                            <p className="text-muted mt-3">
                                In this single-player game, the user controls a small frog which has to escape the kitchen using its tongue as a grappling hook.
                            </p>
                            <p className="text-muted">
                                I worked on the grappling hook mechanism, along with the movements of the frog, and setting the animations from the asset pack.
                            </p>
                            <a href="https://mathis-ollier.itch.io/frogyfrog" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-link"></i> Itch.io page
                        </a>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">UQAC project</div>


                    </div>
                </div>

                {/* Bomberman */}
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Shroomboom</h3>
                            Remaking of the bomberman game
                        </div>


                        <div id="bomberman" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#bomberman" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#bomberman" data-bs-slide-to="1"></button>

                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="card-img-top" src="/bomberman.png" alt="Bomberman image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <video
                                        ref={videoRef3}
                                        className="card-img-top"
                                        src="/bomberman_prise1.mp4"
                                        alt="Bomberman video"
                                        style={{ width: "100%" }}
                                        muted={isMuted3} // Contrôle initial du son
                                        autoPlay
                                        loop

                                    />
                                    {/* Icône de mute/unmute */}
                                    <div
                                        onClick={() => toggleMute(videoRef3, setIsMuted3)}
                                        style={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            cursor: "pointer",
                                            color: "white",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            borderRadius: "50%",
                                            padding: "10px",
                                        }}
                                    >
                                        {isMuted3 ? (
                                            <i className="bi bi-volume-mute-fill" style={{ fontSize: "24px" }}></i>
                                        ) : (
                                            <i className="bi bi-volume-up-fill" style={{ fontSize: "24px" }}></i>
                                        )}

                                    </div>
                                </div>



                                <button className="carousel-control-prev" type="button" data-bs-target="#bomberman" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#bomberman" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>


                        </div>




                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 3</span>
                                <span className="badge bg-secondary">2 weeks</span>
                                <span className="badge bg-secondary">Unreal engine</span>
                            </div>
                            <p className="text-muted mt-3">This project is a redesigning of the famous bomberman game. It is a 2-4 players competitive game, where the players (mushrooms here) have to eliminate the others by droping bombs. There are 2 types of bonuses it this version.</p>
                            <p className="text-muted mt-3">I worked on the movements of the players, on the UI elements and on the designs of the game.</p>

                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">UQAC project</div>

                    </div>
                </div>

                {/* Brick Breaker */}
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Brick Breaker</h3>
                            My first video game with Unreal
                        </div>

                        <div id="brickbreaker" className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#brickbreaker" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#brickbreaker" data-bs-slide-to="1"></button>
                            </div>

                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img className="card-img-top" src="/brickbreaker.png" alt="brick breaker image" style={{ width: "100%" }} />
                                </div>
                                <div className="carousel-item">
                                    <video className="card-img-top" src="/brickbreaker_gameplay.mp4" alt="brick breaker image" style={{ width: "100%" }} muted autoPlay loop />
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#brickbreaker" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#brickbreaker" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </button>
                            </div>


                        </div>

                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Solo</span>
                                <span className="badge bg-secondary">2 weeks</span>
                                <span className="badge bg-secondary">Unreal engine</span>
                            </div>
                            <p className="text-muted mt-3">
                                My first-ever video game with Unreal Engine was a brick breaker game.
                            </p>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">UQAC project</div>


                    </div>
                </div>

                {/* Sign language recognition */}
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Sign language recognition</h3>
                            Machine learning app
                        </div>
                        <div className='text-center'>

                            <img className="card-img-top" src="/signlanguage.png" alt="sign language project image" style={{ width: "80%" }} />
                        </div>

                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 3</span>
                                <span className="badge bg-secondary">3 weeks</span>
                                <span className="badge bg-secondary">Python (tkinter, scikit-learn)</span>
                            </div>
                            <p className='text-muted'>
                                An application to learn the american sign language alphabet, as part of a machine learning course. We worked with a dataset of images from Kaggle, extracted their characteristics and trained a random forest classifier.
                            </p>
                            <p className='text-muted'>
                                I worked on the user interface, as well as including the model to the project.
                            </p>
                            <a href="https://github.com/Hel88/SignLanguageAlphabetRecognition" className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-link"></i> Github page</a>
                        

                            
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">UQAC project</div>

                    </div>
                </div>




                {/* project 5 */}
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Medical data integration system</h3>
                            Project for the data masses course
                        </div>
                        <div className='text-center'>
                            {/* <img className="card-img-top" src="/signlanguage.png" alt="sign language project image" style={{ width: "80%" }} />*/}
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 3</span>
                                <span className="badge bg-secondary">1 week</span>
                                <span className="badge bg-secondary">Java</span>
                            </div>
                            <p className='text-muted'>

                                This project is an interactive graphical interface designed to help users identify potential diseases based on reported symptoms or side effects. The interface queries various data sources, such as medical databases, indexed files and text documents, based on the entries of the user.
                            </p>
                            <p className='text-muted'>
                                One of the challenges of this project was analyzing the extensive data provided, originating from five different sources, to identify the relevant information and establish meaningful connections between them.
                            </p>
                            <a href="https://github.com/TheoHorn/gmd_project"className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-link"></i> Github page</a>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">Telecom Nancy project</div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Real time body landmarks detection with mediapipe </h3>
                            Interdisciplinary Research Discovery Project
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 2 students</span>
                                <span className="badge bg-secondary">1 semester</span>
                                <span className="badge bg-secondary">Python (mediapipe)</span>
                            </div>
                            <p className="text-muted mt-3">We worked on the early phases of a project with a research laboratory.
                                This project is a serious game for physical reactivation aimed at elderly individuals.
                                The goal was to detect body angles with a webcam, as accurately as possible with a minimalist installation.
                                We conducted a state-of-the-art review of the libraries in use and tested various methods to evaluate their effectiveness.</p>

                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">Telecom Nancy project</div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Direct Dealing</h3>
                            An app for lending and borrowing material
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 4 students</span>
                                <span className="badge bg-secondary">5 days (coding week)</span>
                                <span className="badge bg-secondary">Java (Java FX)</span>
                            </div>
                            <p className="text-muted mt-3">DirectDealing is a circular economy application that allows people to lend/borrow equipment (lawnmower, jackhammer, vegetable peeler, etc.) and/or offer/request services (fixing a water leak, piano lessons, moving assistance, etc.).
                                It was done in 5 days, during a coding week challenge organized by Telecom Nancy.

                            </p>
                            <a href='https://github.com/Hel88/Codingweek2024'className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                            <i class="bi bi-link"></i> Github page</a>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">Telecom Nancy project</div>
                    </div>
                </div>


                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Le bonheur est dans le potager </h3>
                            Web application for managing community gardens
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <span className="badge bg-secondary">Team of 4 students</span>
                                <span className="badge bg-secondary">1 semester</span>
                                <span className="badge bg-secondary">Python/Flask </span>
                            </div>
                            <p className="text-muted mt-3"><em>Le bonheur est dans le potager</em> is a web application that allows connected users to join a community garden, to own a parcell and to add plants in it.
                                An algorithm gives advices on which plants go well together, and suggests adequate placement in the parcell.
                            </p>
                        </div>
                        <div className="card-footer text-muted text-center fw-lighter">Telecom Nancy project</div>
                    </div>
                </div>



                {/* template*/}

                {/* 
            <div className="col">
              <div className="card h-100">
                <div className="card-header">
                  <h3>Title</h3>
                  subtitle
                </div>
                <img className="card-img-top" src="/image.png" alt="brick breaker image" style={{ width: "100%" }} />
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <span className="badge bg-secondary">Solo</span>
                    <span className="badge bg-secondary">2 weeks</span>
                    <span className="badge bg-secondary">Unreal engine (Blueprint)</span>
                  </div>
                  <p className="text-muted mt-3"> blabla</p>
                 <a href='#'>Github page</a>                  
                </div>
                <div className="card-footer text-muted text-center fw-lighter">Telecom Nancy project</div>
              </div>
            </div> 
            */}



            </div>

        </div>
    );
};

export default Projects;