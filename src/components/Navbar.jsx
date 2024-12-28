import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="text-white bg-gray-800 ">
      <nav className="container flex items-center justify-between py-4 mx-auto">
        <a className="text-2xl font-bold" href="/">
          My Portfolio
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/TareqIzmirli"
              target="_blank"
              className="text-4xl hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tareq-izmirli/"
              target="_blank"
              className="text-4xl hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
