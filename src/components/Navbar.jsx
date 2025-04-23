import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">
          Ashna's Portfolio
        </Link>
      </div>
      <a href="/files/Ashna_Ali_Resume_MASTER.pdf" className="cta-btn" aria-label="View Resume (PDF)" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
