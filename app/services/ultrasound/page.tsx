import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const ultrasoundServices = [
  'Whole Abdomen',
  'Pelvis',
  'Obstetric Scans',
  'Pregnancy Monitoring',
  'Thyroid Ultrasound',
  'Breast Ultrasound',
  'Scrotal Ultrasound',
  'Soft Tissue Imaging',
  'Musculoskeletal Ultrasound',
  'Guided Procedures',
]

const applications = [
  { title: 'Pregnancy Care', desc: 'Complete obstetric monitoring from early pregnancy to delivery — including 4D baby scans.' },
  { title: 'Abdominal Evaluation', desc: 'Detailed assessment of liver, gallbladder, kidneys, pancreas, spleen and other abdominal organs.' },
  { title: 'Organ Assessment', desc: 'Real-time evaluation of organ size, structure, blood flow and any abnormalities.' },
  { title: 'Soft Tissue Examination', desc: 'High-resolution imaging of muscles, tendons, ligaments and subcutaneous tissues.' },
  { title: 'Thyroid Disorders', desc: 'Precise thyroid gland evaluation including nodule characterization and vascularity assessment.' },
]

const faqs = [
  { q: 'Is ultrasound safe?', a: 'Yes. Ultrasound uses high-frequency sound waves — no radiation at all. It is completely safe for all patients including pregnant women and children.' },
  { q: 'How long does an ultrasound take?', a: 'Most ultrasound scans take 15–30 minutes depending on the type. Obstetric scans may take slightly longer.' },
  { q: 'Do I need to prepare for an ultrasound?', a: 'Preparation depends on the scan type. Abdominal scans usually require 4–6 hours of fasting. Pelvic scans need a full bladder. Our team will guide you when you book.' },
  { q: 'When will I get my report?', a: 'Ultrasound reports are typically ready on the same day and delivered digitally via WhatsApp or email.' },
  { q: 'Can I get a 4D baby scan?', a: 'Yes! We offer 4D ultrasound for obstetric scans. It is recommended between 24–32 weeks of pregnancy for the best images.' },
]

export default function UltrasoundPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
     <section className="relative py-24 px-4 overflow-hidden">
        <img
          src="/Ultrasound.png"
          alt="Ultrasound USG — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Ultrasound Services</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
              Safe and Real-Time<br />
              <span className="text-red-500">Diagnostic Imaging</span>
            </h1>
            <p className="text-white font-bold text-lg leading-relaxed mb-8">
              Ultrasound imaging uses high-frequency sound waves to evaluate organs and soft tissues without radiation exposure — safe for all ages including pregnant women.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book Ultrasound
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
          {['Zero Radiation', 'Same Day Reports', '4D Ultrasound Available', 'Safe in Pregnancy'].map((item) => (
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
            <p className="section-badge mb-4">About Ultrasound</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-red-600">Ultrasound / USG?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Ultrasound (USG) is a safe, radiation-free imaging technique that uses high-frequency sound waves to create real-time images of internal organs, tissues, and blood flow.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              It is one of the most versatile diagnostic tools available — used for evaluating the abdomen, pelvis, thyroid, breast, soft tissues, and monitoring pregnancies.
            </p>
            <p className="text-gray-500 leading-relaxed">
              At Medwin Diagnostics, we use Philips HD ultrasound systems with 4D capability, operated by experienced sonologists for the most accurate results.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Scan Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Equipment', value: 'Philips HD Ultrasound' },
                { label: 'Radiation', value: 'Zero — 100% Safe' },
                { label: 'Capability', value: '2D, 3D & 4D Imaging' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
                { label: 'Report Time', value: 'Same Day' },
                { label: 'Starting Price', value: '₹500 onwards' },
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

      {/* Services List */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Ultrasound <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive ultrasound services covering all diagnostic needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ultrasoundServices.map((service, i) => (
              <div key={service} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm card-hover flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="font-heading font-semibold text-gray-900">{service}</span>
                  <ArrowRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
              <Calendar size={16} /> Book Your Ultrasound
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Clinical Uses</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Clinical <span className="text-red-600">Applications</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, i) => (
              <div key={app.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-5">
                  <span className="font-heading font-bold text-white">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{app.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{app.desc}</p>
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
            Book Your <span className="text-red-500">Ultrasound</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Safe, radiation-free imaging — same day reports delivered on WhatsApp.
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