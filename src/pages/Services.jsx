import { Link } from 'react-router-dom'

const services = [
  { title: 'Freight Dispatching', desc: 'End-to-end load booking, rate confirmations, and check calls so your trucks stay loaded and moving.' },
  { title: 'Carrier Management', desc: 'Setup packets, broker onboarding, COIs, and document management — handled for you.' },
  { title: 'Load Planning', desc: 'Weekly load plans built around your equipment, hours, and home time.' },
  { title: 'Route Optimization', desc: 'Eliminate deadhead and maximize revenue per mile across the lanes you run.' },
  { title: 'Broker Negotiation', desc: 'Aggressive, professional rate negotiation on every load — we don\'t take the first offer.' },
  { title: 'Administrative Support', desc: 'Invoicing, factoring coordination, paperwork, and back-office cleanup.' },
  { title: 'Logistics Support', desc: 'Coordination across shippers, receivers and carriers to keep freight moving smoothly.' },
]

const bpo = [
  { title: 'Customer Support Outsourcing', desc: '24/7 inbound and outbound customer service teams.' },
  { title: 'Virtual Assistants', desc: 'Trained VAs for executive, sales, and operations support.' },
  { title: 'Back Office Operations', desc: 'Document processing, reporting, and operational support.' },
  { title: 'Appointment Setting', desc: 'Qualified appointments booked directly to your calendar.' },
  { title: 'Data Entry', desc: 'Accurate, scalable data entry and processing.' },
  { title: 'Remote Staffing', desc: 'Dedicated remote talent for any business function.' },
]

export default function Services() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="section-label mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Dispatch, logistics support, and the BPO future.
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Comprehensive freight dispatch services today, with a roadmap to deliver complete business process outsourcing for the companies you're building.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="card hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="#F5A623" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="bg-navy-900 text-white text-xs px-3 py-1 rounded-full">Expanding BPO Solutions</span>
            <h2 className="text-3xl font-bold text-navy-900 mt-4 mb-3">Coming next from Ranvision</h2>
            <p className="text-gray-500">We're building a full Business Process Outsourcing suite — the same reliability and partnership you'd expect, scaled across more of your operation.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bpo.map(s => (
              <div key={s.title} className="card opacity-75">
                <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="#F5A623" strokeWidth="2"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-bg py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Let's build the right plan for your operation</h2>
        <p className="text-gray-300 mb-8">Tell us about your trucks, lanes, and goals — we'll show you how we can help.</p>
        <Link to="/carrier-onboarding" className="btn-primary">Get Started →</Link>
      </section>
    </main>
  )
}
