import React from 'react'
import Navbar       from './components/Navbar'
import WhatsAppBtn  from './components/WhatsAppBtn'
import HomePage     from './pages/HomePage'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <WhatsAppBtn />
    </>
  )
}
