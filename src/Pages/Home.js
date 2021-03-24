import "../App.css"
import HeroSection from "../Components/HeroSection/HeroSection"
import React from "react"
import Cards from "../Components/Cards/Cards"
import Footer from "../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  )
}

export default Home
