import React from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { IoMdCart } from 'react-icons/io'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    return (
        <div className="navbar bg-base-100 z-20 p-4 fixed border-b-2 border-primary">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Mission</a></li>
                    <li><a>Works</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>

                {/* Start Desktop Nav */}
                <div className="tooltip tooltip-right" data-tip="Back to Portfolio">
                    <a className="btn btn-ghost btn-circle btn-md lg:flex hidden" href="/">
                        <h1 className="text-primary"><MdArrowBackIosNew style={{width: "28", height: "28"}}/></h1>
                    </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl bg-base-100 z-10">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#showcase">Showcase</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <h1><IoMdCart style={{width: "32", height: "32"}}/></h1>
            </div>
        </div>
    )
}
