import photo from "/nurealammiaji.jpg";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div>
            <figure className="w-[250px] md:h-[250px] mt-12 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 p-2">
                <img className="rounded-full" src={photo} alt="Photo of Nure Alam Miaji" />
            </figure>
            <div className="mt-12">
                <p className="text-2xl">Hi, I am</p>
                <h1 className="my-8 text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text">Nure Alam Miaji</h1>
                <p className="text-3xl">I am a <span className="font-medium text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text"><Typewriter words={["Full Stack Developer", "MERN Stack Developer"]} cursor cursorStyle={"_"} cursorColor={"white"} cursorBlinking loop typeSpeed={100} deleteSpeed={50} delaySpeed={1500} /></span></p>
            </div>
        </div>
    );
};

export default Hero;