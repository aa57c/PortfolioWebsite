import { projectData } from "./github_data";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
              <div className="small-icons">
                <a href={project.githublink} aria-label="Github" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                {project.demo && (
                  <a href={project.demolink} aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                )
                }
                {project.downloadfilelink && project.title == "Cloud Builder" && (
                  <a href="/files/CloudBuilder_Docs.pdf" aria-label="Download Cloud Builder Docs" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-download"></i> <span>Docs</span>
                  </a>
                )}
                {
                  project.downloadfilelink && project.title == "Deep Learning Experiments" && (
                    <a href="/files/Deep_Learning_Experiments_Final_Report.pdf" aria-label="Download Technical Report" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-download"></i> <span>Report</span>
                    </a>

                  ) 
                }
                {
                  project.downloadfilelink && project.title == "Deep Learning Experiments" && (
                    <a href="/files/Deep_Learning_Experiments_Final_Results.pdf" aria-label="Download Results" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-download"></i> <span>Results</span>
                    </a>
                  )
                }
                {project.poster && (
                  <a href="/files/poster.pdf" aria-label="Download Poster" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-download"></i> <span>Poster</span>
                  </a>
                )

                }
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              {project.deployed && project.title == "Cryptography Web App" && (
                <a href=" http://crypt-app-2-dev.us-east-1.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer" style={{ color: "gold", textDecoration: "underline" }}>
                  Click here to see the deployed app!
                </a>
              )}
            </div>
            <div>
              {project.deployed && project.title == "AI-Powered Diabetes Health Coach" && (
                <a href="https://diabetes-health-coach.streamlit.app/" target="_blank" rel="noopener noreferrer" style={{ color: "gold", textDecoration: "underline" }}>
                  Click here to see the deployed app!
                </a>
              )}
            </div>
            <div>
              {project.deployed && project.title == "Graduate Teaching Assistant Job Board" && (
                <a href="https://graduate-teaching-assistant-job-board.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "gold", textDecoration: "underline" }}>
                  Click here to see the deployed app!
                </a>
              )}
            </div>
          </div>
        
        
        ))}
      </div>
    </div>
  );
};

export default Projects;
