import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/MBMarsell/"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/MartinMarsell"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/martinmarsell"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
