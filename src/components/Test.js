import React from "react"
import "./assets/css/style.css"
import {
  useScrollVisibility,
  useNavbarToggle,
} from "./assets/js/updatescript.js"
import { IonIcon } from "@ionic/react"
import {
  logoTwitter,
  logoFacebook,
  logoInstagram,
  arrowUpOutline,
  arrowForward,
  arrowBack,
  timeOutline,
  closeOutline,
  menuOutline,
  arrowForwardOutline,
  personOutline,
  mailOutline,
} from "ionicons/icons"
import TopicsSection from "./components/TopicsSection.js"

function App() {
  const { isVisible, scrollToTop } = useScrollVisibility()
  const { isNavbarOpen, toggleNavbar, closeNavbar } = useNavbarToggle()

  return (
    <div className="App">
      <body id="top">
        {/*
        <!--  
        - #HEADER
          */}
        <header
          className={`header ${isNavbarOpen ? "active" : ""}`}
          data-header
        >
          <div className="container">
            <a href="https://freepetpoetry.com/" className="logo">
              <img
                src="./images/logo.svg"
                width="119"
                height="37"
                alt="Wren logo"
              />
            </a>

            <nav
              className={`navbar ${isNavbarOpen ? "active" : ""}`}
              data-navbar
            >
              <div className="navbar-top">
                <a href="https://freepetpoetry.com/" className="logo">
                  <img
                    src="./images/logo.svg"
                    width="119"
                    height="37"
                    alt="Wren logo"
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
                    href="#home"
                    className="navbar-link hover-1"
                    data-nav-toggler
                    onClick={closeNavbar}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#topics"
                    className="navbar-link hover-1"
                    data-nav-toggler
                    onClick={closeNavbar}
                  >
                    Topics
                  </a>
                </li>

                <li>
                  <a
                    href="#featured"
                    className="navbar-link hover-1"
                    data-nav-toggler
                    onClick={closeNavbar}
                  >
                    Featured Post
                  </a>
                </li>

                <li>
                  <a
                    href="#recent"
                    className="navbar-link hover-1"
                    data-nav-toggler
                    onClick={closeNavbar}
                  >
                    Recent Post
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="navbar-link hover-1"
                    data-nav-toggler
                    onClick={closeNavbar}
                  >
                    Contact
                  </a>
                </li>
              </ul>

              <div className="navbar-bottom">
                <div className="profile-card">
                  <img
                    src="./images/author-1.png"
                    width="48"
                    height="48"
                    alt="Steven"
                    className="profile-banner"
                  />

                  <div>
                    <p className="card-title">Hello Steven !</p>

                    <p className="card-subtitle">You have 3 new messages</p>
                  </div>
                </div>

                <ul className="link-list">
                  {/* Include similar onClick handlers for link items */}
                  <li>
                    <a
                      href="https://freepetpoetry.com/"
                      className="navbar-bottom-link hover-1"
                      onClick={closeNavbar}
                    >
                      Profile
                    </a>
                  </li>

                  {/* Include similar onClick handlers for other link items to close the navbar */}
                </ul>
              </div>

              <p className="copyright-text">
                Copyright 2022 © Wren - Personal Blog Template. Developed by
                codewithsadee
              </p>
            </nav>

            <a
              href="https://freepetpoetry.com/"
              className="btn btn-primary"
              onClick={closeNavbar}
            >
              Subscribe
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
        <main>
          <article>
            {/*
    <!--  
        - #HERO
          -->
    */}

            <section className="hero" id="home" aria-label="home">
              <div className="container">
                <div className="hero-content">
                  <p className="hero-subtitle">Hello Everyone!</p>

                  <h1 className="headline headline-1 section-title">
                    I’m <span className="span">Wren Clark</span>
                  </h1>

                  <p className="hero-text">
                    I use animation as a third dimension by which to simplify
                    experiences and kuiding thro each and every interaction. I’m
                    not adding motion just to spruce things up, but doing it in
                    ways that.
                  </p>

                  <div className="input-wrapper">
                    <input
                      type="email"
                      name="email_address"
                      placeholder="Type your email address"
                      required
                      className="input-field"
                      autoComplete="off"
                    />

                    <button className="btn btn-primary">
                      <span className="span">Subscribe</span>

                      <IonIcon icon={arrowForwardOutline} aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="hero-banner">
                  <img
                    src="./images/hero-banner.png"
                    width="327"
                    height="490"
                    alt="Wren Clark"
                    className="w-100"
                  />

                  <img
                    src="./images/pattern-2.svg"
                    width="27"
                    height="26"
                    alt="shape"
                    className="shape shape-1"
                  />

                  <img
                    src="./images/pattern-3.svg"
                    width="27"
                    height="26"
                    alt="shape"
                    className="shape shape-2"
                  />
                </div>

                <img
                  src="./images/shadow-1.svg"
                  width="500"
                  height="800"
                  alt=""
                  className="hero-bg hero-bg-1"
                />

                <img
                  src="./images/shadow-2.svg"
                  width="500"
                  height="500"
                  alt=""
                  className="hero-bg hero-bg-2"
                />
              </div>
            </section>

            {/*
    <!--  
        - #TOPICS
          -->
    */}
            <TopicsSection />
            <section
              className="topics"
              id="topics"
              aria-labelledby="topic-label"
            >
              <div className="container">
                <div className="card topic-card">
                  <div className="card-content">
                    <h2
                      className="headline headline-2 section-title card-title"
                      id="topic-label"
                    >
                      Hot topics
                    </h2>

                    <p className="card-text">
                      Don't miss out on the latest news about Travel tips,
                      Hotels review, Food guide...
                    </p>

                    <div className="btn-group">
                      <button
                        className="btn-icon"
                        aria-label="previous"
                        data-slider-prev
                      >
                        <IonIcon icon={arrowBack} aria-hidden="true" />
                      </button>

                      <button
                        className="btn-icon"
                        aria-label="next"
                        data-slider-next
                      >
                        <IonIcon icon={arrowForward} aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="slider" data-slider>
                    <ul className="slider-list" data-slider-container>
                      <li className="slider-item">
                        <a
                          href="https://freepetpoetry.com/"
                          className="slider-card"
                        >
                          <figure className="slider-banner img-holder custom-slider-banner">
                            <img
                              src="./images/topic-1.png"
                              width="507"
                              height="618"
                              loading="lazy"
                              alt="Sport"
                              className="img-cover"
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">Sport</span>

                            <p className="slider-subtitle">38 Articles</p>
                          </div>
                        </a>
                      </li>

                      <li className="slider-item">
                        <a
                          href="https://freepetpoetry.com/"
                          className="slider-card"
                        >
                          <figure className="slider-banner img-holder custom-slider-banner">
                            <img
                              src="./images/topic-2.png"
                              width="507"
                              height="618"
                              loading="lazy"
                              alt="Travel"
                              className="img-cover"
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">Travel</span>

                            <p className="slider-subtitle">63 Articles</p>
                          </div>
                        </a>
                      </li>

                      <li className="slider-item">
                        <a
                          href="https://freepetpoetry.com/"
                          className="slider-card"
                        >
                          <figure className="slider-banner img-holder custom-slider-banner">
                            <img
                              src="./images/topic-3.png"
                              width="507"
                              height="618"
                              loading="lazy"
                              alt="Design"
                              className="img-cover"
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">Design</span>

                            <p className="slider-subtitle">78 Articles</p>
                          </div>
                        </a>
                      </li>

                      <li className="slider-item">
                        <a
                          href="https://freepetpoetry.com/"
                          className="slider-card"
                        >
                          <figure className="slider-banner img-holder custom-slider-banner">
                            <img
                              src="./images/topic-4.png"
                              width="507"
                              height="618"
                              loading="lazy"
                              alt="Movie"
                              className="img-cover"
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">Movie</span>

                            <p className="slider-subtitle">125 Articles</p>
                          </div>
                        </a>
                      </li>

                      <li className="slider-item">
                        <a
                          href="https://freepetpoetry.com/"
                          className="slider-card"
                        >
                          <figure className="slider-banner img-holder custom-slider-banner">
                            <img
                              src="./images/topic-5.png"
                              width="507"
                              height="618"
                              loading="lazy"
                              alt="Lifestyle"
                              className="img-cover"
                            />
                          </figure>

                          <div className="slider-content">
                            <span className="slider-title">Lifestyle</span>

                            <p className="slider-subtitle">78 Articles</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/*
    <!--  
        - #FEATURED POST
          -->
    */}

            <section
              className="section feature"
              aria-label="feature"
              id="featured"
            >
              <div className="container">
                <h2 className="headline headline-2 section-title">
                  <span className="span">Editor's picked</span>
                </h2>

                <p className="section-text">
                  Featured and highly rated articles
                </p>

                <ul className="feature-list">
                  <li>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder custom-banner">
                        <img
                          src="./images/featured-1.png"
                          width="1602"
                          height="903"
                          loading="lazy"
                          alt="Self-observation is the first step of inner unfolding"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Travel
                            </a>

                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Lifestyle
                            </a>
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">3 mins read</span>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-title hover-2"
                          >
                            Self-observation is the first step of inner
                            unfolding
                          </a>
                        </h3>

                        <div className="card-wrapper">
                          <div className="profile-card">
                            <img
                              src="./images/author-1.png"
                              width="48"
                              height="48"
                              loading="lazy"
                              alt="Joseph"
                              className="profile-banner"
                            />

                            <div>
                              <p className="card-title">Joseph</p>

                              <p className="card-subtitle">25 Nov 2022</p>
                            </div>
                          </div>

                          <a
                            href="https://freepetpoetry.com/"
                            className="card-btn"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder custom-banner">
                        <img
                          src="./images/featured-2.png"
                          width="1602"
                          height="903"
                          loading="lazy"
                          alt="Self-observation is the first step of inner unfolding"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Design
                            </a>

                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Movie
                            </a>
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">6 mins read</span>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-title hover-2"
                          >
                            Self-observation is the first step of inner
                            unfolding
                          </a>
                        </h3>

                        <div className="card-wrapper">
                          <div className="profile-card">
                            <img
                              src="./images/author-1.png"
                              width="48"
                              height="48"
                              loading="lazy"
                              alt="Joseph"
                              className="profile-banner"
                            />

                            <div>
                              <p className="card-title">Joseph</p>

                              <p className="card-subtitle">25 Nov 2022</p>
                            </div>
                          </div>

                          <a
                            href="https://freepetpoetry.com/"
                            className="card-btn"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder custom-banner">
                        <img
                          src="./images/featured-3.png"
                          width="1602"
                          height="903"
                          loading="lazy"
                          alt="Self-observation is the first step of inner unfolding"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Design
                            </a>

                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Movie
                            </a>
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">6 mins read</span>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-title hover-2"
                          >
                            Self-observation is the first step of inner
                            unfolding
                          </a>
                        </h3>

                        <div className="card-wrapper">
                          <div className="profile-card">
                            <img
                              src="./images/author-1.png"
                              width="48"
                              height="48"
                              loading="lazy"
                              alt="Joseph"
                              className="profile-banner"
                            />

                            <div>
                              <p className="card-title">Joseph</p>

                              <p className="card-subtitle">25 Nov 2022</p>
                            </div>
                          </div>

                          <a
                            href="https://freepetpoetry.com/"
                            className="card-btn"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder custom-banner">
                        <img
                          src="./images/featured-4.png"
                          width="1602"
                          height="903"
                          loading="lazy"
                          alt="Self-observation is the first step of inner unfolding"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Design
                            </a>

                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Movie
                            </a>
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">6 mins read</span>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-title hover-2"
                          >
                            Self-observation is the first step of inner
                            unfolding
                          </a>
                        </h3>

                        <div className="card-wrapper">
                          <div className="profile-card">
                            <img
                              src="./images/author-1.png"
                              width="48"
                              height="48"
                              loading="lazy"
                              alt="Joseph"
                              className="profile-banner"
                            />

                            <div>
                              <p className="card-title">Joseph</p>

                              <p className="card-subtitle">25 Nov 2022</p>
                            </div>
                          </div>

                          <a
                            href="https://freepetpoetry.com/"
                            className="card-btn"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="card feature-card">
                      <figure className="card-banner img-holder custom-banner">
                        <img
                          src="./images/featured-5.png"
                          width="1602"
                          height="903"
                          loading="lazy"
                          alt="Self-observation is the first step of inner unfolding"
                          className="img-cover"
                        />
                      </figure>

                      <div className="card-content">
                        <div className="card-wrapper">
                          <div className="card-tag">
                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Design
                            </a>

                            <a
                              href="https://freepetpoetry.com/"
                              className="span hover-2"
                            >
                              #Movie
                            </a>
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">6 mins read</span>
                          </div>
                        </div>

                        <h3 className="headline headline-3">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-title hover-2"
                          >
                            Self-observation is the first step of inner
                            unfolding
                          </a>
                        </h3>

                        <div className="card-wrapper">
                          <div className="profile-card">
                            <img
                              src="./images/author-1.png"
                              width="48"
                              height="48"
                              loading="lazy"
                              alt="Joseph"
                              className="profile-banner"
                            />

                            <div>
                              <p className="card-title">Joseph</p>

                              <p className="card-subtitle">25 Nov 2022</p>
                            </div>
                          </div>

                          <a
                            href="https://freepetpoetry.com/"
                            className="card-btn"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <a
                  href="https://freepetpoetry.com/"
                  className="btn btn-secondary"
                >
                  <span className="span">Show More Posts</span>

                  <IonIcon icon={arrowForward} aria-hidden="true" />
                </a>
              </div>

              <img
                src="./images/shadow-3.svg"
                width="500"
                height="1500"
                loading="lazy"
                alt=""
                className="feature-bg"
              />
            </section>

            {/*
    <!--  
        - #POPULAR TAGS
          -->
    */}

            <section className="tags" aria-labelledby="tag-label">
              <div className="container">
                <h2
                  className="headline headline-2 section-title"
                  id="tag-label"
                >
                  <span className="span">Popular Tags</span>
                </h2>

                <p className="section-text">Most searched keywords</p>

                <ul className="grid-list">
                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag1.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Travel"
                      />

                      <p className="btn-text">Travel</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag2.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Culture"
                      />

                      <p className="btn-text">Culture</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag3.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Lifestyle"
                      />

                      <p className="btn-text">Lifestyle</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag4.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Fashion"
                      />

                      <p className="btn-text">Fashion</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag5.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Food"
                      />

                      <p className="btn-text">Food</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag6.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Space"
                      />

                      <p className="btn-text">Space</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag7.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Animal"
                      />

                      <p className="btn-text">Animal</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag8.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Minimal"
                      />

                      <p className="btn-text">Minimal</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag9.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Interior"
                      />

                      <p className="btn-text">Interior</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag10.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Plant"
                      />

                      <p className="btn-text">Plant</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag11.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Nature"
                      />

                      <p className="btn-text">Nature</p>
                    </button>
                  </li>

                  <li>
                    <button className="card tag-btn">
                      <img
                        src="./images/tag12.png"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Business"
                      />

                      <p className="btn-text">Business</p>
                    </button>
                  </li>
                </ul>
              </div>
            </section>

            {/*
    <!--  
        - #RECENT POST
          -->
    */}

            <section
              className="section recent-post"
              id="recent"
              aria-labelledby="recent-label"
            >
              <div className="container">
                <div className="post-main">
                  <h2 className="headline headline-2 section-title">
                    <span className="span">Recent posts</span>
                  </h2>

                  <p className="section-text">Don't miss the latest trends</p>

                  <ul className="grid-list">
                    <li>
                      <div className="recent-post-card">
                        <figure className="card-banner img-holder custom-banner-recent-post">
                          <img
                            src="./images/recent-post-1.jpg"
                            width="271"
                            height="258"
                            loading="lazy"
                            alt="Helpful Tips for Working from Home as a Freelancer"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-badge"
                          >
                            Working Tips
                          </a>

                          <h3 className="headline headline-3 card-title">
                            <a
                              href="https://freepetpoetry.com/"
                              className="link hover-2"
                            >
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </h3>

                          <p className="card-text">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>

                          <div className="card-wrapper">
                            <div className="card-tag">
                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Travel
                              </a>

                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Lifestyle
                              </a>
                            </div>

                            <div className="wrapper">
                              <IonIcon icon={timeOutline} aria-hidden="true" />

                              <span className="span">3 mins read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="recent-post-card">
                        <figure className="card-banner img-holder custom-banner-recent-post">
                          <img
                            src="./images/recent-post-2.jpg"
                            width="271"
                            height="258"
                            loading="lazy"
                            alt="Helpful Tips for Working from Home as a Freelancer"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-badge"
                          >
                            Working Tips
                          </a>

                          <h3 className="headline headline-3 card-title">
                            <a
                              href="https://freepetpoetry.com/"
                              className="link hover-2"
                            >
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </h3>

                          <p className="card-text">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>

                          <div className="card-wrapper">
                            <div className="card-tag">
                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Travel
                              </a>

                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Lifestyle
                              </a>
                            </div>

                            <div className="wrapper">
                              <IonIcon icon={timeOutline} aria-hidden="true" />

                              <span className="span">3 mins read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="recent-post-card">
                        <figure className="card-banner img-holder custom-banner-recent-post">
                          <img
                            src="./images/recent-post-3.jpg"
                            width="271"
                            height="258"
                            loading="lazy"
                            alt="Helpful Tips for Working from Home as a Freelancer"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-badge"
                          >
                            Working Tips
                          </a>

                          <h3 className="headline headline-3 card-title">
                            <a
                              href="https://freepetpoetry.com/"
                              className="link hover-2"
                            >
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </h3>

                          <p className="card-text">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>

                          <div className="card-wrapper">
                            <div className="card-tag">
                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Travel
                              </a>

                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Lifestyle
                              </a>
                            </div>

                            <div className="wrapper">
                              <IonIcon icon={timeOutline} aria-hidden="true" />

                              <span className="span">3 mins read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="recent-post-card">
                        <figure className="card-banner img-holder custom-banner-recent-post">
                          <img
                            src="./images/recent-post-4.jpg"
                            width="271"
                            height="258"
                            loading="lazy"
                            alt="Helpful Tips for Working from Home as a Freelancer"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-badge"
                          >
                            Working Tips
                          </a>

                          <h3 className="headline headline-3 card-title">
                            <a
                              href="https://freepetpoetry.com/"
                              className="link hover-2"
                            >
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </h3>

                          <p className="card-text">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>

                          <div className="card-wrapper">
                            <div className="card-tag">
                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Travel
                              </a>

                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Lifestyle
                              </a>
                            </div>

                            <div className="wrapper">
                              <IonIcon icon={timeOutline} aria-hidden="true" />

                              <span className="span">3 mins read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="recent-post-card">
                        <figure className="card-banner img-holder custom-banner-recent-post">
                          <img
                            src="./images/recent-post-5.jpg"
                            width="271"
                            height="258"
                            loading="lazy"
                            alt="Helpful Tips for Working from Home as a Freelancer"
                            className="img-cover"
                          />
                        </figure>

                        <div className="card-content">
                          <a
                            href="https://freepetpoetry.com/"
                            className="card-badge"
                          >
                            Working Tips
                          </a>

                          <h3 className="headline headline-3 card-title">
                            <a
                              href="https://freepetpoetry.com/"
                              className="link hover-2"
                            >
                              Helpful Tips for Working from Home as a Freelancer
                            </a>
                          </h3>

                          <p className="card-text">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>

                          <div className="card-wrapper">
                            <div className="card-tag">
                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Travel
                              </a>

                              <a
                                href="https://freepetpoetry.com/"
                                className="span hover-2"
                              >
                                # Lifestyle
                              </a>
                            </div>

                            <div className="wrapper">
                              <IonIcon icon={timeOutline} aria-hidden="true" />

                              <span className="span">3 mins read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <nav aria-label="pagination" className="pagination">
                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                      aria-label="previous page"
                    >
                      <IonIcon icon={arrowBack} aria-hidden="true" />
                    </a>

                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                    >
                      1
                    </a>
                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                    >
                      2
                    </a>
                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                    >
                      3
                    </a>
                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                      aria-label="more page"
                    >
                      ...
                    </a>

                    <a
                      href="https://freepetpoetry.com/"
                      className="pagination-btn"
                      aria-label="next page"
                    >
                      <IonIcon icon={arrowForward} aria-hidden="true" />
                    </a>
                  </nav>
                </div>

                <div className="post-aside grid-list">
                  <div className="card aside-card">
                    <h3 className="headline headline-2 aside-title">
                      <span className="span">Popular Posts</span>
                    </h3>

                    <ul className="popular-list">
                      <li>
                        <div className="popular-card">
                          <figure className="card-banner img-holder custom-banner-popular-post">
                            <img
                              src="./images/popular-post-1.jpg"
                              width="64"
                              height="64"
                              loading="lazy"
                              alt="Creating is a privilege but it’s also a gift"
                              className="img-cover"
                            />
                          </figure>

                          <div className="card-content">
                            <h4 className="headline headline-4 card-title">
                              <a
                                href="https://freepetpoetry.com/"
                                className="link hover-2"
                              >
                                Creating is a privilege but it’s also a gift
                              </a>
                            </h4>

                            <div className="warpper">
                              <p className="card-subtitle">15 mins read</p>

                              <time
                                className="publish-date"
                                datetime="2022-04-15"
                              >
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="popular-card">
                          <figure className="card-banner img-holder custom-banner-popular-post">
                            <img
                              src="./images/popular-post-2.jpg"
                              width="64"
                              height="64"
                              loading="lazy"
                              alt="Being unique is better than being perfect"
                              className="img-cover"
                            />
                          </figure>

                          <div className="card-content">
                            <h4 className="headline headline-4 card-title">
                              <a
                                href="https://freepetpoetry.com/"
                                className="link hover-2"
                              >
                                Being unique is better than being perfect
                              </a>
                            </h4>

                            <div className="warpper">
                              <p className="card-subtitle">15 mins read</p>

                              <time
                                className="publish-date"
                                datetime="2022-04-15"
                              >
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="popular-card">
                          <figure className="card-banner img-holder custom-banner-popular-post">
                            <img
                              src="./images/popular-post-3.jpg"
                              width="64"
                              height="64"
                              loading="lazy"
                              alt="Every day, in every city and town across the country"
                              className="img-cover"
                            />
                          </figure>

                          <div className="card-content">
                            <h4 className="headline headline-4 card-title">
                              <a
                                href="https://freepetpoetry.com/"
                                className="link hover-2"
                              >
                                Every day, in every city and town across the
                                country
                              </a>
                            </h4>

                            <div className="warpper">
                              <p className="card-subtitle">15 mins read</p>

                              <time
                                className="publish-date"
                                datetime="2022-04-15"
                              >
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="popular-card">
                          <figure className="card-banner img-holder custom-banner-popular-post">
                            <img
                              src="./images/popular-post-4.jpg"
                              width="64"
                              height="64"
                              loading="lazy"
                              alt="Your voice, your mind, your story, your vision"
                              className="img-cover"
                            />
                          </figure>

                          <div className="card-content">
                            <h4 className="headline headline-4 card-title">
                              <a
                                href="https://freepetpoetry.com/"
                                className="link hover-2"
                              >
                                Your voice, your mind, your story, your vision
                              </a>
                            </h4>

                            <div className="warpper">
                              <p className="card-subtitle">15 mins read</p>

                              <time
                                className="publish-date"
                                datetime="2022-04-15"
                              >
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="popular-card">
                          <figure className="card-banner img-holder custom-banner-popular-post">
                            <img
                              src="./images/popular-post-2.jpg"
                              width="64"
                              height="64"
                              loading="lazy"
                              alt="Being unique is better than being perfect"
                              className="img-cover"
                            />
                          </figure>

                          <div className="card-content">
                            <h4 className="headline headline-4 card-title">
                              <a
                                href="https://freepetpoetry.com/"
                                className="link hover-2"
                              >
                                Being unique is better than being perfect
                              </a>
                            </h4>

                            <div className="warpper">
                              <p className="card-subtitle">15 mins read</p>

                              <time
                                className="publish-date"
                                datetime="2022-04-15"
                              >
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card aside-card">
                    <h3 className="headline headline-2 aside-title">
                      <span className="span">Last Comment</span>
                    </h3>

                    <ul className="comment-list">
                      <li>
                        <div className="comment-card">
                          <blockquote className="card-text">
                            “ Gosh jaguar ostrich quail one excited dear hello
                            and bound and the and bland moral misheard
                            roadrunner “
                          </blockquote>

                          <div className="profile-card">
                            <figure className="profile-banner img-holder">
                              <img
                                src="./images/author-6.png"
                                width="32"
                                height="32"
                                loading="lazy"
                                alt="Jane Cooper"
                              />
                            </figure>

                            <div>
                              <p className="card-title">Jane Cooper</p>

                              <time className="card-date" datetime="2022-04-15">
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="comment-card">
                          <blockquote className="card-text">
                            “ Gosh jaguar ostrich quail one excited dear hello
                            and bound and the and bland moral misheard
                            roadrunner “
                          </blockquote>

                          <div className="profile-card">
                            <figure className="profile-banner img-holder">
                              <img
                                src="./images/author-7.png"
                                width="32"
                                height="32"
                                loading="lazy"
                                alt="Katen Doe"
                              />
                            </figure>

                            <div>
                              <p className="card-title">Katen Doe</p>

                              <time className="card-date" datetime="2022-04-15">
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="comment-card">
                          <blockquote className="card-text">
                            “ Gosh jaguar ostrich quail one excited dear hello
                            and bound and the and bland moral misheard
                            roadrunner “
                          </blockquote>

                          <div className="profile-card">
                            <figure className="profile-banner img-holder">
                              <img
                                src="./images/author-8.png"
                                width="32"
                                height="32"
                                loading="lazy"
                                alt="Barbara Cartland"
                              />
                            </figure>

                            <div>
                              <p className="card-title">Barbara Cartland</p>

                              <time className="card-date" datetime="2022-04-15">
                                15 April 2022
                              </time>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="card aside-card insta-card">
                    <a href="https://freepetpoetry.com/" className="logo">
                      <img
                        src="./images/logo.svg"
                        width="119"
                        height="37"
                        loading="lazy"
                        alt="Wren logo"
                      />
                    </a>

                    <p className="card-text">Follow us on instagram</p>

                    <ul className="insta-list">
                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-1.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-2.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-3.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-4.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-5.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-6.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-7.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-8.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://freepetpoetry.com/"
                          className="insta-post img-holder custom-banner-insta-post"
                        >
                          <img
                            src="./images/insta-post-9.png"
                            width="276"
                            height="277"
                            loading="lazy"
                            alt="insta post"
                            className="img-cover"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </main>
        {/*
    <!--  
    - #FOOTER
      -->
    */}
        <footer>
          <div className="container">
            <div className="card footer">
              <div className="section footer-top">
                <div className="footer-brand">
                  <a href="https://freepetpoetry.com/" className="logo">
                    <img
                      src="./images/logo.svg"
                      width="119"
                      height="37"
                      loading="lazy"
                      alt="Wren logo"
                    />
                  </a>

                  <p className="footer-text">
                    When an unknown prnoto sans took a galley and scrambled it
                    to make specimen book not only five When an unknown prnoto
                    sans took a galley and scrambled it to five centurie.
                  </p>

                  <p className="footer-list-title">Address</p>

                  <address className="footer-text address">
                    123 Main Street <br />
                    New York, NY 10001
                  </address>
                </div>

                <div className="footer-list">
                  <p className="footer-list-title">Categories</p>

                  <ul>
                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Action
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Business
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Adventure
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Canada
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        America
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Curiosity
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Animal
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Dental
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Biology
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Design
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Breakfast
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://freepetpoetry.com/"
                        className="footer-link hover-2"
                      >
                        Dessert
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="footer-list">
                  <p className="footer-list-title">Newsletter</p>

                  <p className="footer-text">
                    Sign up to be first to receive the latest stories inspiring
                    us, case studies, and industry news.
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
                      placeholder="Emaill address"
                      required
                      className="input-field"
                      autoComplete="off"
                    />

                    <IonIcon icon={mailOutline} aria-hidden="true" />
                  </div>

                  <a
                    href="https://freepetpoetry.com/"
                    className="btn btn-primary"
                  >
                    <span className="span">Subscribe</span>

                    <IonIcon icon={arrowForward} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="footer-bottom">
                <p className="copyright">
                  &copy; Developed by
                  <a
                    href="https://freepetpoetry.com/"
                    className="copyright-link"
                  >
                    codewithsadee.
                  </a>
                </p>

                <ul className="social-list">
                  <li>
                    <a
                      href="https://freepetpoetry.com/"
                      className="social-link"
                    >
                      <IonIcon icon={logoTwitter} />
                      Twitter
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://freepetpoetry.com/"
                      className="social-link"
                    >
                      <IonIcon icon={logoFacebook} />
                      Facebook
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://freepetpoetry.com/"
                      className="social-link"
                    >
                      <IonIcon icon={logoInstagram} />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/*  
        - #BACK TO TOP
          */}
        <button
          className={`back-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        >
          <IonIcon icon={arrowUpOutline} />
        </button>
      </body>
    </div>
  )
}

export default App
