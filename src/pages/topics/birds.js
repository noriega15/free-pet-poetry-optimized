import React, { useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import slugify from "slugify"
import { IonIcon } from "@ionic/react"
import { timeOutline, arrowForward, arrowBack } from "ionicons/icons"

const BirdsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

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

  // Map each topic to its associated posts
  const postsByTopic = topicsArray.reduce((acc, topicObj) => {
    const topic = topicObj.topic
    const filteredPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.topic.includes(topic))
      .sort((a, b) => {
        return b.node.frontmatter.popularity - a.node.frontmatter.popularity
      })

    acc[topic] = filteredPosts
    return acc
  }, {})

  // Count all articles for each topic
  const articleCountsByTopic = topicsArray.reduce((acc, topicObj) => {
    const topic = topicObj.topic
    acc[topic] = postsByTopic[topic] ? postsByTopic[topic].length : 0
    return acc
  }, {})

  const [currentPage, setCurrentPage] = React.useState(1)
  const postsPerPage = 10 // Change this value based on your requirement

  // Calculate total pages Birds
  const totalPosts = postsByTopic["Birds"] ? postsByTopic["Birds"].length : 0
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const topicPostRef = useRef(null)

  useEffect(() => {
    // Scroll to the top of the topicPostRef when currentPage changes
    if (topicPostRef.current) {
      window.scrollTo({
        top: topicPostRef.current.offsetTop,
        behavior: "smooth",
      })
    }
  }, [currentPage])

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <section
        className="single"
        id="topic"
        aria-labelledby="topic-label"
        ref={topicPostRef}
      >
        <div className="container">
          {/* Topic Sections */}
          <section>
            {topicsArray
              .filter(topicObj => topicObj.topic === "Birds")
              .map((topicObj, index) => {
                const topic = topicObj.topic

                // Corrected calculation for postsForTopic
                const postsForTopic = postsByTopic[topic]
                  .slice(
                    (currentPage - 1) * postsPerPage,
                    currentPage * postsPerPage
                  )
                  .map(post => {
                    const title =
                      post.node.frontmatter.title || post.node.fields.slug
                    const subtitle = post.node.frontmatter.subtitle
                    const imageFolder = post.node.fields.slug
                      .split("/")
                      .slice(-2, -1)[0]
                    const altDescription = post.node.frontmatter.alt || title
                    const imagePath = `/blog/${imageFolder}.webp`

                    return (
                      <div className="topics-post-card">
                        <section className="topics-image-card">
                          <Link
                            to={post.node.fields.slug}
                            itemProp="url"
                            key={post.node.fields.slug}
                          >
                            <figure
                              className="card-banner img-holder"
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
                        </section>
                        <section className="topics-content-card">
                          <li>
                            <div
                              className="card-content"
                              itemScope
                              itemType="http://schema.org/Article"
                            >
                              {post.node.frontmatter.topic
                                .split(",")
                                .map((postTopic, index) => (
                                  <div key={index} className="card-badge">
                                    <a
                                      href={`/topics/${postTopic
                                        .trim()
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}/`}
                                      className="span hover-2"
                                    >
                                      {postTopic.trim()}
                                    </a>
                                  </div>
                                ))}
                              <Link
                                to={post.node.fields.slug}
                                itemProp="url"
                                key={post.node.fields.slug}
                              >
                                <h3 className="headline headline-3 card-title">
                                  <span
                                    className="link hover-2"
                                    itemProp="headline"
                                  >
                                    {title}
                                  </span>
                                </h3>

                                <h4 className="headline headline-4 card-title">
                                  <span
                                    className="link hover-2"
                                    itemProp="headline"
                                  >
                                    {subtitle}
                                  </span>
                                </h4>
                              </Link>
                              <p
                                className="card-text"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    post.node.frontmatter.description ||
                                    post.node.excerpt,
                                }}
                                itemProp="description"
                              />
                              <Link
                                to={post.node.fields.slug}
                                itemProp="url"
                                key={post.node.fields.slug}
                                className="btn btn-primary btn-continue"
                              >
                                <span className="span">Continue Reading</span>
                                <IonIcon
                                  icon={arrowForward}
                                  aria-hidden="true"
                                />
                              </Link>
                              <p className="card-text">
                                {post.node.frontmatter.date}
                              </p>
                              <div className="card-wrapper">
                                <div className="card-tag">
                                  {post.node.frontmatter.tags
                                    .split(",")
                                    .map((tag, index) => {
                                      // Remove "#" and transform the tag for the link
                                      const tagLink = `/tags/${tag
                                        .replace(/^#/, "") // Remove leading "#"
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
                                  <IonIcon
                                    icon={timeOutline}
                                    aria-hidden="true"
                                  />
                                  <span className="span">
                                    {post.node.frontmatter.readtime} min
                                  </span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </section>
                      </div>
                    )
                  })

                return (
                  <div
                    className="topic-section"
                    id={slugify(topic, { lower: true })}
                    key={index}
                  >
                    <h2 className="headline headline-2 section-title">
                      <span className="span">Poems about {topic}</span>
                    </h2>

                    <ul className="grid-list">
                      <ol style={{ listStyle: "none" }}>{postsForTopic}</ol>
                    </ul>

                    {/* Pagination */}
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
                )
              })}
          </section>

          {/* Topics List */}
          <section className="topics-page" aria-labelledby="topic-label">
            <div className="container">
              <div className="card topics-page-card">
                <div className="slider" data-slider>
                  <ul className="slider-list">
                    {topicsArray.map((topicObj, index) => {
                      const topicSlug = slugify(topicObj.topic, {
                        lower: true,
                        remove: /[*+~.()'"!:@]/g,
                      })

                      const imageSource = `/images/topic-${topicSlug}.webp`

                      return (
                        <li className="slider-item" key={index}>
                          <Link
                            to={`/topics/${topicSlug}/`}
                            className="slider-link"
                          >
                            <figure className="slider-image img-holder">
                              <img
                                src={imageSource}
                                alt={topicObj.topic}
                                width="640"
                                height="400"
                                loading="lazy"
                                className="img-cover"
                              />
                            </figure>
                            <figcaption
                              className="slider-caption"
                              itemProp="text"
                            >
                              <span className="span">{topicObj.topic}</span>
                              <span className="span">
                                {articleCountsByTopic[topicObj.topic]} Articles
                              </span>
                            </figcaption>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Birds" />

export default BirdsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            topic
            alt
            date(formatString: "MMMM DD, YYYY")
            tags
            readtime
            popularity
          }
          excerpt
        }
      }
    }
  }
`
