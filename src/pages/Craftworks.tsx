import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../craftworks/Navbar'
import Hero from '../craftworks/Hero'
import Services from '../craftworks/Services'
import Showcase from '../craftworks/Showcase'
import Contact from '../craftworks/Contact'
import Footer from '../craftworks/Footer'

export default function Craftworks() {

    const { pathname } = useLocation();

    /* Now why is this here you might ask?
     * React Router has this annoying tendency of remembering your scroll position.
     * So, when a ProjectTile brings you here, you're in the middle of the page!
     * To fix that I use useEffect and scroll the user to the top of the page.
     */
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="animate-slideup">
            <Navbar />
            <Hero />
            <Services />
            <Showcase />
            <Contact />
            <Footer />
        </div>
    )
}
