import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import Education from '../../components/Education/Education';
import Contact from '../../components/Contact/Contact';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {

    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    // const option = {
    //     background: {
    //         color: {
    //             value: "",
    //         },
    //     },
    //     fpsLimit: 120,
    //     interactivity: {
    //         events: {
    //             onClick: {
    //                 enable: true,
    //                 mode: "push",
    //             },
    //             onHover: {
    //                 enable: true,
    //                 mode: "repulse",
    //             },
    //             resize: true,
    //         },
    //         modes: {
    //             push: {
    //                 quantity: 4,
    //             },
    //             repulse: {
    //                 distance: 200,
    //                 duration: 0.4,
    //             },
    //         },
    //     },
    //     particles: {
    //         color: {
    //             value: "#ffffff",
    //         },
    //         links: {
    //             color: "#ffffff",
    //             distance: 150,
    //             enable: true,
    //             opacity: 0.5,
    //             width: 1,
    //         },
    //         move: {
    //             direction: "none",
    //             enable: true,
    //             outModes: {
    //                 default: "bounce",
    //             },
    //             random: false,
    //             speed: 6,
    //             straight: false,
    //         },
    //         number: {
    //             density: {
    //                 enable: true,
    //                 area: 800,
    //             },
    //             value: 80,
    //         },
    //         opacity: {
    //             value: 0.5,
    //         },
    //         shape: {
    //             type: "circle",
    //         },
    //         size: {
    //             value: { min: 1, max: 5 },
    //         },
    //     },
    //     detectRetina: true,
    // };

    // const option = {
    //     "autoPlay": true,
    //     "background": {
    //         "color": {
    //             "value": ""
    //         },
    //         "image": "",
    //         "position": "",
    //         "repeat": "",
    //         "size": "",
    //         "opacity": 1
    //     },
    //     "backgroundMask": {
    //         "composite": "destination-out",
    //         "cover": {
    //             "color": {
    //                 "value": "#fff"
    //             },
    //             "opacity": 1
    //         },
    //         "enable": false
    //     },
    //     "clear": true,
    //     "defaultThemes": {},
    //     "delay": 0,
    //     "fullScreen": {
    //         "enable": true,
    //         "zIndex": 0
    //     },
    //     "detectRetina": true,
    //     "duration": 0,
    //     "fpsLimit": 120,
    //     "interactivity": {
    //         "detectsOn": "window",
    //         "events": {
    //             "onClick": {
    //                 "enable": false,
    //                 "mode": {}
    //             },
    //             "onDiv": {
    //                 "selectors": {},
    //                 "enable": false,
    //                 "mode": {},
    //                 "type": "circle"
    //             },
    //             "onHover": {
    //                 "enable": false,
    //                 "mode": {},
    //                 "parallax": {
    //                     "enable": false,
    //                     "force": 2,
    //                     "smooth": 10
    //                 }
    //             },
    //             "resize": {
    //                 "delay": 0.5,
    //                 "enable": true
    //             }
    //         },
    //         "modes": {
    //             "trail": {
    //                 "delay": 1,
    //                 "pauseOnStop": false,
    //                 "quantity": 1
    //             },
    //             "attract": {
    //                 "distance": 200,
    //                 "duration": 0.4,
    //                 "easing": "ease-out-quad",
    //                 "factor": 1,
    //                 "maxSpeed": 50,
    //                 "speed": 1
    //             },
    //             "bounce": {
    //                 "distance": 200
    //             },
    //             "bubble": {
    //                 "distance": 200,
    //                 "duration": 0.4,
    //                 "mix": false
    //             },
    //             "connect": {
    //                 "distance": 80,
    //                 "links": {
    //                     "opacity": 0.5
    //                 },
    //                 "radius": 60
    //             },
    //             "grab": {
    //                 "distance": 100,
    //                 "links": {
    //                     "blink": false,
    //                     "consent": false,
    //                     "opacity": 1
    //                 }
    //             },
    //             "push": {
    //                 "default": true,
    //                 "groups": [],
    //                 "quantity": 4
    //             },
    //             "remove": {
    //                 "quantity": 2
    //             },
    //             "repulse": {
    //                 "distance": 200,
    //                 "duration": 0.4,
    //                 "factor": 100,
    //                 "speed": 1,
    //                 "maxSpeed": 50,
    //                 "easing": "ease-out-quad"
    //             },
    //             "slow": {
    //                 "factor": 3,
    //                 "radius": 200
    //             },
    //             "light": {
    //                 "area": {
    //                     "gradient": {
    //                         "start": {
    //                             "value": "#ffffff"
    //                         },
    //                         "stop": {
    //                             "value": "#000000"
    //                         }
    //                     },
    //                     "radius": 1000
    //                 },
    //                 "shadow": {
    //                     "color": {
    //                         "value": "#000000"
    //                     },
    //                     "length": 2000
    //                 }
    //             }
    //         }
    //     },
    //     "manualParticles": [],
    //     "particles": {
    //         "bounce": {
    //             "horizontal": {
    //                 "value": 1
    //             },
    //             "vertical": {
    //                 "value": 1
    //             }
    //         },
    //         "collisions": {
    //             "absorb": {
    //                 "speed": 2
    //             },
    //             "bounce": {
    //                 "horizontal": {
    //                     "value": 1
    //                 },
    //                 "vertical": {
    //                     "value": 1
    //                 }
    //             },
    //             "enable": false,
    //             "maxSpeed": 50,
    //             "mode": "bounce",
    //             "overlap": {
    //                 "enable": true,
    //                 "retries": 0
    //             }
    //         },
    //         "color": {
    //             "value": "#fff",
    //             "animation": {
    //                 "h": {
    //                     "count": 0,
    //                     "enable": false,
    //                     "speed": 1,
    //                     "decay": 0,
    //                     "delay": 0,
    //                     "sync": true,
    //                     "offset": 0
    //                 },
    //                 "s": {
    //                     "count": 0,
    //                     "enable": false,
    //                     "speed": 1,
    //                     "decay": 0,
    //                     "delay": 0,
    //                     "sync": true,
    //                     "offset": 0
    //                 },
    //                 "l": {
    //                     "count": 0,
    //                     "enable": false,
    //                     "speed": 1,
    //                     "decay": 0,
    //                     "delay": 0,
    //                     "sync": true,
    //                     "offset": 0
    //                 }
    //             }
    //         },
    //         "effect": {
    //             "close": true,
    //             "fill": true,
    //             "options": {},
    //             "type": {}
    //         },
    //         "groups": [],
    //         "move": {
    //             "angle": {
    //                 "offset": 0,
    //                 "value": 90
    //             },
    //             "attract": {
    //                 "distance": 200,
    //                 "enable": false,
    //                 "rotate": {
    //                     "x": 3000,
    //                     "y": 3000
    //                 }
    //             },
    //             "center": {
    //                 "x": 50,
    //                 "y": 50,
    //                 "mode": "percent",
    //                 "radius": 0
    //             },
    //             "decay": 0,
    //             "distance": {},
    //             "direction": "bottom",
    //             "drift": 0,
    //             "enable": true,
    //             "gravity": {
    //                 "acceleration": 9.81,
    //                 "enable": false,
    //                 "inverse": false,
    //                 "maxSpeed": 50
    //             },
    //             "path": {
    //                 "clamp": true,
    //                 "delay": {
    //                     "value": 0
    //                 },
    //                 "enable": false,
    //                 "options": {}
    //             },
    //             "outModes": {
    //                 "default": "out",
    //                 "bottom": "out",
    //                 "left": "out",
    //                 "right": "out",
    //                 "top": "out"
    //             },
    //             "random": false,
    //             "size": false,
    //             "speed": 2,
    //             "spin": {
    //                 "acceleration": 0,
    //                 "enable": false
    //             },
    //             "straight": true,
    //             "trail": {
    //                 "enable": false,
    //                 "length": 10,
    //                 "fill": {}
    //             },
    //             "vibrate": false,
    //             "warp": false
    //         },
    //         "number": {
    //             "density": {
    //                 "enable": true,
    //                 "width": 1920,
    //                 "height": 1080
    //             },
    //             "limit": {
    //                 "mode": "delete",
    //                 "value": 0
    //             },
    //             "value": 400
    //         },
    //         "opacity": {
    //             "value": 1,
    //             "animation": {
    //                 "count": 0,
    //                 "enable": false,
    //                 "speed": 2,
    //                 "decay": 0,
    //                 "delay": 0,
    //                 "sync": false,
    //                 "mode": "auto",
    //                 "startValue": "random",
    //                 "destroy": "none"
    //             }
    //         },
    //         "reduceDuplicates": false,
    //         "shadow": {
    //             "blur": 0,
    //             "color": {
    //                 "value": "#000"
    //             },
    //             "enable": false,
    //             "offset": {
    //                 "x": 0,
    //                 "y": 0
    //             }
    //         },
    //         "shape": {
    //             "close": true,
    //             "fill": true,
    //             "options": {},
    //             "type": "circle"
    //         },
    //         "size": {
    //             "value": 10,
    //             "animation": {
    //                 "count": 0,
    //                 "enable": false,
    //                 "speed": 5,
    //                 "decay": 0,
    //                 "delay": 0,
    //                 "sync": false,
    //                 "mode": "auto",
    //                 "startValue": "random",
    //                 "destroy": "none"
    //             }
    //         },
    //         "stroke": {
    //             "width": 0
    //         },
    //         "zIndex": {
    //             "value": {
    //                 "min": 0,
    //                 "max": 100
    //             },
    //             "opacityRate": 10,
    //             "sizeRate": 10,
    //             "velocityRate": 10
    //         },
    //         "destroy": {
    //             "bounds": {},
    //             "mode": "none",
    //             "split": {
    //                 "count": 1,
    //                 "factor": {
    //                     "value": 3
    //                 },
    //                 "rate": {
    //                     "value": {
    //                         "min": 4,
    //                         "max": 9
    //                     }
    //                 },
    //                 "sizeOffset": true,
    //                 "particles": {}
    //             }
    //         },
    //         "roll": {
    //             "darken": {
    //                 "enable": false,
    //                 "value": 0
    //             },
    //             "enable": false,
    //             "enlighten": {
    //                 "enable": false,
    //                 "value": 0
    //             },
    //             "mode": "vertical",
    //             "speed": 25
    //         },
    //         "tilt": {
    //             "value": 0,
    //             "animation": {
    //                 "enable": false,
    //                 "speed": 0,
    //                 "decay": 0,
    //                 "sync": false
    //             },
    //             "direction": "clockwise",
    //             "enable": false
    //         },
    //         "twinkle": {
    //             "lines": {
    //                 "enable": false,
    //                 "frequency": 0.05,
    //                 "opacity": 1
    //             },
    //             "particles": {
    //                 "enable": false,
    //                 "frequency": 0.05,
    //                 "opacity": 1
    //             }
    //         },
    //         "wobble": {
    //             "distance": 10,
    //             "enable": true,
    //             "speed": {
    //                 "angle": 10,
    //                 "move": 10
    //             }
    //         },
    //         "life": {
    //             "count": 0,
    //             "delay": {
    //                 "value": 0,
    //                 "sync": false
    //             },
    //             "duration": {
    //                 "value": 0,
    //                 "sync": false
    //             }
    //         },
    //         "rotate": {
    //             "value": 0,
    //             "animation": {
    //                 "enable": false,
    //                 "speed": 0,
    //                 "decay": 0,
    //                 "sync": false
    //             },
    //             "direction": "clockwise",
    //             "path": false
    //         },
    //         "orbit": {
    //             "animation": {
    //                 "count": 0,
    //                 "enable": false,
    //                 "speed": 1,
    //                 "decay": 0,
    //                 "delay": 0,
    //                 "sync": false
    //             },
    //             "enable": false,
    //             "opacity": 1,
    //             "rotation": {
    //                 "value": 45
    //             },
    //             "width": 1
    //         },
    //         "links": {
    //             "blink": false,
    //             "color": {
    //                 "value": "#fff"
    //             },
    //             "consent": false,
    //             "distance": 100,
    //             "enable": false,
    //             "frequency": 1,
    //             "opacity": 1,
    //             "shadow": {
    //                 "blur": 5,
    //                 "color": {
    //                     "value": "#000"
    //                 },
    //                 "enable": false
    //             },
    //             "triangles": {
    //                 "enable": false,
    //                 "frequency": 1
    //             },
    //             "width": 1,
    //             "warp": false
    //         },
    //         "repulse": {
    //             "value": 0,
    //             "enabled": false,
    //             "distance": 1,
    //             "duration": 1,
    //             "factor": 1,
    //             "speed": 1
    //         }
    //     },
    //     "pauseOnBlur": true,
    //     "pauseOnOutsideViewport": true,
    //     "responsive": [],
    //     "smooth": false,
    //     "style": {},
    //     "themes": [],
    //     "zLayers": 100,
    //     "name": "Snow",
    //     "motion": {
    //         "disable": false,
    //         "reduce": {
    //             "factor": 4,
    //             "value": true
    //         }
    //     }
    // };

    const option = {
        "autoPlay": true,
        "background": {
            "color": {
                "value": ""
            },
            "image": "",
            "position": "",
            "repeat": "",
            "size": "",
            "opacity": 1
        },
        "backgroundMask": {
            "composite": "destination-out",
            "cover": {
                "color": {
                    "value": "#fff"
                },
                "opacity": 1
            },
            "enable": false
        },
        "clear": true,
        "defaultThemes": {},
        "delay": 0,
        "fullScreen": {
            "enable": true,
            "zIndex": 0
        },
        "detectRetina": true,
        "duration": 0,
        "fpsLimit": 120,
        "interactivity": {
            "detectsOn": "window",
            "events": {
                "onClick": {
                    "enable": true,
                    "mode": "push"
                },
                "onDiv": {
                    "selectors": {},
                    "enable": false,
                    "mode": {},
                    "type": "circle"
                },
                "onHover": {
                    "enable": false,
                    "mode": {},
                    "parallax": {
                        "enable": false,
                        "force": 2,
                        "smooth": 10
                    }
                },
                "resize": {
                    "delay": 0.5,
                    "enable": true
                }
            },
            "modes": {
                "trail": {
                    "delay": 1,
                    "pauseOnStop": false,
                    "quantity": 1
                },
                "attract": {
                    "distance": 200,
                    "duration": 0.4,
                    "easing": "ease-out-quad",
                    "factor": 1,
                    "maxSpeed": 50,
                    "speed": 1
                },
                "bounce": {
                    "distance": 200
                },
                "bubble": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "mix": false,
                        "selectors": {}
                    }
                },
                "connect": {
                    "distance": 80,
                    "links": {
                        "opacity": 0.5
                    },
                    "radius": 60
                },
                "grab": {
                    "distance": 100,
                    "links": {
                        "blink": false,
                        "consent": false,
                        "opacity": 1
                    }
                },
                "push": {
                    "default": true,
                    "groups": [],
                    "quantity": 10
                },
                "remove": {
                    "quantity": 2
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "divs": {
                        "distance": 200,
                        "duration": 0.4,
                        "factor": 100,
                        "speed": 1,
                        "maxSpeed": 50,
                        "easing": "ease-out-quad",
                        "selectors": {}
                    }
                },
                "slow": {
                    "factor": 3,
                    "radius": 200
                },
                "light": {
                    "area": {
                        "gradient": {
                            "start": {
                                "value": "#ffffff"
                            },
                            "stop": {
                                "value": "#000000"
                            }
                        },
                        "radius": 1000
                    },
                    "shadow": {
                        "color": {
                            "value": "#000000"
                        },
                        "length": 2000
                    }
                },
                "absorbers": {
                    "color": {
                        "value": "#000000"
                    },
                    "draggable": false,
                    "opacity": 1,
                    "destroy": true,
                    "orbits": false,
                    "size": {
                        "value": 50,
                        "density": 5,
                        "limit": {
                            "radius": 0,
                            "mass": 0
                        }
                    }
                }
            }
        },
        "manualParticles": [],
        "particles": {
            "bounce": {
                "horizontal": {
                    "value": 1
                },
                "vertical": {
                    "value": 1
                }
            },
            "collisions": {
                "absorb": {
                    "speed": 2
                },
                "bounce": {
                    "horizontal": {
                        "value": 1
                    },
                    "vertical": {
                        "value": 1
                    }
                },
                "enable": true,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                    "enable": true,
                    "retries": 0
                }
            },
            "color": {
                "value": "#ffffff",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": true,
                        "offset": 0
                    }
                }
            },
            "effect": {
                "close": true,
                "fill": true,
                "options": {},
                "type": {}
            },
            "groups": [],
            "move": {
                "angle": {
                    "offset": 0,
                    "value": 90
                },
                "attract": {
                    "distance": 200,
                    "enable": false,
                    "rotate": {
                        "x": 3000,
                        "y": 3000
                    }
                },
                "center": {
                    "x": 50,
                    "y": 50,
                    "mode": "percent",
                    "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "top",
                "drift": 0,
                "enable": true,
                "gravity": {
                    "acceleration": 9.81,
                    "enable": false,
                    "inverse": false,
                    "maxSpeed": 50
                },
                "path": {
                    "clamp": true,
                    "delay": {
                        "value": 0
                    },
                    "enable": false,
                    "options": {}
                },
                "outModes": {
                    "default": "out",
                    "bottom": "out",
                    "left": "out",
                    "right": "out",
                    "top": "out"
                },
                "random": false,
                "size": false,
                "speed": 0.5,
                "spin": {
                    "acceleration": 0,
                    "enable": false
                },
                "straight": true,
                "trail": {
                    "enable": false,
                    "length": 10,
                    "fill": {}
                },
                "vibrate": false,
                "warp": true
            },
            "number": {
                "density": {
                    "enable": false,
                    "width": 1920,
                    "height": 1080
                },
                "limit": {
                    "mode": "delete",
                    "value": 0
                },
                "value": 300
            },
            "opacity": {
                "value": {
                    "min": 0.1,
                    "max": 1
                },
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 2,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
                }
            },
            "reduceDuplicates": false,
            "shadow": {
                "blur": 0,
                "color": {
                    "value": "#000"
                },
                "enable": false,
                "offset": {
                    "x": 0,
                    "y": 0
                }
            },
            "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
            },
            "size": {
                "value": {
                    "min": 1,
                    "max": 2
                },
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 5,
                    "decay": 0,
                    "delay": 0,
                    "sync": false,
                    "mode": "auto",
                    "startValue": "random",
                    "destroy": "none"
                }
            },
            "stroke": {
                "width": 0
            },
            "zIndex": {
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
            },
            "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                    "count": 1,
                    "factor": {
                        "value": 3
                    },
                    "rate": {
                        "value": {
                            "min": 4,
                            "max": 9
                        }
                    },
                    "sizeOffset": true,
                    "particles": {}
                }
            },
            "roll": {
                "darken": {
                    "enable": false,
                    "value": 0
                },
                "enable": false,
                "enlighten": {
                    "enable": false,
                    "value": 0
                },
                "mode": "vertical",
                "speed": 25
            },
            "tilt": {
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "enable": false
            },
            "twinkle": {
                "lines": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                },
                "particles": {
                    "enable": false,
                    "frequency": 0.05,
                    "opacity": 1
                }
            },
            "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                    "angle": 50,
                    "move": 10
                }
            },
            "life": {
                "count": 0,
                "delay": {
                    "value": 0,
                    "sync": false
                },
                "duration": {
                    "value": 0,
                    "sync": false
                }
            },
            "rotate": {
                "value": 0,
                "animation": {
                    "enable": false,
                    "speed": 0,
                    "decay": 0,
                    "sync": false
                },
                "direction": "clockwise",
                "path": false
            },
            "orbit": {
                "animation": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                    "value": 45
                },
                "width": 1
            },
            "links": {
                "blink": false,
                "color": {
                    "value": "#fff"
                },
                "consent": false,
                "distance": 100,
                "enable": false,
                "frequency": 1,
                "opacity": 1,
                "shadow": {
                    "blur": 5,
                    "color": {
                        "value": "#000"
                    },
                    "enable": false
                },
                "triangles": {
                    "enable": false,
                    "frequency": 1
                },
                "width": 1,
                "warp": false
            },
            "repulse": {
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "smooth": false,
        "style": {},
        "themes": [],
        "zLayers": 100,
        "name": "Absorbers",
        "absorbers": {
            "color": {
                "value": "#000000"
            },
            "draggable": true,
            "opacity": 1,
            "destroy": true,
            "orbits": false,
            "size": {
                "value": {
                    "min": 5,
                    "max": 10
                },
                "density": 5,
                "limit": {
                    "radius": 10,
                    "mass": 0
                }
            },
            "position": {
                "x": 50,
                "y": 50
            }
        },
        "motion": {
            "disable": false,
            "reduce": {
                "factor": 4,
                "value": true
            }
        }
    };

    return (
        <div>
            {init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={option}
            />
            }
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