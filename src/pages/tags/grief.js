import React, { useState, useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { IonIcon } from "@ionic/react"
import { arrowForward, arrowBack, timeOutline } from "ionicons/icons"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import slugify from "slugify"

const GriefTagPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const allPosts = data.allMarkdownRemark?.nodes || []
  const [selectedTag, setSelectedTag] = useState("Grief")
  const recentPostsRef = useRef(null)
  const [selectedPost, setSelectedPost] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  const handleTagClick = tag => {
    setSelectedTag(tag)
    setSelectedPost(null)
    setCurrentPage(1)
  }

  const handlePostClick = post => {
    setSelectedPost(post)
    scrollToPost()
  }

  const scrollToPost = () => {
    if (selectedPost && selectedPost.fields && selectedPost.fields.slug) {
      const postElement = document.getElementById(
        slugify(selectedPost.fields.slug, { lower: true, strict: true })
      )

      if (postElement) {
        // Instead of focusing on the post element, scroll to the top of the section
        postElement
          .closest(".section.recent-post")
          .scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const filteredPosts = selectedTag
    ? allPosts.filter(post => post.frontmatter.tags.includes(selectedTag))
    : allPosts

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handlePageChange = page => {
    setCurrentPage(page)
    scrollToTop()
  }

  const scrollToTop = () => {
    if (recentPostsRef.current) {
      recentPostsRef.current.scrollIntoView({ behavior: "smooth" })
    } else {
      // Scroll to the top of the section
      window.scrollTo({
        top: recentPostsRef.current.offsetTop,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    scrollToTop()
  }, [selectedTag, currentPage])

  const renderTagButtons = () => (
    <div className="grid-list-page">
      {allPosts
        .reduce(
          (tags, post) => tags.concat(post.frontmatter.tags.split(", ")),
          []
        )
        .filter((tag, index, self) => self.indexOf(tag) === index)
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" })) // Sort the tags alphabetically, ignoring case
        .map((tag, index) => (
          <button
            key={index}
            onClick={() => handleTagClick(tag)}
            className={`card tag-btn-page ${
              tag === selectedTag ? "active" : ""
            }`}
          >
            {tag}
          </button>
        ))}
    </div>
  )

  const renderRecentPosts = () => (
    <ul className="grid-list">
      {filteredPosts
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)
        .map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const subtitle = post.frontmatter.subtitle
          const imageFolder = post.fields.slug.split("/").slice(-2, -1)[0]
          const altDescription = post.frontmatter.alt || title
          const imagePath = `/blog/${imageFolder}.webp`

          return (
            <div key={post.fields.slug} className="recent-post-card">
              <Link
                to="#"
                itemProp="url"
                onClick={e => {
                  e.preventDefault()
                  handlePostClick(post)
                }}
              >
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
                  {post.frontmatter.topic.split(",").map((postTopic, index) => (
                    <div key={index} className="card-badge">
                      <a
                        href={`/topics/${slugify(postTopic, {
                          lower: true,
                          strict: true,
                        })}/`}
                        className="span hover-2"
                      >
                        {postTopic.trim()}
                      </a>
                    </div>
                  ))}
                  <Link
                    to="#"
                    itemProp="url"
                    onClick={e => {
                      e.preventDefault()
                      handlePostClick(post)
                    }}
                  >
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
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />

                  <Link
                    to="#"
                    itemProp="url"
                    onClick={e => {
                      e.preventDefault()
                      handlePostClick(post)
                    }}
                    className="btn btn-primary btn-continue"
                  >
                    <span className="span">Read More</span>
                    <IonIcon icon={arrowForward} aria-hidden="true" />
                  </Link>
                  <p className="card-text">{post.frontmatter.date}</p>
                  <div className="card-wrapper">
                    <div className="card-tag">
                      {post.frontmatter.tags.split(",").map((tag, index) => {
                        return (
                          <button
                            key={index}
                            onClick={() => handleTagClick(tag)}
                            className={`span hover-2 ${
                              tag === selectedTag ? "active" : ""
                            }`}
                          >
                            {tag.trim()}{" "}
                          </button>
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
    </ul>
  )

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="tags" aria-labelledby="tag-label">
          <div className="container">
            <h2 className="headline headline-2 section-title">
              <span className="span">Explore Tags</span>
            </h2>
            {renderTagButtons()}
          </div>
        </div>
      </section>

      <section
        className="section recent-post"
        id="recent"
        aria-labelledby="recent-label"
        ref={recentPostsRef}
      >
        <div className="container">
          <div className="post-main">
            <h2 className="headline headline-2 section-title">
              <span className="span">
                {selectedTag
                  ? `Poems Tagged with ${selectedTag}`
                  : "Recent Poems"}
              </span>
            </h2>
            <p className="section-text">
              {selectedTag
                ? `Explore a Collection of Poems Tagged with ${selectedTag}`
                : "Discover the latest poems and essential pet care tips!"}
            </p>
            {renderRecentPosts()}
            <nav aria-label="pagination" className="pagination">
              <button
                className="pagination-btn"
                aria-label="previous page"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
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
                disabled={currentPage === totalPages}
              >
                <IonIcon icon={arrowForward} aria-hidden="true" />
              </button>
            </nav>
          </div>

          {/* Display selected post */}
          {selectedPost && (
            <div className="post-aside grid-list">
              <article
                id={slugify(selectedPost.fields.slug, {
                  lower: true,
                  strict: true,
                })}
                className="blog-post"
                itemScope
                itemType="http://schema.org/Article"
              >
                <h1 className="headline headline-1 section-title">
                  {selectedPost.frontmatter.title}
                </h1>
                <p className="hero-subtitle">{selectedPost.frontmatter.date}</p>
                <p
                  className="hero-text"
                  dangerouslySetInnerHTML={{ __html: selectedPost.html }}
                  itemProp="articleBody"
                />
                <hr />
              </article>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Grief" />

export default GriefTagPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        html
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          subtitle
          description
          alt
          keywords
          catagory
          topic
          tags
          popularity
          readtime
          author
          image
          updatedate
        }
      }
    }
  }
`
