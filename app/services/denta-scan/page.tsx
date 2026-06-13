import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const applications = [
  'Dental Implant Planning',
  'Wisdom Tooth Assessment',
  'Impacted Tooth Evaluation',
  'Orthodontic Planning',
  'Jaw Bone Analysis',
  'TM Joint Evaluation',
  'Facial Trauma Assessment',
  'Oral Surgical Planning',
]

const benefits = [
  { title: '3D Visualization', desc: 'Complete three-dimensional views of teeth, jawbones and facial structures for precise evaluation.' },
  { title: 'Enhanced Treatment Accuracy', desc: 'Detailed imaging enables dentists and surgeons to plan treatments with exceptional precision.' },
  { title: 'Better Surgical Outcomes', desc: 'Pre-surgical 3D planning reduces complications and improves the success rate of procedures.' },
  { title: 'Quick & Non-Invasive', desc: 'Fast, comfortable scanning with no pain or injections — results ready in minimal time.' },
]

const faqs = [
  { q: 'What is a Denta Scan?', a: 'Denta Scan is a specialized CT imaging technique that creates detailed 3D images of teeth, jawbones, and surrounding facial structures — far more detailed than conventional dental X-rays.' },
  { q: 'How long does a Denta Scan take?', a: 'The scanning process takes only a few minutes. The entire appointment including preparation is usually under 30 minutes.' },
  { q: 'Is Denta Scan safe?', a: 'Yes. Denta Scan uses low-dose radiation and is completely safe. Our AERB-certified equipment ensures minimum exposure while delivering maximum image quality.' },
  { q: 'Who needs a Denta Scan?', a: 'Patients planning dental implants, those with impacted or wisdom teeth, orthodontic cases, jaw joint problems, or anyone requiring oral surgery typically need a Denta Scan.' },
  { q: 'When will I get my report?', a: 'Reports are typically ready within 1–2 hours and delivered digitally via WhatsApp or email.' },
]

export default function DentaScanPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
   <section className="relative py-24 px-4 overflow-hidden">
        <img
          src="/denta.png"
          alt="Denta Scan — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Dental CT Imaging</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Advanced Dental<br />
              <span className="text-red-500">CT Imaging</span>
            </h1>
            <p className="text-black font-bold text-lg leading-relaxed mb-8">
              Denta Scan is a specialized dental imaging <br/> technique  that provides highly <br/>detailed three-dimensional views of <br/> the teeth, jawbones, and facial structures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book Denta Scan
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
          {['3D Dental Imaging', 'Reports in 1–2 Hours', 'AERB Certified', 'Non-Invasive Procedure'].map((item) => (
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
            <p className="section-badge mb-4">About Denta Scan</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is a <span className="text-red-600">Denta Scan?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Denta Scan is a specialized dental imaging technique that provides highly detailed three-dimensional views of the teeth, jawbones, and facial structures using advanced CT technology.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              It plays a critical role in treatment planning for dental implants, orthodontics, oral surgery, and maxillofacial procedures — giving your dentist or oral surgeon the precise information they need.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Unlike conventional dental X-rays, Denta Scan provides a complete 3D view — eliminating guesswork and enabling highly accurate, predictable treatment outcomes.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Scan Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Imaging Type', value: '3D Cone Beam CT (CBCT)' },
                { label: 'Scan Duration', value: 'Under 5 minutes' },
                { label: 'Radiation', value: 'Low-dose, AERB certified' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
                { label: 'Report Time', value: '1–2 hours' },
                { label: 'Referred By', value: 'Dentist / Oral Surgeon' },
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

      {/* Applications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Clinical Uses</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Denta Scan <span className="text-red-600">Applications</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Denta Scan is used across a wide range of dental and maxillofacial conditions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {applications.map((app, i) => (
              <div key={app} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm card-hover flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="font-heading font-semibold text-gray-900 text-sm">{app}</span>
                  <ArrowRight size={14} className="text-red-600 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
              <Calendar size={16} /> Book Your Denta Scan
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
              Benefits of <span className="text-red-600">Denta Scan</span>
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
            Book Your <span className="text-red-500">Denta Scan</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Precise 3D dental imaging for better treatment planning — reports ready in 1–2 hours.
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