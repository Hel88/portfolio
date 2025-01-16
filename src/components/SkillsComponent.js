
'use client';
import Image from "next/image";

const Skills = () => {
    return (
        <div>
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


        </div>
    );
};

export default Skills;