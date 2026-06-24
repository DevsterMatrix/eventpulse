import { useState } from 'react'

export default function EventCard({ event, featured = false }) {
  const [saved, setSaved] = useState(false)
  const [registered, setRegistered] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(!saved)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setRegistered(true)
    setTimeout(() => setRegistered(false), 2200)
  }

  return (
    <article className={`ev-card ${featured ? 'ev-card--featured' : ''}`}>
      <div className={`ev-img ev-img-${event.imageId}`}>
        {event.badge && (
          <span className={`ev-badge ev-badge--${event.badge.type}`}>
            {event.badge.text}
          </span>
        )}
        <button 
          className={`ev-save ${saved ? 'saved' : ''}`}
          onClick={handleSave}
          aria-label="Save event"
          style={{
            color: saved ? '#8b3a3a' : ''
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? '#8b3a3a' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
      <div className="ev-body">
        <div className="ev-meta-row">
          <span className={`ev-cat ${event.categoryClass || ''}`}>{event.category}</span>
          <span className="ev-date">{event.date}</span>
        </div>
        <h3 className="ev-title">{event.title}</h3>
        <div className="ev-venue">{event.venue}</div>
        <div className="ev-footer">
          <div className="ev-price">{event.price}</div>
          <button 
            className="ev-register-btn"
            onClick={handleRegister}
            style={{
              background: registered ? '#2d6a4f' : ''
            }}
          >
            {registered ? 'Registered!' : 'Register'}
          </button>
        </div>
      </div>
    </article>
  )
}
