import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>
          <span>Hello</span> I'm
        </h3>
        <h1>Chibueze Rico.</h1>
        <h4 className="text-light">A Creative Software Engineer🚀</h4>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
