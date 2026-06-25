const values = [
  { title: 'Integrity', desc: 'Honest communication and ethical operations in every interaction.' },
  { title: 'Reliability', desc: 'Consistent execution carriers and partners can count on.' },
  { title: 'Efficiency', desc: 'Smarter systems and processes that move your business forward.' },
  { title: 'Growth', desc: 'Scalable support that grows alongside your operation.' },
  { title: 'Partnership', desc: 'We win when our carriers and clients win.' },
]

export default function About() {
  return (
    <main>
      <section className="hero-bg dot-pattern text-white py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-2xl">
          <p className="section-label mb-3">About Ranvision</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            A logistics support partner — and a future-ready BPO.
          </h1>
          <p className="text-gray-300 text-lg">We exist to make trucking and growing businesses run more smoothly, more profitably, and with less friction.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="card">
              <p className="section-label mb-3">Our Mission</p>
              <p className="text-navy-900 text-lg font-medium leading-relaxed">
                Helping transportation companies and businesses operate more efficiently through reliable support services.
              </p>
            </div>
            <div className="card">
              <p className="section-label mb-3">Our Vision</p>
              <p className="text-navy-900 text-lg font-medium leading-relaxed">
                To become a trusted global BPO and logistics support partner.
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Our Values</h2>
            <p className="text-gray-500">The principles guiding every dispatch, every conversation, every partnership.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(v => (
              <div key={v.title} className="card">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6z" stroke="#F5A623" strokeWidth="2" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
