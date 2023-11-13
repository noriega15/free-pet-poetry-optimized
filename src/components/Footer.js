import React from "react";
import FooterBrand from "./FooterBrand";
import FooterCategories from "./FooterCategories";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="card footer">
          <div className="section footer-top">
            <FooterBrand />
            <FooterCategories />
            <FooterNewsletter />
          </div>
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
