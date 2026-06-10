import React from 'react'
import './HowItWorks.css'

const steps = [
  { num: '01', icon: '🔍', title: "Muammoni yozing", desc: "Qanday nosozlik borligini qisqacha kiriting. Tizim sizga mos ustani topadi." },
  { num: '02', icon: '👨‍🔧', title: "Ustani tanlang", desc: "Reyting, narx va sharhlar asosida sizga mos ustani tanlang. Profil va tajribani ko'ring." },
  { num: '03', icon: '💳', title: "To'lov qiling", desc: "20 000 so'mdan boshlab. Click, Payme yoki karta orqali xavfsiz to'lov. Usta kelmasdan oldin." },
  { num: '04', icon: '📱', title: "Video-qo'ng'iroq", desc: "Usta bilan video aloqaga chiqing. U sizni ko'radi, tushuntiradi, yo'l-yo'riq beradi." },
]

const HowItWorks = () => {
  return (
    <section className="section" id="how">
      <div className="section-label">Jarayon</div>
      <div className="section-title">Faqat 4 qadam — va muammo hal</div>
      <div className="steps-grid">
        {steps.map(s => (
          <div className="step-card" key={s.num}>
            <div className="step-num">{s.num}</div>
            <div className="step-icon">{s.icon}</div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
