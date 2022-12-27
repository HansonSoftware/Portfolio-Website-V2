import React from "react";
import { FaAngleDoubleDown } from 'react-icons/fa'

export default function Welcome() {
    return (
        <div className="hero min-h-screen pt-24">
            <div className="hero-content text-center">
                <div className="sm:max-w-3xl max-w-sm animate-slideup">
                    <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold">Hey, I'm Hayden.</h1>
                    <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-bold text-primary">A Software Developer.</h1>
                    <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg py-5">More specifically, I'm a frontend developer with a keen eye for good design, experienced with backend developement and software testing. I approach every project with <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">craftsmanship</span> in mind.</p>
                </div>
            </div>
            {/* Scroll Bounce Start */}
            <div className="grid grid-flow-row place-content-center animate-slideup" style={{paddingTop: "32rem"}}>
                <span className="animate-bounce text-primary"><FaAngleDoubleDown style={{width: "34px", height: "34px"}}/></span>
            </div>
            {/* Scroll Bounce End */}
        </div>
    )
}
