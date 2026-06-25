import LeadForm from '../components/LeadForm'

export default function CarrierOnboarding() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3">Get Started</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Carrier Onboarding</h1>
          <p className="text-gray-300 text-lg">Tell us about your company and our dispatch team will contact you.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">What you'll get</h2>
            <ul className="space-y-4 mb-8">
              {[
                'Dedicated dispatch team that learns your operation',
                'Aggressive rate negotiation on every load',
                'Carrier setup with brokers and shippers',
                'Document management and paperwork support',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <p className="font-semibold text-navy-900 mb-2">After you submit</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your submission is delivered to our dispatch team instantly. A team member will follow up within one business day.
              </p>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  )
}
