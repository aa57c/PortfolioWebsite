import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">
          Ashna's Portfolio
        </Link>
      </div>
      <a href="/files/Resume_2024_Update.pdf" className="cta-btn" aria-label="PDF File" target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </div>
  )
}

export default Navbar;