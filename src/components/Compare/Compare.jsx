import React from 'react'
import { compareRows } from '../../data'
import './Compare.css'

const Compare = () => {
  return (
    <section className="compare" id="compare">
      <div className="section-label">Taqqoslash</div>
      <div className="section-title">Nima uchun FixHub?</div>
      <div className="compare-table">
        <div className="compare-row header">
          <div className="compare-cell"></div>
          <div className="compare-cell">An'anaviy usta</div>
          <div className="compare-cell highlight">FixHub</div>
        </div>
        {compareRows.map((r, idx) => (
          <div className="compare-row" key={idx}>
            <div className="compare-cell" style={{fontWeight:600}}>{r.label}</div>
            <div className="compare-cell">{r.a}</div>
            <div className="compare-cell highlight">{r.b}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Compare
