// components/About.jsx

//import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating elegant and effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as HTML, CSS, and JavaScript. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
          <p>I am also studying at graduate school for my Masters in Computer Science with an emphasis in Data Science.
            AI and Machine Learning are a few of my interests in this field. There is so much raw data out there that is useless
            without having advanced analytical techniques, so incorporating artificial intelligence will be crucial to exploring those
            patterns and trends. I have a few projects that I have done during my coursework that demonstrate these skills as well.
            I am always eager to learn and explore new technologies and I am constantly seeking out opportunities to improve my 
            skills and knowledge.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;