import React from 'react'
import Contact from '../components/Contact'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactForm />
            <Contact />
            <Footer />
        </div>
    )
}
