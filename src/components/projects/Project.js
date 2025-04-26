import ReactMarkdown from "react-markdown";

export default function Project({ project }) {
  return (
    <div className="col">
      <div className="card h-100">
        {/* Header de la carte */}
        <div className="card-header">
          <div className="row">
            <h3>{project.title} 
              {project.award && (
                <i className="bi bi-award"></i>
              )}
            </h3>
          </div>
          {project.subtitle}
        </div>

        {/* Carousel ou image/vidéo unique */}
        {project.carousel_content && project.carousel_content.length > 1 ? (
          // Carousel avec plusieurs éléments
          <div id={`carousel-${project.id}`} className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
              {project.carousel_content.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target={`#carousel-${project.id}`}
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></button>
              ))}
            </div>

            <div className="carousel-inner">
              {project.carousel_content.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  {item.type === "photo" ? (
                    <img src={item.filename} className="d-block w-100" alt={`Slide ${index + 1}`} />
                  ) : item.type === "video" ? (
                    <video className="d-block w-100" autoPlay loop muted>
                      <source src={item.filename} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : item.type === "youtube" ? (
                    <div className="ratio ratio-16x9">
                    <iframe
                      src={item.filename}
                      title={`YouTube video ${index + 1}`}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Boutons précédent/suivant */}
            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${project.id}`} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${project.id}`} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        ) : (
          // Afficher une seule image ou vidéo si il n'y a qu'un élément
          <div>
            {project.carousel_content && project.carousel_content.length === 1 && (
              project.carousel_content[0].type === "photo" ? (
                <img src={project.carousel_content[0].filename} className="d-block w-100" alt="Unique item" />
              ) : project.carousel_content[0].type === "video" ? (
                <video className="d-block w-100" loop muted controls>
                  <source src={project.carousel_content[0].filename} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : project.carousel_content[0].type === "youtube" ? (
                <div className="ratio ratio-16x9">
                    <iframe
                      src={project.carousel_content[0].filename}
                      title={`YouTube video`}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
              ) : null
            )}
          </div>
        )}

        {/* Body de la carte */}
        <div className="card-body">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {project.badges.map((badge, index) => (
              <span key={index} className="badge" style={{ backgroundColor: project.color }}>
                {badge}
              </span>
            ))}
          </div>
          {project.description.map((paragraph, index) =>(
            <ReactMarkdown key={index} className=" mt-3" >{paragraph}</ReactMarkdown>
          ))}

          {project.link && (
            <a href={project.link} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-link"></i> {project.linkType}
            </a>
          )}
        </div>

        {/* Footer de la carte */}
        <div className="card-footer text-center fw-lighter">{project.projectType}</div>
      </div>
    </div>
  );
}
