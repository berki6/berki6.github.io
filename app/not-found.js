// app/not-found.js
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div
      className={styles.page}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#e63946",
          marginBottom: "16px",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#444", marginBottom: "32px" }}>
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        style={{
          padding: "12px 32px",
          background: "#171717",
          color: "#fff",
          borderRadius: "32px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "background 0.2s",
        }}
      >
        Go Home
      </a>
    </div>
  );
}
