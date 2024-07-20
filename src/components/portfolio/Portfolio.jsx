import React from "react";
import "./portfolio.css";
import codeafrica from "../../assets/codeafrica.png";
import assetplus from "../../assets/assetplus.png";
import valucares from "../../assets/valucares.png";
import tourafrica from "../../assets/tourafrica.png";
import synproxi from "../../assets/synproxi.png";
import insightproxim from "../../assets/insightproxim.png";

const data = [
  {
    id: 1,
    image: codeafrica,
    title: "CODE AFRICA",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://codeafricang.com/",
    description:
      "Code Africa is a Next.js and Sass-powered platform for digital skills training. Students can register and pay for courses, it also has an admin dashboard.",
  },
  {
    id: 2,
    image: assetplus,
    title: "ASSETPLUS",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://assetplusng.com/",
    description:
      "AssetPlus is a premier platform for buying land properties, offering a seamless and secure purchasing experience with a robust search feature.",
  },
  {
    id: 3,
    image: valucares,
    title: "VALUCARES",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://valucares.com/",
    description:
      "Valucares is an online, real-time healthcare provider. Customers can book appointments for health checks seamlessly.",
  },
  {
    id: 3,
    image: tourafrica,
    title: "TOURAFRICA",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://tourafrica.vercel.app",
    description:
      "TourAfrica is a comprehensive travel platform that offers curated African travel experiences. Explore and book unique tours, accommodations, and activities with ease.",
  },
  {
    id: 2,
    image: insightproxim,
    title: "INSIGHTPROXIMCONSULTING",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://insightproximconsulting.com.ng/",
    description:
      "InsightProxim Consulting provides expert guidance and solutions in business strategy and management. Tailored consulting services to help organizations achieve their goals.",
  },
  {
    id: 2,
    image: synproxi,
    title: "SYNPROXI",
    // github: "https://github.com/igudy/shopiverse",
    demo: "https://valucares.com/",
    description:
      "Synproxi offers free digital skills training to empower individuals with the knowledge and tools to succeed in the digital world.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, description }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                {/* <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
