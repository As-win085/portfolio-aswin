import "./index.css"
import Navbar from "../components/NavBar";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact"
import TechStack from "../sections/TechStack";

const Home = () => {
    return (
        <>
            <Navbar home={true} />
            <Hero />
            <TechStack />
            <Contact />
        </>
    )
}

export default Home