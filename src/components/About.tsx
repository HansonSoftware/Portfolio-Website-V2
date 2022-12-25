import React from 'react'
import portrait from '../images/personal/me.jpg'

export default function About() {
    return (
            <div className="pt-32">
                <div className="lg:px-20 px-10">
                <h1 className="pb-8 text-8xl animate-slideup3">About Me</h1>
                {/* About Header Start */}
                <div className="flex flex-wrap content-between gap-10 min-h-screen">
                    {/* Image Start */}
                    <div className='animate-slideup2'>
                        <img src={portrait} className="border-2 border-base-200 rounded-3xl" style={{maxHeight: "35rem", maxWidth: "35rem"}} />
                    </div>
                    {/* Image End */}
                    {/* P's Start */}
                    <div className='animate-slideup2' style={{maxHeight: "40rem", maxWidth: "35rem"}}>
                        <p className='text-xl'>I'm Hayden, a senior at George Mason University. I'm set to graduate in December
                            of 2023 and will be available for full time work both remotely and in the Fairfax, VA area.
                        </p>
                        <br/>
                        <p className='text-lg'>
                            I have about 7 years of programming experience and have remained passionate about software design, usability, and maintainability. 
                            These are all things that I strive to get better at each and every day.
                        </p>
                        <br/>
                        <p className='text-lg'>
                            When it comes to designing something new, writing code, writing tests, etc... I am very detail oriented and documentation heavy.
                            I like to think of myself as a "Digital Craftsman" as <a className="underline" href="https://jacobleech.com/">this developer</a> puts it.
                        </p>
                        <br/>
                        <p className='text-lg'>
                            Outside of the world of engineering, I like to travel, hike, jog etc... I like to stay active since most of my hours are spent at my home office. 
                            I'm also a bit of a PC and car enthusiast as well!
                        </p>
                    </div>
                    {/* P's End */}
                </div>
                {/* About Header End */}

                {/* History Start */}
                <div className="flex flex-wrap content-between gap-10 min-h-screen">
                    <h1 className="text-6xl">Relevant Work History</h1>
                </div>
                {/* History End */}

                {/* Education Start */}
                <div className="flex flex-wrap content-between gap-10 min-h-screen">
                    <h1 className="text-6xl">My Degree 🎓</h1>
                </div>
                {/* Education End */}
                </div>
            </div>
    )
}
