import LeadForm from '../components/LeadForm'

export default function Contact() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="section-label mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Let's talk</h1>
          <p className="text-gray-300 text-lg">We respond to most inquiries within one business day.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-navy-900 text-lg mb-4">Get in touch</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#F5A623" strokeWidth="2"/><path d="M2 8l10 6 10-6" stroke="#F5A623" strokeWidth="2"/></svg>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">info@ranvision.com</p>
                    <p className="text-gray-400 text-xs">General inquiries</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#F5A623" strokeWidth="2"/><path d="M2 8l10 6 10-6" stroke="#F5A623" strokeWidth="2"/></svg>
                  <div>
                    <p className="font-medium text-navy-900 text-sm">dispatch@ranvision.com</p>
                    <p className="text-gray-400 text-xs">Carrier and dispatch</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="9" stroke="#F5A623" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/></svg>
                  <span className="text-gray-600 text-sm">Mon–Fri · 8:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="font-bold text-navy-900 mb-2">Carrier?</h3>
              <p className="text-gray-500 text-sm">Use the form to submit your information and our dispatch team will follow up within one business day.</p>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  )
}
