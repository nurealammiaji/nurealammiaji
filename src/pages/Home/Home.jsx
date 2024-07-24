import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <br /><br />
            <Features />
            <br /><br />
            <Projects />
            <br /><br />
            <Skills />
            <br /><br />
            <Education />
            <br /><br />
            <Contact />
        </div>
    );
};

export default Home;