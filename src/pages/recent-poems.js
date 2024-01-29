import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import RecentPostsSection from "../components/RecentPostSection"

const RecentPoemsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark?.nodes || []
  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Discover the Melody of Emotions in Our Pet Poetry
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Recent Poems</span>
            </h1>

            <p className="single-text">
              Immerse yourself in the artistry of our latest poems, each verse
              crafted with love and passion. From heartfelt tributes to playful
              odes, our recent collection captures the essence of the
              human-animal bond. Join us on a poetic journey that celebrates the
              unique stories of pets, their quirks, and the joy they bring. Each
              poem is a testament to the cherished moments we share with our
              animal companions.
            </p>
            <p className="single-subtitle">
              Request a Custom Poem for Your Special Pet{" "}
            </p>

            <p className="single-text">
              Let us compose a personalized poem that beautifully encapsulates
              the spirit of your beloved pet. Share the details of their
              personality, memories you hold dear, and any special traits, and
              our poets will create a custom verse to immortalize your pet in
              poetic brilliance. Experience the magic of words tailored to your
              furry friend—request your custom poem todayLet us compose a
              personalized poem that beautifully encapsulates the spirit of your
              beloved pet. Share the details of their personality, memories you
              hold dear, and any special traits, and our poets will create a
              custom verse to immortalize your pet in poetic brilliance.
              Experience the magic of words tailored to your special
              friend—request your custom poem today
            </p>
            <a
              href="/requestform/"
              target="_blank"
              className="btn-hero btn-primary-hero"
            >
              Request Poetry Here
            </a>
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
      </section>
      <RecentPostsSection posts={posts} />
    </Layout>
  )
}

export const Head = () => <Seo title="Recent Poems" />

export default RecentPoemsPage

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
      }
    }
  }
`
