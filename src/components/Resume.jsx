import React from "react";
import Certifications from "./Certifications";
import { motion } from "framer-motion";

function Resume() {
    return (

        <section id="resume">
            <section className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Resume</h2>

                <div className="space-y-12 text-white">
                    {/* Basic Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-primary mb-4 border-b border-gray-700 pb-2">
                            Basic Information
                        </h3>
                        <p className="text-lg mb-2">
                            I am a MERN stack developer passionate about building web applications that are fast,
                            scalable, and beautifully designed. I enjoy crafting both frontend UI and backend APIs to deliver
                            full-stack experiences.
                        </p>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base mt-4 text-gray-300">
                            <div><span className="font-semibold text-white">Phone:</span> +91 99218 0924</div>
                            <div><span className="font-semibold text-white">Email:</span> sandhanparitosh@gmail.com</div>
                            <div><span className="font-semibold text-white">Address:</span> Nashik, Maharashtra</div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-primary mb-4 border-b border-gray-700 pb-2">
                            Education
                        </h3>
                        <div className="space-y-6 text-gray-300">
                            <div>
                                <h4 className="text-white font-semibold">B.E. in Computer Engineering (Pursuing)</h4>
                                <p className="text-sm">JSPM Narhe Technical Campus, Pune</p>
                                <p className="text-sm">2024 – 2027</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Diploma in Information Technology</h4>
                                <p className="text-sm"> MET Bhujbal Knowledge City, Nashik</p>
                                <p className="text-sm">2021 – 2024</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <Certifications />
                    {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-semibold text-primary mb-4 border-b border-gray-700 pb-2">
                        Certifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                        <div>
                            <h4 className="text-white font-semibold mb-2">Course Completion</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Full Stack Web Development – Udemy</li>
                                <li>Responsive Web Design – freeCodeCamp</li>
                                <li>JavaScript Algorithms – Codecademy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-2">Competitions</h4>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Smart India Hackathon Finalist 2023</li>
                                <li>CodeHunt 2.0 – 2nd Place</li>
                                <li>Intra-College Tech Quiz – Winner</li>
                            </ul>
                        </div>
                    </div>
                </motion.div> */}
                </div>
            </section>
        </section>
    );
}

export default Resume;
