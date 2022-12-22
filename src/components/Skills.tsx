import React from 'react'
import SkillTile from './SkillTile'
import { FaAngleDoubleDown } from 'react-icons/fa'

export default function Skills() {
    
    return (
        <div className="pt-32">
        {/* Toolbox Start */}
        <div className="lg:px-20 px-10">
            <h1 className="pb-8 text-8xl animate-slideup3">Skills</h1>
            <h1 className='text-5xl pb-6 animate-slideup2'>My Evergrowing Toolbox</h1>
            <h2 className='text-4xl text-primary italic animate-slideup'>“You don’t understand anything until you learn it more than one way.”</h2>
            <h3 className='text-4xl text-primary pl-2 pb-6 animate-slideup'>- Marvin Minsky</h3>
            <div className="flex flex-wrap sm:justify-start justify-center gap-4 pt-6 pb-16 animate-slideup">
                <SkillTile name={"Java"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"} />
                <SkillTile name={"C"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"} />
                <SkillTile name={"HTML"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"} />
                <SkillTile name={"CSS"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"} />
                <SkillTile name={"JavaScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} />
                <SkillTile name={"Bootstrap"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"} />
                <SkillTile name={"Figma"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} />
                <SkillTile name={"Firebase"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"} />
                <SkillTile name={"Express"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} />
                <SkillTile name={"React"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
                <SkillTile name={"Node"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"} />
                <SkillTile name={"Flutter"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} />
                <SkillTile name={"Python"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"} />
                <SkillTile name={"Unix"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg"} />
                <SkillTile name={"Git"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} />
                <SkillTile name={"JUnit"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} />
                <SkillTile name={"Jest"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"} />
                <SkillTile name={"Jira"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"} />
            </div>
        </div>
        {/* Toolbox End */}

        {/* Development and Design Start */}
        <div className="lg:px-10 px-2">
            <div className="flex flex-row flex-wrap sm:justify-start justify-center gap-1">
                {/* Left */}
                <div className="lg:px-10 w-72" style={{minWidth: "45vw"}}>
                    <h1 className='text-5xl font-bold pb-6'>Developement</h1>
                    <div className="">
                        <p className="text-xl">
                            Developing an idea into something concrete and engaging is something that I love to do! 
                            I aim to write code that's simple and maintainable, approaching every project with a sense of craftsmanship.
                        </p>
                        <br />
                        <p className="text-xl">
                            My approach to each project changes from one to another of course, aiming to select the right tools for the job. I am experienced in web development, mobile development and writing programs for Unix systems. 
                            I have a general approach to tackling each of these types of projects and am very plan-driven and detail oriented.
                        </p>
                        <br />
                        <p className="text-xl pb-8">
                            I am a big fan of Agile development. I genuinely feel that most complex software projects should be built this way! 
                            My fixation right now is web dev and my go-to development method at the moment is building with the FERN stack.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className="lg:px-10 w-72" style={{minWidth: "45vw"}}>
                    <div className="w-40 pb-6">
                        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600'>Design</h1>
                    </div>
                    <div className="">
                        <p className="text-xl">
                            Designing something from nothing but an idea is very rewarding. One of my favorite aspects of software engineering is physically drawing out and designing software on paper. 
                            I design with usability in mind, striving to create projects that are accessible to everyone and pleasing to use.
                        </p>
                        <br />
                        <p className="text-xl">
                            I'm comfortable being in a position to design something from scratch, I find it quite fun and love receiving feedback. That being said, I also love to be inspired. 
                            I find inspiration in other developers' designs everyday, and hope that one day I can have that effect on someone too.
                        </p>
                        <br />
                        <p className="text-xl pb-8">
                            I have experience with design tools like Figma, which I find useful for prototyping. However, drawing on notebook pages and messing around with a code playground is more my style. 
                        </p>
                    </div>
                </div>
            </div>  
        </div>
        {/* Development and Design End */}
        
        {/* Scroll Message Start */}
        <div className="grid grid-flow-row place-content-center pt-20">
            {/* <h1 className="text-3xl text-primary">Scroll to learn more about my experience</h1> */}
            <span className="animate-bounce text-primary"><FaAngleDoubleDown style={{width: "34px", height: "34px"}}/></span>
        </div>
        {/* Scroll Message End */}

        <div>
            
        </div>
    </div>
    )
}
