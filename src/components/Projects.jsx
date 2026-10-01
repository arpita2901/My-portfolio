import { portfolioData } from '../data/portfolio'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <h2 className="heading">THINGS I'VE BUILT</h2>
        <div className="projects-list">
          {portfolioData.projects.map((p, i) => (
            <div className="project-card" key={p.title}>
              <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tech">
                  {p.technologies.map((t) => (
                    <span className="tech-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a className="project-link-main" href={p.link} target="_blank" rel="noopener noreferrer">
                  <span>VIEW PROJECT</span>
                  <span className="arrow">→</span>
                </a>
                <a className="project-link-code" href={p.code} target="_blank" rel="noopener noreferrer">
                  <span className="code-icon">&lt;/&gt;</span>
                  <span>CODE</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
