import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const ctServices = [
  'Brain CT Scan',
  'HRCT Chest',
  'CT Chest',
  'CT Abdomen & Pelvis',
  'CT Neck',
  'CT Spine',
  'CT Sinuses',
  'CT Temporal Bone',
  'CT Angiography',
  'CT Urogram',
  'CT KUB',
  'Contrast Enhanced CT (CECT)',
  'Trauma Imaging',
]

const benefits = [
  { title: 'High-Resolution Images', desc: 'Crystal-clear cross-sectional images for precise anatomical evaluation.' },
  { title: 'Rapid Diagnosis', desc: 'Fast scanning speeds enable quick results — critical in emergency situations.' },
  { title: 'Detailed Anatomical Evaluation', desc: 'Visualize organs, bones, blood vessels and soft tissues in exceptional detail.' },
  { title: 'Improved Treatment Planning', desc: 'Accurate CT findings help physicians plan the most effective treatment.' },
]

const faqs = [
  { q: 'How long does a CT scan take?', a: 'Most CT scans take between 10–30 minutes depending on the type. The actual scanning time is usually just a few minutes.' },
  { q: 'Is CT scan safe?', a: 'CT scans use low-dose X-ray radiation. Our AERB-certified equipment ensures minimum radiation exposure with maximum diagnostic quality.' },
  { q: 'Do I need to prepare for a CT scan?', a: 'Preparation depends on the type of scan. Some scans require fasting for 4–6 hours. Our team will guide you with specific instructions when you book.' },
  { q: 'When will I get my CT report?', a: 'CT scan reports are typically ready within 1–2 hours and delivered digitally via WhatsApp or email.' },
  { q: 'Is contrast required for CT scan?', a: 'Some CT scans require an iodine-based contrast dye for better visualisation of blood vessels and organs. Your doctor will advise if it is needed.' },
]

export default function CTScanPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
  <section className="relative py-24 px-4 overflow-hidden">
        <img
          src="/ctscan.png"
          alt="CT Scan — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">CT Scan Services</p>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-red-900">
              Advanced Computed<br />
              <span className="text-black">Tomography Imaging</span>
            </h1>
            <p className="text-black font-bold text-lg leading-relaxed mb-8">
              Computed Tomography (CT) is an advanced imaging technique that produces detailed cross-sectional images of internal organs, bones, blood vessels, and soft tissues.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book CT Scan
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
          {['128-Slice CT Scanner', 'Reports in 1–2 Hours', 'AERB Certified', 'Starting ₹1,500'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle size={15} /> {item}
            </span>
          ))}
        </div>
      </section>

      {/* About CT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">About CT Scan</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-red-600">CT Scan?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Computed Tomography (CT) is an advanced imaging technique that produces detailed cross-sectional images of internal organs, bones, blood vessels, and soft tissues using X-rays and computer processing.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              CT imaging assists physicians in diagnosing a wide range of medical conditions with speed and precision. It is especially useful in emergency situations where rapid diagnosis is critical.
            </p>
            <p className="text-gray-500 leading-relaxed">
              At Medwin Diagnostics, we use a 128-slice CT scanner — one of the most advanced available — ensuring superior image quality with minimum radiation exposure.
            </p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Our CT Scanner</h3>
            <div className="space-y-5">
              {[
                { label: 'Scanner Type', value: '128-Slice Multi-Detector CT' },
                { label: 'Scan Speed', value: 'Ultra-fast — under 15 seconds' },
                { label: 'Radiation Dose', value: 'Low-dose AERB certified' },
                { label: 'Availability', value: '24/7 including emergencies' },
                { label: 'Report Time', value: '1–2 hours' },
                { label: 'Starting Price', value: '₹1,500 onwards' },
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
              CT Scan <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              We offer a comprehensive range of CT imaging services for all diagnostic needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ctServices.map((service, i) => (
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
              <Calendar size={16} /> Book Your CT Scan
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
              Benefits of <span className="text-red-600">CT Scan</span>
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
            Book Your <span className="text-red-500">CT Scan</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Fast, accurate, and affordable CT scanning — reports ready in 1–2 hours.
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