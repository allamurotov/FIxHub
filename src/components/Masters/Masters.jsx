import React, { useState, useEffect } from 'react'
import { mastersData } from '../../data'
import './Masters.css'

const SkeletonMasterCard = () => (
  <div className="master-card skeleton-card">
    <div className="master-header">
      <div className="skeleton skeleton-avatar" />
      <div className="master-info">
        <div className="skeleton skeleton-text skeleton-text-long" />
        <div className="skeleton skeleton-text skeleton-text-medium" style={{ marginTop: 6 }} />
        <div className="skeleton skeleton-text skeleton-text-short" style={{ marginTop: 6 }} />
      </div>
    </div>
    <div className="master-body">
      <div className="master-tags">
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-tag" />
        <div className="skeleton skeleton-tag" />
      </div>
      <div className="master-footer">
        <div className="skeleton skeleton-text skeleton-text-short" />
        <div className="skeleton skeleton-btn" />
      </div>
    </div>
  </div>
)

const Masters = ({ openModal = () => {} }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const renderCards = () => {
    if (isLoading) {
      return Array.from({ length: 3 }).map((_, i) => <SkeletonMasterCard key={i} />)
    }
    return mastersData.map((m, i) => (
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
    ))
  }

  return (
    <section className="section" id="masters">
      <div className="section-label">Mashhur ustalar</div>
      <div className="section-title">Eng yaxshi baholangan mutaxassislar</div>
      <div className="masters-grid">
        {renderCards()}
      </div>
    </section>
  )
}

export default Masters
