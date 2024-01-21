import React from "react"
import PopularPostsSection from "./PopularPostsSection"
import LastCommentSection from "./LastCommentSection"
import InstagramCard from "./InstagramCard"
import { IonIcon } from "@ionic/react"
import { arrowForward, arrowBack, timeOutline } from "ionicons/icons"
const RecentPosts = () => {
  return (
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
            {[1, 2, 3, 4, 5].map(index => (
              <li key={index}>
                <div className="recent-post-card">
                  <figure className="card-banner img-holder custom-banner-recent-post">
                    <img
                      src={`/images/recent-post-${index}.webp`}
                      width="271"
                      height="258"
                      loading="lazy"
                      alt="Helpful Tips for Working from Home as a Freelancer"
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <a href="https://freepetpoetry.com/" className="card-badge">
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
                      Gosh jaguar ostrich quail one excited dear hello and bound
                      and the and bland moral misheard roadrunner flapped lynx
                      far that and jeepers giggled far and far
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
            ))}
          </ul>

          <nav aria-label="pagination" className="pagination">
            <a
              href="https://freepetpoetry.com/"
              className="pagination-btn"
              aria-label="previous page"
            >
              <IonIcon icon={arrowBack} aria-hidden="true" />
            </a>

            <a href="https://freepetpoetry.com/" className="pagination-btn">
              1
            </a>
            <a href="https://freepetpoetry.com/" className="pagination-btn">
              2
            </a>
            <a href="https://freepetpoetry.com/" className="pagination-btn">
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
          <PopularPostsSection />

          <LastCommentSection />

          <InstagramCard />
        </div>
      </div>
    </section>
  )
}

export default RecentPosts
