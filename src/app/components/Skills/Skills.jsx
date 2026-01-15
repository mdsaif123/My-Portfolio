"use client";
import React, { useRef } from "react";
import styles from "./Skills.module.css";


import {
    SiReact,
    SiNextdotjs,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiGit,
    SiGithub,
    SiVercel,
    SiBootstrap,
    SiMui,
    SiHtml5,
    SiCss3,
    SiMysql,
} from "react-icons/si";

import ScrollVelocity from "../ReactBits/ScrollVelocity";


const skills = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" }, // dark theme me best
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Motion", Icon: SiFramer, color: "#ffffff" },

    { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { name: "MUI", Icon: SiMui, color: "#007FFF" },

    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express", Icon: SiExpress, color: "#ffffff" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },

    { name: "Git", Icon: SiGit, color: "#F05032" },
    { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
];

export default function Skills() {
    const chakraRef = useRef(null);

    return (

        <section className={styles.section}>

            <div className={styles.heroArt} aria-hidden="true">
                <img
                    src="/images/skill.png"
                    alt=""
                    className={styles.heroArtImg}
                    draggable={false}
                />
            </div>

            <div className={styles.container}>

                <h2 className={styles.title}>
                    The Magic <span className={styles.titleAccent}>Behind</span>
                </h2>

                <div className={styles.chips}>
                    {skills.map(({ name, Icon, color }) => (
                        <div key={name} className={styles.chip}>
                            <span className={styles.chipIcon} aria-hidden="true">
                                <Icon style={{ color }} />
                            </span>
                            <span className={styles.chipText}>{name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="scroller">
                <ScrollVelocity texts={["Fronted", "backend"]} className="custom-scroll-text" />
            </div>
        </section>
    );
}
