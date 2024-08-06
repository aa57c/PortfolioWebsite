import { projectData } from "./github_data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
                <a href={project.githublink} aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                {project.downloadfilelink && project.title === "Deep Learning Experiments" && (
                  <a href="/files/Experiment_Results.zip" aria-label="Download Experiment Results" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-download"></i> <span>Experiment Results</span>
                  </a>
                )}
                {project.downloadfilelink && project.title === "Cloud Builder" && (
                  <a href="/files/CloudBuilder_Docs.pdf" aria-label="Download Cloud Builder Docs" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-download"></i> <span>Docs</span>
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
