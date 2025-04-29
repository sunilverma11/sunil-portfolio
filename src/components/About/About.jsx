import { about } from "../../Portfolio";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">{about?.title}</h2>
        <article className="about-content">
          <div className="about-info">
            <h3 className="about-name">{about.name}</h3>
            <p className="about-role">{about.role}</p>
            <p className="about-description">{about.description}</p>
          </div>
          <div className="about-social">
            <a
              href={about.social.linkedin}
              className="about-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={about.social.github}
              className="about-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
