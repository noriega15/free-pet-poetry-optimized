import React from "react"

const TagsSection = () => {
  return (
    <section className="tags" aria-labelledby="tag-label">
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Popular Tags</span>
        </h2>

        <p className="section-text">Dogs</p>

        <ul className="grid-list">
          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag1.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Travel"
              />
              <p className="btn-text">Cats</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag2.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Culture"
              />
              <p className="btn-text">RainbowBridge</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag3.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Lifestyle"
              />
              <p className="btn-text">Sympathy</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag4.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Fashion"
              />
              <p className="btn-text">Birds</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag5.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Food"
              />
              <p className="btn-text">PetLoss</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag6.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Space"
              />
              <p className="btn-text">Memories</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag7.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Animal"
              />
              <p className="btn-text">Grief</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag8.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Minimal"
              />
              <p className="btn-text">Minimal</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag9.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Interior"
              />
              <p className="btn-text">Unconditional</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag10.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Plant"
              />
              <p className="btn-text">Heartfelt</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag11.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Nature"
              />
              <p className="btn-text">Tribute</p>
            </button>
          </li>

          <li>
            <button className="card tag-btn">
              <img
                src="/images/tag12.png"
                width="32"
                height="32"
                loading="lazy"
                alt="Business"
              />
              <p className="btn-text">Inspiration</p>
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TagsSection
