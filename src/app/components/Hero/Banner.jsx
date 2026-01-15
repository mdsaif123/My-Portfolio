"use client"

import React, { useState, useEffect } from 'react';
import "./Banner.css"
import Link from "next/link";

const Banner = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <>


      <div className="hero-wrapper">
        {/* Background elements */}
        <div className="gradient-bg"></div>
        <div className="grid-pattern"></div>

        {/* Floating particles */}
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(${Math.random() * 100 + 150}, ${Math.random() * 100 + 100}, 255, 0.3)`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}



        {/* Floating decorative elements */}
        <div className="code-snippet">
          const developer = &#123;<br />
          &nbsp;&nbsp;name: "Md Saif",<br />
          &nbsp;&nbsp;passion: "Web Developer"<br />
          &#125;;
        </div>
        <div className="design-element"></div>

        {/* Main content */}
        <div className="hero-content">
          <div className="status-badge">
            <div className="status-dot"></div>
            <span className="status-text">Available for new projects</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="gradient-text">Md saif</span>
            <br />
            Full-Stack Developer
          </h1>



          <p className="hero-description">
            I build modern web applications and I'm actively learning
            <strong className='cyber-sec'> Ethical Hacking & Cyber Security </strong> to create
            secure, scalable, and real-world digital solutions.
          </p>

          <div className="cta-container">
            <Link href="/about" className="btn btn-primary view-my-work">
              <span>View My Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7 13L13 7M13 7H7M13 7V13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              <span>Let's Connect</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 8L10 13L17 8M3 8L10 3L17 8M3 8V16L10 21M17 8V16L10 21M10 21V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="social-links">
            <div className="social-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div className="social-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div className="social-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </div>
            <div className="social-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;