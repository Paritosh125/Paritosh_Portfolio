import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" >
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-primary"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-lg leading-relaxed space-y-6"
        >
          <p>
            I am a passionate and dedicated MERN stack developer and student with a strong interest
            in UI/UX design. I enjoy building full-stack web applications that are fast, responsive,
            and user-friendly.
          </p>

          <p>
            I thrive in collaborative environments and believe in writing clean, maintainable code.
            My goal is to build impactful projects and constantly learn modern development practices.
          </p>

          {/* Personal Details Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8 text-sm md:text-base text-gray-300">
            <div>
              <span className="font-semibold text-white">Birthday:</span> 12th March 2005
            </div>
            <div>
              <span className="font-semibold text-white">Phone:</span> +91 99218 09246
            </div>
            <div>
              <span className="font-semibold text-white">Email:</span> sandhanparitosh@gmail.com
            </div>
            <div>
              <span className="font-semibold text-white">City:</span> Nashik, Maharashtra
            </div>
            <div>
              <span className="font-semibold text-white">Degree:</span> Diploma in Information Technology
            </div>
            <div>
              <span className="font-semibold text-white">Freelance:</span>  Available
            </div>
          </div>
        </motion.div>
      </section>
    </section>

  );
}

export default About;
