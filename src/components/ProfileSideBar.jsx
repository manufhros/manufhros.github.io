import '../styles/app.css';
import perfilImg from '../assets/profile.png';


export default function ProfileSideBar() {
  return (
    <div className="static-section">
      <div>
        <div className="profile-info">
          <img
            src={perfilImg}
            alt="Foto de perfil"
            className="profile-image"
          />
          <h1 className="profile-name">Manuel Francisco Hidalgo Ros</h1>
          <p className="profile-title">{'<CrazyDeveloper />'}</p> {/* Estilo developer */}
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon"><i className="fas fa-envelope"></i></span>
            <span className="contact-text">mf.hidalgoros@um.es</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><i className="fas fa-phone"></i></span>
            <span className="contact-text">+34 601 408 225</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
            <span className="contact-text">Murcia, Spain</span>
          </div>
        </div>

        <div className="about-me">
          <h2 className="section-title">About Me</h2>
          <p className="about-text justify text-gray-700 leading-relaxed">
            I’m a curious and passionate computer engineering student, always looking for new things to learn and build. In this portfolio you’ll find a bit about me and the projects I’m working on. If you want to connect or have any questions, feel free to reach out!
          </p>
        </div>

        <div className="skills-container">
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">AWS</div>
          <div className="skill-item">Docker</div>
          <div className="skill-item">Kubernetes</div>
          <div className="skill-item">MongoDB</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">TypeScript</div>
          <div className="skill-item">Git</div>
        </div>
      </div>

      <div>
        <div className="social-links">
          <a href="#" className="social-icon"><i className="fab fa-github"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fas fa-globe"></i></a>
        </div>
      </div>
    </div>
  );
};