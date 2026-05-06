import './Projects.css';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <p className="section-label">SELECTED WORKS</p>
        <h2 className="projects__title">FEATURED PROJECTS</h2>
        <a
          href="https://behance.net"   /* ← Change this to your full portfolio link */
          target="_blank"
          rel="noreferrer"
          className="projects__view-all"
        >
          View All Projects ↗
        </a>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* Image area */}
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__placeholder">
            <span>Project Image</span>
            <p>Set image in data.js</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="project-card__body">
        {/* Tags */}
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/*
          HOW TO LINK YOUR PROJECT:
          In data.js, set projectUrl: "https://your-project-link.com"
          The button below will open that URL in a new tab.
        */}
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noreferrer"
          className="project-card__btn"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}