const Contact = () => {
    return (
       <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>If you want us to work together, have any questions or want me to speak at your event, my inbox is always open. Whether I just want to say hi, I'll try my best to get back to you! Cheers!</p>
        <div className="contact-options">
          <a 
            href="https://mail.google.com/mail/?view=cm&to=ashna.ali.prof@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='cta-btn'
          >
            Email via Gmail
          </a>
          <a href="mailto:ashna.ali.prof@gmail.com" className='cta-btn'>
            Email via Default Client
          </a>
        </div>
      </div>
    )
}
  
export default Contact;