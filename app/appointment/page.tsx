'use client'
import { Phone, Clock, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const tests = [
  'MRI Scan', 'CT Scan', 'Ultrasound / USG', 'Colour Doppler',
  'Digital X-Ray', 'Pathology & Blood Tests', 'Echocardiography', 'Mammography', 'Other',
]

// ← Apna WhatsApp number yahan likho (country code ke saath, + nahi)
const WHATSAPP_NUMBER = '7974704670'

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: '', age: '', phone: '', email: '',
    date: '', time: 'Morning (8AM – 12PM)', test: '', notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.date || !form.test) {
      alert('Please fill Name, Phone, Date and Test fields.')
      return
    }

    const message = `
*🏥 New Appointment Request — Medwin Diagnostics*

*Patient Name:* ${form.name}
*Age:* ${form.age || 'Not provided'}
*Phone:* ${form.phone}
*Email:* ${form.email || 'Not provided'}
*Preferred Date:* ${form.date}
*Preferred Time:* ${form.time}
*Test Required:* ${form.test}
*Notes:* ${form.notes || 'None'}
    `.trim()

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
    {/* Hero */}
<section className="relative text-white py-20 px-4 overflow-hidden">
  {/* Background image */}
  <img
    src="/contactimg.png"
    alt="Book Appointment Medwin Diagnostics"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65" />
  {/* Red gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <p className="section-badge justify-center mb-4">Schedule a Visit</p>
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
      Book an <span className="text-red-500">Appointment</span>
    </h1>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Fill the form below or call us directly. We'll confirm your slot within 30 minutes.
    </p>
  </div>
</section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          {/* Form */}
          <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">Patient Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Patient Name *</label>
                <input name="name" type="text" placeholder="Full name" value={form.name} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Age</label>
                <input name="age" type="number" placeholder="Age in years" value={form.age} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Phone Number *</label>
                <input name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Preferred Date *</label>
                <input name="date" type="date" value={form.date} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Preferred Time</label>
                <select name="time" value={form.time} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white text-gray-700">
                  <option>Morning (8AM – 12PM)</option>
                  <option>Afternoon (12PM – 4PM)</option>
                  <option>Evening (4PM – 9PM)</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Test Required *</label>
                <select name="test" value={form.test} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white text-gray-700">
                  <option value="">Select a test</option>
                  {tests.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Doctor's Prescription / Notes</label>
                <textarea name="notes" rows={3} placeholder="Any specific instructions from your doctor..." value={form.notes} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white resize-none" />
              </div>
            </div>

            <button onClick={handleSubmit} className="btn-primary w-full py-4 rounded-lg text-sm mt-8 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.845L.057 23.571a.75.75 0 0 0 .917.916l5.726-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.371l-.36-.214-3.733.958.991-3.62-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Send via WhatsApp
            </button>
            {/* <p className="text-center text-gray-400 text-xs mt-4 font-mono">WhatsApp pe seedha message jayega. Hum 30 min me confirm karenge.</p> */}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
              <Phone size={32} className="mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2">Prefer to Call?</h3>
              <p className="text-red-100 text-sm mb-5">Our team is available 6 days a week to assist you.</p>
              <a href="tel:+916260475501" className="block bg-white text-red-600 font-mono font-bold text-sm py-3 px-6 rounded-lg hover:bg-red-50 transition-colors">
                +91 6260475501
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <Clock size={24} className="text-red-600 mb-4" />
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-4">Working Hours</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Mon – Sat</span><span className="text-gray-900 font-semibold">8AM – 9PM</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Sunday</span><span className="text-gray-900 font-semibold">9AM – 2PM</span>
                </div>
                <div className="flex justify-between text-red-600 font-semibold pt-2 border-t border-gray-200">
                  <span>Emergency</span><span>24 / 7</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-gray-900 text-lg mb-5">Why Choose Us?</h3>
              <ul className="space-y-3">
                {['Reports in 1–4 hours', 'Expert radiologist review', 'Affordable pricing', 'Home sample collection', 'Online report delivery'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

// import { Phone, Clock, CheckCircle } from 'lucide-react'

// const tests = [
//   'MRI Scan', 'CT Scan', 'Ultrasound / USG', 'Colour Doppler',
//   'Digital X-Ray', 'Pathology & Blood Tests', 'Echocardiography', 'Mammography', 'Other',
// ]

// export default function AppointmentPage() {
//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero */}
//       <section className="bg-gray-900 text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="section-badge justify-center mb-4">Schedule a Visit</p>
//           <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//             Book an <span className="text-red-600">Appointment</span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Fill the form below or call us directly. We'll confirm your slot within 30 minutes.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

//           {/* Form */}
//           <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 md:p-10">
//             <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">Patient Details</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Patient Name *</label>
//                 <input type="text" placeholder="Full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Age *</label>
//                 <input type="number" placeholder="Age in years" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Phone Number *</label>
//                 <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Email</label>
//                 <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Preferred Date *</label>
//                 <input type="date" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white" />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Preferred Time</label>
//                 <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white text-gray-700">
//                   <option>Morning (8AM – 12PM)</option>
//                   <option>Afternoon (12PM – 4PM)</option>
//                   <option>Evening (4PM – 9PM)</option>
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Test Required *</label>
//                 <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white text-gray-700">
//                   <option value="">Select a test</option>
//                   {tests.map((t) => <option key={t}>{t}</option>)}
//                 </select>
//               </div>
//               <div className="sm:col-span-2">
//                 <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Doctor's Prescription / Notes</label>
//                 <textarea rows={3} placeholder="Any specific instructions from your doctor..." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors bg-white resize-none" />
//               </div>
//             </div>
//             <button className="btn-primary w-full py-4 rounded-lg text-sm mt-8">
//               Confirm Appointment
//             </button>
//             <p className="text-center text-gray-400 text-xs mt-4 font-mono">We'll call you within 30 minutes to confirm your slot.</p>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Call card */}
//             <div className="bg-red-600 text-white rounded-2xl p-8 text-center">
//               <Phone size={32} className="mx-auto mb-4" />
//               <h3 className="font-heading font-bold text-xl mb-2">Prefer to Call?</h3>
//               <p className="text-red-100 text-sm mb-5">Our team is available 6 days a week to assist you.</p>
//               <a href="tel:+917314567890" className="block bg-white text-red-600 font-mono font-bold text-sm py-3 px-6 rounded-lg hover:bg-red-50 transition-colors">
//                 +91 731 456 7890
//               </a>
//             </div>

//             {/* Hours */}
//             <div className="bg-gray-50 rounded-2xl p-8">
//               <Clock size={24} className="text-red-600 mb-4" />
//               <h3 className="font-heading font-bold text-gray-900 text-lg mb-4">Working Hours</h3>
//               <div className="space-y-3 font-mono text-sm">
//                 <div className="flex justify-between text-gray-700">
//                   <span>Mon – Sat</span><span className="text-gray-900 font-semibold">8AM – 9PM</span>
//                 </div>
//                 <div className="flex justify-between text-gray-700">
//                   <span>Sunday</span><span className="text-gray-900 font-semibold">9AM – 2PM</span>
//                 </div>
//                 <div className="flex justify-between text-red-600 font-semibold pt-2 border-t border-gray-200">
//                   <span>Emergency</span><span>24 / 7</span>
//                 </div>
//               </div>
//             </div>

//             {/* Why us */}
//             <div className="bg-gray-50 rounded-2xl p-8">
//               <h3 className="font-heading font-bold text-gray-900 text-lg mb-5">Why Choose Us?</h3>
//               <ul className="space-y-3">
//                 {[
//                   'Reports in 1–4 hours',
//                   'Expert radiologist review',
//                   'Affordable pricing',
//                   'Home sample collection',
//                   'Online report delivery',
//                 ].map((item) => (
//                   <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
//                     <CheckCircle size={16} className="text-red-600 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   )
// }