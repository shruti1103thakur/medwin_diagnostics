import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const services = [
  { label: 'Chest X-Ray', desc: 'Lungs, heart size, rib cage and thoracic structures evaluation.' },
  { label: 'Spine X-Ray', desc: 'Cervical, thoracic and lumbar spine alignment and disc assessment.' },
  { label: 'Joint X-Ray', desc: 'Shoulder, knee, hip, ankle and wrist joint imaging.' },
  { label: 'Trauma Imaging', desc: 'Rapid imaging for fractures and injuries in emergency cases.' },
  { label: 'Orthopedic Imaging', desc: 'Bone density, deformity assessment and post-surgical evaluation.' },
  { label: 'Contrast Studies', desc: 'Specialized contrast-enhanced X-rays for gastrointestinal and urinary studies.' },
]

const advantages = [
  { title: 'Quick Imaging', desc: 'Results available in minutes — no waiting for film development or processing delays.' },
  { title: 'High Image Quality', desc: 'Superior resolution digital images with enhanced contrast for accurate diagnosis.' },
  { title: 'Digital Storage', desc: 'All images stored securely and instantly shareable with your doctor via WhatsApp or email.' },
  { title: 'Faster Reporting', desc: 'Expert radiologist reports delivered within 30–60 minutes of the scan.' },
]

const faqs = [
  { q: 'What is Digital X-Ray?', a: 'Digital X-Ray uses electronic sensors instead of traditional photographic film to capture images. It produces higher quality images instantly, with significantly lower radiation exposure compared to conventional X-rays.' },
  { q: 'Is Digital X-Ray safe?', a: 'Yes. Digital X-Ray uses very low doses of radiation and is considered safe. The radiation dose is up to 80% lower than conventional film X-rays. Our equipment is AERB certified for maximum safety.' },
  { q: 'How long does it take?', a: 'The actual X-ray takes only a few seconds. The entire process including positioning and image review is completed in under 10 minutes.' },
  { q: 'Do I need any preparation?', a: 'Most X-rays require no special preparation. For abdominal or contrast studies, your doctor will give specific instructions. You may be asked to remove jewellery or metal objects from the area being imaged.' },
  { q: 'When will I get my report?', a: 'Digital X-Ray reports are typically ready within 30–60 minutes and delivered via WhatsApp and email.' },
]

export default function DigitalXRayPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
    <section className="relative py-24 px-4 overflow-hidden min-h-[480px] flex items-center">
        <img
          src="/digital.png"
          alt="Digital X-Ray — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Diagnostic Imaging</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Fast and Accurate<br />
              <span className="text-red-500">Digital X-Ray</span>
            </h1>
            <p className="text-white font-bold text-lg leading-relaxed mb-8">
              Digital X-Ray provides superior image quality with faster processing and improved workflow efficiency — results in minutes, not hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book X-Ray
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
          {['Results in Minutes', 'Low Radiation Dose', 'AERB Certified', 'Digital Reports'].map((item) => (
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
            <p className="section-badge mb-4">About Digital X-Ray</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-red-600">Digital X-Ray?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Digital X-Ray replaces traditional photographic film with electronic sensors to capture highly detailed images of bones and internal structures. Images are available instantly on screen with far greater clarity.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Compared to conventional X-rays, digital technology offers up to 80% lower radiation exposure, sharper images with adjustable contrast, and instant digital delivery to your doctor.
            </p>
            <p className="text-gray-500 leading-relaxed">
              At Medwin Diagnostics, our digital X-ray suite is equipped with the latest flat-panel detector technology — ensuring crisp, diagnostic-grade images every time.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Procedure Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Technology', value: 'Flat-Panel Digital Detector' },
                { label: 'Scan Duration', value: 'Under 10 minutes' },
                { label: 'Radiation', value: 'Up to 80% lower dose' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
                { label: 'Report Time', value: '30–60 minutes' },
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

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">What We Cover</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Services <span className="text-red-600">Include</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive digital X-ray services covering all major body systems and clinical requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={s.label} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm card-hover flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 text-sm mb-1 flex items-center gap-2">
                    {s.label}
                    <ArrowRight size={12} className="text-red-500" />
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
              <Calendar size={16} /> Book Your X-Ray
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why Digital</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Advantages of <span className="text-red-600">Digital X-Ray</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <div key={a.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-5">
                  <span className="font-heading font-bold text-white text-lg">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
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
            Book Your <span className="text-red-500">Digital X-Ray</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Fast, accurate imaging with expert radiologist reports — ready in 30–60 minutes.
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