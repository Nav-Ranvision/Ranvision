import { Link } from 'react-router-dom'

const pillars = [
  { title: 'Aligned incentives', desc: 'We earn when you move. Our job is to keep your trucks loaded with profitable freight.' },
  { title: 'Transparent terms', desc: 'No hidden fees, no long lock-in. Every detail is reviewed during onboarding.' },
  { title: 'Team-based coverage', desc: 'You work with a dispatch team, not a single point of failure — so coverage continues even on off days.' },
  { title: 'Competitive dispatch fees', desc: 'Straightforward, market-competitive percentages, discussed openly during onboarding.' },
]

const weBring = [
  'A dedicated dispatch team that books and negotiates loads on your behalf',
  'Broker setup, credit checks, and rate confirmation handling',
  'Daily check calls, rate negotiation, and route planning',
  'Document management, factoring coordination, and paperwork support',
]

const youBring = [
  'Active MC and DOT authority in good standing',
  'Current insurance certificates (auto liability and cargo)',
  'Reliable equipment and qualified drivers',
  'Clear communication on availability, home time, and lane preferences',
]

export default function Partnership() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="section-label mb-3">Partner With Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">A partnership built on results</h1>
          <p className="text-gray-300 text-lg">What working with Ranvision looks like for owner operators and trucking companies.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pillars.map(p => (
              <div key={p.title} className="card">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#F5A623" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="card">
              <h3 className="font-bold text-navy-900 text-lg mb-4">What we bring</h3>
              <ul className="space-y-3">
                {weBring.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy-900 text-lg mb-4">What you bring</h3>
              <ul className="space-y-3">
                {youBring.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center border border-gray-100 rounded-2xl p-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-navy-900 mb-3">Fee structure, simply explained</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Ranvision works on a competitive, transparent dispatch fee — a small percentage of each booked load. The exact rate depends on your equipment, lanes, and the scope of support you need. We walk through it openly during onboarding so there are never any surprises.
            </p>
            <Link to="/carrier-onboarding" className="btn-primary">Start Onboarding →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
