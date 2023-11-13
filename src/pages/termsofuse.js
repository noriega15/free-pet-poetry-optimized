import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/seo"

const Termsofuse = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <section className="single">
        <div className="container">
          <div className="single-content">
            <p className="single-subtitle">Free Pet Poetry</p>
            <h1 className="headline headline-2 section-title">
              <span className="span">Terms of Use</span>
            </h1>
            <h2 className="headline headline-3 section-title">
              AGREEMENT TO TERMS
            </h2>

            <p className="single-text">
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you")
              and Marcos Noriega who operates Free Pet Poetry ("we", "us", or
              "our"), concerning your access to and use of the website address:
              https://freepetpoetry.com as well as any other media form, media
              channel, mobile website or mobile application related, linked, or
              otherwise connected thereto (“Site”). By accessing the Site, You
              agree, you have read, understood, and agree to be bound by all of
              these agreements in the Terms of Use. IF YOU DO NOT AGREE WITH ALL
              OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM
              USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
            <p className="single-text">
              We incorporate supplemental terms and conditions or documents that
              may be posted on the Site from time to time by reference. We
              reserve the right to modify these Terms of Use at any time and for
              any reason at our sole discretion. Any changes will be indicated
              by updating the “Last updated” date of these Terms of Use, and you
              waive any right to receive specific notice of each such change. It
              is your responsibility to review these Terms of Use periodically
              to stay informed of updates. Your continued use of the Site after
              the date on which any revised Terms of Use are posted will
              constitute your acceptance of an agreement to be bound by the
              changes.
            </p>
            <p className="single-text">
              The Site's information is not meant to be distributed to or used
              by any person or entity in any jurisdiction or country where doing
              so would violate laws or regulations or obligate us to register
              within such jurisdiction or country. Therefore, individuals who
              opt to access the Site from other locations do so of their own
              volition and bear sole responsibility for ensuring that they
              comply with any relevant local laws.
            </p>
            <p className="single-text">
              The Site is not tailored to comply with industry-specific
              regulations Federal Information Security Management Act (FISMA),
              etc., Health Insurance Portability and Accountability Act (HIPAA),
              Gramm-Leach-Bliley Act (GLBA).If your interactions would be
              subjected to such laws or acts, you may not use this Site.
            </p>
            <p className="single-text">
              The Site is intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the Site.
            </p>
            <h2>INTELLECTUAL PROPERTY RIGHTS</h2>

            <p className="single-text">
              Unless stated otherwise, we own the Site as our proprietary
              property. All elements of the Site, including source code,
              databases, software, website designs, audio, video, text,
              photographs, and graphics (collectively referred to as the
              "Content"), as well as the trademarks, service marks, and logos
              (the "Marks") contained therein, are either owned or controlled by
              us or licensed to us. They are protected by a variety of
              intellectual property rights and unfair competition laws,
              including copyright and trademark laws of the United States,
              international copyright laws, and international conventions. The
              Content and the Marks are provided on the Site "AS IS" and are
              intended solely for your information and personal use. Without our
              express prior written permission, no part of the Site, the Content
              or the Marks may be copied, aggregated, reproduced, republished,
              uploaded, posted, publicly displayed, encoded, translated,
              transmitted, distributed, sold, licensed, or otherwise exploited
              for any commercial purpose whatsoever.
            </p>
            <p className="single-text">
              If you are eligible to use the Site, you are granted a restricted
              license to enter and use the Site, and to download or print a copy
              of any section of the Content that you have legally accessed, for
              your personal, non-commercial use only. We reserve all rights to
              the Site, the Content, and the Marks that are not explicitly
              granted to you.
            </p>
            <h2>USER REPRESENTATIONS</h2>

            <p className="single-text">
              When using the Site, you declare and warrant that: (1) all the
              registration information you provide is true, accurate, current,
              and complete; (2) you will ensure the accuracy of this information
              and update it promptly as necessary; (3) you have the legal
              capacity to agree to these Terms of Use and will comply with them;
              (4) you are not a minor in the jurisdiction in which you live; (5)
              you will not access the Site through automated or non-human means,
              including bots, scripts, or any other method; (6) you will not use
              the Site for any illegal or unauthorized purpose; and (7) your use
              of the Site will not breach any applicable laws or regulations.
            </p>
            <p className="single-text">
              If you provide any untrue, inaccurate, outdated, or incomplete
              information, we have the right to suspend or terminate your
              account and deny you access to the Site (or any part thereof) both
              now and in the future.
            </p>
            <h2>USER REGISTRATION</h2>

            <p className="single-text">
              Registration with the Site may be necessary. You agree to maintain
              the confidentiality of your password and are responsible for all
              activity on your account using your password. We reserve the right
              to delete, reclaim, or alter your username if we conclude in our
              sole discretion that it is inappropriate, obscene, or otherwise
              objectionable.
            </p>
            <h2>PROHIBITED ACTIVITIES</h2>

            <p className="single-text">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="single-text">
              <strong>
                Do not engage in any of the following activities on the Site:
              </strong>
            </p>
            <ul className="single-text">
              <li>
                Systematically retrieving data or content from the Site without
                written permission from us
              </li>

              <li>
                Making unauthorized use of the Site, including collecting
                usernames or email addresses for the purpose of sending
                unsolicited emails or creating user accounts under false
                pretenses
              </li>

              <li>Using a buying agent to make purchases on the Site</li>

              <li>
                Advertising or offering to sell goods and services on the Site
              </li>

              <li>
                Circumventing or interfering with security-related features of
                the Site
              </li>

              <li>Engaging in unauthorized framing or linking to the Site</li>

              <li>Tricking, defrauding, or misleading us or other users</li>

              <li>
                Making improper use of our support services or submitting false
                reports of abuse or misconduct
              </li>

              <li>Engaging in automated use of the system or data mining</li>

              <li>
                Interfering with or disrupting the Site or networks or services
                connected to it
              </li>

              <li>Attempting to impersonate another user or person</li>

              <li>Selling or transferring your profile</li>

              <li>
                Harassing, abusing, or harming another person using information
                obtained from the Site
              </li>

              <li>
                Using the Site for any revenue-generating endeavor or commercial
                enterprise
              </li>

              <li>
                Deciphering, decompiling, disassembling, or reverse engineering
                any of the Site's software
              </li>

              <li>
                Attempting to bypass measures designed to prevent or restrict
                access to the Site
              </li>
              <li>
                Harassing or threatening employees or agents providing the Site
              </li>

              <li>
                Deleting copyright or proprietary rights notice from any Content
              </li>

              <li>Copying or adapting the Site's software</li>

              <li>
                Uploading or transmitting viruses, Trojan horses, or other
                materials that interfere with the Site or modify its operation
              </li>

              <li>
                Using information collection or transmission mechanisms without
                permission
              </li>

              <li>
                Using automated systems to access the Site without permission
              </li>

              <li>Disparaging or harming us or the Site</li>

              <li>
                Using the Site in a manner inconsistent with applicable laws or
                regulations.
              </li>
            </ul>
            <h2>USER GENERATED CONTRIBUTIONS</h2>

            <p className="single-text">
              By using the Site, you may be invited to participate in various
              features, including chat, blogs, message boards, and other forums.
              Through these features, you may create, submit, post, display,
              transmit, perform, publish, distribute, or broadcast various types
              of content and materials, such as text, videos, audio,
              photographs, graphics, comments, suggestions, or personal
              information. These Contributions may be accessible to other Site
              users and third-party websites, and are therefore considered
              non-confidential and non-proprietary. By making Contributions, you
              represent and warrant that they do not infringe on the proprietary
              rights of any third party, that you have the necessary licenses,
              rights, consents, releases, and permissions to use and authorize
              the use of your Contributions, and that they comply with the Terms
              of Use. Your Contributions do not contain any material that
              solicits personal information from anyone under the age of 18 or
              exploits people under the age of 18 in a sexual or violent manner.
              Additionally, your Contributions must not be offensive, harassing,
              abusive, or discriminatory in any way, and they must not promote
              or incite violence. Any violation of these Terms of Use may result
              in the termination or suspension of your rights to use the Site.
            </p>
            <h2>CONTRIBUTION LICENSE</h2>

            <p className="single-text">
              By sharing or linking your Contributions to the Site from any of
              your social networking accounts, you are granting us an
              unrestricted, unlimited, irrevocable, perpetual, non-exclusive,
              transferable, royalty-free, fully-paid, worldwide license and
              right to use, copy, reproduce, disclose, sell, resell, publish,
              broadcast, archive, store, cache, publicly perform, publicly
              display, reformat, translate, excerpt, distribute, and prepare
              derivative works of your Contributions for any commercial,
              advertising, or other purpose. This license applies to all forms
              of media, both existing and future, and includes the use of your
              name, company name, franchise name, trademarks, service marks,
              trade names, logos, and personal and commercial images that you
              provide.
            </p>
            <p className="single-text">
              You are waiving all moral rights in your Contributions and
              representing that such rights have not been asserted. We do not
              claim any ownership over your Contributions, and you retain full
              ownership of all intellectual property and proprietary rights
              associated with your Contributions. We are not liable for any
              statements or representations in your Contributions, and you are
              solely responsible for them. You also agree to refrain from any
              legal action against us regarding your Contributions and to hold
              us harmless from any liability that may arise from your
              Contributions.
            </p>
            <p className="single-text">
              We reserve the right to edit, redact, re-categorize, pre-screen,
              or delete any of your Contributions at any time and for any
              reason, without notice. We have no obligation to monitor your
              Contributions, and you agree that we are not responsible for them
              in any way.
            </p>
            <h2>GUIDELINES FOR REVIEWS</h2>

            <p className="single-text">
              On our Site, we offer areas where you can leave ratings or
              reviews. To ensure that our Site remains respectful and
              informative, we require that you follow certain guidelines when
              posting a review. Firstly, you must have had firsthand experience
              with the entity being reviewed. Secondly, your reviews should not
              contain any offensive, profane, or hate language, or any
              discriminatory references based on religion, race, gender,
              national origin, age, marital status, sexual orientation, or
              disability. Thirdly, you should not include any references to
              illegal activity, or be affiliated with competitors when posting
              negative reviews. Fourthly, you should not make any conclusions as
              to the legality of conduct. Fifthly, you may not post any false or
              misleading statements, and lastly, you may not organize any
              campaigns encouraging others to post reviews, whether positive or
              negative.
            </p>
            <p className="single-text">
              We reserve the right to accept, reject or remove reviews at our
              discretion. We have no obligation to screen or delete reviews,
              even if they are deemed objectionable or inaccurate. Reviews do
              not represent our opinions or the views of our affiliates or
              partners and are not endorsed by us. We assume no liability for
              any review or any claims, liabilities or losses that result from a
              review. By posting a review, you grant us a perpetual,
              non-exclusive, worldwide, royalty-free, fully-paid, assignable and
              sublicensable right and license to reproduce, modify, translate,
              transmit, display, perform and/or distribute all content relating
              to the review.
            </p>
            <h2>SOCIAL MEDIA</h2>

            <p className="single-text">
              As a feature of the Site, you can link your account with
              Third-Party Accounts by either providing your login information or
              allowing us to access your account with the Third-Party Account,
              subject to the terms and conditions governing your use of each
              Third-Party Account. You guarantee that you are authorized to
              disclose your login information or grant us access to your account
              without violating any terms and conditions or making us subject to
              any usage limitations or fees. By giving us access to your
              Third-Party Accounts, you acknowledge that we may access and store
              the content that you have stored in your account, including friend
              lists, and that we may receive additional information from your
              Third-Party Account. Your personally identifiable information may
              be available on the Site, depending on the privacy settings in
              your Third-Party Accounts. We are not responsible for any Social
              Network Content and do not review it for accuracy, legality, or
              non-infringement. You consent to us accessing your email address
              book and contact list for identifying contacts who have also
              registered to use the Site. You can disconnect your account on the
              Site and your Third-Party Accounts at any time. We will attempt to
              delete any information obtained through your Third-Party Account,
              except the username and profile picture associated with your
              account. Please note that your relationship with Third-Party
              Service Providers is governed solely by your agreements with them.
            </p>
            <h2>SUBMISSIONS</h2>

            <p className="single-text">
              By submitting any questions, comments, suggestions, ideas,
              feedback, or other information regarding the Site ("Submissions"),
              you acknowledge and agree that these Submissions are
              non-confidential and will become our property. We shall have
              exclusive rights, including all intellectual property rights, and
              may use and distribute these Submissions for any lawful purpose,
              without any acknowledgement or compensation to you, whether
              commercial or not. You waive all moral rights to any such
              Submissions and warrant that they are original or that you have
              the right to submit them. You also agree that you will not have
              any recourse against us for any alleged or actual infringement or
              misappropriation of any proprietary right in your Submissions.
            </p>
            <h2>THIRD-PARTY WEBSITES AND CONTENT</h2>

            <p className="single-text">
              The Site may contain links to Third-Party Websites and Third-Party
              Content which are not monitored or investigated by us for
              accuracy, appropriateness, or completeness. We are not responsible
              for any Third-Party Websites accessed through the Site or any
              Third-Party Content posted on, available through, or installed
              from the Site, including the content, accuracy, offensiveness,
              opinions, reliability, privacy practices, or other policies of or
              contained in the Third-Party Websites or the Third-Party Content.
              We do not imply approval or endorsement of any Third-Party
              Websites or Third-Party Content. You access Third-Party Websites
              and use Third-Party Content at your own risk and acknowledge that
              our Terms of Use no longer govern. You should review the terms and
              policies of any website you navigate to from the Site or relating
              to any applications you use or install from the Site. We take no
              responsibility whatsoever for any purchases you make through
              Third-Party Websites. You agree that we do not endorse any
              products or services offered on Third-Party Websites and you shall
              hold us harmless from any harm caused by your purchase of such
              products or services. You shall also hold us harmless from any
              losses sustained by you or harm caused to you resulting from any
              Third-Party Content or any contact with Third-Party Websites.
            </p>
            <h2>ADVERTISERS</h2>

            <p className="single-text">
              The Site provides designated areas, such as banner and sidebar
              advertisements, for advertisers to showcase their advertisements
              and information. As an advertiser, you are fully responsible for
              any services or products advertised or sold on the Site.
              Additionally, you represent and warrant that you have all
              necessary rights and authority to place advertisements on the
              Site, including but not limited to intellectual property,
              publicity, and contractual rights. Our role is limited to
              providing space for the advertisements, and we have no other
              association with the advertisers.
            </p>
            <h2>U.S. GOVERNMENT RIGHTS</h2>

            <p className="single-text">
              Our services are “commercial items” as defined in Federal
              Acquisition Regulation (“FAR”) 2.101. If our services are acquired
              by or on behalf of any agency not within the Department of Defense
              (“DOD”), our services are subject to the terms of these Terms of
              Use in accordance with FAR 12.212 (for computer software) and FAR
              12.211 (for technical data). If our services are acquired by or on
              behalf of any agency within the Department of Defense, our
              services are subject to the terms of these Terms of Use in
              accordance with Defense Federal Acquisition Regulation (“DFARS”)
              227.7202‑3. In addition, DFARS 252.227‑7015 applies to technical
              data acquired by the DOD. This U.S. Government Rights clause is in
              lieu of, and supersedes, any other FAR, DFARS, or other clause or
              provision that addresses government rights in computer software or
              technical data under these Terms of Use.
            </p>
            <h2>SITE MANAGEMENT</h2>

            <p className="single-text">
              We may monitor the Site to ensure compliance with these Terms of
              Use, and we reserve the right, but not the obligation, to take
              legal action against any user who violates the law or these Terms
              of Use, including reporting such user to law enforcement
              authorities. We may also, in our sole discretion, refuse, limit,
              or disable access to any of your Contributions or any portion
              thereof, and remove from the Site or disable all files and content
              that are excessive in size or burden our systems. Additionally, we
              may manage the Site to protect our rights and property and to
              ensure the proper functioning of the Site.
            </p>
            <h2>PRIVACY POLICY</h2>

            <p className="single-text">
              We take data privacy and security seriously, and we have a Privacy
              Policy located at https://freepetpoetry.com/privacypolicy. By
              using the Site, you acknowledge and agree to be bound by our
              Privacy Policy, which is incorporated into these Terms of Use.
              Please note that the Site is hosted in the United States, and if
              you access the Site from any other region of the world with
              different laws or requirements governing personal data collection,
              use, or disclosure, your continued use of the Site means that you
              consent to the transfer of your data to the United States and its
              processing in accordance with our Privacy Policy.
            </p>
            <h2>TERM AND TERMINATION</h2>

            <p className="single-text">
              While you use the Site, these Terms of Use will remain in effect.
              We have the right, at our sole discretion and without any notice
              or liability, to deny access and use of the Site, including
              blocking certain IP addresses, to anyone who breaches any
              representation, warranty, or covenant contained in these Terms of
              Use or violates any applicable law or regulation, for any reason
              or no reason. We reserve the right to terminate your use or
              participation in the Site, delete your account, and any content or
              information you posted, at any time, without warning and at our
              sole discretion.
            </p>
            <p className="single-text">
              If we terminate or suspend your account for any reason, you cannot
              register or create a new account under your name, a fake or
              borrowed name, or the name of any third party, even if you may be
              acting on behalf of the third party. We also reserve the right to
              take appropriate legal action, including without limitation
              pursuing civil, criminal, and injunctive redress.
            </p>
            <h2>MODIFICATIONS AND INTERRUPTIONS</h2>

            <p className="single-text">
              We have the right to modify, remove or change the content of the
              Site at our discretion and without prior notice. However, we are
              not obligated to update any information on the Site. We may also
              modify or discontinue all or part of the Site without notice. We
              will not be responsible to you or any third party for any
              suspension, modification, or discontinuance of the Site, or any
              changes or modifications made to it.
            </p>
            <p className="single-text">
              There may be times when the Site is unavailable due to hardware,
              software or other issues, or when maintenance is required,
              resulting in interruptions, delays, or errors. We reserve the
              right to change, update, suspend, discontinue or modify the Site
              at any time and for any reason without notice. You agree that we
              are not liable for any loss, damage, or inconvenience caused by
              any interruption or discontinuance of the Site. Nothing in these
              Terms of Use will be interpreted to obligate us to maintain and
              support the Site or to provide any corrections, updates, or
              releases related to it.
            </p>
            <h2>GOVERNING LAW</h2>

            <p className="single-text">
              The use of the Site and these Terms of Use are subject to the laws
              of the State of New Mexico. The laws applicable to agreements made
              and performed entirely within New Mexico, without consideration of
              conflict of law principles, shall govern.
            </p>
            <h2>DISPUTE RESOLUTION</h2>

            <p className="single-text">
              Any legal action brought by either party, you or us, shall be
              initiated or prosecuted in the state and federal courts located in
              New Mexico. The parties involved hereby give their consent to and
              waive any defenses of lack of personal jurisdiction and forum non
              conveniens regarding venue and jurisdiction in such state and
              federal courts. These Terms of Use exclude the application of the
              United Nations Convention on Contracts for the International Sale
              of Goods and the Uniform Computer Information Transaction Act
              (UCITA). No claim, action, or proceeding brought by either party
              relating in any way to the Site shall be initiated more than one
              (1) year after the cause of action arose.
            </p>
            <h2>CORRECTIONS</h2>

            <p className="single-text">
              There may be information on the Site that contains inaccuracies,
              typographical errors, or omissions, including descriptions,
              availability, pricing, and various other information. We reserve
              the right to correct any inaccuracies, errors, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </p>
            <h2>DISCLAIMER</h2>

            <p className="single-text">
              The Site is provided to you on an as-is and as-available basis,
              and your use of the Site and our services will be at your sole
              risk. We make no warranties or representations, express or
              implied, including, without limitation, the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement. We disclaim all liability for any errors,
              inaccuracies, or omissions in the Site's content, as well as for
              any personal injury or property damage resulting from your access
              to and use of the Site. We assume no responsibility for any
              unauthorized access to or use of our secure servers and/or any
              personal or financial information stored therein, or for any
              interruption or cessation of transmission to or from the Site. We
              are not responsible for any bugs, viruses, Trojan horses, or the
              like that may be transmitted to or through the Site by any third
              party. We do not warrant, endorse, guarantee, or assume
              responsibility for any product or service advertised or offered by
              a third party through the Site or any hyperlinked website. We will
              not be a party to or in any way be responsible for monitoring any
              transaction between you and any third-party providers of products
              or services. You should use your best judgment and exercise
              caution where appropriate.
            </p>
            <h2>LIMITATIONS OF LIABILITY</h2>

            <p className="single-text">
              We and our directors, employees, or agents will not be liable to
              you or any third party for any direct, indirect, consequential,
              exemplary, incidental, special, or punitive damages arising from
              your use of the Site, even if we have been advised of the
              possibility of such damages. Our liability to you for any cause
              will be limited to the amount paid, if any, by you to us during
              the six (6) month period prior to any cause of action arising.
              However, certain US state laws and international laws may not
              allow limitations on implied warranties or the exclusion or
              limitation of certain damages. If these laws apply to you, some or
              all of the above disclaimers or limitations may not apply to you,
              and you may have additional rights.
            </p>
            <h2>INDEMNIFICATION</h2>

            <p className="single-text">
              You are agreeing to protect us, including our subsidiaries,
              affiliates, and all officers, agents, partners, and employees,
              from any loss, damage, liability, claim, or demand, including
              reasonable attorneys’ fees and expenses, that may arise from:
            </p>
            <ol className="single-text">
              <li>Your Contributions;</li>
              <li>Your use of the Site;</li>
              <li>Your violation of these Terms of Use;</li>
              <li>
                Your breach of any of your representations and warranties set
                forth in these Terms of Use;
              </li>
              <li>
                Your violation of the rights of a third party, including but not
                limited to intellectual property rights;
              </li>
              <li>
                Any harmful act toward any other user of the Site with whom you
                connected via the Site.
              </li>
            </ol>
            <p className="single-text">
              However, we reserve the right to assume the exclusive defense and
              control of any matter for which you are required to indemnify us,
              and you agree to cooperate with our defense of such claims. We
              will use reasonable efforts to notify you of any such claim,
              action, or proceeding which is subject to this indemnification
              upon becoming aware of it.
            </p>
            <h2>USER DATA</h2>

            <p className="single-text">
              We will retain specific information that you send to the Site to
              handle the operation of the Site and data associated with your use
              of the Site. While we do make regular backups of data, you are
              solely responsible for any data you transmit or that relates to
              any activity you undertake on the Site. You acknowledge that we
              will not be held liable to you for any loss or damage of such data
              and you hereby relinquish any right to pursue any legal action
              against us for any loss or corruption of such data.
            </p>
            <h2>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>

            <p className="single-text">
              When you visit the Site, send us emails, or complete online forms,
              you are engaging in electronic communications. By doing so, you
              consent to receive electronic communications from us. You agree
              that any agreements, notices, disclosures, and other
              communications we provide to you electronically, whether via email
              or on the Site, satisfy any legal requirement that such
              communication be in writing. In addition, you agree to the use of
              electronic signatures, contracts, orders, and other records, as
              well as to the electronic delivery of notices, policies, and
              records of transactions initiated or completed by us or via the
              Site. By agreeing to this, you waive any rights or requirements
              under any statutes, regulations, rules, ordinances, or other laws
              in any jurisdiction which require an original signature or
              delivery or retention of non-electronic records, or to payments or
              the granting of credits by any means other than electronic means.
            </p>
            <h2>CALIFORNIA USERS AND RESIDENTS</h2>

            <p className="single-text">
              If any complaint with us is not satisfactorily resolved, you can
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 North Market Blvd., Suite N 112, Sacramento,
              California 95834 or by telephone at (800) 952-5210 or (916)
              445-1254.
            </p>
            <h2>MISCELLANEOUS</h2>

            <p className="single-text">
              This agreement, which includes these Terms of Use and any policies
              or operating rules posted on the Site, represents the entire
              agreement between you and us. Our failure to enforce any right or
              provision of these Terms of Use does not waive our right to
              enforce such provision. These Terms of Use are governed by and
              interpreted in accordance with the fullest extent of the law. We
              may transfer our rights and obligations to others at any time. We
              are not responsible or liable for any loss, damage, delay, or
              failure to act resulting from causes beyond our reasonable
              control. If any provision or part of a provision of these Terms of
              Use is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is considered separable and
              does not affect the validity and enforceability of any remaining
              provisions. The use of the Site and these Terms of Use do not
              create a joint venture, partnership, employment, or agency
              relationship between you and us. You agree that these Terms of Use
              will not be construed against us due to drafting them. You waive
              any defenses based on the electronic form of these Terms of Use
              and the lack of signing by the parties to execute these Terms of
              Use.
            </p>
            <h2>CONTACT US</h2>

            <p className="single-text">
              In order to resolve a complaint regarding the Site or to receive
              further information regarding use of the Site, please contact us
              at:
            </p>
            <p className="single-text">
              Marcos Noriega <br />
              PO BOX 35862
              <br />
              Albuquerque, NM 87176
              <br />
              United States
              <br />
              freepetpoetry@gmail.com
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

export const Head = () => <Seo title="Terms of Use" />

export default Termsofuse

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
