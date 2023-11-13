import React from "react"
import { IonIcon } from "@ionic/react"
import { logoTwitter, logoFacebook, logoInstagram } from "ionicons/icons"

const FooterBottom = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer-bottom">
      <ul className="footer-bottom-links">
        <li>
          <a href="/about/" className="footer-link hover-2">
            About
          </a>
        </li>

        <li>
          <a href="/privacypolicy/" className="footer-link hover-2">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="/termsofuse/" className="footer-link hover-2">
            Terms of Use
          </a>
        </li>

        <li>
          <a href="/affiliatedisclosure/" className="footer-link hover-2">
            Affiliate Disclosure
          </a>
        </li>
      </ul>

      <p className="copyright">
        &copy; <span id="year">{currentYear}</span>
        &nbsp;
        <a href="/" className="copyright-link">
          Free Pet Poetry
        </a>
      </p>

      <ul className="social-list">
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
      </ul>
    </div>
  )
}

export default FooterBottom
