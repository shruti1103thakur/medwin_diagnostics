import { ArrowRight, Clock, FileCheck, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'mri',
    title: 'MRI Scan',
    desc: 'High-resolution Magnetic Resonance Imaging for brain, spine, joints, and soft tissue diagnosis. No radiation. Safe for all ages.',
    details: ['1.5T & 3T MRI machines', 'Brain & Spine MRI', 'MRI Angiography', 'Cardiac MRI', 'Reports in 2–4 hours'],
    price: 'Starting ₹2,500',
  },
  {
    id: 'ct',
    title: 'CT Scan',
    desc: 'Advanced multi-slice CT scanning for chest, abdomen, head, and full-body diagnostics with ultra-fast acquisition.',
    details: ['128-slice CT Scanner', 'CT Angiography', 'HRCT Chest', 'CT Abdomen & Pelvis', 'Reports in 1–2 hours'],
    price: 'Starting ₹1,500',
  },
  {
    id: 'usg',
    title: 'Ultrasound / USG',
    desc: 'Safe, radiation-free imaging for abdomen, pelvis, obstetrics, and musculoskeletal conditions.',
    details: ['4D Ultrasound available', 'Obstetric USG', 'Abdominal USG', 'Pelvic USG', 'Same-day reports'],
    price: 'Starting ₹500',
  },
  {
    id: 'doppler',
    title: 'Colour Doppler',
    desc: 'Detailed blood flow analysis for veins, arteries, and cardiac evaluation using advanced Doppler technology.',
    details: ['Venous Doppler', 'Arterial Doppler', 'Carotid Doppler', 'Renal Doppler', 'Foetal Doppler'],
    price: 'Starting ₹800',
  },
  {
    id: 'xray',
    title: 'Digital X-Ray',
    desc: 'High-definition digital radiography with 70% less radiation than conventional X-rays. Instant results.',
    details: ['Chest X-Ray', 'Bone & Joint X-Ray', 'Spine X-Ray', 'Dental X-Ray', 'Instant digital reports'],
    price: 'Starting ₹200',
  },
  {
    id: 'pathology',
    title: 'Pathology & Blood Tests',
    desc: 'Comprehensive lab testing including CBC, LFT, KFT, thyroid, diabetes, hormones, and 500+ other tests.',
    details: ['CBC & ESR', 'Blood Sugar & HbA1c', 'Thyroid Profile', 'Liver & Kidney Function', 'Home collection available'],
    price: 'Starting ₹100',
  },
  {
    id: 'echo',
    title: 'Echocardiography',
    desc: '2D and Doppler echo for detailed heart structure and function assessment by expert cardiologists.',
    details: ['2D Echo', 'Colour Doppler Echo', 'Stress Echo', 'Foetal Echo', 'Reports in 2 hours'],
    price: 'Starting ₹1,200',
  },
  {
    id: 'mammo',
    title: 'Mammography',
    desc: 'Digital mammography for early breast cancer detection with maximum comfort and minimum radiation.',
    details: ['Digital Mammography', 'Breast USG', 'Early cancer detection', 'Female radiologist available', 'Private environment'],
    price: 'Starting ₹1,000',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
    {/* Hero */}
<section className="relative text-white py-20 px-4 overflow-hidden">
  {/* Background image */}
  <img
    src="/servicesimg.png"
    alt="Medwin Diagnostics Services"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65" />
  {/* Red gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <p className="section-badge justify-center mb-4">What We Offer</p>
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
      Our Diagnostic <span className="text-red-500">Services</span>
    </h1>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Advanced imaging and pathology services under one roof — accurate, affordable, and fast.
    </p>
  </div>
</section>

      {/* Features strip */}
      <section className="bg-red-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 text-white text-sm font-mono tracking-wide">
          <span className="flex items-center gap-2"><Clock size={16} /> Reports in 1–4 Hours</span>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <span className="flex items-center gap-2"><FileCheck size={16} /> Expert Radiologist Review</span>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <span className="flex items-center gap-2"><Users size={16} /> 50,000+ Patients Served</span>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm card-hover p-8">
              <div className="flex items-start justify-between mb-4">
                <h2 className="font-heading text-2xl font-bold text-gray-900">{service.title}</h2>
                <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">{service.price}</span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2 mb-6">
                {service.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                    <ArrowRight size={14} className="text-red-600 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
              <Link href="/appointment" className="btn-primary px-6 py-3 rounded-lg text-sm inline-block">
                Book This Test
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Not sure which test you need?</h2>
          <p className="text-gray-400 mb-8">Call us and our team will guide you to the right diagnostic test.</p>
          <a href="tel:+917314567890" className="btn-primary px-8 py-4 rounded-lg text-sm inline-block">
            Call +91 731 456 7890
          </a>
        </div>
      </section>

    </div>
  )
}