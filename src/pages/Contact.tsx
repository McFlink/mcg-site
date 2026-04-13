// import type { FormEvent } from 'react'
import './Contact.css'

function Contact() {
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  // }

  return (
    <section className="section">
      <div className="section-header stack">
        <div>
          <p className="eyebrow">Kontakt</p>
          <h2>Berätta om ditt behov</h2>
          <p className="muted">
            Vi återkopplar snabbt med förslag på upplägg, tidplan och bemanning. Ring oss vid akuta
            driftstopp.
          </p>
        </div>
      </div>

      <div className="contact-grid">


        <div className="contact-card info">
          <h3>Kontaktpersoner</h3>
          <div className="contact-people-grid">
            <div className="contact-person">
              <div>
                <p className="eyebrow">Arbetsledare</p>
                <h4>Johan Flink</h4>
              </div>
              <ul className="contact-list">
                <li>
                  <span>Tel</span>
                  <strong>
                    <a href="tel:0707993551">070-799 35 51</a>
                  </strong>
                </li>
                <li>
                  <span>E-post</span>
                  <strong>
                    <a href="mailto:mcg-jf@mcg-master.com">mcg-jf@mcg-master.com</a>
                  </strong>
                </li>
              </ul>
            </div>
            <div className="contact-person">
              <div>
                <p className="eyebrow">VD</p>
                <h4>Johan Kressner</h4>
              </div>
              <ul className="contact-list">
                <li>
                  <span>Tel</span>
                  <strong>
                    <a href="tel:0708105159">070-810 51 59</a>
                  </strong>
                </li>
                <li>
                  <span>E-post</span>
                  <strong>
                    <a href="mailto:mcg-jk@mcg-master.com">mcg-jk@mcg-master.com</a>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="contact-card form">
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
        </div> */}
      </div>
    </section>
  )
}

export default Contact
