import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Contact />
            <Footer />
        </div>
    )
}
