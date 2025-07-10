import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Certification data
const certifications = [
    {
        category: "Course Completion",
        items: [
            {
                title: "Implant Training - Innovation Hub ,Nashik",
                description: "Completed an extensive Implant Training journey for web development course covering HTML,CSS,Bootstrap,Javascript,php,mySQL and deployment.  Year:2023",
                image: "/certificates/Implant_Training.jpeg",
            },
            {
                title: "DSA with C++ Bootcamp - LetsUpgrade",
                description: "Completed an intensive bootcamp focused on mastering Data Structures and Algorithms using C++. Covered key topics like arrays, linked lists,stack,queue and problem-solving techniques with a hands-on approach.",
                image: "/certificates/LetsUpgradeC++.jpeg",
            },
        ],
    },
    {
        category: "Competitions",
        items: [
            {
                title: "DevClash Hackathon 2025,DYP DPU Pune",
                description: "Participated in DevClash Hackathon 2025, a 24-hour hackathon organized by Dr. D.Y. Patil Institute of Technology, Pimpri, Pune. Our team developed FinFine, a financial management solution aimed at simplifying personal finance. It was a great learning experience involving teamwork, rapid prototyping, and creative problem-solving under pressure.",
                image: "/certificates/Devkraft_DPU.jpeg",
            },
            {
                title: "Kaushalya Project Competition 2024, Guru Gobind COE Nashik",
                description: "Participated in the Kaushalya Project Competition at Guru Gobind College of Engineering, Nashik, where we represented our project GamepadStore — an e-commerce website tailored for gamers. It was a valuable experience that enhanced our presentation, teamwork, and project-building skills.",
                image: "/certificates/Kaushalya_GG.jpeg",
            },
            {
                title: "Projit Project Competition 2024, JIT Nashik",
                description: "Participated in the Projit Project Competition at jawahar institute of technology, Nashik, where we represented our project GamepadStore — an e-commerce website tailored for gamers. It was a valuable experience that enhanced our presentation, teamwork, and project-building skills.",
                image: "/certificates/Projit_JIT.jpeg",
            },
            {
                title: "Code Saga 2023, MVP RSM Polytechnic Nashik",
                description: "Secured 3rd rank in Code Saga 2023, a coding competition held at MVP RSM Polytechnic, Nashik. The event consisted of two rounds: an MCQ-based technical quiz followed by a DSA problem-solving round. It was a great experience that tested both speed and depth of programming knowledge in a competitive environment.",
                image: "/certificates/CodeSaga.jpeg",
            }
        ],
    },
];

function Certifications() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="certifications">
            <section className="text-white">
                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                    {certifications.map((section, i) => (
                        <div key={i}>
                            <h4 className="text-white font-semibold mb-2">{section.category}</h4>
                            <ul className="list-disc list-inside space-y-1">
                                {section.items.map((cert, idx) => (
                                    <li
                                        key={idx}
                                        className="hover:text-primary cursor-pointer transition"
                                        onClick={() => setSelected(cert)}
                                    >
                                        {cert.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                            onClick={() => setSelected(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-[#1a1a1a] p-6 rounded-lg max-w-3xl  max-h-2xl w-full shadow-xl relative text-white"
                                onClick={(e) => e.stopPropagation()}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                            >
                                <button
                                    className="absolute top-2 right-3 text-gray-400 hover:text-white text-3xl font-bold"
                                    onClick={() => setSelected(null)}
                                >
                                    &times;
                                </button>
                                <h3 className="text-xl font-semibold text-primary mb-2">{selected.title}</h3>
                                <p className="text-sm mb-4">{selected.description}</p>
                                <img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="rounded w-full object-contain p-6 border-2"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </section>

    );
}

export default Certifications;
