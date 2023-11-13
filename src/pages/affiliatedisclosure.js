import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const Affiliatedisclosure = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">Free Pet Poetry</p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Affiliate Disclosure</span>
            </h1>
            <p className="single-text">
              <p>
                Some of the links on this website are affiliate links, which
                means that I may earn a commission if you click on the link or
                make a purchase using the link. When you make a purchase, the
                price you pay will be the same whether you use the affiliate
                link or go directly to the vendor’s website using a
                non-affiliate link.
              </p>
              <p>
                Additionally, as an Amazon Associate I earn from qualifying
                purchases through some of the links on this website.
              </p>
              <p>
                In accordance with the Federal Trade Commission’s 16 CFR, Part
                255: “Guides Concerning the Use of Endorsements and Testimonials
                in Advertising.”
              </p>
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

export const Head = () => <Seo title="Affiliate Disclosure" />

export default Affiliatedisclosure

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
