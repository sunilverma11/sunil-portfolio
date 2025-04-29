import uniqid from 'uniqid';
import { experience } from '../../Portfolio';
import './Experience.css';

const Experience = () => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="experience-section section center">
      <h2 className="section__title">Experience</h2>
      <div className="timeline">
        {experience.map((exp, index) => (
          <article key={uniqid()} className="timeline-entry">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3 className="timeline-company">{exp.company}</h3>
              <p className="timeline-dates">
                {exp.joining} - {exp.left}
              </p>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
