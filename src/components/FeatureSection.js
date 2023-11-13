import React from "react"
import { Link } from "gatsby"
import { IonIcon } from "@ionic/react"
import { arrowForward, timeOutline } from "ionicons/icons"

const FeatureSection = ({ posts }) => {
  // Sort the posts first by "featurescore" in descending order
  // and then by "date" in descending order
  const sortedPosts = posts.slice().sort((a, b) => {
    // Compare by featurescore
    if (a.frontmatter.featurescore > b.frontmatter.featurescore) return -1
    if (a.frontmatter.featurescore < b.frontmatter.featurescore) return 1

    // If featurescore is equal, compare by date
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)

    return dateB - dateA
  })

  // Take the first 6 posts as feature cards
  const featurePosts = sortedPosts.slice(0, 6)

  return (
    <section className="section feature" aria-label="feature" id="featured">
      <div className="container">
        <h2 className="headline headline-2 section-title">
          <span className="span">Editor's picked</span>
        </h2>

        <p className="section-text">Featured and highly rated articles</p>

        <ul className="feature-list">
          {featurePosts.map((post, index) => {
            const title = post.frontmatter.title || post.fields.slug
            const imageFolder = post.fields.slug.split("/").slice(-2, -1)[0]
            const altDescription = post.frontmatter.alt || title
            const imagePath = `/blog/${imageFolder}.jpg`

            return (
              <li key={index}>
                <div className="card feature-card">
                  <figure className="card-banner img-holder custom-banner">
                    {imagePath && (
                      <img
                        src={imagePath}
                        alt={altDescription}
                        className="img-cover"
                      />
                    )}
                  </figure>

                  <div className="card-content">
                    <div className="card-wrapper">
                      <div className="card-tag">
                        {post.frontmatter.tags.split(",").map((tag, index) => (
                          <Link
                            to={`/tags/${tag.trim()}`}
                            className="span hover-2"
                            key={index}
                          >
                            {tag.trim()}
                          </Link>
                        ))}
                      </div>

                      <div className="wrapper">
                        <IonIcon icon={timeOutline} aria-hidden="true" />

                        <span className="span">
                          {post.frontmatter.readtime} min
                        </span>
                      </div>
                    </div>

                    <h3 className="headline headline-3">
                      <Link
                        to={post.fields.slug}
                        className="card-title hover-2"
                      >
                        {title}
                      </Link>
                    </h3>

                    <div className="card-wrapper">
                      <div className="profile-card">
                        <div>
                          <p className="card-subtitle">
                            {post.frontmatter.date}
                          </p>
                        </div>
                      </div>

                      <Link to={post.fields.slug} className="card-btn">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <a href="/blog" className="btn btn-secondary">
          <span className="span">Show More Posts</span>
          <IonIcon icon={arrowForward} aria-hidden="true" />
        </a>
      </div>

      <img src="/images/shadow-3.svg" alt="" className="feature-bg" />
    </section>
  )
}

export default FeatureSection
