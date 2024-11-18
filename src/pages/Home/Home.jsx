import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';
import ParticleContainer from '../../components/ParticleContainer/ParticleContainer';

const Home = () => {
    return (
        <div>
            <ParticleContainer />
            <Hero />
            <br /><br /><br /><br /><br />
            <Features />
            <br /><br /><br /><br /><br />
            <Skills />
            <br /><br /><br /><br /><br />
            <Education />
            <br /><br /><br /><br /><br />
            <Projects />
            <br /><br /><br /><br /><br />
            <Contact />
        </div>
    );
};

export default Home;