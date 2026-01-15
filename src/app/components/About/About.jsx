"use client";
import React from "react";
import styles from "./About.module.css";
import { Layout, Server, Plug } from "lucide-react";
import { ShieldCheck, Bug, Monitor } from "lucide-react";



const About = () => {
    return (
        <section className={styles.aboutContainer}>
            {/* MAIN PAGE TITLE (STICKY) */}
            <div className={styles.aboutHeader}>
                <h1 className={styles.aboutMainTitle}>About  <span className={styles.spanMe}>Me</span></h1>
                <p className={styles.aboutMainSubtitle}>
                    Web developer focused on building modern, scalable and secure
                    applications.
                </p>
            </div>

            {/* WEB DEVELOPMENT SECTION */}
            <section className={styles.webSection}>
                <h1 className={styles.sectionTitle}>1.Full-stack Development</h1>
                <p className={styles.educationChip}> Education</p>
                <h4 className={styles.education}>
                    Bachelor of Computer Applications<br /> Tilak Maharashtra Vidyapeeth, Pune - 2023
                </h4>


                <p className={styles.sectionText}>
                    I build modern web applications end-to-end — clean, responsive UI on the frontend and scalable, secure APIs on the backend.
                    My goal is simple: create trending, polished interfaces with great UX, better performance, and reliable functionality that
                    users can trust and enjoy using.
                </p>



                <div className={styles.webGrid}>
                    {/* FRONTEND */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <Layout className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>Frontend Development</h3>

                        <p className={styles.cardDesc}>
                            I design clean, responsive and user-friendly interfaces with a strong
                            focus on performance, accessibility and modern UI patterns.
                        </p>

                        <div className={styles.cardActions}>
                            <a href="/blog/frontend" className={styles.cardBtnPrimary}>
                                Read More
                            </a>
                            <a href="/blog/ui" className={styles.cardBtnSecondary}>
                                UI Insights
                            </a>
                        </div>
                    </div>

                    {/* BACKEND */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <Server className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>Backend Development</h3>

                        <p className={styles.cardDesc}>
                            I build scalable server-side logic, manage data flow and design APIs
                            that are secure, maintainable and production-ready.
                        </p>

                        <div className={styles.cardActions}>
                            <a href="/blog/backend" className={styles.cardBtnPrimary}>
                                Learn More
                            </a>
                            <a href="/blog/architecture" className={styles.cardBtnSecondary}>
                                Architecture
                            </a>
                        </div>
                    </div>

                    {/* API */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <Plug className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>API Integration</h3>

                        <p className={styles.cardDesc}>
                            I connect applications with databases, authentication systems and
                            third-party services to create seamless end-to-end experiences.
                        </p>

                        <div className={styles.cardActions}>
                            <a href="/blog/apis" className={styles.cardBtnPrimary}>
                                Explore APIs
                            </a>
                            <a href="/blog/security" className={styles.cardBtnSecondary}>
                                Security
                            </a>
                        </div>
                    </div>

                </div>

            </section>

            <section className={styles.ethicalSection}>
                <h2 className={styles.sectionTitle}>
                    2.Ethical Hacking & Website Security
                </h2>

                <p className={styles.sectionText}>
                    Along with development, I’m learning ethical hacking to understand how real-world attacks happen on web apps.
                    Because a website isn’t “complete” if it’s only working — it also needs to be secure. I focus on writing safer code,
                    validating inputs, and protecting server-side APIs (auth, roles, rate limits, secure API calls, and safe routing).
                    My goal is to build projects where the API, server logic, and directory structure stay protected against common threats
                    like brute-force attempts, DoS patterns, and other security vulnerabilities.
                </p>


                <div className={styles.securityGrid}>
                    {/* WEB SECURITY */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <ShieldCheck className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>Web Security</h3>
                        <p className={styles.cardDesc}>
                            Learning how common website vulnerabilities work and how developers can
                            prevent issues like XSS, CSRF, and insecure authentication.
                        </p>
                        <div className={styles.cardActions}>
                            <a href="/blog/backend" className={styles.cardBtnPrimary}>
                                Learn More
                            </a>
                            <a href="/blog/architecture" className={styles.cardBtnSecondary}>
                                Architecture
                            </a>
                        </div>
                    </div>

                    {/* OWASP */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <Bug className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>OWASP Top 10</h3>
                        <p className={styles.cardDesc}>
                            Studying OWASP Top 10 to understand real-world security risks and apply
                            secure coding best practices.
                        </p>
                        <div className={styles.cardActions}>
                            <a href="/blog/backend" className={styles.cardBtnPrimary}>
                                Learn More
                            </a>
                            <a href="/blog/architecture" className={styles.cardBtnSecondary}>
                                Architecture
                            </a>
                        </div>
                    </div>

                    {/* WINDOWS / SYSTEM */}
                    <div className={styles.glassCard}>
                        <div className={styles.iconWrapper}>
                            <Monitor className={styles.cardIcon} />
                        </div>

                        <h3 className={styles.cardTitle}>System & Windows Basics</h3>
                        <p className={styles.cardDesc}>
                            Exploring Windows security fundamentals, permissions, and how system-level
                            misconfigurations can be exploited.
                        </p>
                        <div className={styles.cardActions}>
                            <a href="/blog/backend" className={styles.cardBtnPrimary}>
                                Learn More
                            </a>
                            <a href="/blog/architecture" className={styles.cardBtnSecondary}>
                                Architecture
                            </a>
                        </div>
                    </div>
                </div>

                <p className={styles.securityNote}>
                    My goal is to become a security-aware web developer who builds applications
                    that are safe, reliable, and production-ready.
                </p>
            </section>


        </section>
    );
};

export default About;
