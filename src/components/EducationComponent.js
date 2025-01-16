'use client';
import Image from "next/image";

const Education = () => {
    return (



        <div>
            <div className="text-center py-3">   
                <h2 className="my-3 pt-3">Education</h2>
            </div>
            <br></br>


            <div className='row'>

                <div className='col-sm-3'>
                    <div className='text-center'>

                        <Image src="/uqac.png" alt="uqac" width={150} height={100} />
                    </div>
                </div>

                <div className='col-sm-2'>
                    <p>2024-2025</p>
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
            <hr className="bg-dark border-1 border-top border-secondary" />
            <br></br>
            <br></br>

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
                    <p>Master's degree in computer science</p>

                    <div className=''>Specialization in <strong>data science</strong> during the last semester</div>
                </div>
            </div>
            <hr className="bg-dark border-1 border-top border-secondary" />
            <br></br>
            <br></br>

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
                    <p>Preparatory class for engineering schools</p>

                </div>
            </div>
            <br></br>


        </div>

    );
};

export default Education;