
"use client";
import React, { useMemo, useState } from "react";
import styles from "./Projects.module.css";
import { Github } from "lucide-react";
import Image from "next/image";


export const projectsData = [
    {
        id: 3,
        title: "Educity — College Landing Page",
        description:
            "A React-based college website landing page showcasing courses, about section, and key highlights. Built with clean UI, smooth layout, and fully responsive design for all devices.",
        image: "/images/project3.png",
        tech: "React, Custom CSS",
        live: "https://ornate-gumdrop-0b313a.netlify.app/",
        code: "https://github.com/mdsaif123/Myschool",
    },

    {
        id: 2,
        title: "Fashion Store — E-Commerce UI",
        description:
            "A fashion e-commerce frontend built in React with category-wise product listing (Men, Women, Kids). Data is managed via arrays, with detailed product cards and responsive UI for a smooth browsing experience.",
        image: "/images/project2.png",
        tech: "React, JavaScript",
        live: "https://mdsaif123.github.io/Fashion-store-Ecommerce-/",
        code: "https://github.com/mdsaif123/Fashion-store-Ecommerce-",
    },

    {
        id: 5,
        title: "Rabs Net Solution — Company Website",
        description:
            "A company showcase website developed during my internship. Includes services, company details, working process, and professional sections designed with a clean layout and responsive structure.",
        image: "/images/project5.png",
        tech: "React Js,bootstrap",
        live: "https://friendly-crostata-6748a8.netlify.app/",
        code: "https://github.com/mdsaif123/Rabs-assignment-react",
    },

    {
        id: 4,
        title: "Aafiya Meditreats — Doctor Landing Page",
        description:
            "A responsive doctor/hospital landing website built using HTML, CSS, and JavaScript. Focused on clean UI and structured sections for doctors, hospitals, and medical services information.",
        image: "/images/project4.png",
        tech: "HTML, CSS, JavaScript",
        live: "https://comforting-liger-ed6845.netlify.app/",
        code: "https://github.com/mdsaif123/Aafiya-Mediretreats",
    },

    {
        id: 6,
        title: "Facebook Clone — UI Practice",
        description:
            "A frontend Facebook-style UI clone created for layout practice. Includes key sections like feed layout and structured components with responsive design using HTML/CSS/JS.",
        image: "/images/project6.png",
        tech: "HTML, CSS, JavaScript",
        live: "https://mdsaif123.github.io/Facebook_Clone_new/",
        code: "https://github.com/mdsaif123/Facebook-clone",
    },

    {
        id: 7,
        title: "Human Hood — Responsive Website",
        description:
            "A fully responsive website built to practice modern layouts, spacing, and typography. Focused on improving UI structure and mobile-friendly responsiveness.",
        image: "/images/Humanhood.png",
        tech: "HTML, CSS, JavaScript",
        live: "https://mdsaif123.github.io/Human-Hood/",
        code: "https://github.com/mdsaif123/Human-Hood",
    },

    {
        id: 8,
        title: "Aspect — Modern Landing UI",
        description:
            "A responsive landing page project created to strengthen layout and UI skills. Built with clean sections, consistent spacing, and mobile-first responsiveness.",
        image: "/images/Aspect.png",
        tech: "HTML, CSS, JavaScript",
        live: "https://mdsaif123.github.io/Aspect-New-1/",
        code: "https://github.com/mdsaif123/Aspect-New-1",
    },
];


export default function Projects() {
    const [expanded, setExpanded] = useState(false);

    const visibleProjects = useMemo(() => {
        return expanded ? projectsData : projectsData.slice(0, 6);
    }, [expanded]);

    return (
        <section className={styles.section} aria-labelledby="projects-title">
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 id="projects-title" data-aos="fade-up" className={styles.title}>My <span className={styles.ProjectTitle}>Projects</span></h2>
                    <p className={styles.subtitle} data-aos="fade-up">
                        A few projects where I practice full-stack development and build clean, maintainable UI.
                    </p>
                </header>

                <div className={styles.grid}>
                    {visibleProjects.map((p, i) => (
                        <article key={p.id} className={styles.card} data-aos="fade-up"
                            data-aos-delay={`${(i + 1) * 100}`}
                            data-aos-duration="600"
                            data-aos-easing="ease-out-cubic">
                            <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                className={styles.cardLink}
                                aria-label={`${p.title} live preview`}
                            >
                                <div className={styles.imageWrap}>
                                    <img
                                        className={styles.image}
                                        src={p.image}
                                        alt={`${p.title} project screenshot`}
                                        loading="lazy"
                                        decoding="async"

                                    />
                                </div>

                                <div className={styles.content}>
                                    <div className={styles.titleRow}>
                                        <h3 className={styles.cardTitle}>{p.title}</h3>

                                        <div className={styles.chips} aria-label="Project links">
                                            {/* Live chip */}
                                            <a
                                                href={p.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`${styles.chip} ${styles.chipLive}`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <span className={styles.liveDot} aria-hidden="true" />
                                                Live
                                            </a>

                                            {/* Github chip */}
                                            <a
                                                href={p.code}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`${styles.chip} ${styles.chipCode}`}
                                                onClick={(e) => e.stopPropagation()}
                                                aria-label="Open GitHub code"
                                            >
                                                <Github size={16} className={styles.btnIcon} aria-hidden="true" />
                                            </a>
                                        </div>
                                    </div>

                                    <p className={styles.cardDesc}>{p.description}</p>

                                    <p className={styles.stack}>
                                        <span className={styles.stackLabel}>Tech:</span>{" "}
                                        <span className={styles.stackText}>{p.tech}</span>
                                    </p>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>

                <div className={styles.moreWrap}>
                    <button className={styles.moreBtn} onClick={() => setExpanded((v) => !v)}>
                        {expanded ? "Show less" : "See more"}
                    </button>
                </div>
            </div>
        </section>
    );
}
