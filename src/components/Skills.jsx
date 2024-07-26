// components/Skills.jsx

const Skills = () => {
    return (
      <div className="skills-container">
        <h2>Skills</h2>
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
          <div className="skill-card aws">
            <i className="fa-brands fa-aws aws-icon"></i>
            <p>AWS</p>
          </div>
          <div className="skill-card tensorflow">
            <img className="custom-tensorflow-icon" 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABxElEQVR4nO2ZvUvEMBiHn8MPFEUQEQQXkRvEQVwcXVwEwUGcvdHV0cXBwUFHwb/AzfEQRBAUF8FBBCeXcxIEUVFRRPyIFN7Acdhe2qZtDvLACy3k2t/TpEmOgsfjLKWQ45ZgAXisO38BlmgBxoBLQElp9HkNmMRBuoE94Lcu7H8CStocAX04whrw2RAySkDXF7BT9HA5CAlnIqDrGJjIM3g/sC1PUFkQUMAPsAsMZhm8HVgG7g0CxRVQUk/AKtBpO/wMcBUjSFIBJXUNzNkIXgaqCQKkFVBSVcmQiK2I2SUvASUZgiyxSXNTmwKq4VpeQNU9lXMLPXBaRA/cAhXZZaYVCJgHbvIQeAc2gd4m7eIK6P1UsAa8ZiWwD4wYtEsqoBmWVTlsY2iM/uEFMG3QzpaAZgo4SyPwAKwAbU3apRWYjbh2Sd61uyQCpvv1tAJKhueohSyJsCGggA9gI8ugWQuopGPdC+B7AD+EihxCFZnnW/YlDugB1mUqzR2bW4lyztmNwzk17zfiBYrG90DR+B4omlqKabSGA3TIX8/nGAJvsvJ24RAD8t3gO0JAfwcYwmHGgcN/BE5c/cAXxmLIscfjwR5/ccC7lOdicRwAAAAASUVORK5CYII=" />
            <p>TensorFlow</p>
          </div>
          <div className="skill-card docker">
            <i className="fa-brands fa-docker docker-icon"/>
            <p>Docker</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;