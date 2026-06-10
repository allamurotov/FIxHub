import { useEffect } from 'react'

const useScrollReveal = (selector = '.master-card, .step-card, .cat-card') => {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1'
          e.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1 })

    els.forEach(el => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [selector])
}

export default useScrollReveal
