import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { IonIcon } from "@ionic/react"
import { arrowForward, arrowBack, timeOutline } from "ionicons/icons"
import PopularPostsSection from "./PopularPostsSection"
import slugify from "slugify"

const FeaturePostPage = ({ posts }) => {
  const sortedPosts = posts.slice().sort((a, b) => {
    // Sort by featurescore in descending order
    const featureScoreA = parseFloat(a.frontmatter.featurescore) || 0
    const featureScoreB = parseFloat(b.frontmatter.featurescore) || 0

    if (featureScoreB !== featureScoreA) {
      return featureScoreB - featureScoreA
    }

    // If featurescore is the same, sort by date in descending order
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return dateB - dateA
  })

  const postsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const recentPostsRef = useRef(null)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const visiblePosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost)

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      if (recentPostsRef.current) {
        window.scrollTo({
          top: recentPostsRef.current.offsetTop,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <section
      className="section recent-post"
      id="recent"
      aria-labelledby="recent-label"
      ref={recentPostsRef}
    >
      <div className="container">
        <div className="post-main">
          <h2 className="headline headline-2 section-title">
            <span className="span">Featured Poems</span>
          </h2>
          <p className="section-text">
            Explore Our Handpicked Selection of Featured Poems
          </p>
          <ul className="grid-list">
            <ol style={{ listStyle: "none" }}>
              {visiblePosts.map(post => {
                const title = post.frontmatter.title || post.fields.slug
                const subtitle = post.frontmatter.subtitle
                const imageFolder = post.fields.slug.split("/").slice(-2, -1)[0]
                const altDescription = post.frontmatter.alt || title
                const imagePath = `/blog/${imageFolder}.jpg`

                return (
                  <div key={post.fields.slug} className="recent-post-card">
                    <Link to={post.fields.slug} itemProp="url">
                      <figure
                        className="card-banner img-holder "
                        style={{ width: "271px", height: "258px" }}
                      >
                        {imagePath && (
                          <img
                            src={imagePath}
                            alt={altDescription}
                            width="271"
                            height="258"
                            loading="lazy"
                            className="img-cover"
                          />
                        )}
                      </figure>
                    </Link>
                    <li>
                      <div
                        className="card-content"
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        {post.frontmatter.topic
                          .split(",")
                          .map((postTopic, index) => (
                            <div key={index} className="card-badge">
                              <a
                                href={`/topics/${slugify(
                                  postTopic
                                    .trim()
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")
                                )}/`}
                                className="span hover-2"
                              >
                                {postTopic.trim()}
                              </a>
                            </div>
                          ))}
                        <Link to={post.fields.slug} itemProp="url">
                          <h3 className="headline headline-3 card-title">
                            <span className="link hover-2" itemProp="headline">
                              {title}
                            </span>
                          </h3>
                          <h4 className="headline headline-4 card-title">
                            <span className="link hover-2" itemProp="headline">
                              {subtitle}
                            </span>
                          </h4>
                        </Link>
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />

                        <Link
                          to={post.fields.slug}
                          itemProp="url"
                          className="btn btn-primary btn-continue"
                        >
                          <span className="span">Read More</span>
                          <IonIcon icon={arrowForward} aria-hidden="true" />
                        </Link>
                        <p className="card-text">{post.frontmatter.date}</p>
                        <div className="card-wrapper">
                          <div className="card-tag">
                            {post.frontmatter.tags
                              .split(",")
                              .map((tag, index) => {
                                const tagLink = `/tags/${tag
                                  .replace(/^#/, "")
                                  .trim()
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`

                                return (
                                  <Link
                                    to={tagLink}
                                    className="span hover-2"
                                    key={index}
                                  >
                                    {tag.trim()}{" "}
                                  </Link>
                                )
                              })}
                          </div>

                          <div className="wrapper">
                            <IonIcon icon={timeOutline} aria-hidden="true" />

                            <span className="span">
                              {post.frontmatter.readtime} min
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                )
              })}
            </ol>
          </ul>
          <nav aria-label="pagination" className="pagination">
            <button
              className="pagination-btn"
              aria-label="previous page"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <IonIcon icon={arrowBack} aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`pagination-btn ${
                  index + 1 === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="pagination-btn"
              aria-label="next page"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <IonIcon icon={arrowForward} aria-hidden="true" />
            </button>
          </nav>
        </div>
        <div className="post-aside grid-list">
          <PopularPostsSection posts={posts} />
        </div>
      </div>
    </section>
  )
}

export default FeaturePostPage
