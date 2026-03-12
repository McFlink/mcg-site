import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

function Services() {
  return (
    <section className="section">
      <div className="section-header stack">
        <div>
          <p className="eyebrow">Tjänster</p>
          <h2>Från första spadtaget till driftsatt nät</h2>
          <p className="muted">
            Vi tar ansvar för hela kedjan: projektering, mark, fiber, bygg och drift. Ett
            sammansvetsat team som levererar på tid och med tydlig uppföljning.
          </p>
        </div>
      </div>

      <div className="grid services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            points={service.points}
          />
        ))}
      </div>

      <div className="process-card">
        <h3>Så jobbar vi</h3>
        <ol className="process-list">
          <li>
            <strong>Planering.</strong> Tydlig tidplan, riskbedömning och TA-planer innan start.
          </li>
          <li>
            <strong>Utförande.</strong> Egna lag med maskinpark, löpande egenkontroller och kontakt med
            beställare.
          </li>
          <li>
            <strong>Driftsättning.</strong> Mätning, dokumentation och överlämning som är redo att laddas
            upp i ert system.
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Services
