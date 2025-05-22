// ProjectCard.jsx
import HobbyCardItem from "./HobbyCardItem";

export default function HobbyCard({ items }) {
    return (
        <div className="timeline">
            {items.map((item) => (
                <HobbyCardItem
                    key={item.title}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                />
            ))}
        </div>
    );
}