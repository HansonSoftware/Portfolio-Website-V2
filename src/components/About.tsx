import React from 'react'
import portrait from '../images/personal/me.jpg'

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
                    <div className='flex flex-col animate-slideup2' style={{maxWidth: "40rem"}}>
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
                <div className="flex flex-wrap content-between gap-10 min-h-screen pt-36">
                    <h1 className="text-6xl">Relevant Work History</h1>
                    <div>
                        <li>
                            Teaching Assistant <span>George Mason University</span>
                            <p>
                                Here I currently assist the CS department with SWE 205 class sections. This class focusses on Software Usability Analysis and Design. 
                                I help students engage with the material during in class exercises. I also help on the grading panel.
                            </p>
                        </li>
                        <li>
                            My Journey Starts Here...
                            <p>
                                I'm currently searching for a developer or intern position at any size or shape of company.
                                I am available for and mainly looking for remote work. However, I am in the Fairfax VA area and willing to commute for on-site work :) 
                            </p>
                        </li>
                    </div>
                </div>
                {/* History End */}

                {/* Education Start */}
                <div className="flex flex-wrap content-between gap-10 min-h-screen pt-36">
                    <h1 className="text-6xl">My Degree 🎓</h1>
                </div>
                {/* Education End */}
                </div>
            </div>
    )
}
