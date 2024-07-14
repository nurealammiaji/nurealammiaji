import photo from "/nurealammiaji.jpg";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div>
            <figure className="w-[250px] h-[250px] mt-32 mx-auto">
                <img className="rounded-full ring-8 ring-secondary" src={photo} alt="" />
            </figure>
            <div className="mt-20">
                <p className="text-2xl">Hi, I am</p>
                <h1 className="my-10 text-5xl font-bold">Nure Alam Miaji</h1>
                <p className="text-3xl">I am a <span className="font-medium text-secondary"><Typewriter words={["Web Developer", "Tech Enthusiast"]} cursor cursorStyle={"_"} cursorColor={"white"} cursorBlinking loop typeSpeed={150} deleteSpeed={50} delaySpeed={1500} /></span></p>
            </div>
        </div>
    );
};

export default Hero;