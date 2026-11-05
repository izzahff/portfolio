import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { contact } from "../data";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#timeline", label: "Timeline" },
  { href: "/#recognition", label: "Recognition" },
  { href: "/#toolkit", label: "Toolkit" },
  { href: "/#contact", label: "Contact" },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M0 1.15C0 .52.52 0 1.18 0h13.64C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.18 1.15H1.18C.52 16 0 15.48 0 14.85V1.15Zm4.94 12.24V6.17H2.54v7.22h2.4ZM3.74 5.18c.84 0 1.36-.55 1.36-1.25-.02-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01Zm4.91 8.21V9.36c0-.22.02-.43.08-.59.18-.43.57-.88 1.23-.88.87 0 1.21.66 1.21 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.76-3.25-1.3 0-1.88.72-2.2 1.22V6.17H6.25c.03.68 0 7.22 0 7.22h2.4Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path fill="currentColor" d="M0 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3Zm1.8.5L8 8.1l6.2-4.6H1.8ZM14.5 5 8 9.8 1.5 5v7.5h13V5Z" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="top">
      <div className="top-inner">
        <Link href="/" className="wordmark" aria-label="Izzah Farhanah, home">
          <span>izzah</span>
        </Link>
        <nav className="nav" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
        <div className="social">
          <a href="https://github.com/izzahff" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <nav className="foot-nav" aria-label="Footer">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
        <a href={contact.resume} download>Resume</a>
      </nav>
      <ThemeToggle />
      <p className="copy">&copy; 2026 Izzah Farhanah Faizul</p>
    </footer>
  );
}
