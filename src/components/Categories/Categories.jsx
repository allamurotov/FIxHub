import React, { useState, useEffect } from 'react'
import { categoriesData } from '../../data'
import './Categories.css'

const SkeletonCard = () => (
  <div className="cat-card skeleton-card">
    <div className="skeleton skeleton-circle" />
    <div className="skeleton skeleton-text skeleton-text-short" />
    <div className="skeleton skeleton-text skeleton-text-very-short" />
  </div>
)

const Categories = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const renderCards = () => {
    if (isLoading) {
      return Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)
    }
    return categoriesData.map((c, idx) => (
      <div className="cat-card" key={idx}>
        <span className="cat-emoji">{c.emoji}</span>
        <div className="cat-name">{c.name}</div>
        <div className="cat-count">{c.count}</div>
      </div>
    ))
  }

  return (
    <section className="categories" id="categories">
      <div className="section-label">Xizmat turlari</div>
      <div className="section-title" style={{maxWidth:500}}>Har qanday uy muammosi uchun mutaxassis</div>
      <div className="cat-grid">
        {renderCards()}
      </div>
    </section>
  )
}

export default Categories
