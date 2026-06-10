import { Zap, Users, FileCheck, Clock, Heart, Shield, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: Zap,
    title: 'Advanced Technology',
    desc: 'We utilize modern imaging and laboratory systems designed to provide superior diagnostic accuracy and dependable clinical information.',
  },
  {
    icon: Users,
    title: 'Expert Medical Team',
    desc: 'Our experienced specialists bring extensive knowledge and expertise to every diagnostic procedure.',
  },
  {
    icon: FileCheck,
    title: 'Accurate Reporting',
    desc: 'Comprehensive quality assurance protocols ensure consistency and reliability in every report.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround Time',
    desc: 'Timely reporting supports faster diagnosis and treatment planning.',
  },
  {
    icon: Shield,
    title: 'Affordable Healthcare',
    desc: 'We believe quality diagnostic services should be accessible and affordable for all patients.',
  },
  {
    icon: Heart,
    title: 'Patient Comfort',
    desc: 'Comfortable facilities and compassionate staff help create a stress-free healthcare experience.',
  },
]

const stats = [
  { number: '50,000+', label: 'Patients Served' },
  { number: '15+', label: 'Years Experience' },
  { number: '99%', label: 'Report Accuracy' },
  { number: '24/7', label: 'Emergency Care' },
]

const certifications = [
  'NABL Accredited Laboratory',
  'AERB Certified',
  'ISO 9001:2015 Certified',
  'JCI Standards Followed',
  'Expert MD/DNB Radiologists',
  'Digital Report Delivery',
]

export default function WhyChooseUsPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(204,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Why Choose Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-red-500">Medwin Diagnostics</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-heading italic">
            "Trusted by Patients. Preferred by Doctors."
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-600 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
              <div className="font-mono text-xs tracking-widest uppercase opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Reasons */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Our Strengths</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              What Sets Us <span className="text-red-600">Apart</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              At Medwin Diagnostics, every decision we make is guided by one goal — the best possible care for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                    <r.icon size={24} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-red-600 tracking-widest uppercase mb-2">0{i + 1}</div>
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">Our Credentials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certified for <span className="text-red-600">Excellence</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Medwin Diagnostics holds multiple national accreditations and certifications — a testament to our unwavering commitment to quality, safety, and accuracy in every diagnostic service we provide.
            </p>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-red-600 flex-shrink-0" />
                  <span className="font-mono text-sm">{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white text-center">
            <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-6">
              <Award size={40} className="text-white" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">ISO 9001 : 2015</h3>
            <p className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-8">Certified Quality Management</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'NABL', sub: 'Accredited' },
                { label: 'AERB', sub: 'Certified' },
                { label: 'ISO', sub: 'Certified' },
                { label: 'JCI', sub: 'Standards' },
              ].map((badge) => (
                <div key={badge.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="font-heading font-bold text-red-500 text-lg">{badge.label}</div>
                  <div className="font-mono text-xs text-gray-400 tracking-widest uppercase">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patient Promise */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Our Promise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Commitment to <span className="text-red-600">You</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { icon: Shield, title: 'Your Safety', desc: 'Radiation-safe protocols and sterile environments at every step.' },
              { icon: Heart, title: 'Your Comfort', desc: 'Friendly staff and calm spaces designed around patient wellbeing.' },
              { icon: FileCheck, title: 'Your Results', desc: 'Accurate, timely reports you and your doctor can rely on.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center card-hover">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-5">
                  <p.icon size={24} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-red-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Experience the Medwin Difference
          </h2>
          <p className="text-red-100 mb-8 text-lg">
            Book your appointment today and see why thousands of patients trust us with their health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/appointment" className="bg-white text-red-600 font-mono font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors">
              Book Appointment
            </Link>
            <a href="tel:+916260475501" className="border-2 border-white text-white font-mono font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Call +91 6260475501
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}