import React from "react"

const HeroOriginal = () => {
  return (
    <section className="hero" id="home" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Expressing Love Through Words At</p>

          <h1 className="headline headline-1 section-title">
            <span className="span">Free Pet Poetry</span>
          </h1>

          <p className="hero-text">
            Welcome to Free Pet Poetry, a place where we turn your cherished
            pet's unique story into a beautiful, personalized poem that captures
            the essence of your bond. We are here to celebrate your pet's
            journey and the love you share.
          </p>
          <p className="hero-text">
            Click the link below to request a custom poem that will forever
            honor your beloved companion.
          </p>

          <a
            href="/requestform/"
            target="_blank"
            className="btn-hero btn-primary-hero"
          >
            Request Poetry Here
          </a>
        </div>

        <div className="hero-banner">
          <img
            src="/images/hero-banner.webp"
            width="327"
            height="490"
            alt="A large brownish reddish dog with pointed ears and a tongue sticking completely out, gazing at the viewer while lifting its right front paw. The scene unfolds on a sandy beach with the ocean in the background. Above the dog, a heartfelt poem reads: In memory of a dear friend, a dog departed, tears we've bled. Your pawprints linger in our heart's melody, gone too soon, beneath the moon. Every bark, each tail's sweet sway, brightened days, never a dismay. Though you're not here, forever you'll be, a cherished part of our memory."
            className="w-100"
          />
        </div>

        <img
          src="/images/shadow-1.svg"
          width="500"
          height="800"
          alt="shadows"
          className="hero-bg hero-bg-1"
        />

        <img
          src="/images/shadow-2.svg"
          width="500"
          height="500"
          alt="shadows"
          className="hero-bg hero-bg-2"
        />
      </div>
    </section>
  )
}

export default HeroOriginal
