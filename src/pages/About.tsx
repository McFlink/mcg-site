function About() {
  return (
    <section className="section">
      <div className="section-header stack">
        <div>
          <p className="eyebrow">Om oss</p>
          <h2>MCG – entreprenad som håller över tid</h2>
          <p className="muted">
            Vi är ett team av arbetsledare, maskinförare och fibertekniker som tror på raka besked
            och ordning på detaljerna. Varje projekt får en ansvarig kontakt och en tydlig plan.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Lagbygge</h3>
          <p>
            Vi arbetar i fasta lag som känner varandra och maskinparken väl. Det ger tempo på plats
            och minskar riskerna.
          </p>
          <ul className="check-list">
            <li>Arbetsledare på plats</li>
            <li>Gemensam planering med beställare</li>
            <li>Enkelt att nå oss under hela projektet</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Kvalitet</h3>
          <p>
            Egenkontroller, mätprotokoll och fotodokumentation. Vi levererar underlag som går direkt
            in i era system.
          </p>
          <ul className="check-list">
            <li>TA-planer och riskanalyser</li>
            <li>OTDR och tryckprovning</li>
            <li>Slutdokumentation redo vid överlämning</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Hållbarhet & säkerhet</h3>
          <p>
            Säkra arbetsplatser och smart logistik. Vi prioriterar återvinning av massor och maskiner
            med låg bränsleförbrukning.
          </p>
          <ul className="check-list">
            <li>Dagliga skyddsronder</li>
            <li>Plan för återställning och miljö</li>
            <li>Uppföljning efter avslutat arbete</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
