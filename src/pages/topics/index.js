import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import slugify from "slugify"
import { IonIcon } from "@ionic/react"
import { timeOutline, arrowForward } from "ionicons/icons"

const TopicsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const SCROLL_OFFSET = 120 // Adjust the value as needed

  const topicsArray = [
    { topic: "Pet Memorial" },
    { topic: "Dogs" },
    { topic: "Cats" },
    { topic: "Birds" },
    { topic: "Small Pets" },
    { topic: "Aquatic Companions" },
    { topic: "Exotic Animals" },
    { topic: "Pet Care" },
  ]

  // Map each topic to its associated posts
  const postsByTopic = topicsArray.reduce((acc, topicObj) => {
    const topic = topicObj.topic
    const filteredPosts = data.allMarkdownRemark.edges
      .filter(edge => edge.node.frontmatter.topic.includes(topic))
      .sort((a, b) => {
        // Sort by popularity (replace 'popularity' with the actual field)
        return b.node.frontmatter.popularity - a.node.frontmatter.popularity
      })

    acc[topic] = filteredPosts
    return acc
  }, {})

  // Count all articles for each topic
  const articleCountsByTopic = topicsArray.reduce((acc, topicObj) => {
    const topic = topicObj.topic
    acc[topic] = postsByTopic[topic].length
    return acc
  }, {})

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Dive into a World of Heartfelt Pet Poetry
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Explore Our Topics</span>
            </h1>

            <p className="single-text">
              Explore the feelings and stories behind pet poetry on our 'Topics'
              page at Free Pet Poetry. Find a special collection of themes,
              expressed through heartwarming poems. Whether it's the playful fun
              of kittens or the loyal bond with dogs, our chosen topics showcase
              the emotions shared between pets and their human friends. Immerse
              yourself in the enchanting world of Free Pet Poetry to discover
              the beauty of the animal kingdom in verse.
            </p>
          </div>
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

                      const imageSource = `/images/topic-${topicSlug}.png`

                      return (
                        <li className="slider-item" key={index}>
                          <a
                            href={`#${topicSlug}`}
                            className="slider-card"
                            onClick={e => {
                              e.preventDefault()
                              const targetElement = document.getElementById(
                                slugify(topicObj.topic, { lower: true })
                              )

                              if (targetElement) {
                                const offsetTop =
                                  targetElement.offsetTop - SCROLL_OFFSET
                                window.scrollTo({
                                  top: offsetTop,
                                  behavior: "smooth",
                                })
                              }
                            }}
                          >
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
                              <span className="slider-title">
                                {topicObj.topic}
                              </span>
                              <p className="slider-subtitle">{`${
                                articleCountsByTopic[topicObj.topic]
                              } ${
                                articleCountsByTopic[topicObj.topic] === 1
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
          {/* Topic Sections */}
          <section>
            {topicsArray.map((topicObj, index) => {
              const topic = topicObj.topic
              const postsForTopic = postsByTopic[topic]
                .slice(0, 3)
                .map(post => {
                  const title =
                    post.node.frontmatter.title || post.node.fields.slug
                  const subtitle = post.node.frontmatter.subtitle
                  const imageFolder = post.node.fields.slug
                    .split("/")
                    .slice(-2, -1)[0]
                  const altDescription = post.node.frontmatter.alt || title
                  const imagePath = `/blog/${imageFolder}.jpg`

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
                              <IonIcon icon={arrowForward} aria-hidden="true" />
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
                    <span className="span">{topic}</span>
                  </h2>

                  <ul className="grid-list">
                    <ol style={{ listStyle: "none" }}>{postsForTopic}</ol>
                  </ul>
                  <a
                    href={`/topics/${slugify(topic, { lower: true })}`}
                    className="btn btn-secondary btn-discover"
                  >
                    <span className="span">Discover More {topic} Content</span>
                    <IonIcon icon={arrowForward} aria-hidden="true" />
                  </a>
                </div>
              )
            })}
          </section>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Topics" />

export default TopicsPage

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
