import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const dopplerStudies = [
  { label: 'Arterial Doppler', desc: 'Evaluates blood flow through arteries to detect blockages or narrowing.' },
  { label: 'Venous Doppler', desc: 'Assesses venous return and detects deep vein thrombosis (DVT).' },
  { label: 'Carotid Doppler', desc: 'Examines carotid arteries for plaque buildup and stroke risk assessment.' },
  { label: 'Renal Doppler', desc: 'Evaluates blood flow to the kidneys for hypertension and renal artery stenosis.' },
  { label: 'Peripheral Vascular Doppler', desc: 'Assesses circulation in arms and legs for peripheral artery disease.' },
  { label: 'Obstetric Doppler', desc: 'Monitors fetal blood flow and placental circulation during pregnancy.' },
]

const benefits = [
  { title: 'Blood Flow Assessment', desc: 'Real-time visualization of blood movement through arteries and veins with precise flow measurements.' },
  { title: 'Early Disease Detection', desc: 'Identifies vascular conditions at early stages before symptoms become severe or dangerous.' },
  { title: 'Non-Invasive Procedure', desc: 'Completely painless with no radiation — uses safe ultrasound waves for accurate imaging.' },
  { title: 'Real-Time Evaluation', desc: 'Provides live, dynamic imaging allowing immediate assessment of vascular health and function.' },
]

const faqs = [
  { q: 'What is a Colour Doppler?', a: 'Colour Doppler is an advanced ultrasound technique that uses sound waves to visualize blood flow within arteries and veins. It maps the direction and speed of blood circulation using color coding — helping detect blockages, clots, and vascular abnormalities.' },
  { q: 'Is Colour Doppler safe?', a: 'Yes. Colour Doppler uses ultrasound waves and involves no radiation whatsoever. It is completely safe for all patients including pregnant women.' },
  { q: 'How long does the procedure take?', a: 'Depending on the study type, a Doppler examination typically takes 20–40 minutes. No special preparation is usually required.' },
  { q: 'Who needs a Colour Doppler?', a: 'Patients with swollen legs, varicose veins, suspected DVT, high blood pressure, stroke risk, kidney issues, or monitoring fetal health during pregnancy may need a Doppler study.' },
  { q: 'When will I get my report?', a: 'Reports are typically ready within 1–2 hours and delivered digitally via WhatsApp and email.' },
]

export default function ColourDopplerPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden">
        <img
          src="/color.png"
          alt="Colour Doppler — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Vascular Imaging</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Advanced Vascular<br />
              <span className="text-red-500">Imaging</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Color Doppler evaluates blood circulation and vascular health by visualizing blood flow within arteries and veins using advanced ultrasound technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book Doppler Study
              </Link>
              <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="bg-red-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white text-sm font-mono tracking-wide">
          {['No Radiation', 'Reports in 1–2 Hours', 'Expert Radiologists', 'Non-Invasive Procedure'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle size={15} /> {item}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">About Colour Doppler</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-red-600">Colour Doppler?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Colour Doppler is an advanced ultrasound technique that uses the Doppler effect to visualize and measure blood flow through arteries and veins. It color-codes the direction and velocity of blood movement for clear, real-time evaluation.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              It is widely used to diagnose conditions such as deep vein thrombosis, arterial blockages, carotid artery disease, renal artery stenosis, and to monitor placental blood flow during pregnancy.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Unlike X-rays or CT scans, Colour Doppler involves no radiation — making it completely safe for repeated use and for all patient groups including pregnant women.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Procedure Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Imaging Type', value: 'Ultrasound + Doppler' },
                { label: 'Radiation', value: 'None — completely safe' },
                { label: 'Duration', value: '20–40 minutes' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
                { label: 'Report Time', value: '1–2 hours' },
                { label: 'Preparation', value: 'Usually none required' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{item.label}</span>
                  <span className="font-semibold text-white text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doppler Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Types of Studies</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Doppler <span className="text-red-600">Studies</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We offer a comprehensive range of Doppler studies for complete vascular evaluation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dopplerStudies.map((study, i) => (
              <div key={study.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    {study.label}
                    <ArrowRight size={12} className="text-red-500" />
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{study.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
              <Calendar size={16} /> Book Your Doppler Study
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Advantages</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Benefits of <span className="text-red-600">Colour Doppler</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading font-bold text-white text-lg">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">FAQs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Common <span className="text-red-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">Q</span>
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Book Your <span className="text-red-500">Doppler Study</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Expert vascular imaging with precise reports — ready in 1–2 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm">
              Book Appointment
            </Link>
            <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm">
              Call +91 6260475501
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}