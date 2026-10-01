import { portfolioData } from '../data/portfolio'

export default function Intro({ onNavigate }) {
  return (
    <section className="section section-intro" id="intro">
      <div className="intro-grid">
        <div className="intro-text">
          <h1 className="intro-heading">{portfolioData.greeting}</h1>
          <p className="intro-tagline">{portfolioData.tagline}</p>
          <p className="intro-name">{portfolioData.name}</p>
          <p className="intro-bio">{portfolioData.intro}</p>
          <div className="intro-actions">
            <button className="btn btn-primary" onClick={() => onNavigate(2)}>
              EXPLORE MY WORK
            </button>
            <button className="btn btn-ghost" onClick={() => onNavigate(3)}>
              CONTACT ME
            </button>
          </div>
        </div>
        <div className="intro-visual">
          <div className="orb" />
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="square" />
          <span className="sym s1">&lt;/&gt;</span>
          <span className="sym s2">{'{ }'}</span>
          <span className="sym s3">;</span>
          <span className="sym s4">( )</span>
        </div>
      </div>
    </section>
  )
}
