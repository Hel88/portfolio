'use client';
import Image from "next/image";

const Contact = () => {
    return (
        <div>
            <h2 className="my-3 py-3 text-center">Contact me</h2>

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
                        <i className="bi bi-linkedin" style={{ fontSize: '5rem', color: '#2e445e' }}></i>
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
                        <i className="bi bi-envelope" style={{ fontSize: '5rem', color: '#2e445e' }}></i>

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
                        <i className="bi bi-github" style={{ fontSize: '5rem', color: '#2e445e' }}></i>
                        <p className="mt-2 mb-0">GitHub</p>
                        <p className='text-muted'>Hel88</p>
                    </div>
                </a>
            </div>
        </div>

    );
};

export default Contact;