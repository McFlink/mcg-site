import { Link } from 'react-router-dom'

type HeroProps = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaTo: string
  secondaryLabel?: string
  secondaryTo?: string
  backgroundImage: string
}

function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaTo,
  secondaryLabel,
  secondaryTo,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage:
          `linear-gradient(105deg, rgba(8, 25, 46, 0.72) 0%, rgba(8, 25, 46, 0.35) 52%, rgba(8, 25, 46, 0.1) 100%), url(${backgroundImage})`,
      }}
    >
      <div className="container hero-content">
        <p className="eyebrow">MCG Infrastruktur & Entreprenad</p>
        <h1>{title}</h1>
        <p className="lead">{subtitle}</p>
        <div className="hero-actions">
          <Link to={ctaTo} className="btn primary">
            {ctaLabel}
          </Link>
          {secondaryLabel && secondaryTo ? (
            <Link to={secondaryTo} className="btn ghost">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
        <div className="hero-badges">
          <span>Fiber, schakt & bygg</span>
          <span>Projektledning från start till drift</span>
          <span>Nationell räckvidd</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
