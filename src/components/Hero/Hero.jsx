import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = ({ openModal = () => {} }) => {
  const [seconds, setSeconds] = useState(262)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(timerRef.current)
  }, [])

  const formatTimer = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0')
    const s = String(secs % 60).padStart(2, '0')
    return `00:${m}:${s}`
  }

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-badge"><span className="dot"/>Yangi avlod maslahat xizmati</div>
        <h1>Usta emas —<br/><em>Maslahat</em><br/>chaqiring</h1>
        <p className="hero-sub">Jo'mrak buzildimi? Kompyuter ishlamayaptimi?<br/>Usta uyingizga kelishini kutmang — 10 daqiqa video-qo'ng'iroqda muammoni hal qiling.</p>
        <div className="search-wrap">
          <input className="search-input" type="text" placeholder="Qanday muammo bor? (santexnik, elektrik...)" />
          <button className="search-btn">Topish →</button>
        </div>
        <div className="hero-btns">
          <button className="btn-primary" onClick={openModal}>Hozir maslahat olish</button>
          <button className="btn-secondary" onClick={() => document.getElementById('how')?.scrollIntoView({behavior:'smooth'})}>Qanday ishlaydi?</button>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><div className="stat-num">320+</div><div className="stat-label">Malakali usta</div></div>
          <div className="stat-item"><div className="stat-num">4.9★</div><div className="stat-label">O'rtacha reyting</div></div>
          <div className="stat-item"><div className="stat-num">5 min</div><div className="stat-label">O'rtacha javob vaqti</div></div>
        </div>
      </div>

      <div className="hero-visual">
        <div style={{position:'relative', padding:24}}>
          <div className="video-card">
            <div className="video-avatar-row">
              <div className="v-pane">
                <div className="avatar-circle">👤</div>
                <div className="v-label"><span className="rec"/> Mijoz</div>
              </div>
              <div className="v-pane">
                <div className="avatar-circle usta">🔧</div>
                <div className="v-label"><span className="rec"/> Usta Jasur</div>
              </div>
            </div>
            <div className="video-overlay-bar">
              <div className="call-info">
                <div className="call-title">Santexnik maslahat</div>
                <div className="call-timer" id="timer-display">{formatTimer(seconds)}</div>
              </div>
              <div className="call-btns">
                <div className="call-btn gray">🎤</div>
                <div className="call-btn gray">📷</div>
                <div className="call-btn red">📞</div>
              </div>
            </div>
          </div>
          <div className="floating-chip price"><span className="chip-icon">💳</span><div><div>20 000 so'm</div><div className="chip-sub">10 daqiqa uchun</div></div></div>
          <div className="floating-chip rating"><span className="chip-icon">⭐</span><div><div>4.97 reyting</div><div className="chip-sub">1,240 ta sharh</div></div></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
