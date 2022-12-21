import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Portfolio from '../components/Portfolio'

export default function HomePage() {
    return (
        <div>
            <Welcome />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}
