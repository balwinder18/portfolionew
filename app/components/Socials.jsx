import Link from 'next/link';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Socials = () => {
  return (
<footer className="w-full bg-black py-10">
  <div className="w-full max-w-5xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl text-white font-bold text-center mb-8">
      My Socials
    </h2>

    {/* Mobile layout */}
    <div className="flex flex-col items-center space-y-6 lg:hidden">
      {/* Row 1 */}
      <div className="flex items-center justify-center gap-4">
        <a
          className="p-4 bg-white rounded-full transition hover:scale-105"
          href="https://github.com/balwinder18"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-5xl text-black opacity-90" />
        </a>
        {/* Vertical Divider */}
        <div className="w-px h-12 bg-gray-500"></div>
        <a
          className="p-4 bg-white rounded-full transition hover:scale-105"
          href="https://www.linkedin.com/in/balwinder-singh-32a884254"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-5xl text-black opacity-90" />
        </a>
      </div>

      {/* Horizontal Divider */}
      <div className="w-2/3 h-px bg-gray-500"></div>

      {/* Row 2 */}
      <div className="flex items-center justify-center gap-4">
        <a
          className="p-4 bg-white rounded-full transition hover:scale-105"
          href="https://leetcode.com/u/Balwinder_sb/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="text-5xl text-black opacity-90" />
        </a>
        {/* Vertical Divider */}
        <div className="w-px h-12 bg-gray-500"></div>
        <a
          className="p-4 bg-white rounded-full transition hover:scale-105"
          href="https://x.com/Balwinder_sb?t=NkqHaphnsZ2mCYY81ZykNA&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-5xl text-black opacity-90" />
        </a>
      </div>
    </div>

    {/* Desktop layout */}
    <div className="hidden lg:flex items-center justify-center gap-6 mt-6">
      <a
        className="p-4 bg-white rounded-full transition hover:scale-105"
        href="https://github.com/balwinder18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-5xl text-black opacity-90" />
      </a>

      {/* Divider */}
      <div className="w-px h-14 bg-gray-500"></div>

      <a
        className="p-4 bg-white rounded-full transition hover:scale-105"
        href="https://www.linkedin.com/in/balwinder-singh-32a884254"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-5xl text-black opacity-90" />
      </a>

      {/* Divider */}
      <div className="w-px h-14 bg-gray-500"></div>

      <a
        className="p-4 bg-white rounded-full transition hover:scale-105"
        href="https://leetcode.com/u/Balwinder_sb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode className="text-5xl text-black opacity-90" />
      </a>

      {/* Divider */}
      <div className="w-px h-14 bg-gray-500"></div>

      <a
        className="p-4 bg-white rounded-full transition hover:scale-105"
        href="https://x.com/Balwinder_sb?t=NkqHaphnsZ2mCYY81ZykNA&s=09"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-5xl text-black opacity-90" />
      </a>
    </div>
  </div>
</footer>

  )
}

export default Socials