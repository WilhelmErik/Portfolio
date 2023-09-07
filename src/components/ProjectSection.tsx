import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

function ProjectSection() {
  const projects = [
    {
      title: "StarWars Trivia site",
      bgImage:
        "https://cdn.discordapp.com/attachments/778200649749626891/1149026563745124455/image.png",
      tags: ["#JavaScript", "#HTML", "#CSS"],
      description:
        "A Star Wars Trivia site where the user can choose between two different characters from the Star Wars Universe and compare some miscellaneous information.",
      githubLink: "https://github.com/WilhelmErik/Star-Wars-Trivia",
      liveLink: "https://wilhelmerik.github.io/Star-Wars-Trivia/",
    },
    {
      title: "Book Rating site",
      bgImage:
        "https://cdn.discordapp.com/attachments/778200649749626891/1149004031306506280/image.png",
      tags: ["#JavaScript", "#HTML", "#CSS", "Strapi"],
      description:
        "In this project, I built a book rating website utilizing the headless CMS, Strapi. The website allows users to browse a catalog of books and leave their own ratings ",
      githubLink: "https://github.com/WilhelmErik/Book-Ducks",
    },
    {
      title: "CSS Assignment",
      bgImage:
        "https://cdn.discordapp.com/attachments/778200649749626891/1149026136488165376/image.png",
      tags: ["#JavaScript", "#HTML", "#CSS"],
      description:
        "For my CSS course's final assignment, I was tasked with designing and implementing a website for a fictional company. The objective was to demonstrate a mastery of CSS fundamentals while adhering to modern design principles. To accelerate the development process, I employed the Bulma CSS framework.",
      githubLink: "https://github.com/WilhelmErik/Project-Company",
      liveLink: "https://wilhelmerik.github.io/Project-Company/",
    },
    {
      title: "Backend Assignment - Bank",
      bgImage: "/path/to/image.jpg",
      tags: [
        "#JavaScript ",
        "#HTML ",
        "#CSS ",
        "#Node ",
        "#Express ",
        "#Mongodb ",
      ],
      description:
        "This project serves as a basic bank application built using Node.js, Express, and MongoDB. The application allows users to create an account,and deposit and withdraw funds.JWT-based authentication and password hashing are also implemented to ensure data integrity and security.",
      githubLink: "https://github.com/WilhelmErik/BackendAssignment---Bank",
    },
  ];

  return (
    <>
      {projects.map((project) => {
        return (
          <div className="project-card" key={project.title}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </>
  );
}

export default ProjectSection;
