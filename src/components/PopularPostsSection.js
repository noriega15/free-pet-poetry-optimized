import React from "react"
import { IonIcon } from "@ionic/react"
import { timeOutline } from "ionicons/icons"

const PopularPostsSection = ({ posts }) => {
  // Sort the posts by "popularity" in descending order
  const sortedPosts = posts.slice().sort((a, b) => {
    return b.frontmatter.popularity - a.frontmatter.popularity
  })

  // Take the first 5 posts as popular cards
  const popularPosts = sortedPosts.slice(0, 8)

  return (
    <div className="card aside-card">
      <h3 className="headline headline-2 aside-title">
        <span className="span">Popular Posts</span>
      </h3>

      <ul className="popular-list">
        {popularPosts.map((post, index) => {
          const imageFolder = post.fields.slug.split("/").slice(-2, -1)[0]
          const altDescription = post.frontmatter.alt || post.frontmatter.title
          const imagePath = `/blog/${imageFolder}.webp`

          return (
            <li key={index}>
              <div className="popular-card">
                <figure
                  className="card-banner img-holder "
                  style={{ width: "64px", height: "64px" }}
                >
                  {imagePath && (
                    <img
                      src={imagePath}
                      alt={altDescription}
                      width="64"
                      height="64"
                      loading="lazy"
                      className="img-cover"
                    />
                  )}
                </figure>

                <div className="card-content">
                  <h4 className="headline headline-4 card-title">
                    <a href={post.fields.slug} className="link hover-2">
                      {post.frontmatter.title}
                    </a>
                  </h4>

                  <div className="wrapper">
                    <IonIcon icon={timeOutline} aria-hidden="true" />
                    <span className="card-subtitle">
                      {post.frontmatter.readtime} min
                    </span>
                    <p className="publish-date">{post.frontmatter.date}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PopularPostsSection
