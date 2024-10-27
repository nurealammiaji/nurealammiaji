import SectionHeader from "../SectionHeader/SectionHeader";
import ImageZoom from "react-image-zooom";
import chromaCraft from "../../assets/ChromaCraft.png";
import toyCorner from "../../assets/ToyCorner.png";
import recipeHaven from "../../assets/RecipeHaven.png";
import autoRepair from "../../assets/AutoRepair.png";

const Projects = () => {
    return (
        <div id="projects">
            <SectionHeader header={"Visit & Feedback"} message={"My Projects"} />
            <br />
            <div>
                <div className="grid gap-10 sm:grid-cols-2">
                    <div className="p-5 border shadow rounded-2xl glass shadow-violet-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Chroma Craft</h3>
                            <p className="mt-5">An online craft learning platform</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto rounded-lg">
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
                            <hr className="mx-auto my-5 sm:w-10/12" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://chroma-craft-server.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/chroma-craft-server">Code Repo</a></p>
                        </div>
                    </div>
                    <div className="p-5 border shadow sm:mt-0 rounded-2xl glass shadow-violet-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Toy Corner</h3>
                            <p className="mt-5">An online toy shopping marketplace</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto rounded-lg">
                            <ImageZoom
                                src={toyCorner}
                                alt="Toy Corner"
                                zoomScale={2}
                                width="100%"
                                height="100%"
                                zoom={200}
                            />
                        </figure>
                        <div className="mt-8">
                            <p><span className="mr-5 text-lg font-bold">Frontend:</span> <a className="font-semibold hover:text-info" href="https://toycornerbd.web.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/toy-corner-client">Code Repo</a></p>
                            <hr className="mx-auto my-5 sm:w-10/12" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://toy-corner-server-bd.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/toy-corner-server">Code Repo</a></p>
                        </div>
                    </div>
                    <div className="p-5 border shadow sm:mt-0 rounded-2xl glass shadow-violet-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Recipe Haven</h3>
                            <p className="mt-5">An online recipe website</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto rounded-lg">
                            <ImageZoom
                                src={recipeHaven}
                                alt="Recipe Haven"
                                zoomScale={2}
                                width="100%"
                                height="100%"
                                zoom={200}
                            />
                        </figure>
                        <div className="mt-8">
                            <p><span className="mr-5 text-lg font-bold">Frontend:</span> <a className="font-semibold hover:text-info" href="https://recipe-haven-bd.web.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/recipe-haven-client">Code Repo</a></p>
                            <hr className="mx-auto my-5 sm:w-10/12" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://recipe-haven-server-bd.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/recipe-haven-server">Code Repo</a></p>
                        </div>
                    </div>
                    <div className="p-5 border shadow sm:mt-0 rounded-2xl glass shadow-violet-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">Auto Repair</h3>
                            <p className="mt-5">A car service booking website</p>
                        </div>
                        <figure className="w-full h-[30rem] overflow-y-auto rounded-lg">
                            <ImageZoom
                                src={autoRepair}
                                alt="Auto Repair"
                                zoomScale={2}
                                width="100%"
                                height="100%"
                                zoom={200}
                            />
                        </figure>
                        <div className="mt-8">
                            <p><span className="mr-5 text-lg font-bold">Frontend:</span> <a className="font-semibold hover:text-info" href="https://auto-repair-bd.web.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/auto-repair-client">Code Repo</a></p>
                            <hr className="mx-auto my-5 sm:w-10/12" />
                            <p><span className="mr-5 text-lg font-bold">Backend:</span> <a className="font-semibold hover:text-info" href="https://auto-repair-server.vercel.app/">Live Link</a><span className="mx-3">||</span><a className="font-semibold hover:text-info" href="https://github.com/nurealammiaji/auto-repair-server">Code Repo</a></p>
                        </div>
                    </div>
                </div>
                <div className="mt-14">
                    <a href="https://github.com/nurealammiaji?tab=repositories" target="_blank" className="transition-colors ease-in-out delay-0 btn bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500">See All Projects</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;