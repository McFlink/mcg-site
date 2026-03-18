type ServiceCardProps = {
  title: string
  description: string
  points?: string[]
}

import mcgLetter from '../assets/images/MCG-letter.png'

function ServiceCard({ title, description, points }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-icon">
        <img src={mcgLetter} alt="MCG" />
      </div>
      <div className="service-body">
        <h3>{title}</h3>
        <p>{description}</p>
        {points && points.length > 0 ? (
          <ul className="pill-list">
            {points.map((item) => (
              <li key={item} className="pill">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default ServiceCard
