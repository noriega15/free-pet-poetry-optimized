import React, { useEffect, useRef, useState } from "react"
import { IonIcon } from "@ionic/react"
import { arrowForward, arrowBack } from "ionicons/icons"
import slugify from "slugify"

const TopicsSection = ({ data }) => {
  const sliderRef = useRef(null)
  const sliderContainerRef = useRef(null)
  const sliderPrevBtnRef = useRef(null)
  const sliderNextBtnRef = useRef(null)

  const [totalSliderVisibleItems, setTotalSliderVisibleItems] = useState(0)
  const [totalSlidableItems, setTotalSlidableItems] = useState(0)
  const [currentSlidePos, setCurrentSlidePos] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current
    const sliderContainer = sliderContainerRef.current
    const sliderPrevBtn = sliderPrevBtnRef.current
    const sliderNextBtn = sliderNextBtnRef.current

    const updateSlider = () => {
      setTotalSliderVisibleItems(
        Number(getComputedStyle(slider).getPropertyValue("--slider-items"))
      )
      setTotalSlidableItems(
        sliderContainer.childElementCount + 1 - totalSliderVisibleItems
      )
      moveSliderItem()
    }

    const moveSliderItem = () => {
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`
    }

    const slideNext = () => {
      const slideEnd = currentSlidePos >= totalSlidableItems - 1
      setCurrentSlidePos(slideEnd ? 0 : currentSlidePos + 1)
      moveSliderItem()
    }

    const slidePrev = () => {
      const slideStart = currentSlidePos <= 0
      setCurrentSlidePos(
        slideStart ? totalSlidableItems - 1 : currentSlidePos - 1
      )
      moveSliderItem()
    }

    // Ensure the elements exist before attaching event listeners
    if (sliderNextBtn && sliderPrevBtn) {
      sliderNextBtn.addEventListener("click", slideNext)
      sliderPrevBtn.addEventListener("click", slidePrev)
    }

    window.addEventListener("resize", updateSlider)

    // Call updateSlider initially to set up the slider
    updateSlider()

    return () => {
      if (sliderNextBtn && sliderPrevBtn) {
        sliderNextBtn.removeEventListener("click", slideNext)
        sliderPrevBtn.removeEventListener("click", slidePrev)
      }
      window.removeEventListener("resize", updateSlider)
    }
  }, [totalSliderVisibleItems, totalSlidableItems, currentSlidePos])

  // Create an array of objects with specific topics
  const topicsArray = [
    { topic: "Pet Memorial" },
    { topic: "Dogs" },
    { topic: "Cats" },
    { topic: "Birds" },
    { topic: "Small Pets" },
    { topic: "Aquatic Companions" },
    { topic: "Reptiles" },
    { topic: "Pet Care" },
  ]

  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Topics
            </h2>
            <p className="card-text">
              Explore the heartfelt verses spanning topics and immerse yourself
              in the diverse and touching world of 'Free Pet Poetry.'
            </p>
            <div className="btn-group">
              <button
                className="btn-icon"
                aria-label="previous"
                ref={sliderPrevBtnRef}
              >
                <IonIcon icon={arrowBack} aria-hidden="true" />
              </button>
              <button
                className="btn-icon"
                aria-label="next"
                ref={sliderNextBtnRef}
              >
                <IonIcon icon={arrowForward} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="slider" data-slider ref={sliderRef}>
            <ul
              className="slider-list"
              data-slider-container
              ref={sliderContainerRef}
            >
              {topicsArray.map((topicObj, index) => {
                const topicSlug = slugify(topicObj.topic, {
                  lower: true,
                  remove: /[*+~.()'"!:@]/g,
                })

                // Adjusted the image source to match the naming convention
                const imageSource = `/images/topic-${topicSlug}.webp`

                // You can customize the link and other details here
                return (
                  <li className="slider-item" key={index}>
                    <a href={`topics/${topicSlug}`} className="slider-card">
                      <figure className="slider-banner img-holder custom-slider-banner">
                        <img
                          src={imageSource}
                          width="507"
                          height="618"
                          loading="lazy"
                          alt={topicObj.topic}
                          className="img-cover"
                        />
                      </figure>

                      <div className="slider-content">
                        <span className="slider-title">{topicObj.topic}</span>
                        <p className="slider-subtitle">{`${
                          data.filter(post =>
                            post.frontmatter.topic.includes(topicObj.topic)
                          ).length
                        } ${
                          data.filter(post =>
                            post.frontmatter.topic.includes(topicObj.topic)
                          ).length === 1
                            ? "Article"
                            : "Articles"
                        }`}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopicsSection
