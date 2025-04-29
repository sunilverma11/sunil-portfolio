import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './Container.css';

const placeholderImage = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";

const ProjectContainer = ({ project }) => (
  <div className="project-card">
    <div className="project-card-image-container">
      <img
        src={project?.image || placeholderImage}
        alt={project?.name}
        className="project-card-image"
      />
    </div>
    <div className="project-card-content">
      <h3 className="project-card-title">{project.name}</h3>

      <p className="project-card-description">{project.description}</p>

      {project.stack && (
        <ul className="project-card-stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project-card-stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="project-card-links">
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label="source code"
            className="project-card-link project-card-link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon sx={{ fontSize: 30 }} />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label="live preview"
            className="project-card-link project-card-link--icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LaunchIcon sx={{ fontSize: 30 }} />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectContainer;
