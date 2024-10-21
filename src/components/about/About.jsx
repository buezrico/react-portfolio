import React from "react";
import "./about.css";
import ME from "../../assets/me_studio.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Rico</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillGithub className="about__icon" />
              <h5>Github Repos</h5>
              <small>70+ Repositories</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            A Passionate developer focused on building engaging web applications and innovative solutions. I specialize in full-stack development using technologies like Next.js, TypeScript, Prisma, and Redis, with a knack for integrating real-time features and scalable platforms. I love creating games, community platforms, and solutions that connect users while maintaining performance and simplicity.
          </p>
          <div className="about-links">
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>{" "}
            <a
              href="http://github.com/buezrico"
              download
              className="btn btn-right"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="small-icon" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/chibueze-okoronkwo/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-right mobile-top"
            >
              <BsLinkedin className="small-icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
