'use client';
import Image from "next/image";
import about from "./about.json"
import ReactMarkdown from "react-markdown";


const About =  () => {
    
    return (

        <div className='blue-paragraph min-vh-100 d-flex flex-column justify-content-center pt-5'>
            <div className='p-3 p-md-5 col-10 col-md-8 mt-4 mx-auto'>
                <h2 id="title-welcome">{about.sectionName}</h2>
                
                <div className="lead p-3 p-md-5">
                    {about.description.map((paragraph, index) =>(
                        <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
                    ))}
                    
                    <br></br>

                    <p>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-light "
                            role="button"
                        >
                            <i className="bi bi-file-earmark-person"></i> {about.frenchResume}
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

    );
};

export default About;