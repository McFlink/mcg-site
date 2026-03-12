type ServiceCardProps = {
  title: string
  description: string
  points?: string[]
}

function ServiceCard({ title, description, points }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-icon">MCG</div>
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
