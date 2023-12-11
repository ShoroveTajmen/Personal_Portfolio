import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Experiences from "../Experiences/Experiences";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experiences></Experiences>
        </div>
    );
};

export default Home;