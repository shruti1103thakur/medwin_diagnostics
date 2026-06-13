'use client'
import { useState } from 'react'
import { FileText, Shield, Clock, Share2, CheckCircle, Lock, Smartphone } from 'lucide-react'

const WHATSAPP_NUMBER = '916260475501'

const benefits = [
  { icon: Clock, title: 'Faster Report Access', desc: 'Get your reports within 2–4 hours of your test, delivered directly to your phone.' },
  { icon: Shield, title: 'Secure Digital Records', desc: 'Your health data is encrypted and stored securely. Only you can access your reports.' },
  { icon: Share2, title: 'Easy Doctor Sharing', desc: 'Share reports instantly with your doctor via WhatsApp, email, or a secure link.' },
  { icon: Clock, title: 'Reduced Waiting Time', desc: 'No more waiting at the centre. Collect reports from the comfort of your home.' },
]

const steps = [
  { num: '01', title: 'Complete Your Test', desc: 'Visit Medwin Diagnostics and complete your prescribed diagnostic test.' },
  { num: '02', title: 'Submit Request Below', desc: 'Fill the form with your name, mobile number and Patient ID.' },
  { num: '03', title: 'We Receive Your Request', desc: 'Our team gets your request on WhatsApp instantly.' },
  { num: '04', title: 'Report Sent to You', desc: 'We send your report PDF directly on WhatsApp within minutes.' },
]

export default function ReportsPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    patientId: '',
    date: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert('Please enter your Name and Mobile Number.')
      return
    }

    const message = `
*📋 Report Request — Medwin Diagnostics*

*Patient Name:* ${form.name}
*Mobile Number:* ${form.phone}
*Patient ID / Report No:* ${form.patientId || 'Not provided'}
*Date of Test:* ${form.date || 'Not provided'}

_Please send my diagnostic report on this WhatsApp number. Thank you._
    `.trim()

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      {/* <section className="relative text-white py-24 px-4 overflow-hidden">
        <img
          src="/reportsimg.png"
          alt="Online Reports Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Online Reports</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Convenient Access to Your<br />
            <span className="text-red-500">Health Information</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Our secure digital reporting system enables patients to access diagnostic reports anytime and anywhere.
          </p>
        </div>
      </section> */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img
          src="/reportsimg.png"
          alt="Online Reports Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Online Reports</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Convenient Access to Your<br />
            <span className="text-red-500">Health Information</span>
          </h1>
          <p className="text-black font-bold text-lg max-w-2xl mx-auto">
            .
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-red-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 text-white text-sm font-mono tracking-wide">
          {['Faster Report Access', 'Secure Digital Records', 'Easy Doctor Sharing', 'Reduced Waiting Time'].map((b) => (
            <span key={b} className="flex items-center gap-2">
              <CheckCircle size={15} /> {b}
            </span>
          ))}
        </div>
      </section>

      {/* Report Request Form */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-badge justify-center mb-4">Get Your Report</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Request Report on <span className="text-red-600">WhatsApp</span>
            </h2>
            <p className="text-gray-500 mt-3">
              Fill the form below — your request will be sent to us on WhatsApp and we'll share your report instantly.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
            <div className="space-y-5">
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Patient Name *</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Mobile Number *</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Patient ID / Report Number</label>
                <input
                  name="patientId"
                  type="text"
                  placeholder="e.g. MDW-2024-00123"
                  value={form.patientId}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Date of Test</label>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="btn-primary w-full py-4 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.845L.057 23.571a.75.75 0 0 0 .917.916l5.726-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.371l-.36-.214-3.733.958.991-3.62-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                Request Report via WhatsApp
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400 font-mono">
              <Lock size={13} />
              Your data is secure and only shared with Medwin Diagnostics
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Need help?{' '}
            <a href="tel:+916260475501" className="text-red-600 font-semibold hover:underline">
              Call +91 6260475501
            </a>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Simple Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              How It <span className="text-red-600">Works</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-xl mx-auto mb-5">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why Digital Reports</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Benefits of <span className="text-red-600">Online Reports</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
                  <b.icon size={24} className="text-red-600" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Smartphone size={48} className="text-red-500 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
            Get Reports on <span className="text-red-500">WhatsApp</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            Save our number and receive your diagnostic reports directly on WhatsApp — fast, secure, and paperless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
              <a href="https://wa.me/916260475501"
              target="_blank"
              className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.528 5.845L.057 23.571a.75.75 0 0 0 .917.916l5.726-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.371l-.36-.214-3.733.958.991-3.62-.234-.373A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm inline-flex items-center justify-center gap-2">
              Call +91 6260475501
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}