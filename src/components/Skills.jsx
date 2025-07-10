import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "PHP", level: 90 },
    { name: "Java", level: 70 },
    { name: "C++", level: 70 },
];

function Skills() {
    return (
        <section id="skills">
            <section className="py-16 px-4 max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-primary">My Skills</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm text-white font-medium">
                                <span>{skill.name}</span>
                                <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-800 h-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className="h-3 bg-primary"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Skills;
