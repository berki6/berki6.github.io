"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Bereket</Link>
      </div>
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
        <span className={open ? styles.barOpen : styles.bar}></span>
      </button>
      <ul className={open ? styles.menuOpen : styles.menu}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
