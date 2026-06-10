import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import './index.css'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem('darkMode')
      return saved ? saved === 'true' : false
    })

    useEffect(() => {
      if (darkMode) document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', String(darkMode))
    }, [darkMode])

  return (
    <div>
        <Home
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          darkMode={darkMode}
          toggleDark={() => setDarkMode(d => !d)}
        />
    </div>
  )
}

export default App
