import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import About from '../components/About';
import Blog from '../components/Blog';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function AboutPage() {
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
        <div>
            <Navbar />
            <About />
            <Blog />
            <Contact />
            <Footer />
        </div>
    )
}
