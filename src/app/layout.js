"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Next.js App Router hook to get current path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function HydrationWrapper({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{children}</>;
}

export default function RootLayout({ children }) {
  const pathname = usePathname(); // get current route path for animation key

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("theme") || "system";
    }
    return "system";
  });

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
        <HydrationWrapper>
          <nav className="navbar">
            <div className="navbar-brand">
              <a href="/">My Portfolio</a>
            </div>
            {/* Desktop theme toggle */}
            <div className="theme-toggle desktop-toggle">
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
              {/* Mobile theme toggle */}
              <li className="mobile-toggle">
                <div className="theme-toggle">
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
                </div>
              </li>
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

          {/* Page transition wrapper */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname} // animate on route change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </HydrationWrapper>

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

          html:not([data-theme]) body {
            visibility: hidden;
          }
          html[data-theme] body {
            visibility: visible;
            transition: background-color 0.3s ease, color 0.3s ease;
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
            height: 64px;
            min-height: 64px;
            box-sizing: border-box;
          }
          .navbar-brand {
            font-weight: bold;
            font-size: 1.5rem;
            color: var(--foreground);
          }
          .navbar-brand a {
            color: var(--foreground);
            text-decoration: none;
          }
          .theme-toggle {
            display: flex;
            gap: 0.5rem;
            margin-right: 1rem;
          }
          .desktop-toggle {
            display: flex;
          }
          .mobile-toggle {
            display: none;
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
              display: none;
              position: absolute;
              left: 0;
              right: 0;
              top: 64px;
              background: var(--background);
              flex-direction: column;
              gap: 1.5rem;
              padding: 2rem;
              border-bottom: 1px solid #eee;
              z-index: 100;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
            }
            .nav-links.open {
              display: flex;
            }
            .hamburger {
              display: flex;
            }
          }

          @media (max-width: 400px) {
            .navbar {
              padding: 0.5rem 0.5rem;
              height: 48px;
              min-height: 48px;
            }
            .navbar-brand {
              font-size: 1.1rem;
            }
            .desktop-toggle {
              display: none;
            }
            .mobile-toggle {
              display: block;
              margin-bottom: 1rem;
            }
            .theme-toggle {
              gap: 0.25rem;
              margin-right: 0;
              justify-content: flex-start;
            }
            .theme-toggle button {
              font-size: 1rem;
              padding: 2px 4px;
            }
            .hamburger {
              width: 28px;
              height: 28px;
            }
            .bar {
              height: 3px;
              margin: 3px 0;
            }
            .nav-links {
              top: 48px;
              padding: 1rem;
              gap: 1rem;
            }
            .nav-links li a {
              font-size: 0.95rem;
              padding: 0.5rem 0;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
