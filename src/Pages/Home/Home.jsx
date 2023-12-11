import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experiences></Experiences>
            <Projects></Projects>
        </div>
    );
};

export default Home;