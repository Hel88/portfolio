import Navigation from '../components/Navigation';
import styles from "./page.module.css";
import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Home() {
  return (
    <div className='pt-5'>
      <main data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">

      <Navigation />

      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        </div>
        <div className='blue-paragraph min-vh-100 d-flex flex-column justify-content-center'>
          <div className='p-3 p-md-5 col-10 col-md-8 mt-4 mx-auto'>
            <h2 id="title-welcome">Welcome!</h2>

            <div className="lead p-3 p-md-5">
              <p> Hi and welcome on my portfolio! </p>
              <p>I am <strong>Héléna Barbillon</strong>, a french computer science student.</p>

              <p>I am currently doing a dual degree in video game development at UQAC (Canada), and computer science at Telecom Nancy (France).</p>

              <p>I am especially interested in game development, but also in data science and machine learning. I am eager to learn new skills, and most of all to create meaningful user experiences.</p>

              <p>You will find here some of the projects I worked on, along with information about me. Feel free to reach out!</p>
            
              <br></br>

              <p>
              <a
                href="/cv.pdf"
                download="CV_Helena_Barbillon.pdf"
                className="btn btn-outline-light "
                role="button"
              >
                <i className="bi bi-download me-2"></i> Download french resume
              </a>
            </p>
            <br></br>



              <p className="text-center">
              <a href="#title-projects" className="arrow-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50" 
                  height="50"
                  fill="white"
                  className="bi bi-arrow-down-circle arrow-icon"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                  />
                </svg>

                
              </a>
            </p>

            
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-5 mx-auto">
        </div>
        <div className="container mt-3">
          <section id="title-projects">
            <h2 className="my-3 pt-3">Projects</h2>

            <div className="row row-cols-1 row-cols-md-2 g-4">

              {/* Frogy Frog */}
              <div className="col">
                <div className="card h-100">
                  <div className="card-header">
                    <h3>Frogy Frog</h3>
                    A plateformer game
                  </div>


                  <div id="frogyfrog" className="carousel slide" data-bs-ride="carousel">
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
                      <span className="badge bg-secondary">Team of 3 students</span>
                      <span className="badge bg-secondary">5 weeks</span>
                      <span className="badge bg-secondary">Unreal engine (C++)</span>
                    </div>
                    <p className="text-muted mt-3">
                      In this single-player game, the user controls a small frog which has to escape the kitchen using its tongue as a grappling hook.
                    </p>
                    <p className="text-muted">
                      I worked on the grappling hook mechanism, along with the movements of the frog, and setting the animations from the asset pack.
                    </p>
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


                  <div id="bomberman" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#bomberman" data-bs-slide-to="0" className="active"></button>
                      <button type="button" data-bs-target="#bomberman" data-bs-slide-to="1"></button>

                    </div>

                    <div className="carousel-inner">
                      <div className="carousel-item active">
                      <img className="card-img-top" src="/bomberman.png" alt="Bomberman image" style={{ width: "100%" }} />
                      </div>
                      <div className="carousel-item">
                      <video className="card-img-top" src="/bomberman_gameplay.mp4" alt="bomberman video" style={{ width: "100%" }} muted autoPlay loop />
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
                      <span className="badge bg-secondary">Team of 3 students</span>
                      <span className="badge bg-secondary">2 weeks</span>
                      <span className="badge bg-secondary">Unreal engine (C++)</span>
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
                      <span className="badge bg-secondary">Unreal engine (Blueprint)</span>
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
                      <span className="badge bg-secondary">Team of 3 students</span>
                      <span className="badge bg-secondary">3 weeks</span>
                      <span className="badge bg-secondary">Python (tkinter, scikit-learn)</span>
                    </div>
                    <p className='text-muted'>
                      An application to learn the american sign language alphabet, as part of a machine learning course. We worked with a dataset of images from Kaggle, extracted their characteristics and trained a random forest classifier.
                    </p>
                    <p className='text-muted'>
                      I worked on the user interface, as well as including the model to the project.
                    </p>
                    <a href="https://github.com/Hel88/SignLanguageAlphabetRecognition">Github page</a>
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
                      <span className="badge bg-secondary">Team of 3 students</span>
                      <span className="badge bg-secondary">1 week</span>
                      <span className="badge bg-secondary">Java</span>
                    </div>
                    <p className='text-muted'>

                      This project is an interactive graphical interface designed to help users identify potential diseases based on reported symptoms or side effects. The interface queries various data sources, such as medical databases, indexed files and text documents, based on the entries of the user.
                    </p>
                    <p className='text-muted'>
                      One of the challenges of this project was analyzing the extensive data provided, originating from five different sources, to identify the relevant information and establish meaningful connections between them.
                    </p>
                    <a href="https://github.com/TheoHorn/gmd_project">Github page</a>
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
                    <a href='https://github.com/Hel88/Codingweek2024'>Github page</a>
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
          </section>
        </div>

        <div className="col-md-6 pt-5 mx-auto">

          <section id="title-skills">
            <h2 className="my-3 pt-3">Skills</h2>


            <div className="container py-3">
              <div className="row justify-content-center text-center">
                <div className="col-10">
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/Unreal%20Engine-0E1128?style=for-the-badge&logo=unreal-engine&logoColor=white" alt="Unreal Engine Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=white" alt="C Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/postgresql-A8B9CC?style=for-the-badge&logo=postgresql&logoColor=white" alt="SQL Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/Git-0076A8?style=for-the-badge&logo=git&logoColor=white" alt="git Badge" className="skillbadge"></img>
                    <img src="https://img.shields.io/badge/Perforce-3776AB?style=for-the-badge&logo=perforce&logoColor=white" alt="git Badge" className="skillbadge"></img>
                  </div>
                </div>
              </div>
            </div>






            <p className='text-center'>
              <strong>Languages :  </strong>  French (native)  -  English (proficient)  -  German (beginner)
            </p>
            <br></br>


          </section>
          <section id="title-education">

            <h2 className="my-3 pt-3">Education</h2>
            <br></br>


            <div className='row'>

              <div className='col-sm-2'>
                <p>2024-2025</p>
              </div>

              <div className='col-sm-3'>
                <div className='text-center'>

                  <Image src="/uqac.png" alt="uqac" width={150} height={100} />
                </div>
              </div>
              <div className='col'>
                <h5>UQAC - Université du Québec à Chicoutimi (Canada)</h5>
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
            {/* <hr className="bg-dark border-1 border-top border-secondary" /> */}
            <br></br>
            <br></br>

            <div className='row'>
              <div className='col-sm-2'>
                <p>2022-2025</p>
              </div>

              <div className='col-sm-3'>

                <div className='text-center'>

                  <Image src="/tn.png" alt="telecom nancy" width={150} height={75} />
                </div>
              </div>
              <div className='col'>
                <h5>Telecom Nancy (France)</h5>
                <p>Master's degree in computer science</p>

                <div className=''>Specialization in <strong>data science</strong> during the last semester</div>
              </div>
            </div>
            {/* <hr className="bg-dark border-1 border-top border-secondary" /> */}
            <br></br>
            <br></br>

            <div className='row'>
              <div className='col-sm-2'>
                <p>2020-2022</p>
              </div>

              <div className='col-sm-3'>
                <div className='text-center'>

                  <Image src="/prepa.png" alt="prepa" width={100} height={100} />
                </div>
              </div>
              <div className='col'>
                <h5>La Prépa des INP Nancy (France)</h5>
                <p>Preparatory class for engineering schools</p>

              </div>
            </div>
            <br></br>






          </section>
        </div>

        <div className='blue-paragraph'>

          <div className='p-2 col-md-8 mt-5 mx-auto'>



            <section id="title-contact">
              <h2 className="my-3 pt-3 text-center">Contact me</h2>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/helena-barbillon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-center text-decoration-none border-0 shadow-sm"
                  style={{ width: '150px', cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <i className="bi bi-linkedin" style={{ fontSize: '5rem', color: '#4F6886' }}></i>
                    <p className="mt-2 mb-0">LinkedIn</p>

                  </div>
                </a>


                {/* Email Card */}
                <a
                  href="mailto:helena.barbillon@orange.fr"
                  className="card text-center text-decoration-none border-0 shadow-sm"
                  style={{ width: '150px', cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <i className="bi bi-envelope" style={{ fontSize: '5rem', color: '#4F6886' }}></i>
                    
                    <p className="mt-2 mb-0">Email</p>
                    <p className='text-muted'>helena.barbillon@orange.fr</p>

                  </div>
                </a>
                
                {/* GitHub Card */}
                <a
                  href="https://github.com/Hel88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card text-center text-decoration-none border-0 shadow-sm"
                  style={{ width: '150px', cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <i className="bi bi-github" style={{ fontSize: '5rem', color: '#4F6886' }}></i>
                    <p className="mt-2 mb-0">GitHub</p>
                    <p className='text-muted'>Hel88</p>
                  </div>
                </a>
              </div>
            </section>

            <div className='pt-5'> </div>
        <p className='text-center text-muted'>
          <em>Made with nextjs and bootstrap. Last updated : jan 2025</em>
        </p>
          </div>

        </div>

      </main>

    </div>
  )
}