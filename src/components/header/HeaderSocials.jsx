import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
// import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/buezrico" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/chibueze-okoronkwo/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
