import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">
          Ashna's Portfolio
        </Link>
      </div>
      <a href="/files/Resume_2024_Update_5.pdf" className="cta-btn" aria-label="View Resume (PDF)" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </nav>
  );
}

export default Navbar;
