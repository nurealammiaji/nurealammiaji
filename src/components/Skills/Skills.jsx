import SectionHeader from "../SectionHeader/SectionHeader";
import jwt from "../../assets/jwt.png";
import Tilt from 'react-parallax-tilt';

const Skills = () => {

    const currentYear = new Date().getFullYear();
    const yearOfExperience = currentYear - 2022;

    return (
        <div id="skills">
            <SectionHeader header={`${yearOfExperience}+ Years Experience`} message={"My Skills"} />
            <br />
            <div className="flex items-center justify-center gap-10 flex-wrap">
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">HTML 5</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">CSS 3</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Bootstrap 5</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Tailwind CSS</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 flex items-center justify-center mask mask-decagon p-5 bg-white">
                        <img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Javascript</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">React</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Node</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Express</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Mongodb</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Firebase</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Git</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Mongoose</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src={jwt} />
                    </figure>
                    <h5 className="mt-5 font-semibold">JWT</h5>
                </Tilt>
                <Tilt>
                    <figure className="w-24 h-24 mask mask-decagon p-5 bg-white">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                    </figure>
                    <h5 className="mt-5 font-semibold">Linux</h5>
                </Tilt>
            </div>
        </div>
    );
};

export default Skills;