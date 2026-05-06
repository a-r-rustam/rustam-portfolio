import { useState } from 'react';
import './Contact.css';
import { personalInfo } from '../data';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // This opens the user's email client with the form data pre-filled.
    // To use a real form backend, replace this with a fetch() call to
    // Formspree, EmailJS, or your own API.
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* Left: info */}
        <div className="contact__info">
          <p className="section-label">GET IN TOUCH</p>
          <h2 className="contact__heading">Let's Work<br />Together</h2>
          <p className="contact__sub">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            Drop me a message — I'd love to hear from you.
          </p>

          <div className="contact__links">
            <a href={`mailto:${personalInfo.email}`} className="contact__link">
              <span className="contact__link-icon">✉</span>
              <span>{personalInfo.email}</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">in</span>
              <span>LinkedIn</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">⌥</span>
              <span>GitHub</span>
            </a>
            <a href={personalInfo.youtube} target="_blank" rel="noreferrer" className="contact__link">
              <span className="contact__link-icon">▶</span>
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Abdul Example"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="contact__submit">
              {sent ? 'Opening mail app...' : 'Send Message →'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}