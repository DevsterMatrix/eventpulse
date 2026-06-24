import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <div className="footer-logo">
            <div className="logo-mark"><div className="logo-dot"></div></div>
            EventPulse
          </div>
          <p>India's modern platform for discovering and hosting events that matter.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
        </div>
        <div className="footer-nav-cols">
          <div className="footer-col"><h5>Discover</h5><Link to="/events">Browse Events</Link><a href="#">Categories</a><a href="#">Near Me</a><a href="#">Online Events</a></div>
          <div className="footer-col"><h5>Organizers</h5><a href="#">Create an Event</a><a href="#">Pricing</a><a href="#">Dashboard</a><a href="#">Help Center</a></div>
          <div className="footer-col"><h5>Company</h5><a href="#">About Us</a><a href="#">Blog</a><a href="#">Careers</a><a href="#">Contact</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 EventPulse. All rights reserved.</span>
      </div>
    </footer>
  )
}
