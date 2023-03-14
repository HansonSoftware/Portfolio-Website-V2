import React from 'react'
import example from '../images/craigslist/craigslist.png'

export default function Showcase() {
    return (
        <section id="showcase" className="pt-32 bg-base-100 min-h-screen px-8">
            <div className="grid place-content-center place-items-center">
                <h1 className="lg:text-6xl md:text-6xl sm:text-5xl text-5xl underline pb-8">Showcase</h1>
                <p className="text-lg">This is some of the work we've done.</p>
                <div className="overflow-x-auto">
                    <div className="flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden p-1">
                        <div className="carousel carousel-center rounded-box">
                            <div id="item1" className="carousel-item w-full h-full pt-24">
                                <img src={example} alt="" className="object-contain rounded-xl" />
                            </div> 
                            <div id="item2" className="carousel-item w-full h-full pt-24">
                                <img src={example} alt="" className="object-contain rounded-xl" />
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a> 
                    <a href="#item2" className="btn btn-xs">2</a> 
                </div>
            </div>
        </section>
    )
}