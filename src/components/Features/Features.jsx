import { PiAppStoreLogoBold, PiGlobeBold } from "react-icons/pi";
import SectionHeader from "../SectionHeader/SectionHeader";
import Tilt from 'react-parallax-tilt';

const Features = () => {
    return (
        <div id="features">
            <SectionHeader header={"Features"} message={"What I Do"} />
            <br />
            <div className="items-center justify-center gap-5 [&>*]:my-5 md:[&>*]:my-0 md:flex">
                <Tilt>
                    <div className="p-4 text-left shadow-inner shadow-violet-300 rounded-xl bg-neutral">
                        <PiAppStoreLogoBold className="text-5xl" />
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Web Applications</h4>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque expedita distinctio sit culpa consequuntur! Alias accusantium aspernatur eaque maiores rerum dolore voluptate ex quo error, debitis ullam quas eum?</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow-inner shadow-violet-300 rounded-xl bg-neutral">
                        <PiGlobeBold className="text-5xl" />
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Frontend Development</h4>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque expedita distinctio sit culpa consequuntur! Alias accusantium aspernatur eaque maiores rerum dolore voluptate ex quo error, debitis ullam quas eum?</p>
                    </div>
                </Tilt>
                <Tilt>
                    <div className="p-4 text-left shadow-inner shadow-violet-300 rounded-xl bg-neutral">
                        <PiAppStoreLogoBold className="text-5xl" />
                        <h4 className="mt-6 text-2xl font-semibold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Fullstack Development</h4>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque expedita distinctio sit culpa consequuntur! Alias accusantium aspernatur eaque maiores rerum dolore voluptate ex quo error, debitis ullam quas eum?</p>
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default Features;