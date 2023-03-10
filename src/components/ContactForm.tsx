import React from 'react'

export default function ContactForm() {
    return (
        <div className="pt-32">
            <div className="lg:px-20 px-10">
                <h1 className="pb-8 lg:text-8xl md:text-7xl text-6xl">Contact</h1>
                {/* <div className="grid place-content-center pb-32">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <h1 className="pb-4 lg:text-5xl md:text-4xl text-3xl">Connect With Me:</h1>
                            <p>GitHub: ___</p>
                    </div>
                </div> */}
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
