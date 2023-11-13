import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import HeroOriginal from "../components/HeroOriginal"
import TopicsSection from "../components/TopicsSection"
import FeatureSection from "../components/FeatureSection"
import TagsSection from "../components/TagsSection"
import RecentPostsSection from "../components/RecentPostSection"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <HeroOriginal />
      <TopicsSection data={data.allMarkdownRemark.nodes} />
      <FeatureSection posts={posts} />
      <TagsSection />
      <RecentPostsSection posts={posts} />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
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
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`
