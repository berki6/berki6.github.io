"use client";

import Image from "next/image";

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "GSAP",
    "UI/UX",
    "CSS",
    "HTML",
  ];
  return (
    <main className="about-main">
      <div className="about-card">
        <Image
          src="/vercel.svg"
          alt="Avatar"
          className="about-avatar"
          width={80}
          height={80}
        />
        <h1 className="about-title">About Me</h1>
        <p className="about-bio">
          Hi, I'm Bereket Fikadu. I'm passionate about building beautiful web
          experiences and creative interfaces. I specialize in JavaScript,
          React, Next.js, and animation libraries like GSAP.
        </p>
        <div className="about-skills">
          {skills.map((skill, i) => (
            <span className="about-skill" key={i}>
              {skill}
            </span>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .about-main {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          padding: 1rem;
        }
        @media (max-width: 600px) {
          .about-card {
            padding: 1rem;
            max-width: 95vw;
          }
        }
        .about-card {
          background: var(--background);
          border-radius: 16px;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
          padding: 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 400px;
        }
        .about-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 1rem;
        }
        .about-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .about-bio {
          font-size: 1.1rem;
          color: var(--foreground);
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .about-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }
        .about-skill {
          background: var(--gray-alpha-100, #f0f0f0);
          border-radius: 9999px;
          padding: 0.3rem 0.8rem;
          font-size: 0.85rem;
          color: var(--foreground);
          border: 1px solid var(--gray-alpha-200, #e0e0e0);
          transition: background 0.2s, color 0.2s;
        }
        .about-skill:hover {
          background: #0070f3;
          color: #fff;
        }
      `}</style>
    </main>
  );
}
