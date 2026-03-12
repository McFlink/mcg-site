import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="section">
      <div className="section-header stack">
        <div>
          <p className="eyebrow">Projekt</p>
          <h2>Referenser från stad, land och industri</h2>
          <p className="muted">
            Vi är vana vid komplexa miljöer: innerstad med trafikavstängningar, styrd borrning under
            spårtrafik och långa landsbygdssträckor med logistik på små vägar.
          </p>
        </div>
        <Link to="/contact" className="btn ghost">
          Prata projekt
        </Link>
      </div>

      <div className="grid projects-grid">
        {projects.map((project) => (
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
  )
}

export default Projects
