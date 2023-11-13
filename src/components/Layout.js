import React from "react"
import "../assets/css/style.css"
import {
  useScrollVisibility,
  useNavbarToggle,
} from "../assets/js/updatescript.js"
import { IonIcon } from "@ionic/react"
import { arrowUpOutline } from "ionicons/icons"
import Header from "./Header.js"
import Footer from "./Footer.js"

function Layout({ children }) {
  const { isVisible, scrollToTop } = useScrollVisibility()
  const { isNavbarOpen, toggleNavbar, closeNavbar } = useNavbarToggle()

  return (
    <>
      <Header
        isNavbarOpen={isNavbarOpen}
        closeNavbar={closeNavbar}
        toggleNavbar={toggleNavbar}
      />
      <main>{children}</main>

      <Footer />
      {/*  
        - #BACK TO TOP
          */}
      <button
        className={`back-to-top-button ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <IonIcon icon={arrowUpOutline} />
      </button>
    </>
  )
}

export default Layout
