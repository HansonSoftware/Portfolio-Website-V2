import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'

import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';
import WritingPage from './pages/WritingPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/:title' element={<ProjectPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/writing' element={<WritingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
