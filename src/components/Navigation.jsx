import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <div className="logo-mark"><div className="logo-dot"></div></div>
            EventPulse
          </Link>
          <ul className="nav-links">
            <li><Link to="/events">Browse Events</Link></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#organizers">For Organizers</a></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="nav-link-plain">Sign In</a>
            <a href="#" className="btn-cta">Get Started</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <ul className="mobile-menu-links">
              <li><Link to="/events" onClick={closeMobileMenu}>Browse Events</Link></li>
              <li><a href="#categories" onClick={closeMobileMenu}>Categories</a></li>
              <li><a href="#how" onClick={closeMobileMenu}>How It Works</a></li>
              <li><a href="#organizers" onClick={closeMobileMenu}>For Organizers</a></li>
              <li className="mobile-menu-divider"></li>
              <li><a href="#" onClick={closeMobileMenu}>Sign In</a></li>
              <li><a href="#" className="btn-cta" onClick={closeMobileMenu}>Get Started</a></li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
