import React from "react"
import FooterBrand from "./FooterBrand"
import FooterBottom from "./FooterBottom"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top-single">
            <FooterBrand />
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  )
}

export default Footer
