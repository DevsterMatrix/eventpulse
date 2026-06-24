import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import { eventsData } from '../data/events'

export default function Events() {
  const [events, setEvents] = useState(eventsData)
  const [filteredEvents, setFilteredEvents] = useState(eventsData)
  const [view, setView] = useState('grid')
  
  const [filters, setFilters] = useState({
    categories: [],
    cities: [],
    date: 'any',
    price: 'any',
    format: 'any',
    search: ''
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const applyFilters = (newFilters = filters) => {
    let results = events.filter(event => {
      const catMatch = newFilters.categories.length === 0 || newFilters.categories.includes(event.cat)
      const cityMatch = newFilters.cities.length === 0 || newFilters.cities.includes(event.city)
      const priceMatch = newFilters.price === 'any' || event.priceType === newFilters.price
      const searchMatch = newFilters.search === '' || 
        event.title.toLowerCase().includes(newFilters.search.toLowerCase()) ||
        event.venue.toLowerCase().includes(newFilters.search.toLowerCase())

      return catMatch && cityMatch && priceMatch && searchMatch
    })

    setFilteredEvents(results)
  }

  const handleCategoryChange = (cat) => {
    const newCats = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat]
    
    const newFilters = { ...filters, categories: newCats }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const handleCityChange = (city) => {
    const newCities = filters.cities.includes(city)
      ? filters.cities.filter(c => c !== city)
      : [...filters.cities, city]
    
    const newFilters = { ...filters, cities: newCities }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const handlePriceChange = (price) => {
    const newFilters = { ...filters, price }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const handleDateChange = (date) => {
    const newFilters = { ...filters, date }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const handleSearchChange = (search) => {
    const newFilters = { ...filters, search }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const resetFilters = () => {
    const newFilters = {
      categories: [],
      cities: [],
      date: 'any',
      price: 'any',
      format: 'any',
      search: ''
    }
    setFilters(newFilters)
    applyFilters(newFilters)
  }

  const categories = [
    { value: 'music', label: 'Music & Live Shows', count: 6 },
    { value: 'tech', label: 'Tech & Hackathons', count: 5 },
    { value: 'art', label: 'Art & Culture', count: 4 },
    { value: 'food', label: 'Food & Drink', count: 3 },
    { value: 'sports', label: 'Sports & Fitness', count: 3 },
    { value: 'workshop', label: 'Workshops', count: 3 }
  ]

  const cities = [
    { value: 'bengaluru', label: 'Bengaluru', count: 7 },
    { value: 'mumbai', label: 'Mumbai', count: 6 },
    { value: 'delhi', label: 'Delhi NCR', count: 5 },
    { value: 'hyderabad', label: 'Hyderabad', count: 3 },
    { value: 'pune', label: 'Pune', count: 2 },
    { value: 'goa', label: 'Goa', count: 1 }
  ]

  return (
    <>
      <Navigation />

      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <div className="page-header-inner">
            <div>
              <div className="page-breadcrumb">
                <Link to="/">Home</Link> <span>/</span> All Events
              </div>
              <h1 className="page-title">Events across India</h1>
              <p className="page-sub">Showing <span>{filteredEvents.length}</span> events · Updated just now</p>
            </div>
            <div className="page-header-search">
              <div className="hero-search hero-search--compact">
                <div className="search-box">
                  <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search events, venues..." 
                    value={filters.search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                  />
                </div>
                <button className="btn-cta search-btn">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="browse-layout">
        <div className="container browse-container">

          {/* SIDEBAR */}
          <aside className="sidebar">

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Category</h4>
              <div className="sidebar-checks">
                {categories.map(cat => (
                  <label key={cat.value} className="check-item">
                    <input 
                      type="checkbox" 
                      checked={filters.categories.includes(cat.value)}
                      onChange={() => handleCategoryChange(cat.value)}
                    />
                    <span>{cat.label}</span>
                    <span className="check-count">{cat.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">City</h4>
              <div className="sidebar-checks">
                {cities.map(city => (
                  <label key={city.value} className="check-item">
                    <input 
                      type="checkbox" 
                      checked={filters.cities.includes(city.value)}
                      onChange={() => handleCityChange(city.value)}
                    />
                    <span>{city.label}</span>
                    <span className="check-count">{city.count}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Date</h4>
              <div className="sidebar-radios">
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="date" 
                    value="any"
                    checked={filters.date === 'any'}
                    onChange={() => handleDateChange('any')}
                  />
                  <span>Any date</span>
                </label>
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="date" 
                    value="today"
                    checked={filters.date === 'today'}
                    onChange={() => handleDateChange('today')}
                  />
                  <span>Today</span>
                </label>
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="date" 
                    value="week"
                    checked={filters.date === 'week'}
                    onChange={() => handleDateChange('week')}
                  />
                  <span>This week</span>
                </label>
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="date" 
                    value="month"
                    checked={filters.date === 'month'}
                    onChange={() => handleDateChange('month')}
                  />
                  <span>This month</span>
                </label>
              </div>
            </div>

            <div className="sidebar-section">
              <h4 className="sidebar-heading">Price</h4>
              <div className="sidebar-radios">
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="price" 
                    value="any"
                    checked={filters.price === 'any'}
                    onChange={() => handlePriceChange('any')}
                  />
                  <span>Any price</span>
                </label>
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="price" 
                    value="free"
                    checked={filters.price === 'free'}
                    onChange={() => handlePriceChange('free')}
                  />
                  <span>Free</span>
                </label>
                <label className="radio-item">
                  <input 
                    type="radio" 
                    name="price" 
                    value="paid"
                    checked={filters.price === 'paid'}
                    onChange={() => handlePriceChange('paid')}
                  />
                  <span>Paid</span>
                </label>
              </div>
            </div>

            <button 
              className="sidebar-reset"
              onClick={resetFilters}
            >
              Clear all filters
            </button>
          </aside>

          {/* EVENTS AREA */}
          <div className="events-area">

            {/* TOOLBAR */}
            <div className="events-toolbar">
              <div className="toolbar-tags">
                <span className="toolbar-tag toolbar-tag--active">All Events</span>
              </div>
              <div className="toolbar-right">
                <label className="sort-label">Sort by</label>
                <select className="sort-select">
                  <option value="date">Date: Earliest first</option>
                  <option value="popular">Most popular</option>
                  <option value="price-low">Price: Low to high</option>
                  <option value="price-high">Price: High to low</option>
                </select>
                <div className="view-toggle">
                  <button 
                    className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                    onClick={() => setView('grid')}
                    aria-label="Grid view"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button 
                    className={`view-btn ${view === 'list' ? 'active' : ''}`}
                    onClick={() => setView('list')}
                    aria-label="List view"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* GRID */}
            {filteredEvents.length > 0 ? (
              <div className={`all-events-grid ${view === 'list' ? 'list-view' : ''}`}>
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-inner">
                  <div className="no-results-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <h3>No events found</h3>
                  <p>Try adjusting your filters or search to find what you're looking for.</p>
                  <button className="btn-outline" onClick={resetFilters}>Clear all filters</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
