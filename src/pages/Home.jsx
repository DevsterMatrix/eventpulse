import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import { eventsData } from '../data/events'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const featuredEvent = eventsData[0]
  const homeEvents = eventsData.slice(0, 5)

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            India's events platform for curious people
          </div>
          <h1 className="hero-heading">
            Find events<br />
            <em>worth your time.</em>
          </h1>
          <p className="hero-sub">Discover concerts, hackathons, cultural festivals, and workshops across India. Book your spot in seconds — and never miss what matters.</p>

          <div className="hero-search">
            <div className="search-box">
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <input type="text" placeholder="Search events, venues, artists..." />
            </div>
            <div className="search-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>Bengaluru</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
            </div>
            <button className="btn-cta search-btn">Search</button>
          </div>

          <div className="hero-tags">
            <span className="tag-label">Trending:</span>
            <Link to="/events" className="tag">Hackathons</Link>
            <Link to="/events" className="tag">Sunburn Festival</Link>
            <Link to="/events" className="tag">Startup Summits</Link>
            <Link to="/events" className="tag">Cultural Fests</Link>
            <Link to="/events" className="tag">Comedy Shows</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hcard hcard-back">
              <div className="hcard-img hcard-img-2"></div>
              <div className="hcard-body">
                <span className="hcard-cat">Music</span>
                <div className="hcard-title">Nucleya Live — Bass Yatra Tour</div>
                <div className="hcard-meta">Sat, Dec 14 · Jawaharlal Nehru Stadium</div>
              </div>
            </div>
            <div className="hcard hcard-front">
              <div className="hcard-img hcard-img-1"></div>
              <div className="hcard-body">
                <span className="hcard-cat">Conference</span>
                <div className="hcard-title">India Design Summit 2025</div>
                <div className="hcard-meta">Mon, Dec 2 · BIEC, Bengaluru</div>
                <div className="hcard-footer">
                  <div className="hcard-avatars">
                    <div className="av av-1"></div>
                    <div className="av av-2"></div>
                    <div className="av av-3"></div>
                  </div>
                  <span className="hcard-going">+680 going</span>
                  <button className="hcard-btn">Register</button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-pill hero-pill-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" /></svg>
            Doors open at 6:30 PM
          </div>
          <div className="hero-pill hero-pill-2">
            <div className="pill-dot"></div>
            12 spots left
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-stat"><strong>50,000+</strong> Events hosted</div>
          <div className="trust-div"></div>
          <div className="trust-stat"><strong>12 Lakh+</strong> Attendees registered</div>
          <div className="trust-div"></div>
          <div className="trust-stat"><strong>120+</strong> Cities across India</div>
          <div className="trust-div"></div>
          <div className="trust-stat"><strong>4.9 / 5</strong> Organizer satisfaction</div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-eyebrow">Browse by category</div>
              <h2 className="section-title">What are you<br /><em>in the mood for?</em></h2>
            </div>
          </div>

          <div className="cat-grid">
            <div className="cat-card cat-card--large cat-music">
              <div className="cat-overlay"></div>
              <div className="cat-content">
                <div className="cat-count">1,240 events</div>
                <h3 className="cat-name">Music &<br />Live Shows</h3>
                <Link to="/events" className="cat-link">Explore →</Link>
              </div>
            </div>
            <div className="cat-card cat-art">
              <div className="cat-overlay"></div>
              <div className="cat-content">
                <div className="cat-count">340 events</div>
                <h3 className="cat-name">Art &<br />Culture</h3>
                <Link to="/events" className="cat-link">Explore →</Link>
              </div>
            </div>
            <div className="cat-card cat-tech">
              <div className="cat-overlay"></div>
              <div className="cat-content">
                <div className="cat-count">820 events</div>
                <h3 className="cat-name">Tech &<br />Hackathons</h3>
                <Link to="/events" className="cat-link">Explore →</Link>
              </div>
            </div>
            <div className="cat-card cat-food">
              <div className="cat-overlay"></div>
              <div className="cat-content">
                <div className="cat-count">215 events</div>
                <h3 className="cat-name">Food &<br />Drink</h3>
                <Link to="/events" className="cat-link">Explore →</Link>
              </div>
            </div>
            <div className="cat-card cat-sports">
              <div className="cat-overlay"></div>
              <div className="cat-content">
                <div className="cat-count">490 events</div>
                <h3 className="cat-name">Sports &<br />Fitness</h3>
                <Link to="/events" className="cat-link">Explore →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS LISTING */}
      <section className="section section-events" id="events">
        <div className="container">
          <div className="section-head section-head--between">
            <div>
              <div className="section-eyebrow">Happening soon</div>
              <h2 className="section-title">Upcoming<br /><em>Events Near You</em></h2>
            </div>
          </div>

          <div className="events-grid">
            {homeEvents.map(event => (
              <EventCard key={event.id} event={event} featured={event.id === 1} />
            ))}
          </div>

          <div className="events-cta">
            <Link to="/events" className="btn-outline">View all events</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section-how" id="how">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Simple process</div>
            <h2 className="section-title">Three steps to<br /><em>your next experience</em></h2>
          </div>

          <div className="how-grid">
            <div className="how-step">
              <div className="how-num">01</div>
              <div className="how-body">
                <h3>Discover events</h3>
                <p>Browse thousands of events across India by category, city, and date. Filter to exactly what you love — from college fests to national hackathons.</p>
              </div>
            </div>
            <div className="how-connector"></div>
            <div className="how-step">
              <div className="how-num">02</div>
              <div className="how-body">
                <h3>Claim your spot</h3>
                <p>Register in seconds with your EventPulse account. Secure your seat instantly — no waiting, no paper forms, no friction.</p>
              </div>
            </div>
            <div className="how-connector"></div>
            <div className="how-step">
              <div className="how-num">03</div>
              <div className="how-body">
                <h3>Show up & enjoy</h3>
                <p>Get your confirmation and QR pass straight to your inbox. Walk in, scan, and focus on what matters — the experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITOR'S PICKS */}
      <section className="section section-editorial">
        <div className="container">
          <div className="section-head">
            <div className="section-eyebrow">Editor's picks</div>
            <h2 className="section-title">Don't miss<br /><em>these this season</em></h2>
          </div>
          <div className="editorial-grid">
            <div className="ed-primary">
              <div className="ed-primary-img"></div>
              <div className="ed-primary-body">
                <span className="ed-cat">Music</span>
                <h3 className="ed-primary-title">Sunburn Arena — Bengaluru Edition ft. Martin Garrix</h3>
                <p className="ed-primary-desc">The biggest electronic music festival in Asia returns to Bengaluru. Three nights, five stages, and a lineup that has sold out every edition since 2019.</p>
                <div className="ed-primary-details">
                  <div className="ed-detail">
                    <span className="ed-detail-label">Date</span>
                    <span>Dec 27–29, 2025</span>
                  </div>
                  <div className="ed-detail">
                    <span className="ed-detail-label">Venue</span>
                    <span>Palace Grounds, Bengaluru</span>
                  </div>
                  <div className="ed-detail">
                    <span className="ed-detail-label">From</span>
                    <span>₹2,999</span>
                  </div>
                </div>
                <a href="#" className="btn-cta">Reserve Your Spot</a>
              </div>
            </div>
            <div className="ed-secondary-list">
              <div className="ed-item">
                <div className="ed-item-img ed-item-img-1"></div>
                <div className="ed-item-body">
                  <span className="ed-cat ed-cat--sm">Food & Drink</span>
                  <h4>Delhi Street Food Festival — Republic Day Special</h4>
                  <div className="ed-item-meta">Jan 26 · ₹349</div>
                </div>
              </div>
              <div className="ed-item">
                <div className="ed-item-img ed-item-img-2"></div>
                <div className="ed-item-body">
                  <span className="ed-cat ed-cat--sm">Tech</span>
                  <h4>Nasscom Product Conclave 2025 — Bengaluru</h4>
                  <div className="ed-item-meta">Jan 15 · Free</div>
                </div>
              </div>
              <div className="ed-item">
                <div className="ed-item-img ed-item-img-3"></div>
                <div className="ed-item-body">
                  <span className="ed-cat ed-cat--sm">Art</span>
                  <h4>Serendipity Arts Festival — Panaji, Goa</h4>
                  <div className="ed-item-meta">Dec 15–22 · ₹499</div>
                </div>
              </div>
              <div className="ed-item">
                <div className="ed-item-img ed-item-img-4"></div>
                <div className="ed-item-body">
                  <span className="ed-cat ed-cat--sm">Wellness</span>
                  <h4>International Yoga Day Retreat — Rishikesh</h4>
                  <div className="ed-item-meta">Every weekend · ₹799</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR ORGANIZERS */}
      <section className="section section-organizers" id="organizers">
        <div className="organizers-inner">
          <div className="org-text">
            <div className="section-eyebrow section-eyebrow--light">For event organizers</div>
            <h2 className="org-title">Host events<br /><em>at any scale.</em></h2>
            <p className="org-desc">Create your event in minutes. Set capacity, manage registrations, and reach lakhs of people across India who are looking for exactly what you're offering.</p>
            <ul className="org-features">
              <li>
                <div className="org-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <div>
                  <strong>Event creation in minutes</strong>
                  <p>Set date, venue, capacity, and pricing. Publish instantly or schedule ahead.</p>
                </div>
              </li>
              <li>
                <div className="org-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div>
                  <strong>Attendee management</strong>
                  <p>Track registrations, export lists, and communicate with your audience in one place.</p>
                </div>
              </li>
              <li>
                <div className="org-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                </div>
                <div>
                  <strong>Real-time analytics</strong>
                  <p>Live dashboard showing registrations, demographics, and revenue as they happen.</p>
                </div>
              </li>
              <li>
                <div className="org-feat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                  <strong>Secure & reliable</strong>
                  <p>Role-based access for your team. Your event data is always safe and private.</p>
                </div>
              </li>
            </ul>
            <div className="org-cta">
              <a href="#" className="btn-cta btn-cta--light">Start hosting free</a>
              <a href="#" className="org-link">See pricing →</a>
            </div>
          </div>
          <div className="org-visual">
            <div className="org-dashboard">
              <div className="dash-top">
                <span className="dash-label">Your Events</span>
                <span className="dash-tab active">Active</span>
                <span className="dash-tab">Draft</span>
              </div>
              <div className="dash-event-row">
                <div className="dash-dot dash-dot--live"></div>
                <div className="dash-event-info">
                  <div className="dash-event-name">Sunburn Arena Bengaluru</div>
                  <div className="dash-event-date">Tonight · 6:00 PM</div>
                </div>
                <div className="dash-event-stat">
                  <div className="dash-pill dash-pill--full">Full</div>
                </div>
              </div>
              <div className="dash-event-row">
                <div className="dash-dot"></div>
                <div className="dash-event-info">
                  <div className="dash-event-name">India Design Summit</div>
                  <div className="dash-event-date">Dec 2 · 9:00 AM</div>
                </div>
                <div className="dash-event-stat">
                  <div className="dash-reg">680 / 1000</div>
                </div>
              </div>
              <div className="dash-event-row">
                <div className="dash-dot"></div>
                <div className="dash-event-info">
                  <div className="dash-event-name">Mumbai Food Festival</div>
                  <div className="dash-event-date">Dec 8 · 12:00 PM</div>
                </div>
                <div className="dash-event-stat">
                  <div className="dash-reg">210 / 500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
