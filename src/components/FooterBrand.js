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
        When an unknown prnoto sans took a galley and scrambled it to make
        specimen book not only five When an unknown prnoto sans took a galley
        and scrambled it to five centurie.
      </p>

      <p className="footer-list-title">Address</p>

      <address className="footer-text address">
        123 Main Street <br />
        New York, NY 10001
      </address>
    </div>
  )
}

export default FooterBrand
