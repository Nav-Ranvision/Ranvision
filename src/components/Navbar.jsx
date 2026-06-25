import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Carrier Onboarding', to: '/carrier-onboarding' },
  { label: 'Partnership', to: '/partnership' },
  { label: 'Support', to: '/support' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
                <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <span className="font-bold text-navy-900 text-lg">Ranvision</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === l.to
                    ? 'text-navy-900 bg-gray-100'
                    : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/carrier-onboarding" className="ml-3 btn-primary text-sm py-2">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600"
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              {open
                ? <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md ${
                pathname === l.to ? 'bg-gray-100 text-navy-900' : 'text-gray-600'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/carrier-onboarding"
            onClick={() => setOpen(false)}
            className="block btn-primary text-sm py-2 mt-2 justify-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
