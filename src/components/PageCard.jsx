import { forwardRef } from 'react'

/**
 * A full-height scrollable section of the portfolio.
 * Content spans the full width; the navbar highlights
 * the section currently in view.
 */
const PageCard = forwardRef(function PageCard({ page, children }, ref) {
  return (
    <section
      ref={ref}
      className="page-section"
      aria-label={`Page ${page.number} — ${page.label}`}
    >
      <div className="section-content">
        <header className="page-card-header">
          <span className="page-number">{page.number}</span>
          <span className="page-label">/ {page.label}</span>
        </header>
        {children}
      </div>
    </section>
  )
})

export default PageCard
