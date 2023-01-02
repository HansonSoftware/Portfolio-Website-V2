import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import SkillTile from '../components/SkillTile';

/* Image Imports */
import pr_favorites from '../images/recipe/FavoritesPage.png'
import pr_signup from '../images/recipe/SignUpPage.png'
import pr_search from '../images/recipe/SearchForEggs.png'
import spotify from '../images/spotify/homepage.png'
import graph from '../images/graph/graph.gif'
import shell_home from '../images/shell/shell_start.png'
import scheduler from '../images/scheduler/scheduler_start.png'
import craigslist from '../images/craigslist/craigslist.png'

export default function ProjectPage() {
    const { pathname } = useLocation();

    /* Now why is this here you might ask?
     * React Router has this annoying tendency of remembering your scroll position.
     * So, when a ProjectTile brings you here, you're in the middle of the page!
     * To fix that I use useEffect and scroll the user to the top of the page.
     */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const { title } = useParams();

    return (
        <div>
            <div className="lg:px-20 px-10 pt-32">
                {/* Spotify App */}
                {title === "Spotify Player" && (
                    <div>
                        {/* Header Start */}
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex flex-col gap-2' style={{minWidth: "50vw"}}>
                                <h1 className="text-6xl">Spotify Player</h1>
                                <div className="p-2 bg-base-100 w-60 rounded-2xl">
                                    <h2 className="text-xl">Web App</h2>
                                    <h3 className="text-lg text-primary">Lead Developer • 2022</h3>
                                </div>
                            </div>
                        </div>
                        {/* Header End */}
                        {/* Image Start */}
                        <div className="pt-6 flex flex-col gap-6 items-center" style={{margin: "0px auto", aspectRatio: "16/9", maxWidth: "80vw"}}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="mockup-window pt-4 border border-base-300">
                                    <div className="flex justify-center bg-base-200">
                                        <img src={spotify} alt="project_image" className="rounded-sm" style={{aspectRatio: "16/9", width: "100%", height: "100%"}} />
                                    </div>
                                </div>
                                <h2 className="text-2xl">☝️ Home Page</h2>
                            </div>
                            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-6">more images soon...</h1>
                        </div>
                        {/* Image End */}
                        {/* Details Section Start */}
                        <div className="pt-16 flex flex-col gap-10" style={{margin: "0px auto", maxWidth: "80vw"}}>
                            <div className=''>
                                <h1 className="text-4xl pb-3 underline">Bullet Points:</h1>
                                <div className="text-xl">
                                    <li>This is a side project of mine I call "Melodify", a Spotify Player.</li>
                                    <li>Melodify is build with Vite, React, JavaScript, TypeScript and Express.</li>
                                    <li>This project is using Spotify's Web API.</li>
                                    <li>I am using Tailwind CSS and Daisy UI to help me with styling.</li>
                                </div>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">The Goal:</h1>
                                <p>
                                    The main goal with this project was to have fun with Spotify's Web API. I also wanted to get better at using React with Vite. 
                                    I wanted to create a listening experience that was as close to Spotify as possible, with a new frontend design. 
                                </p>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">What I learned:</h1>
                                <p>
                                    The main thing that I learned from this project was how to overcome the challenges of using an unfamiliar API. Thankfully, Spotifys documentation is 
                                    laid out wonderfully and was fairly easy to understand. 
                                    <br/>
                                    <br/>
                                    I also learned that TypeScript is not easy. It took me a while to get the hang of things, and even then, I still 
                                    found myself turning strict mode off and using JavaScript in some areas. Like all things in life, learning TypeScript is defenitely going to be a long journey.
                                </p>
                            </div>
                            <div className='grid place-items-center'>
                                <h1 className="text-4xl pb-3 underline">The Tools I Used:</h1>
                                <div className="flex flex-wrap gap-6">
                                    <SkillTile name={"Vite"} icon={"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"} />
                                    <SkillTile name={"React"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
                                    <SkillTile name={"TypeScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"} />
                                    <SkillTile name={"Express"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} />
                                    <SkillTile name={"Node"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"} />
                                    <SkillTile name={"Tailwind"} icon={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} />
                                    <SkillTile name={"Figma"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} />
                                </div>
                            </div>
                        </div>
                        {/* Details Section End */}
                        {/* More Info Start */}
                        <div className="grid place-items-center pt-32">
                            <div className="grid grid-flow-col bg-base-200 border border-base-300 rounded-2xl lg:w-96" style={{maxWidth: "60rem", minWidth: "16rem"}}>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Role</code>
                                        <h3 className="text-xl">Lead Developer</h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Type</code>
                                        <h3 className="text-xl">Side Project</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Links</code>
                                        <h3 className="text-xl"><a className="underline cursor-pointer" href="https://spotifywebapp.netlify.app/" target="_blank">Site</a> • <a className="underline cursor-pointer" href="https://github.com/HansonSoftware/Spotify-Web-App" target="_blank">GitHub</a></h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Year</code>
                                        <h3 className="text-xl">2022</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More Info End */}
                    </div>
                )}
                {/* Spotify App */}

                {/* Pocket Recipes App */}
                {title === "Pocket Recipes" && (
                    <div>
                        {/* Header Start */}
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex flex-col gap-2' style={{minWidth: "50vw"}}>
                                <h1 className="text-6xl">Pocket Recipes</h1>
                                <div className="p-2 bg-base-100 w-80 rounded-2xl">
                                    <h2 className="text-xl">Mobile App</h2>
                                    <h3 className="text-lg text-primary">Frontend Developer • 2022</h3>
                                </div>
                            </div>
                        </div>
                        {/* Header End */}
                        {/* Image Start */}
                        <div className="pt-6 flex flex-col gap-6 items-center" style={{margin: "0px auto", aspectRatio: "16/9", maxWidth: "80vw"}}>
                            <div className="flex flex-wrap gap-12">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="mockup-phone border-neutral">
                                        <div className="camera"></div> 
                                        <div className="display">
                                            <div className="artboard artboard-demo" style={{width: "16rem", height: "28rem"}}>
                                                <img src={pr_signup} alt="project_image" style={{width: "16rem", height: "28rem"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl">Sign Up Form</h2>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="mockup-phone border-neutral">
                                        <div className="camera"></div> 
                                        <div className="display">
                                            <div className="artboard artboard-demo" style={{width: "16rem", height: "28rem"}}>
                                                <img src={pr_favorites} alt="project_image" style={{width: "16rem", height: "28rem"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl">Favorites Page</h2>
                                </div>
                                <div className="flex flex-col items-center gap-4">
                                    <div className="mockup-phone border-neutral">
                                        <div className="camera"></div> 
                                        <div className="display">
                                            <div className="artboard artboard-demo" style={{width: "16rem", height: "28rem"}}>
                                                <img src={pr_search} alt="project_image" style={{width: "16rem", height: "28rem"}} />
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-2xl">Search Results Page</h2>
                                </div>
                            </div>
                            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-6">more images soon...</h1>
                        </div>
                        {/* Image End */}
                        {/* Details Section Start */}
                        <div className="pt-16 flex flex-col gap-10" style={{margin: "0px auto", maxWidth: "80vw"}}>
                            <div className=''>
                                <h1 className="text-4xl pb-3 underline">Bullet Points:</h1>
                                <div className="text-xl">
                                    <li>This is a class project, I was paired with a great team.</li>
                                    <li>We used Jira to manage our Agile approach to development.</li>
                                    <li>This project was built with Flutter, Dart, Java Spring, and Mongo DB.</li>
                                </div>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">The Goal:</h1>
                                <p>
                                    The main goal with this project was to work together to build a mobile app that would benefit our users lives, making it easy to browse and find new recipes to cook!
                                    <br/>
                                    <br/>
                                    An underlying goal was to familiarize oursleves with Agile Methodoligies and implement them into our workflow, we used SCRUM.
                                </p>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">What I learned:</h1>
                                <p>
                                    The main thing that I learned from this project was how to design a mobile application from the ground up. As the lead frontend developer, I was in charge of how everything looked, along with how the entire Flutter UI worked.
                                    <br/>
                                    <br/>
                                    I also learned that Jira is a fantastic way to manage a project.
                                </p>
                            </div>
                            <div className='grid place-items-center'>
                                <h1 className="text-4xl pb-3 underline">The Tools We Used:</h1>
                                <div className="flex flex-wrap gap-6">
                                    <SkillTile name={"Mongo DB"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} />
                                    <SkillTile name={"Spring"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"}/>
                                    <SkillTile name={"Flutter"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} />
                                    <SkillTile name={"Dart"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"} />
                                </div>
                            </div>
                        </div>
                        {/* Details Section End */}
                        {/* More Info Start */}
                        <div className="grid place-items-center pt-32">
                            <div className="grid grid-flow-col bg-base-200 border border-base-300 rounded-2xl lg:w-96" style={{maxWidth: "60rem", minWidth: "16rem"}}>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Role</code>
                                        <h3 className="text-xl">Frontend Developer</h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Type</code>
                                        <h3 className="text-xl">Class Project</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Link</code>
                                        <h3 className="text-xl"><a className="underline cursor-pointer" href="https://github.com/HansonSoftware/Pocket-Recipes" target="_blank">GitHub</a></h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Year</code>
                                        <h3 className="text-xl">2022</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More Info End */}
                    </div>
                )}
                {/* Pocket Recipes App */}

                {/* Taskman Shell */}
                {title === "Taskman Shell" && (
                    <div>
                        {/* Header Start */}
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex flex-col gap-2' style={{minWidth: "50vw"}}>
                                <h1 className="text-6xl">Taskman Shell</h1>
                                <div className="p-2 bg-base-100 w-60 rounded-2xl">
                                    <h2 className="text-xl">Unix Program</h2>
                                    <h3 className="text-lg text-primary">Developer • 2022</h3>
                                </div>
                            </div>
                        </div>
                        {/* Header End */}
                        {/* Image Start */}
                        <div className="pt-6 flex flex-col gap-6 items-center" style={{margin: "0px auto", aspectRatio: "16/9", maxWidth: "80vw"}}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="mockup-window pt-4 border border-base-300">
                                    <div className="flex justify-center bg-base-200">
                                        <img src={shell_home} alt="project_image" className="rounded-sm" style={{aspectRatio: "16/9", width: "100%", height: "100%"}} />
                                    </div>
                                </div>
                                <h2 className="text-2xl">☝️ Welcome Message</h2>
                            </div>
                            <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary pb-6">more images soon...</h1>
                        </div>
                        {/* Image End */}
                        {/* Details Section Start */}
                        <div className="pt-16 flex flex-col gap-10" style={{margin: "0px auto", maxWidth: "80vw"}}>
                            <div className=''>
                                <h1 className="text-4xl pb-3 underline">Bullet Points:</h1>
                                <div className="text-xl">
                                    <li>This is a side project of mine I call "Melodify", a Spotify Player.</li>
                                    <li>Melodify is build with Vite, React, JavaScript, TypeScript and Express.</li>
                                    <li>This project is using Spotify's Web API.</li>
                                    <li>I am using Tailwind CSS and Daisy UI to help me with styling.</li>
                                </div>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">The Goal:</h1>
                                <p>
                                    The main goal with this project was to have fun with Spotify's Web API. I also wanted to get better at using React with Vite. 
                                    I wanted to create a listening experience that was as close to Spotify as possible, with a new frontend design. 
                                </p>
                            </div>
                            <div className='text-xl'>
                                <h1 className="text-4xl pb-3 underline">What I learned:</h1>
                                <div>
                                    <li>Signal Handling</li>
                                    <li>How to build a shell from scratch</li>
                                    <li>Efficient memory management</li>
                                </div>
                            </div>
                            <div className='grid place-items-center'>
                                <h1 className="text-4xl pb-3 underline">The Tools I Used:</h1>
                                <div className="flex flex-wrap gap-6">
                                    <SkillTile name={"C"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"} />
                                </div>
                            </div>
                        </div>
                        {/* Details Section End */}
                        {/* More Info Start */}
                        <div className="grid place-items-center pt-32">
                            <div className="grid grid-flow-col bg-base-200 border border-base-300 rounded-2xl lg:w-96" style={{maxWidth: "60rem", minWidth: "16rem"}}>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Role</code>
                                        <h3 className="text-xl">Lead Developer</h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Type</code>
                                        <h3 className="text-xl">Side Project</h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 p-4">
                                    <div>
                                        <code className="text-xl underline font-bold">Links</code>
                                        <h3 className="text-xl"><a className="underline cursor-pointer" href="https://spotifywebapp.netlify.app/" target="_blank">Site</a> • <a className="underline cursor-pointer" href="https://github.com/HansonSoftware/Spotify-Web-App" target="_blank">GitHub</a></h3>
                                    </div>
                                    <div>
                                        <code className="text-xl underline font-bold">Year</code>
                                        <h3 className="text-xl">2022</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More Info End */}
                    </div>
                )}
                {/* Taskman Shell */}

                {title === "Craigslist Reborn" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>User Interface</h3>
                            <h4>Designer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"Figma"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"}
                        />
                        </div>
                    </div>
                    <div className='craigslist-project-images'>

                    </div>
                    <div className='project-section'>
                        <h1>The Goal</h1>
                        <p>
                            The goal was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Development</h1>
                        <p>
                            The development was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Maintainability</h1>
                        <p>
                            THIS PAGE IS A WORK IN PROGRESS ...
                        </p>
                    </div>
                    </div>
                )}

                {title === "Algorithm Simulation" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>GUI</h3>
                            <h4>Developer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"Java"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"}
                        />
                        </div>
                    </div>
                    <div className='algo-project-images'>

                    </div>
                    <div className='project-section'>
                        <h1>The Goal</h1>
                        <p>
                            The goal was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Development</h1>
                        <p>
                            The development was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Maintainability</h1>
                        <p>
                            THIS PAGE IS A WORK IN PROGRESS ...
                        </p>
                    </div>
                    </div>
                )}

                {title === "Process Scheduler" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>Unix Program</h3>
                            <h4>Developer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"C"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"}
                        />
                        </div>
                    </div>
                    <div className='sheduler-project-images'>

                    </div>
                    <div className='project-section'>
                        <h1>The Goal</h1>
                        <p>
                            The goal was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Development</h1>
                        <p>
                            The development was ...
                        </p>
                    </div>
                    <div className='project-section'>
                        <h1>Maintainability</h1>
                        <p>
                            THIS PAGE IS A WORK IN PROGRESS ...
                        </p>
                    </div>
                    </div>
                )}
                </div>
            <Contact />
            <Footer />
        </div>
    )
}
