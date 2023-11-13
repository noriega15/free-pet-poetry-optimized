import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const SCROLL_OFFSET = 120

const Privacypolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  useEffect(() => {
    const handleScroll = e => {
      const topic = e.target.getAttribute("href").slice(1)
      const targetElement = document.getElementById(topic)

      if (targetElement) {
        e.preventDefault() // Move this line here if you still want to prevent the default behavior

        const offsetTop = targetElement.offsetTop - SCROLL_OFFSET
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }

    const scrollLinks = document.querySelectorAll(".scroll-link")

    scrollLinks.forEach(link => {
      link.addEventListener("click", handleScroll)
    })

    // Clean up the event listeners when the component unmounts
    return () => {
      scrollLinks.forEach(link => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">Free Pet Poetry</p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Privacy Policy</span>
            </h1>
            <p className="single-text">
              <p>
                This privacy notice for Marcos Noriega who operates Free Pet
                Poetry ("we," "us," or "our"), and website address:
                https://freepetpoetry.com, describes how and why we might
                collect, store, use, and/or share ("process") your information
                when you use our services ("Services").
              </p>
              <p>
                <strong>Questions or concerns?</strong> Reading this privacy
                notice will help you understand your privacy rights and choices.
                If you do not agree with all terms outlined in our policies and
                practices, please do not use our Services. If you still have any
                questions or concerns, please contact us at
                freepetpoetry@gmail.com.
              </p>
              <h2>
                <strong>SUMMARY OF KEY POINTS</strong>
              </h2>
              <p>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                referencing our table of contents below to find the section you
                are looking for.
              </p>
              <p>
                <strong>What personal information do we process?</strong> When
                you visit, use, or navigate our Services, we may process
                personal information depending on how you interact with Free Pet
                Poetry and the Services, the choices you make, and the products
                and features you use. See below to learn more.
              </p>
              <p>
                <strong>
                  Do we process any sensitive personal information?
                </strong>
                We do not process sensitive personal information.
              </p>
              <p>
                <strong>
                  Do we receive any information from third parties?
                </strong>
                We obtain information from public databases, marketing partners,
                social media platforms, and external sources to improve our
                Services and personalize your experience. We do this lawfully
                and in compliance with data protection laws. See below to learn
                more.
              </p>
              <p>
                <strong>How do we process your information?</strong> We process
                your information for several reasons, including providing,
                improving, and administering our Services, communicating with
                you, preventing fraud, and complying with the law. We also
                process your information with your consent for other purposes.
                We only process your information when we have a valid legal
                reason to do so. See below to learn more.
              </p>
              <p>
                <strong>
                  In what situations and with which parties do we share personal
                  information?
                </strong>
                We may share information in specific situations along with
                specific third parties. See below to learn more.
              </p>
              <p>
                <strong>What are your rights?</strong> Depending on where you
                are located geographically, the applicable privacy law may mean
                you have certain rights regarding your personal information. See
                below to learn more.
              </p>
              <p>
                <strong>How do you exercise your rights?</strong> The easiest
                way to exercise your rights is by contacting us at
                freepetpoetry@gmail.com. We will consider and act upon any
                request in accordance with applicable data protection laws.
              </p>
              <p>
                <strong>
                  Want to learn more about what Free Pet Poetry does with any
                  information we collect?
                </strong>
              </p>
              <p>
                <strong>See below to review the notice in full.</strong>
              </p>
              <h2>
                <strong>TABLE OF CONTENTS</strong>
              </h2>
              <ol>
                <li>
                  <a href="#one" className="scroll-link">
                    WHAT INFORMATION DO WE COLLECT?
                  </a>
                </li>

                <li>
                  <a href="#two" className="scroll-link">
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </a>
                </li>

                <li>
                  <a href="#three" className="scroll-link">
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </a>
                </li>

                <li>
                  <a href="#four" className="scroll-link">
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </a>
                </li>

                <li>
                  <a href="#five" className="scroll-link">
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                  </a>
                </li>

                <li>
                  <a href="#six" className="scroll-link">
                    IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                  </a>
                </li>

                <li>
                  <a href="#seven" className="scroll-link">
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </a>
                </li>

                <li>
                  <a href="#eight" className="scroll-link">
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </a>
                </li>

                <li>
                  <a href="#nine" className="scroll-link">
                    WHAT ARE YOUR PRIVACY RIGHTS?
                  </a>
                </li>

                <li>
                  <a href="#ten" className="scroll-link">
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </a>
                </li>

                <li>
                  <a href="#eleven" className="scroll-link">
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </a>
                </li>

                <li>
                  <a href="#twelve" className="scroll-link">
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </a>
                </li>

                <li>
                  <a href="#thirteen" className="scroll-link">
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </a>
                </li>

                <li>
                  <a href="#fourteen" className="scroll-link">
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </a>
                </li>
              </ol>
              <h4 id="one">1. WHAT INFORMATION DO WE COLLECT?</h4>
              <p>
                <strong>Personal information you disclose to us</strong>
              </p>
              <p>
                In Short: We collect personal information that you provide to
                us.
              </p>
              <p>
                We collect personal information that you voluntarily provide to
                us when you register on the Services, express an interest in
                obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
              </p>
              <p>
                <strong>Sensitive Information:</strong> We do not process
                sensitive information.
              </p>
              <p>
                We require all personal information provided to be true,
                complete, and accurate, and any changes must be promptly
                reported to us.
              </p>
              <p>
                <strong>Information automatically collected</strong>
              </p>
              <p>
                In Short: Some information — such as your Internet Protocol (IP)
                address and/or browser and device characteristics — is collected
                automatically when you visit our Services.
              </p>
              <p>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </p>
              <p>
                Like many businesses, we also collect information through
                cookies and similar technologies.
              </p>
              <h4 id="two">
                <strong>2. HOW DO WE PROCESS YOUR INFORMATION?</strong>
              </h4>
              <p>
                In Short: We process your information for various reasons,
                including providing, improving, and administering our Services,
                communicating with you, preventing fraud and ensuring security,
                and complying with the law. Additionally, we may process your
                information for other purposes with your consent.
              </p>
              <p>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              <h4 id="three">
                <strong>
                  3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </strong>
              </h4>
              <p>
                In Short: We may share information in specific situations
                described in this section and/or with the following third
                parties.
              </p>
              <p>
                We may need to share your personal information in the following
                situations:
              </p>
              <ul>
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer
                  your information in connection with, or during negotiations
                  of, any merger, sale of company assets, financing, or
                  acquisition of all or a portion of our business to another
                  company.
                </li>

                <li>
                  <strong>Affiliates.</strong> We may share your information
                  with our affiliates, including our parent company,
                  subsidiaries, joint venture partners, or other companies that
                  we control or that are under common control with us. We
                  require our affiliates to adhere to this privacy notice.
                </li>

                <li>
                  <strong>Business Partners.</strong> We may share your
                  information with our business partners to provide you with
                  specific products, services, or promotions.
                </li>
              </ul>
              <h4 id="four">
                <strong>
                  4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </strong>
              </h4>
              <p>
                In Short:We may use cookies and other tracking technologies to
                collect and store your information.
              </p>
              <p>
                We use cookies and similar tracking technologies, such as web
                beacons and pixels, to access or store information. Please refer
                to our Cookie Notice for specific information on how we use such
                technologies and how you can refuse certain cookies.
              </p>
              <p>
                We will only use the information we receive for the purposes
                described in this privacy notice or otherwise made clear to you.
                Please note that we do not control, and are not responsible for,
                other uses of your personal information by third-party social
                media providers. It is recommended that you review their privacy
                notice to understand how they collect, use, and share your
                personal information, and how you can set your privacy
                preferences on their sites and apps.
              </p>
              <h4 id="five">
                <strong>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</strong>
              </h4>
              <p>
                In Short: If you choose to register or log in to our services
                using a social media account, we may have access to certain
                information about you.
              </p>
              <p>
                When you register or log in to our Services using your
                third-party social media account details, we receive certain
                profile information about you from your social media provider,
                which may include your name, email address, friends list, and
                profile picture. We may also request access to other permissions
                related to your account, such as your friends, check-ins, and
                likes, and you may choose to grant or deny us access to each
                individual permission. We will only use this information for the
                purposes described in our privacy notice or on the relevant
                Services. Please note that we do not control other uses of your
                personal information by your social media provider, so we
                recommend reviewing their privacy notice to understand how they
                collect, use, and share your information and set your privacy
                preferences on their sites and apps.
              </p>
              <h4 id="six">
                <strong>
                  6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
                </strong>
              </h4>
              <p>
                In Short: We may transfer, store, and process your information
                in countries other than your own.
              </p>
              <p>
                Our servers are located in. If you are accessing our Services
                from outside, please be aware that your information may be
                transferred to, stored, and processed by us in our facilities
                and by those third parties with whom we may share your personal
                information (see "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
                INFORMATION?" above), in and other countries.
              </p>
              <p>
                For EEA and UK residents, we will protect your personal
                information in accordance with this privacy notice and
                applicable law, even if data protection laws in these countries
                may not be as comprehensive as those in your country.
              </p>
              <h4 id="seven">
                <strong>7. HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
              </h4>
              <p>
                In Short: We keep your information for as long as necessary to
                fulfill the purposes outlined in this privacy notice unless
                otherwise required by law.
              </p>
              <p>
                We'll only keep your personal information as long as needed for
                the purposes described in this privacy notice, and we'll delete
                or anonymize it when there's no longer a legitimate business
                need to process it. We may need to retain it for longer periods
                as required or permitted by law, but we won't keep it for more
                than 50 years for any purpose described in this notice. If we
                can't delete or anonymize your information immediately, we'll
                securely store it and isolate it until deletion is possible.
              </p>
              <h4 id="eight">
                <strong>8. DO WE COLLECT INFORMATION FROM MINORS?</strong>
              </h4>
              <p>
                In Short: We do not knowingly collect data from or market to
                children under 18 years of age.
              </p>
              <p>
                We do not collect data or market to children under 18 years of
                age. By using our Services, you confirm that you are at least 18
                years old or the parent or guardian of a minor using our
                Services. If we learn that we have collected personal
                information from users under 18 years old, we will take
                reasonable measures to promptly delete the data. If you know of
                any such data that we may have collected, please contact us at
                freepetpoetry@gmail.com.
              </p>
              <h4 id="nine">
                <strong>9. WHAT ARE YOUR PRIVACY RIGHTS?</strong>
              </h4>
              <p>
                In Short: You may review, change, or terminate your account at
                any time.
              </p>
              <p>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:
              </p>
              <p>
                <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">
                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
                </a>
              </p>
              <p>
                If you are located in Switzerland, the contact details for the
                data protection authorities are available here:
                <a href="https://www.edoeb.admin.ch/edoeb/en/home.html.">
                  https://www.edoeb.admin.ch/edoeb/en/home.html.
                </a>
              </p>
              <p>
                <strong>Withdrawing your consent:</strong> If we rely on your
                consent to process your personal information, you have the right
                to withdraw your consent at any time by contacting us using the
                provided contact details. However, this will not affect the
                lawfulness of the processing before withdrawal, nor processing
                conducted in reliance on lawful grounds other than consent as
                allowed by applicable law.You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
              </p>
              <p>
                <strong>Account Information</strong>
              </p>
              <p>
                You have the ability to review or change your account
                information or terminate your account at any time. If you
                request to terminate your account, we will deactivate or delete
                your account and information from our active databases, but we
                may retain some information in our files for fraud prevention,
                troubleshooting, investigation, legal compliance, and
                enforcement of our terms.
              </p>
              <h4 id="ten">
                <strong>10. CONTROLS FOR DO-NOT-TRACK FEATURES</strong>
              </h4>
              <p>
                You can activate a Do-Not-Track ("DNT") feature in some web
                browsers and mobile operating systems to indicate your
                preference not to have your online browsing activities monitored
                and collected. However, we currently do not respond to DNT
                signals or other similar mechanisms. There is no uniform
                technology standard for recognizing and implementing DNT
                signals, and we will inform you of any changes to this practice
                in a revised version of this privacy notice if a standard for
                online tracking is adopted in the future.
              </p>
              <h4 id="eleven">
                <strong>
                  11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                </strong>
              </h4>
              <p>
                In Short: Yes, if you are a resident of California, you are
                granted specific rights regarding access to your personal
                information.
              </p>
              <p>
                If you are a California resident, you have the right to request
                and obtain from us, once a year and free of charge, information
                about categories of personal information disclosed to third
                parties for direct marketing purposes and the names and
                addresses of all third parties with which we shared personal
                information in the immediately preceding calendar year under the
                "Shine The Light" law. If you are under 18 years of age, reside
                in California, and have a registered account with the Services,
                you can request removal of unwanted publicly posted data on the
                Services by contacting us using the contact information provided
                below. However, please note that the data may not be completely
                or comprehensively removed from all our systems.
              </p>
              <h4 id="twelve">
                <strong>12. DO WE MAKE UPDATES TO THIS NOTICE?</strong>
              </h4>
              <p>
                In Short: Yes, we will update this notice as necessary to stay
                compliant with relevant laws.
              </p>
              <p>
                We may modify this privacy notice occasionally, and the updated
                version will be effective as soon as it is available. The
                revised date will be shown, and if significant changes are made,
                we may notify you by posting a notice or sending you a direct
                notification. We advise you to check this privacy notice often
                to stay informed about how we safeguard your information.
              </p>
              <h4 id="thirteen">
                <strong>13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</strong>
              </h4>
              <p>
                If you have questions or comments about this notice, you may
                email us at freepetpoetry@gmail.com or by post to:
              </p>
              <p>
                Marcos Noriega <br />
                PO BOX 35862 <br />
                Albuquerque, NM 87176 <br />
                United States
              </p>
              <h4 id="fourteen">
                <strong>
                  14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                  FROM YOU?
                </strong>
              </h4>
              <p>
                You may have the right to request access, modification, or
                deletion of your personal information based on the laws of your
                country. To make such a request, please send an email to
                freepetpoetry@gmail.com.
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

export const Head = () => <Seo title="Privacy Policy" />

export default Privacypolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
