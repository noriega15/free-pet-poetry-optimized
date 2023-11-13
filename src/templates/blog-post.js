import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import RecentPostsSection from "../components/RecentPostSection"
import { IonIcon } from "@ionic/react"
import { arrowForward, arrowBack } from "ionicons/icons"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post, allMarkdownRemark },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const posts = allMarkdownRemark.nodes

  const title = post.frontmatter.title || (post.fields && post.fields.slug)
  const altDescription = post.frontmatter.alt || title
  const imagePath = `/blog/${post.frontmatter.image}.jpg`
  return (
    <Layout location={location} title={siteTitle}>
      <section className="hero" id="home" aria-label="home">
        <div className="container">
          <div className="hero-content">
            <article
              className="blog-post"
              itemScope
              itemType="http://schema.org/Article"
            >
              <h1 className="headline headline-1 section-title">
                {title} {/* Use the adjusted 'title' variable here */}
              </h1>
              <p className="hero-subtitle">{post.frontmatter.date}</p>
              <p
                className="hero-text"
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <hr />
            </article>
            <nav className="blog-post-nav">
              <ul
                style={{
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link
                      to={previous.fields.slug}
                      rel="prev"
                      style={{ display: "flex", alignItems: "center" }}
                      className="headline headline-3 "
                    >
                      <IonIcon
                        className="pagination-btn"
                        icon={arrowBack}
                        aria-hidden="true"
                      />{" "}
                      {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link
                      to={next.fields.slug}
                      rel="next"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                      className="headline headline-3 "
                    >
                      {next.frontmatter.title}{" "}
                      <IonIcon
                        className="pagination-btn"
                        icon={arrowForward}
                        aria-hidden="true"
                      />
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
          <div className="hero-banner">
            {imagePath && (
              <img
                src={imagePath}
                alt={altDescription}
                width="327"
                height="490"
                loading="lazy"
                className="w-100"
              />
            )}
          </div>
        </div>
      </section>
      <RecentPostsSection posts={posts} />
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
    allMarkdownRemark {
      nodes {
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
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
