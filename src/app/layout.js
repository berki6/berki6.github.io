"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") || "system";
    }
    return "system";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [systemTheme, setSystemTheme] = useState("light");

  const applyTheme = (themeToApply, sysTheme) => {
    if (themeToApply === "system") {
      document.documentElement.setAttribute("data-theme", sysTheme);
    } else {
      document.documentElement.setAttribute("data-theme", themeToApply);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemTheme = () => {
      const newSystemTheme = mq.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);
      if (theme === "system") {
        applyTheme("system", newSystemTheme);
      }
    };

    updateSystemTheme();
    mq.addEventListener("change", updateSystemTheme);

    return () => mq.removeEventListener("change", updateSystemTheme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") {
      applyTheme(theme, systemTheme);
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme, systemTheme]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className="navbar">
          <div className="navbar-brand">My Portfolio</div>
          <div className="theme-toggle">
            {mounted && (
              <>
                <button
                  className={theme === "light" ? "active" : ""}
                  onClick={() => setTheme("light")}
                  aria-label="Light mode"
                >
                  🌞
                </button>
                <button
                  className={theme === "dark" ? "active" : ""}
                  onClick={() => setTheme("dark")}
                  aria-label="Dark mode"
                >
                  🌚
                </button>
                <button
                  className={theme === "system" ? "active" : ""}
                  onClick={(e) => {
                    setTheme("system");
                    e.currentTarget.blur();
                  }}
                  aria-label="System mode"
                >
                  🖥️
                </button>
              </>
            )}
          </div>
          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
          </ul>
        </nav>
        {children}
        <style jsx global>{`
          :root {
            --background: #fff;
            --foreground: #000;
            --gray-alpha-100: #f0f0f0;
          }

          [data-theme="dark"] {
            --background: #121212;
            --foreground: #eee;
            --gray-alpha-100: #222222;
          }

          .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 2rem;
            background: var(--background);
            border-bottom: 1px solid #eee;
            font-family: var(--font-geist-sans);
            position: relative;
          }
          .navbar-brand {
            font-weight: bold;
            font-size: 1.5rem;
            color: var(--foreground);
          }
          .theme-toggle {
            display: flex;
            gap: 0.5rem;
            margin-right: 1rem;
          }
          .theme-toggle button {
            background: none;
            border: 1px solid #ccc;
            border-radius: 6px;
            padding: 4px 8px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: border-color 0.2s, background 0.2s;
            outline: none;
            color: var(--foreground);
          }
          .theme-toggle button:focus {
            outline: none;
            box-shadow: none;
          }
          .theme-toggle button:focus-visible {
            outline: 2px solid #0070f3;
            outline-offset: 2px;
          }
          .theme-toggle button.active {
            border-color: #0070f3 !important;
            background: var(--gray-alpha-100);
            z-index: 1;
          }
          .theme-toggle button:not(.active) {
            background: none;
          }
          .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
            margin: 0;
            transition: max-height 0.3s ease;
          }
          .nav-links li a {
            text-decoration: none;
            color: var(--foreground);
            font-family: var(--font-geist-mono);
            font-size: 1rem;
            transition: color 0.2s;
          }
          .nav-links li a:hover {
            color: #0070f3;
          }
          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
          }
          .bar {
            width: 100%;
            height: 4px;
            background: var(--foreground);
            margin: 4px 0;
            border-radius: 2px;
            transition: 0.3s;
          }
          @media (max-width: 768px) {
            .nav-links {
              position: absolute;
              top: 64px;
              left: 0;
              right: 0;
              background: var(--background);
              flex-direction: column;
              gap: 1.5rem;
              padding: 2rem;
              max-height: 0;
              overflow: hidden;
              border-bottom: 1px solid #eee;
            }
            .nav-links.open {
              max-height: 300px;
            }
            .hamburger {
              display: flex;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
