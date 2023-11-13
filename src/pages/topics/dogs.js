import * as React from "react"
import { graphql } from "gatsby"
import { IonIcon } from "@ionic/react"
import { logoTwitter, logoFacebook, logoInstagram } from "ionicons/icons"

import Layout from "../../components/Layout"
import Seo from "../../components/seo"

const AquaticCompanionsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">
              Celebrating Pet Love Through Poetry
            </p>
            <h1 className="headline headline-2 section-title">
              <span className="span">About Free Pet Poetry</span>
            </h1>
            <h2 className="headline headline-3 section-title">
              Welcome to Free Pet Poetry!
            </h2>
            <p className="single-text">
              Where heartfelt words come together to celebrate the special bond
              between humans and their beloved pets. Our mission is to harness
              the power of poetry to honor the furry, feathered, or scaly
              companions who bring immeasurable love and joy into our lives.
            </p>
            <p className="single-text">
              At Free Pet Poetry, we understand that pets are more than just
              animals; they are cherished family members, loyal friends, and
              constant sources of inspiration. We believes that every pet
              deserves to have their story told, their personality captured, and
              their memory cherished through the art of poetry.
            </p>
            <h2 className="headline headline-3 section-title">Our Vision</h2>
            <p className="single-text">
              Our vision is simple yet profound: to spread love, joy, and
              comfort through the power of poetry. We want to touch hearts and
              create lasting memories by crafting custom poems that capture the
              essence of your pet's unique spirit.
            </p>
            <p className="single-text">
              Whether you're celebrating a joyful moment with your furry friend
              or remembering a beloved companion who has crossed the Rainbow
              Bridge, Free Pet Poetry is here to help you express your emotions
              through the beauty of words.
            </p>
            <h2 className="headline headline-3 section-title">Our Mission</h2>
            <ol>
              <li>
                <strong>Celebrating Life:</strong> We celebrate the lives of
                pets, both present and past, by composing poems that highlight
                their quirks, their unconditional love, and the happiness they
                bring to your world.
              </li>

              <li>
                <strong>Honoring Memories:</strong> We offer a loving tribute to
                pets who have left us but remain forever in our hearts. Our
                memorial poems provide solace and comfort during times of loss.
              </li>

              <li>
                <strong>Fostering Connection:</strong> We believe that sharing
                stories and emotions through poetry can connect pet owners on a
                profound level. Our poems serve as a bridge between people who
                understand the deep bond between humans and their animal
                companions.
              </li>
            </ol>
            <h2 className="headline headline-3 section-title">Our Promise</h2>
            <ul>
              <li>
                <strong>Personalized Poetry:</strong> Each poem we create is
                custom-crafted to reflect the unique personality and experiences
                of your pet. Whether it's a mischievous cat, a loyal dog, a
                talkative parrot, or any other treasured creature, our poems
                capture their essence.
              </li>

              <li>
                <strong>Quality and Care:</strong> We take great care in
                composing every poem, pouring our hearts and creativity into
                each piece. We are passionate animal lovers who understand the
                significance of your pet in your life.
              </li>

              <li>
                <strong>Free of Charge:</strong> As our name suggests, Free Pet
                Poetry is committed to providing our services at no cost. We
                believe that love should always be shared freely, and poetry is
                one of the most beautiful ways to express it.
              </li>
            </ul>
            <h2 className="headline headline-3 section-title">
              Join the Free Pet Poetry Community
            </h2>
            <p className="single-text">
              Whether you're seeking a poem to celebrate a special occasion with
              your pet or looking for solace in the wake of loss, Free Pet
              Poetry is here to serve you.
            </p>
            <p className="single-text">
              Join our community of pet lovers, share your stories, and let us
              craft the perfect poem to commemorate your furry, feathered, or
              scaly companion.
            </p>
            <ul className="about-social-links">
              <li>
                <a
                  href="https://twitter.com/freepetpoetry"
                  class="social-link"
                  target="_Blank"
                  rel="noreferrer"
                >
                  <IonIcon icon={logoTwitter} />
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/freepetpoetry/"
                  class="social-link"
                  target="_Blank"
                  rel="noreferrer"
                >
                  <IonIcon icon={logoFacebook} />
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/freepetpoetry/"
                  class="social-link"
                  target="_Blank"
                  rel="noreferrer"
                >
                  <IonIcon icon={logoInstagram} />
                  Instagram
                </a>
              </li>
            </ul>
            <p className="single-text">
              Together, we'll celebrate the love, joy, and memories that our
              pets bring into our lives. Let Free Pet Poetry be your poetic
              partner in honoring the extraordinary bonds we share with our
              beloved pets.
            </p>

            <p className="single-text">
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

export const Head = () => <Seo title="Aquatic Companions" />

export default AquaticCompanionsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
