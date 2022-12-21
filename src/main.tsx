import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage'
import './index.css'
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import SkillsPage from './pages/SkillsPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/:title' element={<ProjectPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
