// ProjectCardItem.jsx
import '../styles/app.css';

export default function ProjectCardItem({ title, tags, bullets, links }) {
  return (
    <div className="timeline-item project-card">
      <h3 className="project-title">{title}</h3>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <ul className="cv-list">
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
      {links && links.length > 0 && (
        <div className="project-links">
          {links.map((link) => (
            <a 
              key={link.url}
              href={link.url}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              {link.name === "GitHub" && <i className="fab fa-github"></i>} 
              {link.name === "Live Demo" && <i className="fas fa-external-link-alt"></i>}
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}