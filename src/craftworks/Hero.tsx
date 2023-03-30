import React from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'

export default function Hero() {
    return (
        <section id="home" className="pt-32 bg-base-100 min-h-screen lg:px-8 px-4">

            <div className="grid place-content-center place-items-center">
                <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-3xl pb-8">Craftworks Software</h1>
                <div>
                    <p className="text-center lg:text-2xl md:text-xl sm:text-lg text-sm lg:pb-40 pb-20">Dedicated to making simple, usable software with an extreme focus on craftmanship.</p>
                </div>
                <div>
                    3D Figure coming soon ..
                </div>
                {/* Scroll Bounce Start */}
                <div className="grid place-content-center animate-slideup pt-56">
                    <a className="animate-bounce text-primary" href="#services"><span><FaAngleDoubleDown style={{width: "34px", height: "34px"}}/></span></a>
                </div>
                {/* Scroll Bounce End */}
            </div>
        </section>
    )
}
