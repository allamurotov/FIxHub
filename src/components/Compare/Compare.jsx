import React from 'react'
import './Compare.css'

const rows = [
  { label: 'Narx', a: "100 000–300 000 so'm", b: "20 000–50 000 so'm" },
  { label: 'Kutish vaqti', a: '1–3 soat', b: '5 daqiqa' },
  { label: 'Sifat kafolati', a: "✗ Yo'q", b: '✓ Reyting tizimi' },
  { label: "Kichik muammolar", a: '✗ Ortiqcha xarajat', b: '✓ O\'zingiz hal' },
  { label: 'Xavfsizlik', a: '✗ Notanish odam', b: '✓ Uyga kirishi shart emas' },
]

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
        {rows.map((r, idx) => (
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
