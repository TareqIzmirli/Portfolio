import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h4 className="text-2xl font-bold text-white">Tareq Izmirli</h4>
            <p className="mt-4 text-sm">
              Passionate Full-Stack Developer dedicated to crafting innovative
              digital experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                Email:{" "}
                <a
                  href="mailto:Tareqizmirli95@gmail.com"
                  className="hover:text-white"
                >
                  Tareqizmirli95@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+926799215246" className="hover:text-white">
                  +926799215246
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex justify-center md:justify-start mt-4 space-x-6">
              <a
                href="https://github.com/TareqIzmirli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tareq-izmirli/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Tareq Izmirli. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
