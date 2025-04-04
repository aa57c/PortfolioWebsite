// components/About.jsx

import Image from "next/image";


/**
 * As a developer, I am passionate about crafting elegant and effective solutions to complex problems. My strong foundation in software development, particularly with web technologies like HTML, CSS, and JavaScript, allows me to excel in both front-end and back-end development. I am dedicated to optimizing performance, enhancing user experience, and maintaining the highest level of code quality.
 * 
 * I have a bachelor's and master's degree in computer science, with the latter having an emphasis on data science. My interests lie in AI and Machine Learning, where I see immense potential in harnessing raw data through advanced analytical techniques. Incorporating artificial intelligence is crucial for uncovering patterns and trends within vast datasets. My coursework project, such as "Deep Learning Experiments", and work experience as a Graduate Research Assistant to many deep learning projects, demonstrate these skills and my continuous pursuit of learning and exploring new technologies.
 * 
 * In addition to my academic pursuits, I have gained valuable professional experience through my role as a Technical Apprentice at Oracle-Cerner, where I worked on patient charting applications. This experience honed my skills in web development, cloud computing, and project management. I am proficient in several programming languages, including Java, JavaScript, C++, and C#, and have experience with AWS services, Docker, and ReactJS.
 * 
 * I am always eager to improve my skills and knowledge, seeking opportunities to grow professionally. In the future, I aspire to work in roles that blend my expertise in AI and machine learning with my passion for software development, contributing to innovative solutions in the tech industry.
 * 
 * Outside of work and study, I enjoy playing videogames and art, which helps me maintain a balanced and well-rounded lifestyle. My most recent passion has been nail art and it really helps me tap into my creative side as well as helping me handle stress well.
 * 
 * 
 * 
 * 
 * 
 */

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
           I am a developer passionate about crafting elegant and effective solutions to complex problems. With a strong foundation in web development technologies like HTML, CSS, and JavaScript, I excel in both front-end and back-end development, optimizing performance and enhancing user experiences while maintaining high code quality.
          </p>
          <p>
         I hold a Bachelor's and Master's degree in Computer Science, specializing in data science. My academic and research experience, including projects like "Deep Learning Experiments" and a role as a Graduate Research Assistant, reflect my dedication to exploring AI and Machine Learning. I am particularly interested in leveraging AI to uncover patterns and trends in large datasets.
          </p>
          <p>
            Professionally, I gained valuable experience as a Technical Apprentice at Oracle-Cerner, contributing to patient charting applications. This role strengthened my skills in web development, cloud computing, and project management. I am proficient in Java, JavaScript, C++, and C#, and I have hands-on experience with tools and frameworks like AWS, Docker, and ReactJS.
          </p>
          <p>
            As I continue to grow professionally, I aspire to blend my expertise in AI and software development to create innovative solutions in the tech industry.
          </p>
          <p>
           Outside of work, I balance my technical pursuits with creative hobbies like art and nail design, which help me manage stress and stay inspired. I also enjoy playing video games as a way to unwind and recharge.
          </p>
        </div>
        <div className="about-img">
          <Image src='/images/grad_picture.jpg' className="profile-img" width={400} height={600}/>
        </div>
      </div>
      
    </div>
  )
}

export default About;
