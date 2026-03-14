import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-mark">MCG</div>
          <p>
            Robust partner för fiber, schakt och bygg i hela Sverige. Vi kombinerar
            ingenjörskunskap med praktisk erfarenhet för projekt som håller.
          </p>
        </div>
        <div className="footer-block">
          <h4>Kontakt</h4>
          <ul>
            <li>Telefon: 010-123 45 67</li>
            <li>E-post: info@mcg.se</li>
            <li>Adress: Bergsgårdsvägen 6, 667 34 Forshaga</li>
          </ul>
        </div>
        <div className="footer-block">
          <h4>Snabblänkar</h4>
          <ul>
            <li>
              <Link to="/services">Tjänster</Link>
            </li>
            <li>
              <Link to="/projects">Projekt</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <h4>Öppettider</h4>
          <ul>
            <li>Vardagar 07.00–16.00</li>
            <li>Jour vid driftstopp</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {year} MCG Master Construct Group AB</span>
        <span>Org.nr 559325-0037</span>
      </div>
    </footer>
  )
}

export default Footer
