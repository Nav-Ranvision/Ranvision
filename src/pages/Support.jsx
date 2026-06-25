const supportItems = [
  {
    title: 'Check calls and updates',
    desc: 'We handle pickup, in-transit, and delivery check calls with brokers so your drivers can stay focused on the road.',
  },
  {
    title: 'Broker communication',
    desc: 'Rate negotiations, appointment changes, detention, layover, and TONU claims — handled by our team on your behalf.',
  },
  {
    title: 'Paperwork and documents',
    desc: 'Setup packets, COIs, rate cons, BOLs, and factoring submissions kept organized and submitted on time.',
  },
  {
    title: 'Problem resolution',
    desc: 'Breakdowns, missed appointments, weather delays, claims — we coordinate with brokers, shippers, and receivers to keep loads on track.',
  },
]

export default function Support() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="section-label mb-3">Carrier Support</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Support that stays with you after onboarding</h1>
          <p className="text-gray-300 text-lg">Once you're on board, our dispatch team works alongside your drivers every day.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {supportItems.map(s => (
              <div key={s.title} className="card">
                <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="card max-w-2xl">
            <h3 className="font-bold text-navy-900 text-lg mb-4">Reach our team</h3>
            <p className="text-gray-500 text-sm mb-6">For general questions or dispatch issues, email us — we respond to most inquiries within one business day.</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#F5A623" strokeWidth="2"/><path d="M2 8l10 6 10-6" stroke="#F5A623" strokeWidth="2"/></svg>
                <div>
                  <p className="font-medium text-navy-900">info@ranvision.com</p>
                  <p className="text-gray-400 text-xs">General inquiries</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" stroke="#F5A623" strokeWidth="2"/><path d="M2 8l10 6 10-6" stroke="#F5A623" strokeWidth="2"/></svg>
                <div>
                  <p className="font-medium text-navy-900">dispatch@ranvision.com</p>
                  <p className="text-gray-400 text-xs">Active carrier and dispatch support</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#F5A623" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="#F5A623" strokeWidth="2" strokeLinecap="round"/></svg>
                <span>Mon–Fri · 8:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
