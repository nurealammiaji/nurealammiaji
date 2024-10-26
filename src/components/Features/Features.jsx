import { PiGlobeBold } from "react-icons/pi";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tilt from 'react-parallax-tilt';
import { LiaLaptopCodeSolid, LiaLaptopSolid } from "react-icons/lia";

const Features = () => {
    return (
        <div id="features">
            <SectionHeader header={"Features"} message={"What I Do"} />
            <br />
            <div className="flex flex-wrap items-center justify-center gap-5">
                <Tilt>
                    <div className="p-4 text-left shadow shadow-violet-300 rounded-xl bg-neutral glass sm:w-96">
                        <LiaLaptopSolid className="text-7xl" />
                        <h4 className="mt-6 text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Frontend Development</h4>
                        <p className="mt-5">I specialize in frontend development, creating engaging and intuitive user interfaces for websites and applications. I use HTML, CSS, and JavaScript, often leveraging frameworks like React to build responsive designs that work well on all devices. My focus is on user experience and accessibility, ensuring that everyone can navigate and interact with the digital products I create.</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow shadow-violet-300 rounded-xl bg-neutral glass sm:w-96">
                        <LiaLaptopCodeSolid className="text-7xl" />
                        <h4 className="mt-6 text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Backend Development</h4>
                        <p className="mt-5">I specialize in backend development, focusing on building server-side logic and database management for web applications. I use technologies like Node.js and Express to create robust APIs that connect to the frontend, and I work with databases like MongoDB for efficient data storage and retrieval. My priority is on security, performance, and scalability to ensure seamless user experiences.</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow shadow-violet-300 rounded-xl bg-neutral glass sm:w-96">
                        <PiGlobeBold className="text-7xl" />
                        <h4 className="mt-6 text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Full Stack Development</h4>
                        <p className="mt-5">I specialize in full stack development, combining frontend and backend skills to create complete web applications. I use HTML, CSS, JavaScript, and React for the frontend, along with Node.js, Express, and MongoDB for the backend. This expertise ensures smooth communication between layers, focusing on security, scalability, and user experience throughout the development process.</p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Features;