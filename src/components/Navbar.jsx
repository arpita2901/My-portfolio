export default function Navbar({ pages, active, onSelect }) {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">AA</span>
        <span className="brand-name">ARPITA ACHARYA</span>
      </div>
      <nav>
        <ul className="nav-links">
          {pages.map((page, i) => (
            <li key={page.id}>
              <button
                className={`nav-link${i === active ? ' active' : ''}`}
                onClick={() => onSelect(i)}
              >
                <span className="nav-num">{page.number}</span>
                <span className="nav-label">{page.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-counter">
        <span className="current">{pages[active].number}</span>
        <span> / {String(pages.length).padStart(2, '0')}</span>
      </div>
    </header>
  )
}
