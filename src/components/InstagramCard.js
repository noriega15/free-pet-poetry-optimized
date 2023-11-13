import React from "react"

const InstagramCard = () => {
  return (
    <div className="card aside-card insta-card">
      <a href="https://freepetpoetry.com/" className="logo">
        <img
          src="/images/logo.svg"
          width="119"
          height="37"
          loading="lazy"
          alt="Wren logo"
        />
      </a>

      <p className="card-text">Follow us on Instagram</p>

      <ul className="insta-list">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <li key={index}>
            <a
              href="https://freepetpoetry.com/"
              className="insta-post img-holder custom-banner-insta-post"
            >
              <img
                src={`/images/insta-post-${index}.png`}
                width="276"
                height="277"
                loading="lazy"
                alt="insta post"
                className="img-cover"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InstagramCard
