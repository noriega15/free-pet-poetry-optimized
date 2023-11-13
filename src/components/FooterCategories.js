import React from "react";

const FooterCategories = () => {
  const categories = [
    "Action",
    "Business",
    "Adventure",
    "Canada",
    "America",
    "Curiosity",
    "Animal",
    "Dental",
    "Biology",
    "Design",
    "Breakfast",
    "Dessert",
  ];

  return (
    <div className="footer-list">
      <p className="footer-list-title">Categories</p>

      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <a
              href="https://freepetpoetry.com/"
              className="footer-link hover-2"
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCategories;
