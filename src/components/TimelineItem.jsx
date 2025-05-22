import '../styles/app.css';

export default function TimelineItem({ date, title, subtitle, bullets }) {
	return (
		<div className="timeline-item">
			<div className="timeline-date">{date}</div>
			<h3 className="timeline-title">{title}</h3>
			<h4 className="timeline-subtitle">{subtitle}</h4>
			<ul className="cv-list">
				{bullets.map((bullet, idx) => (
					<li key={idx}>{bullet}</li>
				))}
			</ul>
		</div>
	);
}