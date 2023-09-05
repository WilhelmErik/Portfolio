import "./Header.css"
export default function Header(){

    return(
        <header className="Header">
            <div className="name-logo">
            <img src="../src/assets/my-logo.png" alt="" height={"40px"}/>
             <a href="#aboutMe"><h2>Albin Lundström | Portfolio</h2></a>
            </div>
        <nav>

            
          <ul>
            <li><a href="#aboutMe">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
        <div className="header-icons">
           <a href="https://github.com/wilhelmerik" target="blank" rel="noopener noreferrer"> <img src="../src/assets/github-mark-white.svg" alt="" height="40px"/></a>
           <a href="https://www.linkedin.com/in/albin-lundstrom" target="blank" rel="noopener noreferrer"> <img src="../src/assets/linkedin-icon.png" alt="" height="40px"/></a>
        </div>
      </header>
    )
}