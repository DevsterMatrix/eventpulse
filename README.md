# Event Pulse — React Frontend

A modern React-based event discovery and booking platform for India. Built with React, React Router, and Vite.

## Features

- **Homepage**: Hero section, category browsing, upcoming events, how it works guide, editor's picks, and organizer info
- **Events Browse**: Advanced filtering by category, city, date, and price
- **Responsive Design**: Mobile-first approach with beautiful design
- **Event Management**: Save events, register, and view event details
- **View Toggle**: Grid and list view options

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx   # Top navigation bar
│   ├── Footer.jsx       # Footer component
│   └── EventCard.jsx    # Event card component
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   └── Events.jsx       # Events browse page
├── data/                # Static data
│   └── events.js        # Events data array
├── styles/              # CSS stylesheets
│   ├── main.css         # Global and homepage styles
│   └── events.css       # Events page specific styles
├── App.jsx              # Main app with routing
└── main.jsx             # React entry point
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables and Grid/Flexbox

## Features Breakdown

### Navigation
- Sticky navigation with scroll detection
- Links to home and events pages
- Sign in and Get Started CTAs

### Homepage Sections
1. **Hero** - Search, trending tags, featured events
2. **Trust Stats** - Platform statistics
3. **Categories** - 5 event categories with visual cards
4. **Events Listing** - Featured and upcoming events
5. **How It Works** - 3-step process explanation
6. **Editor's Picks** - Curated event selections
7. **For Organizers** - Event creation features

### Events Page
- **Sidebar Filters**:
  - Categories (music, tech, art, food, sports, workshops)
  - Cities (Bengaluru, Mumbai, Delhi, Hyderabad, Pune, Goa)
  - Date filters (today, this week, this month)
  - Price filters (any, free, paid)
  
- **Event Display**:
  - Grid/List view toggle
  - Sort options (date, popularity, price)
  - Save event functionality
  - Register for event
  - 24 sample events with realistic data

## Styling

The design uses:
- **Color Scheme**: Warm earth tones (cream, amber, ink)
- **Typography**: Cormorant Garamond (display), Outfit (body), DM Mono (mono)
- **Responsive**: Mobile-first design with breakpoints at 768px and 1024px

## State Management

Using React hooks (useState) for:
- Navigation scroll state
- Event filtering and search
- View toggle (grid/list)
- Event save/register states

## Future Enhancements

- Backend API integration
- User authentication
- Event creation dashboard
- Real event data from database
- Advanced analytics
- Payment integration
- Email notifications

## License

© 2025 EventPulse. All rights reserved.
