{/*import React, { useState } from "react";
import './styles/app.css';

// Components
import ProfileSideBar from "./components/ProfileSideBar";
import Toolbar from "./components/Toolbar";
import Timeline from "./components/TimelineItem";
import ProjectCard from "./components/ProjectCard";
import DistinctionsCard from "./components/DistinctionCard";
import HobbyCard from "./components/HobbyCard";

// Data
import { studies } from "./data/studies";
import { workExperience } from "./data/workExperience";
import { projects } from "./data/projects";
import { distinctions } from "./data/distinctions";
import { hobbies } from "./data/hobbies";

export default function App() {
  const [activeSection, setActiveSection] = useState("studies");

  // Returns the appropriate component based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case "studies":
        return <Timeline items={studies} />;
      case "workExperience":
        return <Timeline items={workExperience} />;
      case "projects":
        return <ProjectCard items={projects} />;
      case "distinctions":
        return <DistinctionsCard items={distinctions} />;
      case "hobbies":
        return <HobbyCard items={hobbies} />;
      default:
        return <Timeline items={studies} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#181a20] text-gray-100">
      <ProfileSideBar />

      <main className="flex-1 h-screen overflow-y-auto p-6">
        <Toolbar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        
        <section className="mt-6">
          {renderSection()}
        </section>
      </main>
    </div>
  );
} 
*/}



import React, { useState } from "react";
import './styles/app.css';

// Components
import ProfileSideBar from "./components/ProfileSideBar";
import Toolbar from "./components/Toolbar";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import DistinctionsCard from "./components/DistinctionCard";
import HobbyCard from "./components/HobbyCard";

// Data
import { studies } from "./data/studies";
import { workExperience } from "./data/workExperience";
import { projects } from "./data/projects";
import { distinctions } from "./data/distinctions";
import { hobbies } from "./data/hobbies";

export default function App() {
  const [activeSection, setActiveSection] = useState("studies");

  // Devuelve la sección activa
  const renderSection = () => {
    switch (activeSection) {
      case "studies":
        return <Timeline items={studies} />;
      case "workExperience":
        return <Timeline items={workExperience} />;
      case "projects":
        return <ProjectCard items={projects} />;
      case "distinctions":
        return <DistinctionsCard items={distinctions} />;
      case "hobbies":
        return <HobbyCard items={hobbies} />;
      default:
        return <Timeline items={studies} />;
    }
  };

  return (
    <div className="portfolio-container">
      <ProfileSideBar />
      <div className="dynamic-section">
        <div className="navbar">
          <Toolbar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <div className="content-section">
          {renderSection()}
        </div>
        <div className="footer">
          © {new Date().getFullYear()} Manu - Desarrollado con {"<Code />"}
        </div>
      </div>
    </div>
  );
}