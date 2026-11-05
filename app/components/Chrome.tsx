import Link from "next/link";

function Mark() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <polygon points="10,1 19,10 10,19 1,10" fill="none" stroke="#c9a04a" strokeWidth="1.5" />
      <polygon points="10,6 14,10 10,14 6,10" fill="#c9a04a" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="wrap top">
      <Link href="/" className="mark">
        <Mark />
        Izzah Farhanah
      </Link>
      <nav className="nav" aria-label="Main">
        <Link href="/#work">Work</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#recognition">Recognition</Link>
        <Link href="/#contact" className="keep">Contact</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="band" aria-hidden="true" />
      <div className="wrap foot">
        <span>&copy; 2026 Izzah Farhanah Faizul</span>
      </div>
    </footer>
  );
}
