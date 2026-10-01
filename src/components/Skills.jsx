import { portfolioData } from '../data/portfolio'

export default function Skills() {
  const groups = [
    { title: 'WEB DEVELOPMENT', items: portfolioData.skills.web },
    { title: 'PROGRAMMING', items: portfolioData.skills.programming },
    { title: 'TOOLS', items: portfolioData.skills.tools },
  ]
  let n = 0
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <h2 className="heading">WHAT I WORK WITH</h2>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3 className="skill-group-title">{g.title}</h3>
              <div className="skill-list">
                {g.items.map((s) => {
                  n += 1
                  return (
                    <div className="skill-card" key={s}>
                      <span className="skill-num">{String(n).padStart(2, '0')}</span>
                      <span className="skill-name">{s}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
