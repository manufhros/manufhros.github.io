// ProjectCard.jsx
import DistinctionCardItem from "./DistinctionCardItem";

export default function DistinctionCard({ items }) {
    return (
        <div className="timeline">
            {items.map((item) => (
                <DistinctionCardItem
                    key={item.title}
                    title={item.title}
                    tags={item.tags}
                    issuer={item.issuer}
                    description={item.description}
                />
            ))}
        </div>
    );
}