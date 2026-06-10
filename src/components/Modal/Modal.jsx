import React, { useEffect, useRef } from 'react'
import './Modal.css'

const Modal = ({ isOpen = false, onClose = () => {} }) => {
  const overlayRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    if (!overlayRef.current) return
    const el = overlayRef.current
    const onOverlayClick = (e) => { if (e.target === el) onClose() }
    // attach listener after current event loop to avoid closing immediately
    const timer = setTimeout(() => el.addEventListener('click', onOverlayClick), 0)
    return () => {
      clearTimeout(timer)
      try { el.removeEventListener('click', onOverlayClick) } catch (e) {}
    }
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className={`modal-overlay open`} ref={overlayRef}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-title">Boshlash</div>
        <div className="modal-sub">Ro'yxatdan o'ting — bepul va tez</div>
        <div className="form-group">
          <label>Ism va Familiya</label>
          <input type="text" placeholder="Abdullayev Jasur" />
        </div>
        <div className="form-group">
          <label>Telefon raqam</label>
          <input type="tel" placeholder="+998 90 123 45 67" />
        </div>
        <div className="form-group">
          <label>Siz kim sifatida keldingiz?</label>
          <select>
            <option>Mijoz — maslahat olmoqchiman</option>
            <option>Usta — maslahat bermoqchiman</option>
          </select>
        </div>
        <button className="modal-submit" onClick={() => { onClose(); alert("✅ Tabriklaymiz! Tez orada siz bilan bog'lanamiz.") }}>Davom etish →</button>
      </div>
    </div>
  )
}

export default Modal
