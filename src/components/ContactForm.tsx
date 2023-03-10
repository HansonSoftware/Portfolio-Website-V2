import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineCodepenCircle } from 'react-icons/ai'
import { AiFillMail } from 'react-icons/ai'
import { SiFrontendmentor } from 'react-icons/si'

export default function ContactForm() {
    return (
        <div className="pt-32">
            <div className="lg:px-20 px-10 grid place-content-center animate-slideup">
                <h1 className="pb-8 lg:text-8xl md:text-7xl text-5xl">Get in touch.</h1>
                <div className="grid place-content-center">
                    <div className="flex flex-col gap-2 pb-32">
                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><AiFillGithub style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">Github: <a className="underline" href="/" about="__blank">HansonSoftware</a></h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><AiFillLinkedin style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">LinkedIn: <a className="underline" href="/" about="__blank">HansonHayden</a></h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><AiOutlineCodepenCircle style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">CodePen: <a className="underline" href="/" about="__blank">HansonHayden</a></h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><SiFrontendmentor style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">Frontend Mentor: <a className="underline" href="/" about="__blank">Link</a></h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><AiFillMail style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">Email: <a className="underline" href="/" about="__blank">HaydenHansonDev</a></h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <h1 className="text-primary"><BsFileEarmarkPerson style={{width: "30", height: "30"}}/></h1>
                            <h1 className="lg:text-3xl md:text-2xl text-xl">Resume: <a className="underline" href="/" about="__blank">View</a> | <a className="underline" href="/" about="__blank">Download</a></h1>
                        </div>
                    </div>
                </div>
                <div className="grid place-content-center">
                    {/* Form Container */}
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <div>
                            <h1 className="pb-4 lg:text-5xl md:text-4xl text-3xl">Send me a message:</h1>
                        </div>
                        {/* <form action="https://formsubmit.co/hansonhayd3n@gmail.com" method="POST" className="flex flex-col gap-2 max-w-2xl"> */}
                        <form action="" className="flex flex-col gap-2 max-w-2xl">
                            <div className="flex flex-row gap-1">
                                <input type="text" placeholder="First Name" className="input input-bordered placeholder-base-content input-primary w-full" />
                                <input type="text" placeholder="Last Name" className="input input-bordered placeholder-base-content input-primary w-full" />
                            </div>
                            <div>
                                <input type="text" placeholder="Email" className="input input-bordered input-primary placeholder-base-content w-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <select className="select select-primary w-full">
                                    <option disabled selected>What is this for?</option>
                                    <option>I'd like to hire you!</option>
                                    <option>Freelance Job</option>
                                    <option>Just saying hey!</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Type your message here..." className="input input-bordered input-primary placeholder-base-content w-full" />
                            </div>
                            <div>
                                <button className="btn normal-case w-full">Send your message</button>
                            </div>
                        </form>
                    </div>
                    {/* Form Container */}
                </div>
            </div>
        </div>
    )
}
