import React from 'react'
import './Categories.css'

const categoriesData = [
  { emoji: '🔧', name: 'Santexnik', count: '48 usta' },
  { emoji: '⚡', name: 'Elektrik', count: '62 usta' },
  { emoji: '💻', name: 'Kompyuter', count: '95 usta' },
  { emoji: '📱', name: 'Telefon', count: '74 usta' },
  { emoji: '❄️', name: 'Konditsioner', count: '31 usta' },
  { emoji: '🚿', name: 'Gaz isitgich', count: '27 usta' },
  { emoji: '🔌', name: 'Maishiy texnika', count: '56 usta' },
  { emoji: '🏗️', name: "Ta'mirlash", count: '43 usta' },
  { emoji: '🔐', name: 'Qulf & eshik', count: '19 usta' },
  { emoji: '🎨', name: "Bo'yoq & suvoq", count: '38 usta' },
]

const Categories = () => {
  return (
    <section className="categories" id="categories">
      <div className="section-label">Xizmat turlari</div>
      <div className="section-title" style={{maxWidth:500}}>Har qanday uy muammosi uchun mutaxassis</div>
      <div className="cat-grid">
        {categoriesData.map((c, idx) => (
          <div className="cat-card" key={idx}>
            <span className="cat-emoji">{c.emoji}</span>
            <div className="cat-name">{c.name}</div>
            <div className="cat-count">{c.count}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
