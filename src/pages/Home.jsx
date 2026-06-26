import { Link } from 'react-router-dom'
import LeadForm from '../components/LeadForm'

const features = [
  { icon: '📦', title: 'Dedicated Support', desc: "A dedicated dispatch team that knows your equipment, lanes, and goals — with coverage that doesn't stop when one person steps out." },
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
      <section
        className="dot-pattern text-white py-24 px-4"
        style={{
          backgroundColor: '#0D1B2E',
          backgroundImage: 'linear-gradient(135deg, rgba(13,27,46,0.92) 0%, rgba(18,32,53,0.88) 60%, rgba(26,46,72,0.92) 100%), url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-4">Trusted Dispatch and Business Support</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6" style={{color: '#ffffff'}}>
              Reliable Freight Dispatching{' '}
              <span style={{color: '#F5A623'}}>&</span>{' '}
              Business Support Solutions
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{color: '#cbd5e1'}}>
              We help carriers, owner operators, and growing businesses streamline operations, increase efficiency, and focus on growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/carrier-onboarding" className="btn-primary">Get Started →</Link>
              <Link to="/partnership" className="btn-outline">Request Partnership</Link>
            </div>
            <div className="flex gap-8 mt-10">
              {[['Fast', 'Response Times'], ['100%', 'Carrier Focused'], ['Dedicated', 'Dispatch Team']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-bold" style={{color: '#ffffff'}}>{val}</p>
                  <p className="text-xs" style={{color: '#94a3b8'}}>{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              alt="Dispatch operations center"
              className="w-full h-72 object-cover rounded-2xl"
              style={{border: '1px solid rgba(255,255,255,0.1)'}}
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-2">Why Choose Us</p>
            <h2 className="text-3xl font-bold" style={{color: '#0D1B2E'}}>Built around your operation</h2>
            <p className="mt-3" style={{color: '#6b7280'}}>Operational excellence for Carriers today, scalable BPO support for the businesses you'll build tomorrow.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="card" style={{transition: 'box-shadow 0.2s'}}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2" style={{color: '#0D1B2E'}}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: '#6b7280'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4" style={{backgroundColor: '#f9fafb'}}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-label mb-2">Services</p>
              <h2 className="text-3xl font-bold" style={{color: '#0D1B2E'}}>Dispatching today.<br />Full BPO support tomorrow.</h2>
            </div>
            <Link to="/services" style={{color: '#F5A623'}} className="text-sm font-medium hidden md:block">View all services →</Link>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{color: '#9ca3af'}}>Current Services</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {currentServices.map(s => (
                <div key={s} className="bg-white border rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2" style={{borderColor: '#f3f4f6', color: '#0D1B2E'}}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F5A623'}}></span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8" style={{backgroundColor: '#0D1B2E'}}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-xs px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(255,255,255,0.1)'}}>Coming Soon</span>
              <span className="text-white font-semibold">Expanding BPO Solutions</span>
            </div>
            <p className="text-sm mb-6" style={{color: '#94a3b8'}}>Ranvision is building toward a complete Business Process Outsourcing suite — same brand, same trust, more capability.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {bpoServices.map(s => (
                <div key={s} className="rounded-lg px-4 py-3 text-sm flex items-center gap-2" style={{backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1'}}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor: 'rgba(245,166,35,0.5)'}}></span>
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
            <h2 className="text-3xl font-bold" style={{color: '#0D1B2E'}}>Onboarding in four simple steps</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.num}>
                <p className="text-4xl font-extrabold mb-4" style={{color: '#F5A623'}}>{s.num}</p>
                <h3 className="font-semibold mb-2" style={{color: '#0D1B2E'}}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{color: '#6b7280'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="get-started" className="py-20 px-4" style={{backgroundColor: '#f9fafb'}}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label mb-2">Get Started in Minutes</p>
            <h2 className="text-3xl font-bold" style={{color: '#0D1B2E'}}>Tell us about your operation</h2>
            <p className="mt-3" style={{color: '#6b7280'}}>Share a few details and our dispatch team will reach out within 24 hours.</p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16 px-4 text-center text-white" style={{backgroundColor: '#0D1B2E'}}>
        <h2 className="text-3xl font-bold mb-3">Ready to Grow Your Business?</h2>
        <p className="mb-8" style={{color: '#94a3b8'}}>Partner with a team that treats your operation like their own.</p>
        <Link to="/support" className="btn-primary">Request Support →</Link>
      </section>
    </main>
  )
}
