import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import WritingPage from './pages/WritingPage';
import LoginPage from './pages/LoginPage';
export default function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Router>
            <Navbar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/projects/:title' element={<ProjectPage />} />
                    <Route path='/skills' element={<SkillsPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/writing' element={<WritingPage />} />
                    <Route path="/writing/login" element={<LoginPage setIsAuth={setIsAuth} />} />
                </Routes>
        </Router>
    )
}
