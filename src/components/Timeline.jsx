import TimelineItem from "./TimelineItem";

export default function Timeline({ items }) {
    return (
        <div className="timeline">
            {items.map((item, idx) => (
                <TimelineItem
                    key={idx}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                    bullets={item.bullets}
                />
            ))}
        </div>
    );
}