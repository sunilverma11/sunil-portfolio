import { about } from "../../Portfolio";
import "./About.css"
function About() {
    return(
        <div id="about" className="about-container">
            <h2 className="about-title">{about?.title}</h2>
            <p>{about.name}</p>
            <p>{about.role}</p>
            <p>{about.description}</p>
            <b><a href={about.social.linkedin}> LinkedIn </a></b>
            <b><a href={about.social.github}> Github </a></b>

        </div>
    )
}
export default About;