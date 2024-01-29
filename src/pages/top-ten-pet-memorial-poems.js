import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const TopTenPetMemorial = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const poems = data.allMarkdownRemark?.nodes || []

  const topTenPoems = poems
    .filter(poem => poem.frontmatter.topic.includes("Pet Memorial"))
    .sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))
    .sort((a, b) => b.frontmatter.featurescore - a.frontmatter.featurescore)
    .slice(0, 10)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Top Ten Pet Memorial Poems" />

      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Explore Our Top Ten Pet Memorial Poems for Your Beloved Companion
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Top Ten Pet Memorial Poems</span>
            </h1>
            <h2 className="headline headline-3 section-title">
              Welcome to Free Pet Poetry!
            </h2>
            <p className="single-text">
              Welcome to 'Free Pet Poetry,' where emotions find expression, and
              memories are beautifully crafted. In our 'Top Ten Pet Memorial
              Poems' collection, we present heartfelt verses that honor the
              cherished companions who have left a special place in our hearts.
              Each poem is a tribute to the unique bond we share with our pets.
              If you're looking for a custom poem to immortalize your beloved
              pet friend, click the link below to request a personalized
              creation and let our words capture the essence of your pet's
              everlasting love.
            </p>

            <a
              href="/requestform/"
              target="_blank"
              className="btn-hero btn-primary-hero"
            >
              Request Poetry Here
            </a>

            <div className="poem-list">
              {topTenPoems.map((poem, index) => (
                <div key={poem.fields.slug} className="poem-container">
                  <figure
                    className="card-banner img-holder"
                    style={{ width: "271px", height: "258px" }}
                  >
                    <img
                      src={`/blog/${poem.frontmatter.image}.webp`}
                      alt={poem.frontmatter.alt || poem.frontmatter.title}
                      width="271"
                      height="258"
                      loading="lazy"
                      className="img-cover"
                    />
                  </figure>
                  <h2 className="headline headline-2 section-title">
                    {poem.frontmatter.title}
                  </h2>

                  <p className="hero-subtitle">{poem.frontmatter.date}</p>

                  <article
                    className="blog-post"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <p
                      className="hero-text"
                      dangerouslySetInnerHTML={{ __html: poem.html }}
                      itemProp="articleBody"
                    />
                  </article>

                  {index !== topTenPoems.length - 1 && (
                    <hr className="poem-separator" />
                  )}
                </div>
              ))}
            </div>
            <img
              src="/images/shadow-1.svg"
              width="500"
              height="800"
              alt="shadows"
              className="hero-bg hero-bg-1"
            />
            <img
              src="/images/shadow-2.svg"
              width="500"
              height="500"
              alt="shadows"
              className="hero-bg hero-bg-2"
            />
          </div>

          <a
            href="/requestform/"
            target="_blank"
            className="btn-hero btn-primary-hero"
          >
            Request Poetry Here
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
          featurescore
          popularity
          readtime
          author
          image
          updatedate
        }
        html
      }
    }
  }
`

export default TopTenPetMemorial
