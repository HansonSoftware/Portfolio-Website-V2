import React from 'react'
import SkillTile from './SkillTile'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

export default function Skills() {

    return (
        <div className="pt-32">

        {/* Progress Bars Start */}
        <div className="lg:px-20 px-10">
            <h1 className="pb-8 text-8xl animate-slideup3">Skills</h1>
            <div className="flex flex-wrap gap-10 pt-10">

                {/* Language Section Start */}
                <div className="flex flex-col gap-2 items-center bg-base-200 border-2 border-base-300 bg-opacity-80 backdrop-blur-sm rounded-3xl animate-slideup" style={{width: "25rem", height: "18rem"}}>

                    <h1 className="text-3xl underline pt-4 animate-slideup2">Languages</h1>
                    <div className="flex flex-row text-2xl gap-2 animate-slideup3 pt-4" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>JavaScript  </code> 
                        </div>
                            <progress className="progress progress-primary z-0 w-64 h-5" value="85" max="100"></progress>
                            {/* <div className="w-full flex justify-between z-50 text-3xl font-bold px-2 translate-y-8">
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                                <span>|</span>
                            </div> */}
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>C  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="65" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Dart  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="50" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Java  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="70" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Python  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="55" max="100"></progress>
                    </div>
                </div>
                {/* Language Section End */}

                {/* Expertise Section Start */}
                <div className="flex flex-col gap-2 items-center bg-base-200 border-2 border-base-300 bg-opacity-80 backdrop-blur-sm rounded-3xl animate-slideup" style={{width: "25rem", height: "18rem"}}>

                    <h1 className="text-3xl underline pt-4 animate-slideup2">Versatility</h1>
                    <div className="flex flex-row text-2xl gap-2 animate-slideup3 pt-4" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Frontend  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="90" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Backend  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="65" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Databases  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="75" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-40">
                            <code>Testing  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="75" max="100"></progress>
                    </div>
                </div>
                {/* Expertise Section End */}

                {/* Frameworks Section Start */}
                <div className="flex flex-col gap-2 items-center bg-base-200 border-2 border-base-300 bg-opacity-80 backdrop-blur-sm rounded-3xl animate-slideup" style={{width: "25rem", height: "18rem"}}>

                    <h1 className="text-3xl underline pt-4 animate-slideup2">Frameworks</h1>
                    <div className="flex flex-row text-2xl gap-2 animate-slideup3 pt-4" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-32">
                            <code>React  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="85" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-32">
                            <code>Svelte  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="65" max="100"></progress>
                    </div>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-32">
                            <code>Vue  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="50" max="100"></progress>
                    </div>

                    <br/>

                    <div className="flex flex-row text-2xl gap-2 animate-slideup3" style={{width: "20rem"}}>
                        <div className="flex justify-end text-xl font-bold w-32">
                            <code>Flutter  </code> 
                        </div>
                        <progress className="progress progress-primary w-64 h-5" value="50" max="100"></progress>
                    </div>
                </div>
                {/* Frameworks Section End */}
            </div>
            {/* Scroll Message Start */}
            <div className="grid grid-flow-row place-content-center pt-36">
                <span className="animate-bounce text-primary"><FaAngleDoubleDown style={{width: "34px", height: "34px"}}/></span>
            </div>
            {/* Scroll Message End */}
        </div>
        {/* Progress Bars End */}

        {/* Toolbox Start */}
        <div className="lg:px-20 px-10 pt-36">
            <div className="flex flex-row gap-8">
                <h1 className='text-5xl pb-6'>My Toolbox</h1>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-circle btn-ghost btn-sm text-info">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-info"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </label>
                    <div tabIndex={0} className="card card-compact dropdown-content shadow bg-base-300 rounded-box w-80">
                        <div className="card-body">
                            <h2 className="card-title">What do these icons mean?</h2> 
                            <p>These are tools that I am experienced with in some meaningful way! At the very least I am familiar with every tool on this list and could quickly jump back into using.</p>
                            <br/>
                            <div className="flex flex-row gap-2">
                                <AiFillStar className="text-secondary w-5 h-5"/>
                                <p>Indicates a favorite.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-4xl italic'>“You don’t understand anything until you learn it more than one way.”</h2>
            <h3 className='text-3xl pl-2 pb-6'>- Marvin Minsky</h3>
            <div className="flex flex-wrap sm:justify-start justify-center gap-4 pt-6 pb-16 animate-slideup">
                <SkillTile name={"Java"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"C"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"} />
                </div>
                <SkillTile name={"HTML"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"} />
                <SkillTile name={"CSS"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"} />
                <SkillTile name={"JavaScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"TypeScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"} />
                </div>
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Vite"} icon={"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"} />
                </div>
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Tailwind"} icon={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} />
                </div>
                <SkillTile name={"Bootstrap"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"} />
                <SkillTile name={"Figma"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Firebase"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"} />
                </div>
                <SkillTile name={"Mongo DB"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} />
                <SkillTile name={"Express"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"React"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} />
                </div>
                <SkillTile name={"Node"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Svelte"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"} />
                </div>
                <SkillTile name={"Vue"} icon={"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Flutter"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} />
                </div>
                <SkillTile name={"Dart"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"} />
                <SkillTile name={"Python"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"} />
                <SkillTile name={"Unix"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unix/unix-original.svg"} />
                <SkillTile name={"Git"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"} />
                <SkillTile name={"JUnit"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} />
                <div className="indicator">
                    <span className="indicator-item translate-x-1 translate-y-0"><AiFillStar className="text-secondary w-6 h-6"/></span>
                    <SkillTile name={"Jest"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"} />
                </div>
                <SkillTile name={"Jira"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"} />
            </div>
        </div>
        {/* Toolbox End */}

        {/* Web Dev Start */}
        <div className="lg:px-20 px-10 pt-36 min-h-screen lg:max-h-screen">
            <h1 className='text-6xl text-primary pb-6'>Web</h1>
            <div className='flex flex-wrap content-between'>
                {/* Info (Left) */}
                <div className="" style={{minWidth: "55vw"}}>
                    <div className="flex flex-col gap-4">
                        {/* Web Experience */}
                        <div className="" style={{minHeight: "30vh"}}>
                            <h1 className="text-3xl underline pb-2">Experience</h1>
                            <div style={{maxWidth: "45rem"}}>
                                <li className="text-lg">This is my strong suite, and also my favorite area of development at the moment.</li>
                                <li className="text-lg">I have used React and Svelte multiple times and love working with either.</li>
                                <li className="text-lg">I have worked with multiple API's and built microservices with Express.</li>
                                <li className="text-lg">I can create beautiful yet functional UI's while also integrating backend features.</li>
                                <li className="text-lg">I have taken <a className="underline" href="">SWE 432</a> at GMU as an elective.</li>
                            </div>
                        </div>
                        {/* Web Experience */}
                        {/* Web Projects */}
                        <div className="flex flex-col gap-1 pb-10 w-64">
                            <h1 className="text-3xl underline">Web Projects</h1>
                            <a className="btn btn-outline text-lg" href="">Spotify Player</a>
                            <a className="btn btn-outline text-lg" href="">Svelte Note</a>
                            <a className="btn btn-outline text-lg" href="">Microservice</a>
                            <a className="btn btn-outline text-lg" href="">This Site (V2)</a>
                            <a className="btn btn-outline text-lg" href="">Old Site (V1)</a>
                        </div>
                        {/* Web Projects */}
                    </div>
                </div>
                {/* Info (Left) */}
                {/* Stack (Right) */}
                <div className="flex flex-col gap-4" style={{minWidth: "30vw"}}>
                    <h1 className="text-3xl underline">My Most Used Stack</h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-0">
                            <div className="translate-x-5">
                                <SkillTile name={"Firebase"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"}/>
                            </div>
                            <div className="translate-x-2">
                                <SkillTile name={"Express"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"}/>
                            </div>
                            <SkillTile name={"React"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"}/>
                            <div className="translate-x-3">
                                <SkillTile name={"Node"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-0">
                            <div className="translate-x-5 rotate-6">
                                <SkillTile name={"Tailwind"} icon={"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"} />
                            </div>
                            <div className="translate-x-1">
                                <SkillTile name={"TypeScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"} />
                            </div>
                            <SkillTile name={"JavaScript"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"} />
                            <div className="translate-x-1">
                                <SkillTile name={"Vite"} icon={"https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stack (Right) */}
            </div>
        </div>
        {/* Web Dev End */}

        {/* Mobile Start */}
        <div className="lg:px-20 px-10 pt-36 min-h-screen">
            <h1 className='text-6xl text-primary pb-6'>Mobile</h1>
            <div className='flex flex-wrap content-between'>
                {/* Stack (Left) */}
                <div className="flex flex-col gap-4" style={{minWidth: "35vw"}}>
                    <h1 className="text-3xl underline">Stack Used</h1>
                    <div className="flex flex-row gap-2 pb-10">
                        <div className="flex flex-col gap-0">
                            <div className="translate-x-5 rotate-12">
                                <SkillTile name={"Mongo DB"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} />
                            </div>
                            <div className="translate-x-2 rotate-6">
                                <SkillTile name={"Spring"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"}/>
                            </div>
                            <SkillTile name={"Flutter"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"} />
                            <div className="translate-x-3">
                                <SkillTile name={"Dart"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stack (Left) */}
                {/* Info (Right) */}
                <div className="">
                    <div className="flex flex-col gap-4">
                        {/* Mobile Experience */}
                        <div className="" style={{minHeight: "50vh"}}>
                            <h1 className="text-3xl underline pb-2">Experience</h1>
                            <div style={{maxWidth: "45rem"}}>
                                <li className="text-lg">I was the lead frontend developer on a mobile project at GMU.</li>
                                <li className="text-lg">I am experieced with Flutter and Dart.</li>
                                <li className="text-lg">I am familiar with React Native, and want to practice more!</li>
                                <li className="text-lg">I am open to learning Swift and or Kotlin for native iOS and Android development.</li>
                                <li className="text-lg">I can create beautiful yet functional UI's while also integrating backend features.</li>
                                <li className="text-lg">I am going to take <a className="underline" href="">CS 477</a> at GMU as an elective to further my experience.</li>
                            </div>
                        </div>
                        {/* Mobile Experience */}
                        {/* Mobile Projects */}
                        <div className="pb-10">
                            <h1 className="text-3xl underline pb-2">Lonely Mobile Project</h1>
                            <div>
                                <a className="btn btn-outline text-lg" href="">Pocket Recipes 🥕</a>
                            </div>
                        </div>
                        {/* Mobile Projects */}
                    </div>
                </div>
                {/* Info (Right) */}
            </div>
        </div>
        {/* Mobile End */}

        {/* Unix Start */}
        <div className="lg:px-20 px-10 pt-36 min-h-screen">
            <h1 className='text-6xl text-primary pb-6'>Unix Development</h1>
            <div className='flex flex-wrap content-between'>
                {/* Info (Left) */}
                <div className="" style={{minWidth: "50vw"}}>
                    <div className="flex flex-col gap-4">
                        {/* Unix Experience */}
                        <div className="" style={{minHeight: "40vh"}}>
                            <h1 className="text-3xl underline">Experience</h1>
                            <div style={{maxWidth: "45rem"}}>
                                <li className="text-lg">Zeus at GMU.</li>
                                <li className="text-lg">Familiar with Linux.</li>
                                <li className="text-lg">CS 367.</li>
                                <li className="text-lg">CS 468.</li>
                                <li className="text-lg">CS 471.</li>
                                <li className="text-lg">I include Rust here and not in my toolbox bevcause this is a very new tool for me.</li>
                                <li className="text-lg">I plan to dive deeper into Rust development in my free time this year.</li>
                            </div>
                        </div>
                        {/* Unix Experience */}
                        {/* Unix Projects */}
                        <div className="pb-10">
                            <h1 className="text-3xl underline pb-2">Unix Projects</h1>
                            <div className="flex flex-col gap-1 pb-10 w-64">
                                <a className="btn btn-outline text-lg" href="">Taskman Shell </a>
                                <a className="btn btn-outline text-lg" href="">Floating Point 🧮</a>
                                <a className="btn btn-outline text-lg" href="">Process Scheduler</a>
                                <a className="btn btn-outline text-lg" href="">Assembly Bomb 💣</a>
                            </div>
                        </div>
                        {/* Unix Projects */}
                    </div>
                </div>
                {/* Info (Left) */}
                {/* Stack (Right) */}
                <div className="flex flex-col" style={{minWidth: "35vw"}}>
                    <h1 className="text-3xl underline">Tools</h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col pt-2 pb-10">
                            <div className="translate-x-3">
                                <SkillTile name={"C"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg"} />
                            </div>
                            <SkillTile name={"Rust"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg"} />
                        </div>
                    </div>
                </div>
                {/* Stack (Right) */}
            </div>
        </div>
        {/* Unix End */}

        {/* Testing Start */}
        <div className="lg:px-20 px-10 pt-36 min-h-full">
            <h1 className='text-6xl text-primary pb-6'>Testing</h1>
            <div className='flex flex-wrap content-between'>
                {/* Stack (Left) */}
                <div className="flex flex-col gap-4" style={{minWidth: "40vw"}}>
                    <h1 className="text-3xl underline">Testing Tools</h1>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col gap-0">
                            <SkillTile name={"Jest"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"} />
                            <div className="translate-x-3">
                                <SkillTile name={"JUnit"} icon={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Stack (Left) */}
                {/* Info (Right) */}
                <div className="" style={{minWidth: "40vw"}}>
                    <div className="flex flex-col gap-4">
                        {/* Testing Experience */}
                        <div className="" style={{minHeight: "50vh"}}>
                            <h1 className="text-3xl underline pb-2">Experience</h1>
                            <div style={{maxWidth: "45rem"}}>
                                <li className="text-lg">I have written many tests in both JUnit and Jest.</li>
                                <li className="text-lg">SWE 437.</li>
                            </div>
                        </div>
                        {/* Testing Experience */}
                    </div>
                </div>
                {/* Info (Right) */}
            </div>
        </div>        
        {/* Testing End */}

        {/* Scroll Message Start */}
        <div className="grid grid-flow-row place-content-center pt-20">
                <span className="animate-bounce text-primary"><FaAngleDoubleDown style={{width: "34px", height: "34px"}}/></span>
            </div>
            {/* Scroll Message End */}

        {/* Development and Design Start */}
        <div className="lg:px-10 px-2 pt-36">
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
                    <div className="w-64 pb-6">
                        <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>Design</h1>
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

    </div>
    )
}
