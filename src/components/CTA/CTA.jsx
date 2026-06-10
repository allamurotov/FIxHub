import React from 'react'
import './CTA.css'

const CTA = ({ openModal = () => {} }) => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Usta bo'lishingiz<br/>yoki topishingiz mumkin</h2>
      <p className="cta-sub">O'z bilimingizni pul topishga aylantiring yoki bugun birinchi maslahatni oling</p>
      <div className="cta-btns">
        <button className="btn-light" onClick={openModal}>Usta bo'lish</button>
        <button className="btn-outline-light" onClick={openModal}>Maslahat olish</button>
      </div>
    </section>
  )
}

export default CTA

