import { Shield, Zap, Activity, CheckCircle, Award, RefreshCw, Users, Settings } from 'lucide-react'
import Link from 'next/link'

const qualityPoints = [
  'Standardized Reporting Protocols',
  'Equipment Quality Assurance',
  'Regular Calibration & Maintenance',
  'Infection Control Practices',
  'Continuous Staff Training',
]

const technologies = [
  {
    icon: Activity,
    title: '1.5T & 3T MRI Scanner',
    desc: 'Siemens high-field MRI systems delivering exceptional soft tissue contrast and diagnostic clarity for brain, spine, joints and more.',
    badge: 'Imaging',
  },
  {
    icon: Zap,
    title: '128-Slice CT Scanner',
    desc: 'Ultra-fast multi-slice CT for chest, abdomen, cardiac and vascular imaging with minimal radiation dose.',
    badge: 'Imaging',
  },
  {
    icon: Activity,
    title: 'Philips HD Ultrasound',
    desc: 'High-definition ultrasound with 4D capability for obstetric, abdominal, pelvic and musculoskeletal studies.',
    badge: 'Ultrasound',
  },
  {
    icon: Shield,
    title: 'Digital Mammography',
    desc: 'Full-field digital mammography with the lowest radiation dose for accurate breast cancer screening.',
    badge: 'Screening',
  },
  {
    icon: Activity,
    title: 'Colour Doppler System',
    desc: 'Advanced Doppler imaging for vascular, cardiac and foetal blood flow analysis with precision reporting.',
    badge: 'Doppler',
  },
  {
    icon: Settings,
    title: 'NABL Certified Lab',
    desc: 'Fully automated pathology laboratory with advanced analysers for blood, biochemistry, hormones and culture tests.',
    badge: 'Pathology',
  },
]

const commitments = [
  {
    icon: RefreshCw,
    title: 'Regular Calibration',
    desc: 'All equipment undergoes scheduled calibration and preventive maintenance to ensure peak performance.',
  },
  {
    icon: Shield,
    title: 'Infection Control',
    desc: 'Strict infection control protocols and sterile environments maintained across all diagnostic areas.',
  },
  {
    icon: Users,
    title: 'Continuous Training',
    desc: 'Our team undergoes regular training and CME programs to stay updated with the latest diagnostic practices.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'Multi-level quality checks on every report before delivery to ensure accuracy and reliability.',
  },
]

export default function QualityPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(204,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Quality & Technology</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Excellence Through <span className="text-red-500">Innovation</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            At Medwin Diagnostics, we continuously invest in advanced medical technology to ensure superior diagnostic quality and improved patient outcomes.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-red-600 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-white text-sm font-mono tracking-wide">
          {['ISO 9001:2015 Certified', 'NABL Accredited', 'AERB Certified', 'JCI Standards'].map((b) => (
            <span key={b} className="flex items-center gap-2">
              <CheckCircle size={15} /> {b}
            </span>
          ))}
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">Our Standards</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Quality <span className="text-red-600">Commitment</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Quality is not just a process at Medwin — it is a culture. Every diagnostic procedure, every report, and every patient interaction is governed by strict quality standards that we never compromise on.
            </p>
            <ul className="space-y-4">
              {qualityPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="font-mono text-sm text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
              <Award size={36} className="text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-center mb-2">ISO 9001 : 2015</h3>
            <p className="font-mono text-xs text-gray-400 tracking-widest uppercase text-center mb-8">
              Certified Quality Management
            </p>
            <div className="space-y-4">
              {[
                { label: 'Report Accuracy', value: '99%' },
                { label: 'On-Time Delivery', value: '98%' },
                { label: 'Patient Satisfaction', value: '97%' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400 font-mono">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-red-500 h-1.5 rounded-full"
                      style={{ width: stat.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Our Equipment</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Advanced <span className="text-red-600">Technology</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              State-of-the-art diagnostic equipment from globally trusted manufacturers, maintained to the highest standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <tech.icon size={22} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 self-start">
                    {tech.badge}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Practices */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">How We Maintain Quality</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Quality <span className="text-red-600">Practices</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-5">
                  <c.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Experience <span className="text-red-500">World-Class</span> Diagnostics
          </h2>
          <p className="text-gray-400 mb-8">
            Book your test today and experience the Medwin quality difference firsthand.
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