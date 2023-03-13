import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import Craftworks from './pages/Craftworks';
import ContactPage from './pages/ContactPage';

export default function App() {

    return (
        <main>
            <Router>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/projects/:title' element={<ProjectPage />} />
                        <Route path='/skills' element={<SkillsPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/craftworks' element={<Craftworks />} />
                    </Routes>
            </Router>
        </main>
    )
}
