import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import SkillTile from '../components/SkillTile';

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
            <div className="project-page-wrapper" id="top">
                {title === "Spotify Player" && (
                    <div>
                    <div className='project-header-wrapper'>
                        <div className='project-left'>
                            <h1>{ title }</h1>
                            <h3>Web App</h3>
                            <h4>Lead Developer</h4>
                        </div>
                        <div className='project-right'>
                        <SkillTile
                            name={"React"}
                            icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}
                        />
                        </div>
                    </div>
                    <div className='spotify-project-images'>

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
