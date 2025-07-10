import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 py-8 px-4 mt-12">
      <div className="max-w-4xl mx-auto text-center">

        {/* Name + Copyright */}
        <p className="text-white font-semibold text-sm">
          © {new Date().getFullYear()} Paritosh Sandhan. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex justify-center mt-4 gap-6 text-xl text-gray-400">
          <a href="https://github.com/yourusernamhttps://github.com/Paritosh125" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/paritosh-sandhan-323781329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:sandhanparitosh@gmail.com.com">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
