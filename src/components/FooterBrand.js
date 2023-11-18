import React from "react"

const FooterBrand = () => {
  return (
    <div className="footer-brand">
      <a href="https://freepetpoetry.com/" className="logo">
        <img
          src="/images/logo.svg"
          width="119"
          height="37"
          loading="lazy"
          alt="Wren logo"
        />
      </a>

      <p className="footer-text">
        At Free Pet Poetry, we're dedicated to crafting 1000 heartfelt poems by
        the end of 2024. Your generous tips not only sustain our website but
        also directly contribute to creating more heartwarming poems. Join us in
        achieving our goal and spreading joy to pet owners worldwide. Support
        our mission with a tip today! Your generosity fuels our passion for
        celebrating the profound bond between pets and their owners. Every
        contribution, big or small, makes a meaningful difference.
      </p>

      <p className="footer-text">
        Thank you for being a cherished member of the Free Pet Poetry community
        – together, let's continue spreading love and celebrating the
        extraordinary connections we share with our furry friends!
      </p>

      <p class="footer-list-title">
        Tip Here
        <a
          href="https://paypal.me/freepetpoetry?country.x=US&locale.x=en_US"
          target="_blank"
          rel="noreferrer"
        >
          PayPal
        </a>
        <a
          href="https://account.venmo.com/u/freepetpoetry"
          target="_blank"
          rel="noreferrer"
        >
          Venmo
        </a>
        <a
          href="https://cash.app/$freepetpoetry"
          target="_blank"
          rel="noreferrer"
        >
          Cash App
        </a>
      </p>
    </div>
  )
}

export default FooterBrand
