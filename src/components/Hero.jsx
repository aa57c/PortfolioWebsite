// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile_picture.jpg' className="profile-img" width={300} height={300} alt="Ashna's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Ashna 👋</h1>
        <p>
          I'm a software developer and data scientist based in Kansas City, Missouri. I specialize in building (and occasionally designing)
          websites, applications, and everything in between. Fun fact: This website was built with Next.js and hosted on Vercel!
        </p>
        <div className="social-icons">         
          <a
            href="https://www.linkedin.com/in/ashna-ali"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;