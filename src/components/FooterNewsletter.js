import React from "react";
import { IonIcon } from "@ionic/react";
import { personOutline, mailOutline, arrowForward } from "ionicons/icons";

const FooterNewsletter = () => {
  return (
    <div className="footer-list">
      <p className="footer-list-title">Newsletter</p>

      <p className="footer-text">
        Sign up to be the first to receive the latest stories inspiring us, case
        studies, and industry news.
      </p>

      <div className="input-wrapper">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="input-field"
          autoComplete="off"
        />

        <IonIcon icon={personOutline} aria-hidden="true" />
      </div>

      <div className="input-wrapper">
        <input
          type="email"
          name="email_address"
          placeholder="Email address"
          required
          className="input-field"
          autoComplete="off"
        />

        <IonIcon icon={mailOutline} aria-hidden="true" />
      </div>

      <a href="https://freepetpoetry.com/" className="btn btn-primary">
        <span className="span">Subscribe</span>
        <IonIcon icon={arrowForward} aria-hidden="true" />
      </a>
    </div>
  );
};

export default FooterNewsletter;
