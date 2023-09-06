import "./Header.css";
export default function Header() {
  return (
    <header className="Header">
      <div className="name-logo">
      <a href="#aboutMe">
        <img
          src="https://media.discordapp.net/attachments/1148642371731460096/1148642558822596808/my-logo.png"
          alt=""
          height={"40px"}
        />
        </a>
        <a href="#aboutMe">
          <h3 className="header-name">Albin Lundström | Portfolio</h3>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <div className="header-icons">
        <a
          href="https://github.com/wilhelmerik"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            src="https://media.discordapp.net/attachments/1148642371731460096/1148643484874588302/Layer_1.png"
            alt=""
            height="40px"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/albin-lundstrom"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            src="https://media.discordapp.net/attachments/1148642371731460096/1148642559548211200/linkedin-icon.png"
            alt=""
            height="40px"
          />
        </a>
      </div>
    </header>
  );
}
