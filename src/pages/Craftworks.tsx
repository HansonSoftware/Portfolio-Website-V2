import React from 'react'
import Navbar from '../craftworks/Navbar'
import Hero from '../craftworks/Hero'
import Services from '../craftworks/Services'
import Showcase from '../craftworks/Showcase'
import Contact from '../craftworks/Contact'

export default function Craftworks() {
    return (
        <div className="animate-slideup">
            <Navbar />
            <Hero />
            <Services />
            <Showcase />
            <Contact />
        </div>
    )
}
