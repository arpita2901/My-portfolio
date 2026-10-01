import { portfolioData } from '../data/portfolio'

export default function Contact() {
  const { email, phone, social } = portfolioData
  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="heading">LET'S CONNECT.</h2>
            <p className="contact-text">Have a project, idea, or just want to say hello?</p>
            <a className="btn btn-primary" href={`mailto:${email}`}>GET IN TOUCH</a>
          </div>
          <div className="contact-right">
            <a className="contact-row" href={`mailto:${email}`}>
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">{email}</span>
            </a>
            <a className="contact-row" href={`tel:${phone}`}>
              <span className="contact-label">PHONE</span>
              <span className="contact-value">{phone}</span>
            </a>
            <div className="contact-socials">
              <span className="contact-label">SOCIALS</span>
              <a className="contact-row" href={social.github} target="_blank" rel="noopener noreferrer">
                <span className="contact-value">GitHub</span>
              </a>
              <a className="contact-row" href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="contact-value">LinkedIn</span>
              </a>
              <a className="contact-row" href={social.instagram} target="_blank" rel="noopener noreferrer">
                <span className="contact-value">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
