import "./Main.css";
import Typewriter from "typewriter-effect";
import SkillSection from "./SkillSection";
// import { useState } from "react";

const Main: React.FC = () => {
  return (
    <div className="Main">
      <section id="aboutMe">
        <div style={{ marginTop: "5rem" }}>
          <h1>
            Hi! I'm{" "}
            <span className="my-name" style={{ color: "slateblue" }}>
              Albin{" "}
            </span>
            
            <span>
              <Typewriter
                options={{
                  strings: [
                    "a Frontend Developer",
                    // "a Student",
                    // "a Problem Solver",
                    // "eager to Learn",
                    "Seeking Internship",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <h3>
            I'm a passionate Frontend Developer currently deepening my skills in
            the art of web development. Eager to bring ideas to life through
            code, I strive to learn and grow while balancing attention to detail
            with a love for creative problem-solving.
          </h3>
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <SkillSection />
      </section>
      <section id="projects">
      <h2>Projects</h2>

        {/* <div className="projects-container">

        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>a</div>

        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>b</div>

        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>c</div>
        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>d</div>

        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>e</div>

        <div style={{border:"slateblue solid 2px",height:"400px",width:"360px"}}>f</div>

        </div> */}
        
        <h3>Projects will be showcased here soon. Stay tuned!</h3>
      </section>
      <h2> </h2>
    </div>
  );
};

export default Main;
