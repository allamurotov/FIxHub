import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Categories from '../components/Categories/Categories'
import Masters from '../components/Masters/Masters'
import Compare from '../components/Compare/Compare'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'
import Modal from '../components/Modal/Modal'
import useScrollReveal from '../hooks/useScrollReveal'

const Home = ({ isModalOpen: initialOpen = false, setIsModalOpen: parentSetModal, darkMode = false, toggleDark = () => {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(initialOpen)
  // If parent passed setter keep it in sync
  React.useEffect(() => {
    if (parentSetModal) parentSetModal(isModalOpen)
  }, [isModalOpen])

  // setup scroll reveal for listed selectors
  useScrollReveal()

  return (
    <div>
      <Navbar openModal={() => setIsModalOpen(true)} darkMode={darkMode} toggleDark={toggleDark} />
      <Hero openModal={() => setIsModalOpen(true)} />
      <HowItWorks />
      <Categories />
      <Masters openModal={() => setIsModalOpen(true)} />
      <Compare />
      <CTA openModal={() => setIsModalOpen(true)} />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Home
