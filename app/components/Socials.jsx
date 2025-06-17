import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
    <footer className="w-full">
  <div className="w-full mt-4">
    <h2 className="text-3xl text-white font-bold text-center">My Socials</h2>
    
    <div className="grid grid-cols-2 lg:flex items-center justify-center gap-4 mt-4">
      <a
        className="p-3 bg-white m-auto"
        style={{ borderRadius: "50%" }}
        href="https://github.com/balwinder18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="text-6xl text-opacity-90 text-black">
          <FaGithub />
        </i>
      </a>

      <a
        className="p-3 bg-white m-auto"
        style={{ borderRadius: "50%" }}
        href="https://www.linkedin.com/in/balwinder-singh-32a884254"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="text-6xl text-opacity-90 text-black">
          <FaLinkedin />
        </i>
      </a>

      <a
        className="p-3 bg-white m-auto"
        style={{ borderRadius: "50%" }}
        href="https://leetcode.com/u/Balwinder_sb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="text-6xl text-opacity-90 text-black">
          <SiLeetcode />
        </i>
      </a>

      <a
        className="p-3 bg-white m-auto"
        style={{ borderRadius: "50%" }}
        href="https://x.com/Balwinder_sb?t=NkqHaphnsZ2mCYY81ZykNA&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="text-6xl text-opacity-90 text-black">
          <FaTwitter />
        </i>
      </a>
    </div>
  </div>
</footer>

  )
}

export default Socials