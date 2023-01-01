import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import SkillTile from '../components/SkillTile';

/* Image Imports */
import pocketrecipes from '../images/recipe/FavoritesPage.png'
import spotify from '../images/spotify/homepage.png'
import graph from '../images/graph/graph.gif'
import shell from '../images/shell/shell_start.png'
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
                        <div className="pt-6 w-full flex justify-center">
                            <div className="mockup-window pt-4 border border-base-300">
                                <div className="flex justify-center bg-base-200">
                                    <img src={spotify} alt="project_image" className="rounded-sm" style={{aspectRatio: "16/9", width: "100%", height: "100%"}} />
                                </div>
                            </div>
                        </div>
                        {/* Image End */}
                        {/* Details Section Start */}
                        <div className="pt-6 flex flex-col gap-6">
                            <div className=''>
                                <h1 className="text-4xl">Bullet Points</h1>
                                <div>
                                    <li>This is a side project.</li>
                                    <li>"Melodify" is the name I thought of, stems from Spotify.</li>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className="text-4xl">The Goal</h1>
                                <p>
                                    The goal with this project was to have fun with Spotify's API.
                                </p>
                            </div>
                            <div className=''>
                                <h1 className="text-4xl">Development</h1>
                                <p>
                                    THIS PAGE IS A WORK IN PROGRESS ...
                                </p>
                            </div>
                        </div>
                        {/* Details Section Start */}
                    </div>
                )}
                {/* Spotify App */}

                {title === "Pocket Recipes" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>Mobile App</h3>
                            <h4>Frontend Developer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"Flutter"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"}
                        />
                        </div>
                    </div>
                    <div className='recipes-project-images'>

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

                {title === "Taskman Shell" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>Unix Program</h3>
                            <h4>Lead Developer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"C"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"}
                        />
                        </div>
                    </div>
                    <div className='shell-project-images'>

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
