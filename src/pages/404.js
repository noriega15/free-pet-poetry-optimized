import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Looks like you've wandered into uncharted territory.
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Oops! 404 Page Not Found!</span>
            </h1>
            <p className="single-text">
              Oops! It seems like you didn't quite find the page you were
              looking for, but don't worry you're still in the right place.
              <br />
              <br />
              While you're with us, why not take a moment to request a
              complimentary, tailor-made poem dedicated to your cherished pet?
              We're thrilled to create a unique poem exclusively for your furry
              friend. Just complete the form, and we'll start crafting a
              heartfelt poem that honors your beloved pet companion.
              <br />
              <br />
              To request your custom poem, click the link below:
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
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
