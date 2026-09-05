// components/About.jsx

import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Software Engineer and Data Science Specialist (M.S. Computer Science) specializing in applied machine learning, deep learning architectures, and high-reliability systems. Grounded in hands-on experience bridging real-time embedded software, predictive models, and cloud infrastructure, with a track record of converting complex data streams into high-impact, production-ready intelligence across healthcare, defense, and electric vehicle sectors.
          </p>

          <h3>Experience Highlights</h3>
          <ul className="highlights-list">
            <li>
              <strong>Driving Predictive Accuracy & AI Personalization:</strong> Delivered 80–90% diagnostic accuracy by pairing custom XGBoost and deep learning models with local LLMs for automated health recommendations, earning 3rd place at UMKC Hack-A-Roo.
            </li>
            <br></br>
            <li>
              <strong>Accelerating Deep Learning Pipelines:</strong> Built GPU-accelerated training pipelines for computer vision models, streamlining large-scale image dataset processing for defense applications.
            </li>
            <br></br>
            <li>
              <strong>Deploying Secure, Production-Grade Architecture:</strong> Engineered automated CI/CD cloud pipelines and secure EHR workflows to ensure compliance and high availability across regulated environments.
            </li>
            <br></br>
            <li>
              <strong>Maximizing Powertrain Efficiency & Cost Savings:</strong> Programmed and integrated software for an updated traction motor system in heavy-duty electric trucks, reducing operational costs and improving vehicle efficiency.
            </li>
          </ul>
        </div>
        <div className="about-img">
          <Image 
            src="/images/grad_picture.jpg" 
            className="profile-img" 
            width={400} 
            height={600} 
            alt="Ashna Ali Graduation Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;