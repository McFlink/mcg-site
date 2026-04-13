import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import splashLogo from '../assets/images/MCG-letter.png'
import { projects } from '../data/projects'
import { services } from '../data/services'

const splashStorageKey = 'homeSplashSeen'
const splashHoldMs = 1800
const splashExitMs = 700

function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.sessionStorage.getItem(splashStorageKey) !== 'true'
  })
  const [isSplashExiting, setIsSplashExiting] = useState(false)
  const featuredServices = services.slice(0, 4)
  const featuredProjects = projects.slice(0, 3)

  useEffect(() => {
    if (!isSplashVisible) {
      return
    }

    setIsSplashExiting(false)

    const exitTimer = window.setTimeout(() => {
      setIsSplashExiting(true)
    }, splashHoldMs)

    return () => {
      window.clearTimeout(exitTimer)
    }
  }, [isSplashVisible])

  useEffect(() => {
    if (!isSplashVisible || !isSplashExiting) {
      return
    }

    const hideTimer = window.setTimeout(() => {
      setIsSplashVisible(false)
      window.sessionStorage.setItem(splashStorageKey, 'true')
    }, splashExitMs)

    return () => {
      window.clearTimeout(hideTimer)
    }
  }, [isSplashVisible, isSplashExiting])

  return (
    <>
      {isSplashVisible ? (
        <div className={`home-splash ${isSplashExiting ? 'is-exiting' : ''}`}>
          <img src={splashLogo} alt="MCG logotyp" className="home-splash-logo" />
        </div>
      ) : null}

      <Hero
        title="MCG – fiber, mark och entreprenad"
        subtitle="Vi bygger robust infrastruktur: från projektering och schakt till fiberblåsning, bygg och driftsättning. Ett team, ett ansvar."
        ctaLabel="Kontakta oss"
        ctaTo="/contact"
        secondaryLabel="Se våra projekt"
        secondaryTo="/projects"
        backgroundImage="https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=2000&q=80"
      />

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Tjänster</p>
            <h2>Specialister på mark, fiber och bygg</h2>
            <p className="muted">
              Helhetsleverantör med fokus på säkerhet, tempo och tydlig dokumentation.
            </p>
          </div>
          <Link to="/services" className="link-arrow">
            Alla tjänster
          </Link>
        </div>
        <div className="grid services-grid">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              points={service.points}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="eyebrow">Projekt</p>
            <h2>Projekt som tål granskning</h2>
            <p className="muted">
              Referenser från innerstad, landsbygd och industri.
            </p>
          </div>
          <Link to="/projects" className="link-arrow">
            Se fler projekt
          </Link>
        </div>
        <div className="grid projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              summary={project.summary}
              image={project.image}
              tags={project.tags}
              year={project.year}
            />
          ))}
        </div>
      </section>

      <section className="section section-split">
        <div className="split-text">
          <p className="eyebrow">Om MCG</p>
          <h2>Drivna lagspelare med fötterna i leran</h2>
          <p className="muted">
            Vi är ett svenskt entreprenadbolag som gillar raka besked och tydliga
            tidplaner. Vår projektledning håller ihop teknik, myndighetskrav och
            logistik, och ser till att marken lämnas snyggare än när vi kom.
          </p>
          <ul className="check-list">
            <li>Certifierade maskinförare och fibertekniker</li>
            <li>Egna arbetsledare och tydliga kontaktvägar</li>
            <li>Dokumentation redo för beställarens system</li>
          </ul>
        </div>
        <div className="split-card">
          <div className="stat-card">
            <div className="stat-value">15+</div>
            <div className="stat-label">års samlad erfarenhet</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Kvalitet</div>
            <div className="stat-label">genom hela arbetet</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1 partner</div>
            <div className="stat-label">för hela kedjan</div>
          </div>
        </div>
      </section>

      <section className="section cta-panel">
        <div className="cta-inner">
          <div>
            <p className="eyebrow">Redo att starta?</p>
            <h2>Kontakta MCG om ditt nästa projekt</h2>
            <p className="muted">
              Vi återkopplar snabbt med förslag på upplägg, tidplan och resurser.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn primary">
              Kontakta oss
            </Link>
            <Link to="/services" className="btn ghost">
              Våra leveranser
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
