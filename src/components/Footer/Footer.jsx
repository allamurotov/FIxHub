import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="logo" style={{color:'white'}}>Fix<span style={{color:'var(--accent)'}}>Hub</span></div>
      <div className="footer-links">
        <a href="#">Ustalar uchun</a>
        <a href="#">Mijozlar uchun</a>
        <a href="#">Yordam</a>
        <a href="#">Shartlar</a>
      </div>
      <div className="footer-copy">© 2025 FixHub. Barcha huquqlar himoyalangan.</div>
    </footer>
  )
}

export default Footer
