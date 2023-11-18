import React from "react"
import { IonIcon } from "@ionic/react"
import {
  closeOutline,
  menuOutline,
  logoTwitter,
  logoFacebook,
  logoInstagram,
} from "ionicons/icons"

const Header = ({ isNavbarOpen, closeNavbar, toggleNavbar }) => {
  const currentYear = new Date().getFullYear()

  return (
    <header className={`header ${isNavbarOpen ? "active" : ""}`} data-header>
      <div className="container">
        <a href="/" className="logo">
          <img
            src="/images/logo.svg"
            width="192"
            alt="Free Pet Poetry logo with a red heart outline and a pawprint in the middle"
          />
        </a>

        <nav className={`navbar ${isNavbarOpen ? "active" : ""}`} data-navbar>
          <div className="navbar-top">
            <a href="/" className="logo">
              <img
                src="/images/logo.svg"
                width="119"
                height="37"
                alt="Free Pet Poetry logo with a red heart outline and a pawprint in the middle"
              />
            </a>

            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
              onClick={closeNavbar}
            >
              <IonIcon icon={closeOutline} aria-hidden="true" />
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a
                href="/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/topics/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                Topics
              </a>
            </li>

            <li>
              <a
                href="/featured-poems/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                Featured Poems
              </a>
            </li>

            <li>
              <a
                href="/recent-poems/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                Recent Poems
              </a>
            </li>

            <li>
              <a
                href="/requestform/"
                className="navbar-link hover-1"
                data-nav-toggler
                onClick={closeNavbar}
              >
                Poetry Requests
              </a>
            </li>
          </ul>

          <div className="navbar-bottom">
            <a
              href="/requestform/"
              className="btn btn-primary navbar-button"
              onClick={closeNavbar}
            >
              Request Poetry Here
            </a>
            <ul className="link-list">
              {/* Include similar onClick handlers for link items */}
              <li>
                <a
                  href="https://twitter.com/freepetpoetry/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon icon={logoTwitter} />
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/freepetpoetry/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon icon={logoFacebook} />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/freepetpoetry/"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IonIcon icon={logoInstagram} />
                  Instagram
                </a>
              </li>

              {/* Include similar onClick handlers for other link items to close the navbar */}
            </ul>
          </div>
          <div className="navbartips-bottom">
            <p>
              Enjoyed our heartfelt pet poetry? Support our dedicated authors by
              leaving a tip! Your generosity fuels our passion for crafting more
              beautiful verses about the pets we love. 🐾💖
            </p>

            <p>Support our mission with a tip today!</p>

            <ul className="link-list">
              <li>
                <a
                  href="https://paypal.me/freepetpoetry?country.x=US&locale.x=en_US"
                  class="navbar-link hover-1"
                  data-nav-toggler
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PayPal
                </a>
              </li>

              <li>
                <a
                  href="https://account.venmo.com/u/freepetpoetry"
                  class="navbar-link hover-1"
                  data-nav-toggler
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Venmo
                </a>
              </li>

              <li>
                <a
                  href="https://cash.app/$freepetpoetry"
                  class="navbar-link hover-1"
                  data-nav-toggler
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cash App
                </a>
              </li>
            </ul>
          </div>

          <p className="copyright-text">
            &copy; <span id="year">{currentYear}</span>
            &nbsp;
            <a href="/" className="copyright-link">
              Free Pet Poetry
            </a>
          </p>
        </nav>

        <a
          href="/requestform/"
          className="btn btn-primary"
          onClick={closeNavbar}
        >
          Request Poetry Here
        </a>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          data-nav-toggler
          onClick={toggleNavbar}
        >
          <IonIcon icon={menuOutline} aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Header
