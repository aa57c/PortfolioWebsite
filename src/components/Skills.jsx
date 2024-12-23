// components/Skills.jsx

import Image from "next/image";

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
          <div className="skill-card java">
            <i className="fa-brands fa-java java-icon"/>
            <p>Java</p>
          </div>
          <div className="skill-card sql">
            <i className="fa-solid fa-database sql-icon"/>
            <p>SQL</p>
          </div>
          <div className="skill-card azure">
            <img className="custom-azure-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVR4nO2YW4hOURTHf3wIMy6DyBgPIhJCvCge5Jq8SSkPyjWRKDU0yTx4I7e8UJMH8uKWXF7mQXmYkOLFpCRRUpNrLmXGONq1vjrtzjl773P5vu/U/td6OWfttf7/fc5ee+0NHh4eHg4YSYnRBmynpFgGvAamUEJsAX4DHZQMQ4BO4B/wAWiiRGgCbgGB2A7tfYUGRivwLES+FxgWej8OuEyDYjHwPkRe2QbNp1Oer6XBsBn4pZF/qPmo2f8i715qX6aui7UdGNTIq8W7RPM9rvnsoQF21qsaqaqp52GMDc1+1fqA8XXizlTgaQz5P8BMzf9YjO+pepBfCLyLIaTsZMTsf04QO7uW5GcAPxPIq99kgjamI8E/AO7UUsBtA5nDmn+z/OtJY4JaldU1BhJvI1rmoxbkg1qU1RHAKwOJrREthc3sB2J7ixRwxJD8BTBUG9PuQD6Qha6vn1wwDfhhSL4q4+wHYqeLEHDNkPR+xJiKVBdXAf3AnDzJL5e2IC6haiEWxYwdAzxPIeJuXuQr8m8nJeuyaK/1DtXG1uUh4IAhiToqTreIMx/45iigFxiehfxk4KshyQmHeOuBAUcR+7II6DIE75P+3gU7U5TViWnIL43o73XbnyawdJ8uIs64JlCb0RND0DeyM6eBin/TQcAAMM8lwS6LoJvIhlFAj4OIe7aBWyx2z8dyjMyKSXJbZytCFQEjLlgEUhtbXpgbccxMXVbVKeuvIch18sdKOZXZiEgsHJfkGuSKHAkPyr3mCmAWMJrisM3QrlTtU1HdqksFapXbanWPdAg4C9yw6Hardq5Igi1S8lYDu+UW7iLQLaW333EPCPIoq3FEFwAb5RR1XjrIbs0eyT1plClBUfZRFrZu30MiHuQz3x4eHh4elBz/AdFsAM5CLTuIAAAAAElFTkSuQmCC"/>
            <p>Microsoft Azure</p>
          </div>
          <div className="skill-card c-plus-plus">
            <img className="custom-cplusplus-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADbklEQVR4nO1ZTWsTURQ9SVCpbVIVggu7SKmuXLTNohhqmxZEXErbLIs7F4LrLJp+TFb+ADdZuwu1+QGSBKFNUtCdtIlQFCpi0xiwTdDEmit3GIQGM+9lPtop5MCFx5t5b86Zd++77wPooQdH4iaAtwD+ADgBkAbgxwWAB8BLjTS1Gde9AnAZDsVzAPX/EG+3nwCicBAeAfgqQbzdvgN4fJ7EbwN4Z4B4u30EcPcsifsAvAbQsoA8acZ9vQFwzU7iLgBxAE0LiVOb/QaQAOC2mvwTAD9EBILBIMXjccpms7S7u0u1Wk01LnOdoijqOxJCagCeWUH8PoA9vY+5XC6KRCJUKpVIFsVikRYWFtS2AiHfADw0QvwGgILoT42MjFChUCCjyOfzNDw8LDMizMXbjYDPok4nJyfp4OCAzKJSqdDs7KyMiGI3AnQ7m5mZoUajQVah0WjQ9PS0jAjzAgKBAJXLZbIalUpFdUlbBXDQmfF5Eba2tkSBbU4AzzYicFwsLS3R2NgY9ff3qzY+Pk6xWEx35La3tykUCtk3AvxnePrTQzKZJK/X25GAz+ej9fX1U2329/dpcXFRZko1J4ATkIi8DAl+h0XU63VaXV2lvr4+GeLmBXCG1XMbvT/fbkx6aGioG+LmBfBSoBPY5w2Q+de+i2fGBegtFUZHR50v4Pj4uKOAgYEBQ8TbIXpmSsDR0VHHzrvx/3MTUNJxIZ7zHe9CmUymo4Dl5WXnC1AUpaMAzrCcpGSJc8xMTEwYEW1fIuPkJJPI3G43pVIparVaavKTWMCd3VKCReiNxODgIG1sbJxq02w2KZFIkN/vt1cAG28DRWB34pjgEWNX4RmKyysrK3R4eNixXbVapWg0Sh6Pxz4BPAq8DbQLm5ub9i6nL/yGBpqFw2HLt5RTU1OWxkDKgZv6TDcCLgFQRKfNfCSSy+VM+XwgEBARr2tcrsAAbmlHfSd6gT0/P6+evsliZ2eH5ubmRMT5vDQJIAALEASQFQ0z733X1tYonU6rgngFy8ZlruMdmOS6KQ8gBBvwAMAHCQJmjtojsBkcH08BlC0kXtVubQz5uVFcB/ACwC8TxJtajJ3rBeAdLdi6vfDgC40zvZkR4R6AnATx9wDCcChcWhB++g/xL1rs8FWs43EVQEy7HNnTylzXQw9wGP4CLEuuIwrZjcUAAAAASUVORK5CYII="/>
            <p>C++</p>
          </div>
          <div className="skill-card arduino">
            <Image src='/icons/arduino.svg' width={30} height={30} alt='Arduino Icon' />
            <p>Arduino</p>
          </div>
          <div className="skill-card esp">
            <Image src='/icons/espressif.svg' width={30} height={30} alt='Espressif Icon'/>
            <p>ESP32</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;