import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Summary of Work Experience</h5>
      <h2>Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>
              FRONTEND SOFTWARE ENGINEER <br></br>
              <span className="service__white">
                MEGANET LIMITED <br></br>(Feb. 2023 - Present)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Led the process of hosting websites on cloud platforms,
                optimising load times and ensuring a smooth user experience
                through fast delivery and reliable hosting solutions.
              </p>
            </li>
            <li>
              <p>
                - Leveraged NextJS to build interactive and responsive user
                interfaces that enhance user engagement and satisfaction.
              </p>
            </li>
            <li>
              <p>- Worked with Typescript and NextJs.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              FRONTEND SOFTWARE ENGINEER<br></br>
              <span className="service__white">
                UBUBA TECHNOLOGY <br></br>(Apr. 2021 - Jan. 2023)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Utilized React and Firebase technologies to develop and
                maintain front-end functionalities.
              </p>
            </li>
            <p>
              - Experience with Rest APIs to fetch data and manage states with
              global state management libraries.
            </p>
            <li>
              <p>
                - Implemented advanced filtering system for the web application
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              FRONTEND SOFTWARE ENGINEER<br></br>
              <span className="service__white">
                TECHCREEK <br></br>(Aug. 2019 - Dec 2019)
              </span>
            </h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                - Applied pragmatism and best practices in software engineering,
                delivering tasks on time, and with excellent quality.
              </p>
            </li>
            <li>
              <p>
                - Experience with Rest APIs to fetch data and state management
                with Redux.
              </p>
            </li>
            <li>
              <p>
                - Developed proficiency in version control systems, such as Git,
                for efficient collaboration and code management.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
