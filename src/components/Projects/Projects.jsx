import SectionHeader from "../SectionHeader/SectionHeader";
import ImageZoom from "react-image-zooom";
import chromaCraft from "../../assets/ChromaCraft.png";
import toyCorner from "../../assets/ToyCorner.png";

const Projects = () => {
    return (
        <div id="projects">
            <SectionHeader header={"Visit & Feedback"} message={"My Projects"} />
            <br />
            <div>
                <div className="items-center justify-center gap-10 sm:flex">
                    <div className="sm:w-[40%]">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Chroma Craft</h3>
                            <p className="mt-5">An online craft learning platform</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto">
                            <ImageZoom
                                src={chromaCraft}
                                alt="Chroma Craft"
                                zoomScale={2}
                                width="100%"
                                height="100%"
                                zoom={200}
                            />
                        </figure>
                        <div className="mt-8">
                            <p><span className="mr-5 text-lg font-bold">Frontend:</span> <a className="font-semibold hover:text-info" href="https://chromacraftbd.web.app">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/chroma-craft-client">Code Repo</a></p>
                            <hr className="w-8/12 mx-auto my-5" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://chroma-craft-server.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/chroma-craft-server">Code Repo</a></p>
                        </div>
                    </div>
                    <div className="sm:w-[40%] mt-16 sm:mt-0">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Toy Corner</h3>
                            <p className="mt-5">An online toy shopping marketplace</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto">
                            <ImageZoom
                                src={toyCorner}
                                alt="Chroma Craft"
                                zoomScale={2}
                                width="100%"
                                height="100%"
                                zoom={200}
                            />
                        </figure>
                        <div className="mt-8">
                            <p><span className="mr-5 text-lg font-bold">Frontend:</span> <a className="font-semibold hover:text-info" href="https://toycornerbd.web.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/toy-corner-client">Code Repo</a></p>
                            <hr className="w-8/12 mx-auto my-5" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://toy-corner-server-bd.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/toy-corner-server">Code Repo</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;