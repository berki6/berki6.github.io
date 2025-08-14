"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./page.module.css";

export default function Home() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    gsap.from("#hero", { opacity: 0, y: -50, duration: 1 });
    gsap.from(aboutRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.5,
    });
    gsap.from(projectsRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 1,
    });
    gsap.from(contactRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section
          id="hero"
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Bereket Fikadu
          </h1>
          <p style={{ fontSize: "1.5rem", color: "#666" }}>
            Creative Developer & Designer
          </p>
        </section>
        <section ref={aboutRef} style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>About Me</h2>
          <p style={{ fontSize: "1.1rem", color: "#444" }}>
            Passionate about building beautiful web experiences. Skilled in
            JavaScript, React, Next.js, and animation libraries like GSAP.
          </p>
        </section>
        <section ref={projectsRef} style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>Projects</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "16px" }}>
              <strong>Portfolio Website</strong> – Modern, animated, and
              responsive personal site.
            </li>
            <li style={{ marginBottom: "16px" }}>
              <strong>UI Library</strong> – Custom React components for fast
              prototyping.
            </li>
            <li>
              <strong>Animation Playground</strong> – GSAP-powered interactive
              demos.
            </li>
          </ul>
        </section>
        <section ref={contactRef}>
          <h2 style={{ fontSize: "2rem", marginBottom: "12px" }}>Contact</h2>
          <p style={{ fontSize: "1.1rem", color: "#444" }}>
            Email: <a href="mailto:bereketfikadu71@gmail.com">bereketfikadu71@gmail.com</a>
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/berki6"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/berketfikadu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:bereket@example.com">Contact</a>
      </footer>
    </div>
  );
}
