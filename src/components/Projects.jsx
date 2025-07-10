import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project data
const projects = [
  {
    title: "Gamepad Store - Ecommerce Website",
    description:
      "Developed Gamepad Store, a PHP-based e-commerce website tailored for gamers. It includes features like product filtering, wishlist, user profile, admin dashboard, checkout, and integrated Razorpay payment gateway for secure transactions.",
    tech: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "MySQl"],
    image: "/projects/gs.jpeg",
    github: "",
    demo: "https://gamepadstore.unaux.com",
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built using React + Tailwind with animations, dark theme, and lazy loading.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.jpg",
    github: "",
    demo: "",
  },

  {
    title: "Weather App Program",
    description:
      "Built a simple Weather App that allows users to enter a city name and fetches real-time weather updates using a weather API. Displays temperature, conditions, and other relevant data in a clean UI.",
    tech: ["HTML", "CSS", "Javascript", "Open-weather API"],
    image: "/projects/weather.jpg",
    github: "https://github.com/Paritosh125/Weather-App-Program",
    demo: "https://paritosh125.github.io/Weather-App-Program/",
  },
  {
    title: "Random Password Generator",
    description:
      "Created a Random Password Generator that generates secure and customizable passwords based on user-selected criteria like length, uppercase, numbers, and special characters. Designed for ease of use and enhanced password strength.",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/projects/random.jpg",
    github: "https://github.com/Paritosh125/Random-Password-Generator-Program",
    demo: "https://paritosh125.github.io/Random-Password-Generator-Program/",
  },
];

function Projects() {
  return (
    <section id="projects">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="aspect-video w-full bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-primary text-black text-xs font-semibold px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="bg-primary text-black px-4 py-2 rounded hover:opacity-90 transition text-sm flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm italic">Demo not available</span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition text-sm flex items-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm italic">GitHub not available</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </section>

  );
}

export default Projects;
