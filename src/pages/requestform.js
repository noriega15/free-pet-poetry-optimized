import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const Requestform = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Your Pet's Story from Free Pet Poetry
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Poetry Request Form</span>
            </h1>

            <p className="single-text">
              Share the magic of your pet's journey with us! Our questionnaire
              helps our poets delve into the heart of your furry friend's
              personality, quirks, and cherished moments. By understanding your
              pet's unique story, we'll craft a custom poem that captures their
              essence and the bond you share. Let's create poetry that paints
              your pet's spirit in every line.
            </p>
            <form
              className="form-content"
              action="https://docs.google.com/forms/d/e/1FAIpQLSe5m7j-Z8mIIuVyiNkfDJM9bCsBy83VSIDNJkyQtoWWFbvXqA/formResponse"
              method="post"
            >
              <div className="form-element">
                <span>
                  What is your best email?{" "}
                  <span className="required">* Required</span>
                </span>
                <input type="email" name="emailAddress" required></input>
              </div>

              <div className="form-element">
                <span>What is your pet's name?</span>
                <textarea
                  type="text"
                  name="entry.1469506155"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>Tell us about your pet's breed and age.</span>
                <textarea
                  type="text"
                  name="entry.2042634820"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>
                  Describe your pet's physical appearance, including color,
                  markings, and size.
                </span>
                <textarea
                  type="text"
                  name="entry.947558079"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>
                  Share some personality traits that make your pet special.
                </span>
                <textarea
                  type="text"
                  name="entry.715668878"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>What are your pet's favorite activities or hobbies?</span>
                <textarea type="text" name="entry.36658374" rows="1"></textarea>
              </div>

              <div className="form-element">
                <span>
                  Do you have any memorable experiences or adventures with your
                  pet?
                </span>
                <textarea
                  type="text"
                  name="entry.1534211620"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>
                  Are there any quirky habits or behaviors that define your pet?
                </span>
                <textarea
                  type="text"
                  name="entry.1940734057"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>
                  How does your pet show affection or interact with you?
                </span>
                <textarea
                  type="text"
                  name="entry.180653437"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>What are your pet's favorite treats or foods?</span>
                <textarea
                  type="text"
                  name="entry.1755586049"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>Is there a nickname you have for your pet?</span>
                <textarea
                  type="text"
                  name="entry.498756008"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>Describe the emotions your pet evokes in you.</span>
                <textarea
                  type="text"
                  name="entry.128807281"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element">
                <span>
                  Is there anything else you'd like our poets to know about your
                  pet or the bond you share?
                </span>
                <textarea
                  type="text"
                  name="entry.1242075609"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-element radio-buttons">
                <span>
                  Is there a specific theme or sentiment you'd like the poem to
                  convey?
                </span>
                <span>Select a Theme:</span>

                <label htmlFor="themeFunny">
                  <input
                    type="radio"
                    name="entry.2103235414"
                    id="themeFunny"
                    value="Funny"
                  />
                  Funny
                </label>

                <label htmlFor="themeNostalgic">
                  <input
                    type="radio"
                    name="entry.2103235414"
                    id="themeNostalgic"
                    value="Nostalgic"
                  />
                  Nostalgic
                </label>

                <label htmlFor="themeHeartwarming">
                  <input
                    type="radio"
                    name="entry.2103235414"
                    id="themeHeartwarming"
                    value="Heartwarming"
                  />
                  Heartwarming
                </label>

                <label htmlFor="themeReflective">
                  <input
                    type="radio"
                    name="entry.2103235414"
                    id="themeReflective"
                    value="Reflective"
                  />
                  Reflective
                </label>

                <label htmlFor="themeOther">
                  <input
                    type="radio"
                    name="entry.2103235414"
                    id="themeOther"
                    value="__other_option__"
                  />
                  Other
                </label>
                <input
                  type="text"
                  id="otherThemeText"
                  name="entry.2103235414.other_option_response"
                  placeholder="Please specify"
                />
              </div>

              <div className="form-element">
                <span>
                  Would you like us to share your personalized pet poem with you
                  on Facebook? If so, please provide your Facebook handle so we
                  can tag you!
                </span>
                <textarea
                  type="text"
                  id="facebookHandle"
                  name="entry.706033114"
                  rows="1"
                ></textarea>
              </div>

              <div className="form-button">
                <button type="submit">Submit Poetry Request</button>
              </div>
            </form>
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

export const Head = () => <Seo title="Poetry Request Form" />

export default Requestform

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
