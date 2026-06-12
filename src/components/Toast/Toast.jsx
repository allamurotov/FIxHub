import React, { useEffect } from 'react'
import './Toast.css'

const Toast = ({ message = '', onClose = () => {} }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  if (!message) return null

  return (
    <div className="toast">
      {message}
    </div>
  )
}

export default Toast
