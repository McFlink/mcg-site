import type { FormEvent } from 'react'

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className="section">
      <div className="section-header stack">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Berätta om ditt behov</h2>
          <p className="muted">
            Vi återkopplar snabbt med förslag på upplägg, tidplan och bemanning. Ring oss vid akuta
            driftstopp – jouren är alltid igång.
          </p>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card info">
          <h3>Ring eller mejla</h3>
          <ul className="contact-list">
            <li>
              <span>Telefon</span>
              <strong>010-123 45 67</strong>
            </li>
            <li>
              <span>E-post</span>
              <strong>info@mcg.se</strong>
            </li>
            <li>
              <span>Adress</span>
              <strong>Industrigatan 12, 123 45 Stockholm</strong>
            </li>
          </ul>
          <div className="pill-rows">
            <span className="pill">Jour 24/7</span>
            <span className="pill">Arbetar i hela Sverige</span>
            <span className="pill">Entreprenad & service</span>
          </div>
        </div>

        <div className="contact-card form">
          <h3>Skicka en förfrågan</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Namn
              <input type="text" name="name" placeholder="Ditt namn" required />
            </label>
            <label>
              Företag
              <input type="text" name="company" placeholder="Företag eller organisation" />
            </label>
            <label>
              E-post
              <input type="email" name="email" placeholder="namn@foretag.se" required />
            </label>
            <label>
              Telefon
              <input type="tel" name="phone" placeholder="070-000 00 00" />
            </label>
            <label>
              Beskrivning
              <textarea
                name="message"
                rows={4}
                placeholder="Kort beskrivning av projektet eller problemet"
                required
              ></textarea>
            </label>
            <button type="submit" className="btn primary">
              Skicka förfrågan
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
