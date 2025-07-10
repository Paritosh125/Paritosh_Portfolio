import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const iconBaseStyle =
  "text-3xl text-secondary hover:drop-shadow-[0_0_8px_currentColor] transition duration-300";

function Hero() {
  return (
    <section id="home" className="pt-28">  {/* or pt-32 if needed */}

      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-20 px-4 gap-10">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm Paritosh
          </motion.h1>
          <p className="text-lg md:text-2xl text-secondary mb-2">
            I'm a passionate{" "}
            <span className="text-primary">
              <TypeAnimation
                sequence={["Web Developer", 2000, "UI/UX Designer", 2000, "Freelancer", 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          {/* Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-6">
            <a href="https://github.com/Paritosh125" target="_blank" rel="noopener noreferrer"
              className={`${iconBaseStyle} hover:text-white`}>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/paritosh-sandhan-323781329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
              className={`${iconBaseStyle} hover:text-[#0A66C2]`}>
              <FaLinkedin />
            </a>
            {/* <a href="" rel="noopener noreferrer"
              className={`${iconBaseStyle} hover:text-[#1DA1F2]`}>
              <FaTwitter />
            </a> */}
            <a href="https://www.instagram.com/paritoshsandhan?igsh=MTlsa2hhcTN1eW92Zw==" target="_blank" rel="noopener noreferrer"
              className={`${iconBaseStyle} hover:text-pink-500`}>
              <FaInstagram />
            </a>
          </div>
          {/* Icons End */}

        </div>


        <img
          src="/profile.jpg"
          alt="Paritosh"
          className="w-1/5 h-1/5 rounded-full object-cover border-4 border-primary shadow-xl hover:shadow-[0_0_40px_theme('colors.primary')] transition duration-300 "
        />
      </section>
    </section>
  );
}

export default Hero;