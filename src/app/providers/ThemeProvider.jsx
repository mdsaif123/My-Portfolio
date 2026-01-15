"use client";

import { createContext, useContext, useEffect, useState } from "react";

/* ---------- CONTEXT ---------- */
const ThemeContext = createContext(null);

/* ---------- PROVIDER ---------- */
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    // initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

/* ---------- HOOK ---------- */
export const useTheme = () => useContext(ThemeContext);
