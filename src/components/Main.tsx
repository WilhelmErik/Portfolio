import "./Main.css"
import Typewriter from 'typewriter-effect';


const Main:React.FC = ()=>{
    return(
<div className="Main">
        <section id="aboutMe">
<h1 >Hi! I'm Albin, 
<Typewriter
  options={{
    strings: ['a Frontend Developer','a Student'],
    autoStart: true,
    loop: true,
  }}
 />
</h1>
<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem temporibus, nesciunt distinctio explicabo quisquam harum iste dicta! Ducimus vero voluptas deleniti aliquam cupiditate nostrum. Similique molestiae voluptate consequuntur rerum suscipit.
</h3>
        </section>
        <section id="skills">
            <h2>Skills</h2>
           <div>
            Card Cards
           </div>
        <p>Bla bla </p>
        <h2>Test</h2>
        <h2>Igen</h2>
        </section>
        <section id="projects">
        <p>Bla bla </p>
        </section>
        <h2> </h2>
       
        </div>
    )
}

export default Main