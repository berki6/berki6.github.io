"use client";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern, animated, and responsive personal site.",
      img: "/vercel.svg",
      site: "https://berki6.github.io",
      code: "https://github.com/berki6/berki6.github.io",
    },
    {
      title: "UI Library",
      desc: "Custom React components for fast prototyping.",
      img: "/next.svg",
      site: "#",
      code: "#",
    },
    {
      title: "Animation Playground",
      desc: "GSAP-powered interactive demos.",
      img: "/globe.svg",
      site: "#",
      code: "#",
    },
  ];

  return (
    <main className="projects-main">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-img-wrap">
              <img src={p.img} alt={p.title} className="project-img" />
            </div>
            <div className="project-info">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
            <div className="project-actions">
              <a
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
                aria-label="View site"
              >
                {/* Outline Eye SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: 24, height: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
              <a
                href={p.code}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn"
                aria-label="View code"
              >
                {/* Outline Code SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 24, height: 24 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        .projects-main {
          padding: 2rem;
        }
        .projects-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
          text-align: center;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: var(--background);
          border-radius: 16px;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .project-card:hover {
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.16);
          transform: translateY(-4px) scale(1.02);
        }
        .project-img-wrap {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .project-img {
          max-width: 100%;
          max-height: 100%;
          border-radius: 8px;
        }
        .project-info {
          text-align: center;
          margin-bottom: 1rem;
        }
        .project-info h2 {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .project-info p {
          font-size: 1rem;
          color: var(--foreground);
        }
        .project-actions {
          display: flex;
          gap: 1rem;
          opacity: 0;
          pointer-events: none;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 1.5rem;
          justify-content: center;
          transition: opacity 0.2s;
        }
        .project-card:hover .project-actions {
          opacity: 1;
          pointer-events: auto;
        }
        .action-btn {
          background: var(--gray-alpha-100, #f0f0f0);
          border: none;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          color: var(--foreground);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          transition: background 0.2s, box-shadow 0.2s;
        }
        .action-btn:hover {
          background: #0070f3;
          color: #fff;
        }
      `}</style>
    </main>
  );
}
