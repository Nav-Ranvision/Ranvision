import { useState } from 'react'
import { supabase } from '../lib/supabase'

const equipmentOptions = [
  'Dry Van',
  'Reefer',
  'Flatbed',
  'Step Deck',
  'Box Truck',
  'Power Only',
  'Hotshot',
  'Other',
]

export default function LeadForm() {
  const [form, setForm] = useState({
    full_name: '',
    company_name: '',
    phone: '',
    email: '',
    mc_number: '',
    truck_count: '',
    primary_lanes: '',
    equipment_type: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ ...form, created_at: new Date().toISOString() }])

      if (dbError) throw new Error(dbError.message)

      // Send email notification via Netlify function
      try {
        await fetch('/.netlify/functions/send-notification', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
      } catch (_) {
        // Email failure is non-blocking — lead is already saved
      }

      setStatus('success')
      setForm({
        full_name: '', company_name: '', phone: '', email: '',
        mc_number: '', truck_count: '', primary_lanes: '', equipment_type: '',
      })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message || 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">Request received</h3>
        <p className="text-gray-500 text-sm">Our dispatch team will reach out within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text" name="full_name" required value={form.full_name} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Name <span className="text-red-500">*</span></label>
          <input
            type="text" name="company_name" required value={form.company_name} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="tel" name="phone" required value={form.phone} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
          <input
            type="email" name="email" required value={form.email} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">MC Number <span className="text-red-500">*</span></label>
          <input
            type="text" name="mc_number" required value={form.mc_number} onChange={handleChange}
            placeholder="MC-"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Number of Trucks <span className="text-red-500">*</span></label>
          <input
            type="number" name="truck_count" required min="1" value={form.truck_count} onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Lanes / States You Run <span className="text-red-500">*</span></label>
        <input
          type="text" name="primary_lanes" required value={form.primary_lanes} onChange={handleChange}
          placeholder="e.g. Texas to California"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Equipment Type <span className="text-red-500">*</span></label>
        <select
          name="equipment_type" required value={form.equipment_type} onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange bg-white"
        >
          <option value="">Select equipment...</option>
          {equipmentOptions.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center py-3 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Request Dispatch Support →'}
      </button>
      <p className="text-xs text-gray-400 text-center">We respond to most inquiries within 24 hours.</p>
    </form>
  )
}
