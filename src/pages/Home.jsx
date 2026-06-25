import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'

const features = [
  { icon: '📦', title: 'Dedicated Support', desc: 'A dedicated dispatch team that knows your equipment, lanes, and goals — with coverage that doesn\'t stop when one person steps out.' },
  { icon: '💬', title: 'Rate Negotiation', desc: 'We negotiate hard on every load so you keep more of what you haul.' },
  { icon: '🗺️', title: 'Route Optimization', desc: 'Smart load planning that reduces deadhead and maximizes weekly revenue.' },
  { icon: '📞', title: 'Broker Communication', desc: 'We handle the calls, check-calls, and paperwork so you can stay focused.' },
  { icon: '🗂️', title: 'Administrative Assistance', desc: 'Setup packets, COIs, invoicing support, and document management.' },
  { icon: '📈', title: 'Scalable Solutions', desc: 'From 1 truck to a full fleet — our support grows with your operation.' },
]

const currentServices = [
  'Freight Dispatching', 'Carrier Setup Assistance', 'Broker Communication',
  'Load Planning', 'Route Optimization', 'Factoring Assistance', 'Administrative Support',
]

const bpoServices = [
  'Customer Support Outsourcing', 'Virtual Assistants', 'Back Office Operations',
  'Appointment Setting', 'Data Entry', 'Remote Staffing',
]

const steps = [
  { num: '01', title: 'Submit Your Information', desc: 'Tell us about your operation through our quick onboarding form.' },
  { num: '02', title: 'We Review Your Needs', desc: 'Our team evaluates your equipment, lanes, and goals.' },
  { num: '03', title: 'We Contact You', desc: 'A member of our dispatch team reaches out to sign on the partnership.' },
  { num: '04', title: 'We Start Supporting Your Business', desc: 'Our team gets to work — booking loads and handling the details.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-bg dot-pattern text-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">Trusted Dispatch and Business Support</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Reliable Freight Dispatching{' '}
              <span className="text-brand-orange">&</span>{' '}
              Business Support Solutions
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We help carriers, owner operators, and growing businesses streamline operations, increase efficiency, and focus on growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/carrier-onboarding" className="btn-primary">Get Started →</Link>
              <Link to="/partnership" className="btn-outline">Request Partnership</Link>
            </div>
            <div className="flex gap-8 mt-10">
              {[['Fast', 'Response Times'], ['100%', 'Carrier Focused'], ['Dedicated', 'Dispatch Team']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-bold text-white">{val}</p>
                  <p className="text-gray-400 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full h-72 bg-navy-800/60 rounded-2xl border border-white/10 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" opacity="0.4">
                <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                <circle cx="5.5" cy="18.5" r="2.5" stroke="white" strokeWidth="1.5"/>
                <circle cx="18.5" cy="18.5" r="2.5" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-navy-900">Built around your operation</h2>
            <p className="text-gray-500 mt-3">Operational excellence for Carriers today, scalable BPO support for the businesses you'll build tomorrow.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="card hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-navy-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-label mb-2">Services</p>
              <h2 className="text-3xl font-bold text-navy-900">Dispatching today.<br />Full BPO support tomorrow.</h2>
            </div>
            <Link to="/services" className="text-brand-orange text-sm font-medium hover:underline hidden md:block">View all services →</Link>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Current Services</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {currentServices.map(s => (
                <div key={s} className="bg-white border border-gray-100 rounded-lg px-4 py-3 text-sm font-medium text-navy-900 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange rounded-full flex-shrink-0"></span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-900 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">Coming Soon</span>
              <span className="text-white font-semibold">Expanding BPO Solutions</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Ranvision is building toward a complete Business Process Outsourcing suite — same brand, same trust, more capability.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {bpoServices.map(s => (
                <div key={s} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-orange/50 rounded-full flex-shrink-0"></span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-navy-900">Onboarding in four simple steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num}>
                <p className="text-4xl font-extrabold text-brand-orange mb-4">{s.num}</p>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="get-started" className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Get Started in Minutes</p>
            <h2 className="text-3xl font-bold text-navy-900">Tell us about your operation</h2>
            <p className="text-gray-500 mt-3">Share a few details and our dispatch team will reach out within 24 hours.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* CTA banner */}
      <section className="hero-bg py-16 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Ready to Grow Your Business?</h2>
        <p className="text-gray-300 mb-8">Partner with a team that treats your operation like their own.</p>
        <Link to="/support" className="btn-primary">Request Support →</Link>
      </section>
    </main>
  )
}
