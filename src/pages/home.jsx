import "./index.css"
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact"
import TechStack from "../sections/TechStack";

const Home = () => {
    return (
        <>
            <NavBar home={true} />
            <Hero />
            <TechStack />
            <Contact />
        </>
    )
}

export default Home