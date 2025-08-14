"use client";

export default function Services() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Services
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "16px" }}>
          <strong>Web Development</strong> – Modern, responsive websites and web
          apps.
        </li>
        <li style={{ marginBottom: "16px" }}>
          <strong>UI/UX Design</strong> – Beautiful, user-focused interfaces.
        </li>
        <li>
          <strong>Animation & Interactivity</strong> – GSAP-powered experiences.
        </li>
      </ul>
    </main>
  );
}
