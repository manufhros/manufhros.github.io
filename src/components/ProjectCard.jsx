// ProjectCard.jsx
import ProjectCardItem from "./ProjectCardItem";

export default function ProjectCard({ items }) {
    return (
        <div className="timeline">
            {items.map((item) => (
                <ProjectCardItem
                    key={item.title}
                    title={item.title}
                    tags={item.tags}
                    bullets={item.bullets}
                    links={item.links}
                />
            ))}
        </div>
    );
}