import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
                  <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <span className="font-bold text-lg">Ranvision</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reliable freight dispatching and scalable business support solutions for carriers, owner operators, and growing companies. Built today for the BPO of tomorrow.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[
                ['Services', '/services'],
                ['Carrier Onboarding', '/carrier-onboarding'],
                ['Partnership', '/partnership'],
                ['Support', '/support'],
                ['About Us', '/about'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Contact</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/><path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2"/></svg>
                info@ranvision.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/><path d="M4 4l8 8 8-8" stroke="currentColor" strokeWidth="2"/></svg>
                dispatch@ranvision.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Mon–Fri · 8:00 AM – 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© 2026 Ranvision. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
