import React from 'react'
import portrait from '../images/personal/me.jpg'
import degree from '../images/personal/degree.jpg'

export default function About() {
    return (
            <div className="pt-32">
                <div className="lg:px-20 px-10">
                    <h1 className="pb-8 lg:text-8xl md:text-7xl text-6xl animate-slideup3">About Me</h1>
                    {/* About Header Start */}
                    <div className="flex flex-wrap content-between gap-10">
                        {/* Image Start */}
                        <div className='animate-slideup2' style={{maxHeight: "32.5rem", maxWidth: "32.5rem"}}>
                            <img src={portrait} className="border-2 border-base-200 rounded-3xl sm:w-96 sm:h-96 lg:w-full lg:h-full h-80 w-80" />
                        </div>
                        {/* Image End */}
                        {/* P's Start */}
                        <div className='flex flex-col animate-slideup2 pt-12' style={{maxWidth: "40rem"}}>
                            <p className='text-2xl'>I'm Hayden, a senior at George Mason University. I'm set to graduate in December
                                of 2023 and will be available for full time work both remotely and around Fairfax, VA.
                            </p>
                            <br/>
                            <p className='text-xl'>
                                I have about 7 years of programming experience and have remained passionate about software design, usability, and maintainability. 
                                These are all things that I strive to get better at each and every day.
                            </p>
                            <br/>
                            <p className='text-xl'>
                                When it comes to designing something new, writing code, writing tests, etc... I am very detail oriented and documentation heavy.
                                I like to think of myself as a "Digital Craftsman" as <a className="underline" href="https://jacobleech.com/">this developer</a> puts it.
                            </p>
                            <br/>
                            <p className='text-xl'>
                                Outside of the world of engineering, I like to travel, hike, jog etc... I like to stay active since most of my hours are spent at my home office. 
                                I'm also a bit of a PC and car enthusiast as well!
                            </p>
                        </div>
                        {/* P's End */}
                    </div>
                    {/* About Header End */}
                    {/* History Start */}
                    <div className="flex flex-wrap content-between gap-10 pt-36" style={{minHeight: "40vh"}}>
                        <div className="flex flex-col gap-20">
                            <h1 className="text-6xl">Relevant Work History</h1>
                            <div className="flex flex-wrap gap-6">
                            {/* The button for GMU UTA */}
                            <label htmlFor="my-modal-1" className="btn lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-96 sm:h-40 w-80 h-32">
                                <h3 className="text-lg normal-case">
                                    <div className="flex flex-col">
                                        <div>Teaching Assistant | <span>GMU CS</span></div>
                                        <div>08/22 - Present</div>
                                    </div>
                                </h3>
                            </label>
                            <input type="checkbox" id="my-modal-1" className="modal-toggle" />
                            <label htmlFor="my-modal-1" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">
                                    <div className="flex flex-col">
                                        <div>Teaching Assistant | <span>George Mason University</span></div>
                                        <div>08/22 - Present</div>
                                    </div>
                                </h3>
                                <p className="py-4">Here I currently assist the CS department with SWE 205 class sections. This class focusses on Software Usability Analysis and Design. 
                                        I help students engage with the material during in class exercises. I also help on the grading panel.</p>
                            </label>
                            </label>
                            {/* The button for GMU UTA */}
                            {/* The button for Freelance */}
                            <label htmlFor="my-modal-2" className="btn lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-96 sm:h-40 w-80 h-32">
                                <h3 className="text-lg normal-case">
                                    <div className="flex flex-col">
                                        <div>Freelance | Web Development</div>
                                        <div>12/22 - Present</div>
                                    </div>
                                </h3>
                            </label>
                            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                            <label htmlFor="my-modal-2" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">
                                    <div className="flex flex-col">
                                        <div>Freelance | Web Development</div>
                                        <div>12/22 - Present</div>
                                    </div>
                                </h3>
                                <p className="py-4">I'm currently assisting a client design and build a full stack website for their small business. Progress and finished details coming soon!</p>
                            </label>
                            </label>
                            {/* The button for Freelance */}
                            {/* The button to tell people I'm open for hire */}
                            <label htmlFor="my-modal-3" className="btn lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-96 sm:h-40 w-80 h-32">
                                <h3 className="text-lg normal-case">Looking for an Internship!</h3>
                            </label>
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <label htmlFor="my-modal-3" className="modal cursor-pointer">
                            <label className="modal-box relative" htmlFor="">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="text-lg font-bold">My Journey Starts Here...</h3>
                                <p className="py-4">I'm currently searching for a developer or intern position at any size or shape of company.
                                        I am available for and mainly looking for remote work. However, I am in the Fairfax VA area and willing to commute for on-site work :) </p>
                            </label>
                            </label>
                            {/* The button to tell people I'm open for hire */}
                            </div>
                        </div>
                    </div>
                    {/* History End */}
                    {/* Education Start */}
                    <div className="flex flex-wrap content-between gap-10 pt-36" style={{minHeight: "60vh"}}>
                        <div className="flex flex-col gap-10">
                            <h1 className="text-6xl">My Degree 🎓</h1>
                            <div className='flex flex-wrap gap-10'>
                                <div className='flex flex-col gap-8 lg:gap-12'>
                                    <div className="rounded-md">
                                        <h2 className='text-4xl font-bold text-primary'>George Mason University</h2>
                                        <h3 className='text-3xl'><a className="underline" target="_blank" href="https://catalog.gmu.edu/colleges-schools/engineering-computing/school-computing/computer-science/applied-computer-science-bs/#requirementstext">Applied Computer Science B.S</a> - 3.5 GPA</h3>
                                        <h3 className='text-2xl'>Concentration in Software Engineering - 3.9 GPA</h3>
                                    </div>
                                    <div className='text-xl'>
                                        <h3 className='text-3xl'>Chosen Electives</h3>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/swe/" target="_blank">SWE 432</a>: Web App Development</li>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/cs/" target="_blank">CS 450</a>: Database Concepts</li>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/cs/" target="_blank">CS 468</a>: Secure Programming</li>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/syst/" target="_blank">SYST 469</a>: Human Computer Interaction</li>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/cs/" target="_blank">CS 477</a>: Mobile App Development</li>
                                        <li><a className="underline" href="https://catalog.gmu.edu/courses/cs/" target="_blank">CS 490</a>: Design Exhibition</li>
                                    </div>
                                </div>
                                <img className='bg-base-200 border border-base-200 rounded-xl sm:w-96 sm:h-60 lg:w-fit lg:h-fit w-80 h-52' src={degree} style={{aspectRatio: "16/9", maxWidth: "40rem", maxHeight: "22.5rem"}} />
                            </div>
                        </div>
                    </div>
                    {/* Education End */}
                </div>
            </div>
    )
}
