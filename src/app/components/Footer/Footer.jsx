"use client"
import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";
import { ChevronsRight } from 'lucide-react';
import Image from "next/image";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Footer() {
    const handleSubscribe = (e) => {
        e.preventDefault();
        alert("Subscribed (demo). Connect backend later!");
    };

    return (
        <footer className={styles.footer}>
            {/* glass layer */}
            <div className={styles.glassBg} aria-hidden="true" />

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* COL 4 - LOGO / ABOUT */}
                    <div className={styles.col}>
                        <div className={styles.brand}>
                            <div className={styles.logoMark}>MS</div>
                            <div className={styles.brandText}>
                                <div className={styles.brandName}>Md Saif</div>
                                <div className={styles.brandTag}>
                                    Web Developer • Security Learner
                                </div>
                            </div>
                        </div>

                        <p className={styles.desc}>
                            I build modern web applications with a clean UI mindset and I’m
                            learning web security to make systems safer and more reliable.
                        </p>
                        <Image
                            src="/images/logo1.png"
                            alt="Logo"
                            width={150}
                            height={60}
                            priority
                        />
                    </div>

                    {/* COL 4 - LINKS */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Quick Links</h4>

                        <nav className={styles.links}>
                            {quickLinks.map((l) => (
                                <Link Link key={l.href} href={l.href} className={styles.link} >
                                    <ChevronsRight size={16} className={styles.linkIcon} />
                                    {l.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* COL 4 - NEWSLETTER */}
                    <div className={styles.col}>
                        <h4 className={styles.heading}>Newsletter</h4>
                        <p className={styles.small}>
                            Get updates on projects, learning notes, and new blog posts.
                        </p>

                        <form className={styles.form} onSubmit={handleSubscribe}>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="Enter your email"
                                required
                            />
                            <button className={styles.btn} type="submit">
                                Subscribe
                            </button>
                        </form>

                        <div className={styles.social}>
                            <a className={styles.socialBtn} href="#" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a className={styles.socialBtn} href="#" aria-label="Email">
                                <Mail size={18} />
                            </a>
                            <a className={styles.socialBtn} href="#" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a className={styles.socialBtn} href="#" aria-label="Twitter/X">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* bottom row */}
                <div className={styles.bottom}>
                    <span className={styles.copy}>
                        © {new Date().getFullYear()} Md Saif. All rights reserved.
                    </span>

                    <span className={styles.miniLinks}>
                        <Link className={styles.miniLink} href="/privacy">
                            Privacy
                        </Link>
                        <span className={styles.dot}>•</span>
                        <Link className={styles.miniLink} href="/terms">
                            Terms
                        </Link>
                    </span>
                </div>
            </div>
        </footer >
    );
}
