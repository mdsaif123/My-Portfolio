"use client";
import React, { useState } from "react";
import styles from "./AboutPage.module.css";
import { Github, Linkedin, Mail, Copy, Check } from "lucide-react";
import { Download } from 'lucide-react';
import Projects from "@/app/components/Projects/Projects";




export default function AboutPage() {
    const [copied, setCopied] = useState(false);

    const email = "mdsaif@example.com"; // change to your real email
    const linkedin = "https://www.linkedin.com/in/your-link"; // change
    const github = "https://github.com/your-username"; // change

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = email;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        }
    };

    return (
        <main className={styles.page}>
            <section className={styles.container}>
                {/* Header */}
                <header className={styles.header} data-aos="fade-up">
                    <h1 className={styles.title}><span className={styles.aboutMain} >About</span> Me</h1>
                    <p className={styles.subtitle} data-aos="fade-up">
                        Full-stack web developer focused on clean UI, scalable APIs, and a security-aware mindset.
                    </p>
                </header>

                {/* Top Grid */}
                <div className={styles.grid} >
                    {/* LEFT (8) */}
                    <div className={styles.left}>
                        <div className={styles.card} data-aos="fade-up">
                            <div className={styles.cardHead}>
                                <h2 className={styles.sectionTitle}>Introduction</h2>
                                <span className={styles.badge}>Working • Jul 2025 → Present</span>
                            </div>

                            <p className={styles.text}>
                                Hi, I’m <strong>Md Saif</strong> — a <strong>full-stack web developer</strong> who enjoys building
                                modern web applications. I’ve worked on full-stack projects and I’m continuously improving through
                                real projects and hands-on learning.
                            </p>

                            <div className={styles.kvRow}>
                                <div className={styles.kv}>
                                    <div className={styles.kvLabel}>Role</div>
                                    <div className={styles.kvValue}>Full-Stack Web Developer</div>
                                </div>
                                <div className={styles.kv}>
                                    <div className={styles.kvLabel}>Since</div>
                                    <div className={styles.kvValue}>July 2025 → Continue</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card} data-aos="fade-up">
                            <h2 className={styles.sectionTitle} data-aos="fade-up">Education</h2>

                            <div className={styles.timeline}>
                                <div className={styles.item} >
                                    <div className={styles.dot} />
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemTop}>
                                            <h3 className={styles.itemTitle}>BCA — Tilak Maharashtra Vidyapeeth, Pune</h3>
                                            <span className={styles.meta}>2023 • 70%</span>
                                        </div>
                                        <p className={styles.text}>
                                            Graduated in 2023 with strong fundamentals and practical development work.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.item} >
                                    <div className={styles.dot} />
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemTop}>
                                            <h3 className={styles.itemTitle}>12th (Intermediate) — BSEB Board</h3>
                                            <span className={styles.meta}>2020 • 65%</span>
                                        </div>
                                        <p className={styles.text}>
                                            Completed intermediate studies in 2020 under BSEB.
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.item} >
                                    <div className={styles.dot} />
                                    <div className={styles.itemBody}>
                                        <div className={styles.itemTop}>
                                            <h3 className={styles.itemTitle}>10th (Matriculation)</h3>
                                            <span className={styles.meta}>2018 • 60%</span>
                                        </div>
                                        <p className={styles.text}>
                                            Completed matriculation in 2018.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card} data-aos="fade-up">
                            <h2 className={styles.sectionTitle}>What I Do</h2>
                            <ul className={styles.list}>
                                <li>Build responsive, modern UIs with component-driven design</li>
                                <li>Develop backend APIs and integrate databases</li>
                                <li>Work on full-stack features end-to-end (UI → API → DB)</li>
                                <li>Follow clean structure, reusable code, and real-world patterns</li>
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT (4) */}
                    <aside className={styles.right} data-aos="fade-up">
                        <div className={styles.profileCard}>
                            <div className={styles.imageWrap}>
                                <img src="/images/profile.png" alt="Md Saif" className={styles.image} />
                                <div className={styles.profileBadge}>Jul 2025 → Present</div>
                            </div>

                            <div className={styles.profileText}>
                                <h3 className={styles.profileName}>Md Saif</h3>
                                <p className={styles.profileRole}>Full-Stack Web Developer</p>

                                <div className={styles.profileStats}>


                                </div>

                                {/* glassy socials */}
                                <div className={styles.socialRow}>
                                    <a className={styles.socialBtn} href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                        <Linkedin size={18} />
                                    </a>

                                    <a className={styles.socialBtn} href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                        <Github size={18} />
                                    </a>



                                    <a className={styles.socialBtn} href={`mailto:${email}`} aria-label="Email">
                                        <Mail size={18} />
                                    </a>
                                    <a
                                        href="/resume.pdf"
                                        download
                                        className={styles.resumeBtn}
                                        aria-label="Download Resume"
                                    >
                                        Download Resume
                                    </a>
                                </div>


                                <div className={styles.emailLine}>
                                    <span className={styles.emailText}>{email}</span>
                                    <span className={`${styles.copyState} ${copied ? styles.copyOn : ""}`}>
                                        Copied
                                    </span> <button type="button" className={styles.socialBtn} onClick={copyEmail} aria-label="Copy Email">
                                        {copied ? <Check size={18} /> : <Copy size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Experience & Journey */}
                <section className={styles.journey}>
                    <h2 className={styles.sectionTitleBig}>Experience & Journey</h2>
                    <p className={styles.text}>
                        A short overview of my professional experience and learning path.
                    </p>

                    <div className={styles.journeyGrid} data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="600"
                        data-aos-easing="ease-out-cubic" >
                        <div className={styles.journeyCard}>
                            <h3 className={styles.journeyTitle}>Paid Internship — Rabs Net Solution</h3>
                            <div className={styles.journeyMeta}>Oct 2024 → Jan 2025 • 3 Months</div>
                            <ul className={styles.list}>
                                <li>Worked on real project tasks under guidance</li>
                                <li>Built UI components and improved layouts for responsiveness</li>
                                <li>Integrated APIs and handled basic debugging/fixes</li>
                            </ul>
                        </div>

                        <div className={styles.journeyCard} data-aos="fade-up"
                            data-aos-delay="120"
                            data-aos-duration="600"
                            data-aos-easing="ease-out-cubic">
                            <h3 className={styles.journeyTitle}>Full-Stack Projects</h3>
                            <div className={styles.journeyMeta}>Personal + Practice Projects</div>
                            <ul className={styles.list}>
                                <li>Created full-stack flows: UI → API → Database</li>
                                <li>Worked with authentication patterns and CRUD systems</li>
                                <li>Focused on clean structure and maintainable code</li>
                            </ul>
                        </div>

                        <div className={styles.journeyCard} data-aos="fade-up"
                            data-aos-delay="240"
                            data-aos-duration="600"
                            data-aos-easing="ease-out-cubic">
                            <h3 className={styles.journeyTitle}>Security Learning (Ongoing)</h3>
                            <div className={styles.journeyMeta}>Website Security Basics</div>
                            <ul className={styles.list}>
                                <li>Learning OWASP concepts and common vulnerabilities</li>
                                <li>Exploring Linux/Networking basics for security foundations</li>
                                <li>Applying secure mindset while building web apps</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <Projects />
        </main>
    );
}
