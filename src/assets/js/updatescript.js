import { useState, useEffect } from "react"

export function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Attach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { isVisible, scrollToTop }
}

export function useNavbarToggle() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarOpen(prevState => !prevState)
  }

  const closeNavbar = () => {
    setIsNavbarOpen(false)
  }

  useEffect(() => {
    const closeOnScroll = () => {
      if (isNavbarOpen) {
        closeNavbar()
      }
    }

    // Attach a scroll event listener to close the navbar when scrolling
    window.addEventListener("scroll", closeOnScroll)

    return () => {
      window.removeEventListener("scroll", closeOnScroll)
    }
  }, [isNavbarOpen])

  return { isNavbarOpen, toggleNavbar, closeNavbar }
}
