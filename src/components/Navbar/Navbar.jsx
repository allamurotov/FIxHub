import React from 'react'
import './Navbar.css'

const Navbar = ({ openModal = () => {}, darkMode = false, toggleDark = () => {} }) => {
  return (
    <nav className="nav">
      <div className="logo">Usta<span>Connect</span></div>
      <ul className="nav-links">
        <li><a href="#how">Qanday ishlaydi</a></li>
        <li><a href="#categories">Kategoriyalar</a></li>
        <li><a href="#masters">Ustalar</a></li>
        <li><button className="nav-cta" onClick={openModal}>Ro'yxatdan o'tish</button></li>
        <li>
          <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
            {darkMode ? '🌙' : '🌞'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
