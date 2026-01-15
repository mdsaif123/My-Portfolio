"use client";

import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/providers/ThemeProvider";
import Image from "next/image";


const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // refs (JS-safe)
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const navRef = useRef(null);
    const indicatorRef = useRef(null);
    const linkRefs = useRef({});

    /* ---------------- ACTIVE INDICATOR ---------------- */
    useEffect(() => {
        if (!mounted) return;

        const activeEl = linkRefs.current[activeLink];
        const indicator = indicatorRef.current;
        const nav = navRef.current;

        if (!activeEl || !indicator || !nav) return;

        const elRect = activeEl.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();

        indicator.style.width = `${elRect.width}px`;
        indicator.style.transform = `translateX(${elRect.left - navRect.left}px)`;
    }, [activeLink, mounted]);

    /* ---------------- MOUNT ---------------- */
    useEffect(() => {
        setMounted(true);
    }, []);

    /* ---------------- SCROLL EFFECT ---------------- */
    useEffect(() => {
        if (!mounted) return;

        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [mounted]);

    /* ---------------- CLICK OUTSIDE DROPDOWN ---------------- */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    /* ---------------- DROPDOWN HANDLERS ---------------- */
    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 200);
    };

    const handleDropdownClick = (name) => {
        setActiveLink(name);
        setDropdownOpen(false);
    };

    if (!mounted) return null;

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-inner">
                {/* Logo */}
                <div className="nav-logo">
                    <Image
                        src="/images/logo1.png"
                        alt="Logo"
                        width={100}
                        height={40}
                        priority
                    />
                </div>

                {/* Links */}
                <nav className="nav-links desktop-only" ref={navRef} aria-label="Primary Navigation">
                    <span className="nav-active-indicator" ref={indicatorRef} />

                    {links.map((link) => (
                        <div
                            key={link.name}
                            className="nav-link-container"
                            ref={(el) => {
                                linkRefs.current[link.name] = el;
                            }}
                            onMouseEnter={link.dropdown ? handleMouseEnter : undefined}
                            onMouseLeave={link.dropdown ? handleMouseLeave : undefined}
                        >
                            <Link
                                href={link.path}
                                className={`nav-link ${activeLink === link.name ? "active" : ""
                                    } ${link.dropdown ? "has-dropdown" : ""}`}
                                onClick={() => {
                                    setActiveLink(link.name);
                                    if (!link.dropdown) setDropdownOpen(false);
                                }}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown
                                        size={16}
                                        className={`dropdown-icon ${dropdownOpen ? "open" : ""
                                            }`}
                                    />
                                )}
                            </Link>

                            {/* Dropdown */}
                            {link.dropdown && dropdownOpen && (
                                <div className="dropdown-menu" ref={dropdownRef}>
                                    {link.dropdownItems?.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.path}
                                            className="dropdown-item"
                                            onClick={() =>
                                                handleDropdownClick(item.name)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Actions */}
                <div className="nav-actions">
                    <button
                        onClick={toggleTheme}
                        className="theme-icon-btn"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                </div>
            </div>
        </header>
    );
}
