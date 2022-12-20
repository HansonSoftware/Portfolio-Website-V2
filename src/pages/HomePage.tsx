import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Welcome />
            <Footer />
        </div>
    )
}
