// components/Hero.jsx

import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile_picture.jpg' className="profile-img" width={300} height={300} alt="Ashna's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Ashna 👋</h1>
        <p>
          I'm a software developer/data scientist based in Kansas City, Missouri. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
        {
            /*
            <a
            href="https://github.com/olawanlejoel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

            
            
            
            */


        }
          
          <a
            href="https://www.linkedin.com/in/ashna-ali-4a451716b/"
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