import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import Portfolio from '../components/Portfolio'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HomePage() {
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
            <Welcome />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}
