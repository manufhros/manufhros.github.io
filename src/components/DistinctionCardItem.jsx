import '../styles/app.css';

export default function DistinctionCardItem({ title, tags, issuer, description }) {
    return (
        <div className="timeline-item distinction-item">
            <h3 className="distinction-title">{title}</h3>
            {/* FIXME cambiar "project-tags" por "distinction-tags" */}
            <div className="distinction-tags">
                {tags.map((tag) => (
                    <span key={tag} className="distinction-tag">{tag}</span>
                ))}
            </div>
            <h4 className="distinction-issuer">{issuer}</h4>
            <p className="distinction-description">
                {description}
            </p>
        </div>
    );
};