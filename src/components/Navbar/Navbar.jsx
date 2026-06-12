import React, { useState } from 'react'
import './Navbar.css'

const Navbar = ({ openModal = () => {}, darkMode = false, toggleDark = () => {} }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="logo">Fix<span>Hub</span></div>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#how" onClick={() => setMenuOpen(false)}>Qanday ishlaydi</a></li>
        <li><a href="#categories" onClick={() => setMenuOpen(false)}>Kategoriyalar</a></li>
        <li><a href="#masters" onClick={() => setMenuOpen(false)}>Ustalar</a></li>
        <li>
          <button className="nav-cta" onClick={() => { openModal(); setMenuOpen(false) }}>
            Ro'yxatdan o'tish
          </button>
        </li>
        <li>
          <button className="theme-toggle" onClick={toggleDark} aria-label="Tungi rejim">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>

      <button
        className={`hamburger${menuOpen ? ' active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menyuni ochish"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar
