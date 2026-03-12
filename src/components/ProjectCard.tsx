type ProjectCardProps = {
  title: string
  location: string
  image: string
  summary: string
  tags?: string[]
  year?: string
}

function ProjectCard({ title, location, image, summary, tags, year }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="project-meta">
          <span>{location}</span>
          {year ? <span>{year}</span> : null}
        </div>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{summary}</p>
        {tags && tags.length > 0 ? (
          <ul className="pill-list">
            {tags.map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
