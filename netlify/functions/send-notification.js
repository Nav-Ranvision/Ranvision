exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { statusCode: 500, body: 'Missing RESEND_API_KEY' }
  }

  let data
  try {
    data = JSON.parse(event.body)
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' }
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0D1B2E; padding: 24px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #F5A623; margin: 0; font-size: 20px;">New Carrier Lead</h1>
        <p style="color: #94a3b8; margin: 4px 0 0; font-size: 14px;">Ranvision Dispatch — New Submission</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${[
            ['Full Name', data.full_name],
            ['Company', data.company_name],
            ['Phone', data.phone],
            ['Email', data.email],
            ['MC Number', data.mc_number],
            ['Trucks', data.truck_count],
            ['Primary Lanes', data.primary_lanes],
            ['Equipment', data.equipment_type],
          ].map(([label, value]) => `
            <tr>
              <td style="padding: 8px 12px; font-size: 13px; font-weight: 600; color: #374151; background: #fff; border: 1px solid #e5e7eb; width: 35%;">${label}</td>
              <td style="padding: 8px 12px; font-size: 13px; color: #374151; background: #fff; border: 1px solid #e5e7eb;">${value || '—'}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    </div>
  `

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'notifications@ranvision.com',
        to: ['nav@ranvision.com'],
        subject: `New Carrier Lead — ${data.company_name || data.full_name}`,
        html,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      return { statusCode: 500, body: `Resend error: ${body}` }
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    return { statusCode: 500, body: err.message }
  }
}
