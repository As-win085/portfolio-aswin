import NavBar from "../components/NavBar";
import Projects from "../sections/project";

const ProjectsPage = () => {
    return (
        <div>
            <NavBar home={false} />
            <Projects />
        </div>
    )
}

export default ProjectsPage