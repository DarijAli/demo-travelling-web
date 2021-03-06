import React from "react"
import "../../App.css"
import { Button } from "../Shared/Button"
import "./HeroSection.css"
import Video from "../../Assets/videos/video-1.mp4"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
