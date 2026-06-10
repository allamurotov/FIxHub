import React from 'react'
import './Masters.css'

const mastersData = [
  {
    name: 'Jasur Toshmatov',
    spec: 'Santexnik · 9 yil tajriba',
    rating: '4.98',
    reviews: '1,240',
    avatarEmoji: '👨‍🔧',
    avatarBg: 'linear-gradient(135deg,#4a9eff,#2f7ee8)',
    tags: ['Jo\'mrak','Quvur','Unitaz','Suv isitgich'],
    price: '20 000'
  },
  {
    name: 'Nilufar Karimova',
    spec: 'IT mutaxassis · 7 yil tajriba',
    rating: '4.96',
    reviews: '876',
    avatarEmoji: '👩‍💻',
    avatarBg: 'linear-gradient(135deg,#f0a500,#e07b00)',
    tags: ['Windows','Virus','Internet','Printer'],
    price: '25 000'
  },
  {
    name: 'Bobur Yusupov',
    spec: 'Elektrik · 12 yil tajriba',
    rating: '4.97',
    reviews: '2,105',
    avatarEmoji: '⚡',
    avatarBg: 'linear-gradient(135deg,#2eb87a,#1a9060)',
    tags: ['Rozetka','Svet o\'chishi','Elektroprovodka'],
    price: '30 000'
  }
]

const Masters = ({ openModal = () => {} }) => {
  return (
    <section className="section" id="masters">
      <div className="section-label">Mashhur ustalar</div>
      <div className="section-title">Eng yaxshi baholangan mutaxassislar</div>
      <div className="masters-grid">
        {mastersData.map((m, i) => (
          <div className="master-card" key={i}>
            <div className="master-header">
              <div className="master-avatar" style={{background: m.avatarBg}}>{m.avatarEmoji}</div>
              <div className="master-info">
                <div className="master-name">{m.name}</div>
                <div className="master-spec">{m.spec}</div>
                <div className="master-rating"><span className="stars">★★★★★</span><strong>{m.rating}</strong><span style={{color:'var(--muted)',fontSize:12}}>({m.reviews})</span></div>
              </div>
            </div>
            <div className="master-body">
              <div className="master-tags">{m.tags.map((t, idx) => <span className="tag" key={idx}>{t}</span>)}</div>
              <div className="master-footer">
                <div><div className="price-badge">{m.price} <span>so'm / 10 min</span></div></div>
                <button className="book-btn" onClick={openModal}>Bog'lanish</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Masters
