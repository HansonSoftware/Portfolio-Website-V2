import React from 'react'
import github from '../images/personal/profile.png'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Link } from 'react-router-dom'

export default function Navbar() {
    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])
    
    return (
        <div className="navbar bg-base-100 fixed z-20 px-4 rounded-b-md">
            <div className="navbar">

                {/* Mobile Dropdown Start */}
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu dropdown-content mt-3 p-2 px-1 text-xl shadow bg-base-100 rounded-box w-40 z-10">
                    <li tabIndex={0}>
                    <Link to='/' className="justify-between">
                        Portfolio
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                    </Link>
                    <ul className="p-1 bg-base-100 text-lg">
                        <li><Link to='/projects/Spotify Player'>Spotify Player</Link></li>
                        <li><Link to='/projects/Pocket Recipes'>Pocket Recipes</Link></li>
                        <li><Link to='/projects/Taskman Shell'>Taskman Shell</Link></li>
                        <li><Link to='/projects/Svelte Note'>Svelte Note</Link></li>
                        <li><Link to='/projects/Process Scheduler'>Process Scheduler</Link></li>
                        <li><Link to='/projects/Algorithm Simulation'>Algo Simulation</Link></li>
                    </ul>
                    </li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to='/writing'>Writing</Link></li>
                </ul>
                </div>
                {/* Mobile Dropdown End */}

                <a className="btn btn-ghost btn-circle btn-lg lg:flex hidden" href="/">
                    <img src={github} alt="github" className="h-14 w-14 object-fill rounded-full p-0"/>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex z-20">
                <ul className="menu menu-horizontal px-1 text-2xl bg-base-100 z-10">
                    <li tabIndex={0}>
                        <Link to='/'>
                        Portfolio
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </Link>
                        <ul className="p-2 text-lg bg-base-100">
                            <li><Link to='/projects/Spotify Player'>Spotify Player</Link></li>
                            <li><Link to='/projects/Pocket Recipes'>Pocket Recipes</Link></li>
                            <li><Link to='/projects/Taskman Shell'>Taskman Shell</Link></li>
                            <li><Link to='/projects/Svelte Note'>Svelte Note</Link></li>
                            <li><Link to='/projects/Process Scheduler'>Process Scheduler</Link></li>
                            <li><Link to='/projects/Algorithm Simulation'>Algorithm Simulation</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to='/writing'>Writing</Link></li>
                </ul>
            </div>
            <div>
                <label className="swap swap-rotate pl-12">
                    {/*!-- this hidden checkbox controls the state -->*/}
                    <input type="checkbox" />
                    
                    {/*<!-- sun icon -->*/}
                    <svg data-set-theme="night" data-act-class="ACTIVECLASS" className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    {/*<!-- moon icon -->*/}
                    <svg data-set-theme="retro" data-act-class="ACTIVECLASS" className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                </label>
            </div>
        </div>
    )
}
