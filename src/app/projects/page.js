"use client";

export default function Projects() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Projects
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "16px" }}>
          <strong>Portfolio Website</strong> – Modern, animated, and responsive
          personal site.
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
    </main>
  );
}
