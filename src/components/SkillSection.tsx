import SkillCard from "./SkillCard";
import "./SkillSection.css";
export default function SkillSection() {
  const skills = [
    {
      name: "HTML",
      url: "https://cdn.discordapp.com/attachments/1148642371731460096/1148642445664469032/html-icon.png",
    },
    {
      name: "CSS",
      url: "https://media.discordapp.net/attachments/1148642371731460096/1148642444800434336/css-icon.png?width=619&height=683",
    },
    {
      name: "JavaScript",
      url: "https://cdn.discordapp.com/attachments/1148642371731460096/1148642446167777394/js-icon.png",
    },
    {
      name: "Node.js",
      url: "https://cdn.discordapp.com/attachments/1148642371731460096/1148642446570434600/node-icon.png",
    },
    {
      name: "Express.js",
      url: "https://cdn.discordapp.com/attachments/1148642371731460096/1148642445115011092/express-icon.png",
    },
    {
      name: "React",
      url: "https://cdn.discordapp.com/attachments/1148642371731460096/1148642446947917934/react-icon.png",
    },
  ];

  return (
    <div className="skill-section ">
      {skills.map((skill) => {
        return (
          <div className="skill-card" key={skill.name}>
            <SkillCard skill={skill} />
          </div>
        );
      })}
    </div>
  );
}
