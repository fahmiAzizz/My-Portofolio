import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './style.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portofolio from './components/Portofolio.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Portofolio />
    <Experience />
    <Contact />
  </React.StrictMode>,
)
