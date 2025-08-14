"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <main className="contact-main">
      <div className="contact-card">
        <Image
          src="/vercel.svg"
          alt="Avatar"
          className="contact-avatar"
          width={80}
          height={80}
        />
        <h1 className="contact-title">Contact</h1>
        <p className="contact-email">
          Email:{" "}
          <a href="mailto:bereketfikadu71@gmail.com">
            bereketfikadu71@gmail.com
          </a>
        </p>
        <div className="contact-socials">
          <a
            href="https://github.com/berki6"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/berketfikadu"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social"
          >
            LinkedIn
          </a>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-input"
            rows={4}
            required
          />
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
      <style jsx global>{`
        .contact-main {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
        }
        .contact-card {
          background: var(--background);
          border-radius: 16px;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
          padding: 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 400px;
        }
        .contact-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 1rem;
        }
        .contact-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .contact-email {
          font-size: 1.1rem;
          color: var(--foreground);
          margin-bottom: 1rem;
        }
        .contact-socials {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-social {
          color: #0070f3;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-social:hover {
          color: #0051a8;
          text-decoration: underline;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          width: 100%;
        }
        .contact-input {
          padding: 0.7rem 1rem;
          border-radius: 8px;
          border: 1px solid var(--gray-alpha-200, #e0e0e0);
          font-size: 1rem;
          background: var(--gray-alpha-100, #f0f0f0);
          color: var(--foreground);
          transition: border-color 0.2s;
        }
        .contact-input:focus {
          border-color: #0070f3;
          outline: none;
        }
        .contact-btn {
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.8rem 1.2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.2s;
        }
        .contact-btn:hover {
          background: #0051a8;
        }
      `}</style>
    </main>
  );
}
