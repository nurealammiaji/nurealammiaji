import photo from "/nurealammiaji.jpg";
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { LuDownload } from "react-icons/lu";

const Hero = () => {
    return (
        <div>
            <figure className="w-[250px] md:h-[250px] mx-auto rounded-full mt-12">
                <Tilt>
                    <img className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400" src={photo} alt="Photo of Nure Alam Miaji" />
                </Tilt>
            </figure>
            <div className="mt-16">
                <p className="text-2xl">Hi, I am</p>
                <h1 className="my-8 text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Nure Alam Miaji</h1>
                <p className="text-3xl">I am a <span className="font-medium text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"><Typewriter words={["Frontend Developer", "Backend Developer", "Full Stack Developer"]} cursor cursorStyle={"_"} cursorColor={"white"} cursorBlinking loop typeSpeed={100} deleteSpeed={50} delaySpeed={1500} /></span></p>
            </div>
            <div className="mt-16">
                <div>
                    <a href="https://drive.google.com/file/d/1A1v23Gkh20rH6QWU1HfSjXE5sIDlPwGy/view?usp=sharing" target="_blank" className="text-lg transition-colors ease-in-out delay-0 btn bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500"><LuDownload className="mr-2 text-2xl" /> My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;