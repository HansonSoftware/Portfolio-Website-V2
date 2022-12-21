import React from 'react'
import SkillTile from './SkillTile'

export default function Skills() {
    return (
        <div className="pt-28 px-6 animate-slideup">
            <h1 className='text-5xl'>My Toolbox</h1>
            <div className="flex flex-wrap sm:justify-start justify-center gap-4">
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
    )
}
