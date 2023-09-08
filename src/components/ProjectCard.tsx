
interface Project {
  title: string;
  bgImage: string;
  tags: string[];
  description: string;
  githubLink: string;
  liveLink?: string;
}
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }:ProjectCardProps) {
  return (
    <div className="bad-class"
      style={{
        
      }}
    >
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${project.bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="link-icons">
        {project.liveLink && <a href={project.liveLink} target="blank" rel="noopener noreferrer" title="Live Preview">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "44px", color: "white" }}
            >
              link
            </span>
          </a>}
          
          
          <a href={project.githubLink} target="blank" rel="noopener noreferrer" title="Github Link">
            {" "}
            <img
              src="https://media.discordapp.net/attachments/1148642371731460096/1148643484874588302/Layer_1.png"
              alt=""
              height="34px"
            />
          </a>
        </div>

      </div>
      <h3 style={{ color: "white" }}> {project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div
        style={{
          maxWidth: "90%",
          bottom: "12px",
          position: "absolute",
          left: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.3em",
        }}
      >
        {project.tags.map((tag) => {
          return <b> {tag}</b>;
        })}
      </div>
    </div>
  );
}
