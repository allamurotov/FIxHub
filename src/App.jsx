import React, { useState, useEffect, useCallback } from 'react'
import Home from './pages/Home'
import Toast from './components/Toast/Toast'
import './index.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toast, setToast] = useState('')
    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem('darkMode')
      return saved ? saved === 'true' : false
    })

    useEffect(() => {
      if (darkMode) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', String(darkMode))
    }, [darkMode])

  const showToast = useCallback((msg) => setToast(msg), [])

  return (
    <div>
        <Home
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          darkMode={darkMode}
          toggleDark={() => setDarkMode(d => !d)}
          onRegisterSuccess={() => showToast("Muvaffaqiyatli ro'yxatdan o'tdingiz!")}
        />
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  )
}

export default App
