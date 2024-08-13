import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html from "/icon/html.png";
import css from "/icon/css.png";
import figma from "/icon/figma.png";
import git from "/icon/git.png";
import js from "/icon/js.png";
import node_js from "/icon/node_js.png";
import react from "/icon/react.png";
import sass from "/icon/sass.png";


const skillsData = [
    { src: html, alt: "HTML", title: "HTML" },
    { src: css, alt: "CSS", title: "CSS" },
    { src: git, alt: "Git", title: "Git" },
    { src: js, alt: "JS", title: "JS" },
    { src: react, alt: "React", title: "React" },
    { src: sass, alt: "SASS", title: "SASS" },
    { src: node_js, alt: "Node.js", title: "Node.js" },
    { src: figma, alt: "Figma", title: "Figma" },
];

const Skils = () => {
    const { ref, inView } = useInView({
        threshold: 0.1, 
    });

    return (
        <div className="Skills" id="skill" ref={ref}>
            <p className="p_mySkill">My Skills</p>
            <div className="my_skill">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`skill_${skill.title.toLowerCase()}`}
                        initial={{ x: -100, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                        <img className="skills_img" src={skill.src} alt={skill.alt} />
                        <p>{skill.title}</p>
                    </motion.div>
                    
                ))}
            </div>
            
            
        </div>
    );
};

export default Skils;