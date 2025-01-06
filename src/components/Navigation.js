'use client';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          Héléna Barbillon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          
            <li className="nav-item">
              <a className="nav-link active" href="#title-projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
