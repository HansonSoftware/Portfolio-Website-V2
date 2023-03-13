import React from 'react'

export default function Services() {
    return (
        <div id="services" className="pt-32 bg-base-100 h-screen px-8">
            <div className="grid place-content-center place-items-center">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl pb-8">Our Mission</h1>

                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                        <h1>Mission Statement</h1>
                    </div> 
                    <div className="divider lg:divider-horizontal"></div> 
                    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
                        <h1>Services:</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}