'use client';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top container-fluid mx-auto">
      <div className="container-fluid">
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
              <a className="nav-link" href="#title-projects">
              <i className="bi bi-laptop"></i> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-skills">
              <i className="bi bi-code"></i> Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-education">
              <i className="bi bi-backpack"></i> Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#title-contact">
              <i className="bi bi-link-45deg"></i> Links
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
