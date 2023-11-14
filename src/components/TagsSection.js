import React from "react"
import { IonIcon } from "@ionic/react"
import { arrowForward } from "ionicons/icons"

const TagsSection = () => {
  const tags = [
    { label: "🐱 Cats", url: "/tags/cats/" },
    { label: "🌈 RainbowBridge", url: "/tags/rainbowbridge/" },
    { label: "🐶 Dogs", url: "/tags/dogs/" },
    { label: "🐦 Birds", url: "/tags/birds/" },
    { label: "💔 PetLoss", url: "/tags/petloss/" },
    { label: "📖 Memories", url: "/tags/memories/" },
    { label: "😢 Grief", url: "/tags/grief/" },
    { label: "🤝 Sympathy", url: "/tags/sympathy/" },
    { label: "💖 Unconditional", url: "/tags/unconditional/" },
    { label: "💕 Heartfelt", url: "/tags/heartfelt/" },
    { label: "🎗️ Tribute", url: "/tags/tribute/" },
    { label: "🌟 Inspiration", url: "/tags/inspiration/" },
  ]

  return (
    <section className="tags" aria-labelledby="tag-label">
      <div className="container">
        <h2 className="headline headline-2 section-title" id="tag-label">
          <span className="span">Popular Tags</span>
        </h2>

        <p className="section-text">
          Leaving Imprints of Unconditional Love and Cherished Memories
        </p>

        <ul className="grid-list">
          {tags.map((tag, index) => (
            <li key={index}>
              <a href={tag.url} className="card tag-btn">
                <p className="btn-text">{tag.label}</p>
              </a>
            </li>
          ))}
        </ul>
        <a href="/tags/" className="btn btn-secondary btn-tags-page">
          <span className="span">Explore All Tags</span>
          <IonIcon icon={arrowForward} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default TagsSection
