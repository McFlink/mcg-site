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
            Vi jobbar i små, sammansvetsade lag som vet hur vi vill ha det på arbetsplatsen.
            Det gör att jobbet flyter på och blir rätt gjort från början.
          </p>
          <ul className="check-list">
            <li>Samma kontaktperson genom hela jobbet</li>
            <li>Snabba beslut ute på plats</li>
            <li>Enkelt att få tag på oss</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Utförande</h3>
         <p>
            Vi gör jobbet ordentligt och lämnar efter oss snyggt. Oavsett om det är fiber,
            schakt eller markarbete så ska det funka – och se bra ut.
          </p>
          <ul className="check-list">
            <li>Rent och snyggt efter avslutat arbete</li>
            <li>Vi håller det vi lovar</li>
            <li>Erfarenhet från både små och stora jobb</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Flexibilitet</h3>
          <p>
            Alla jobb ser olika ut. Vi anpassar oss efter förutsättningarna och löser det
            som dyker upp längs vägen.
          </p>
          <ul className="check-list">
            <li>Snabba ryck när det behövs</li>
            <li>Fungerar både för privatpersoner och företag</li>
            <li>Kan hoppa in i pågående projekt</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
