import "../styles/app.css";

export default function Toolbar({ activeSection, setActiveSection }) {
  const sections = [
    { key: "studies", label: "Estudios" },
    { key: "workExperience", label: "Experiencia" },
    { key: "projects", label: "Proyectos" },
    { key: "distinctions", label: "Distinciones" },
    { key: "hobbies", label: "Hobbies" }
  ];
  return (
    <>
      {sections.map((section) => (
        <div
          key={section.key}
          className={`nav-item ${activeSection === section.key ? "active" : ""}`}
          onClick={() => setActiveSection(section.key)}
        >
          {section.label}
        </div>
      ))}
    </>
  );
}