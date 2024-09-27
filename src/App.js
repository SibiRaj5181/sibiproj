import React from 'react'
import Header from './components/Header'
import './assests/css/style.css'
import Hero from './components/Hero'
import Team from './components/Team'
import Tour from './components/Tour'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Team/>
      <Tour/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  )
}
