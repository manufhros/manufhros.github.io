import '../styles/app.css';


export default function ProjectCardItem({ title, subtitle, description }) {
    return (
        <div className="hobby-item">
          <h3 className="hobby-title">{title}</h3>
          <h4 className="hobby-subtitle">{subtitle}</h4>
          <p className="hobby-content">
            {description}
          </p>
        </div>
    );
  };