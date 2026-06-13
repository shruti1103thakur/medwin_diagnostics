import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const departments = [
  {
    title: 'Clinical Biochemistry',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-600',
    tests: [
      { name: 'Blood Sugar', desc: 'Fasting, post-prandial and random glucose levels.' },
      { name: 'HbA1c', desc: 'Long-term blood sugar control for diabetes management.' },
      { name: 'Lipid Profile', desc: 'Total cholesterol, LDL, HDL, triglycerides assessment.' },
      { name: 'Liver Function Tests', desc: 'SGPT, SGOT, bilirubin, albumin and liver enzymes.' },
      { name: 'Kidney Function Tests', desc: 'Creatinine, urea, uric acid and eGFR evaluation.' },
    ],
  },
  {
    title: 'Hematology',
    color: 'bg-gray-50 border-gray-100',
    badge: 'bg-gray-700',
    tests: [
      { name: 'Complete Blood Count', desc: 'RBC, WBC, platelets, hemoglobin and differential count.' },
      { name: 'ESR', desc: 'Erythrocyte sedimentation rate for inflammation detection.' },
      { name: 'Coagulation Studies', desc: 'PT, APTT, INR for bleeding and clotting disorders.' },
    ],
  },
  {
    title: 'Immunology & Serology',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-600',
    tests: [
      { name: 'Autoimmune Screening', desc: 'ANA, anti-dsDNA, ANCA and rheumatoid factor panels.' },
      { name: 'Infection Testing', desc: 'HIV, HBsAg, HCV, VDRL, Widal and dengue testing.' },
      { name: 'Allergy Assessment', desc: 'IgE levels and specific allergen panels.' },
    ],
  },
  {
    title: 'Microbiology',
    color: 'bg-gray-50 border-gray-100',
    badge: 'bg-gray-700',
    tests: [
      { name: 'Culture & Sensitivity', desc: 'Blood, urine, sputum and wound cultures with antibiotic sensitivity.' },
      { name: 'Infection Diagnosis', desc: 'Gram stain, AFB smear and special staining techniques.' },
    ],
  },
  {
    title: 'Histopathology & Cytology',
    color: 'bg-red-50 border-red-100',
    badge: 'bg-red-600',
    tests: [
      { name: 'Tissue Examination', desc: 'Biopsy processing, H&E staining and histopathology reporting.' },
      { name: 'Cytology Studies', desc: 'PAP smear, sputum cytology and body fluid analysis.' },
      { name: 'Diagnostic Pathology Support', desc: 'Immunohistochemistry and special stains for advanced diagnosis.' },
    ],
  },
]

const highlights = [
  { num: '500+', label: 'Tests Available' },
  { num: 'NABL', label: 'Accredited Lab' },
  { num: '2–4 hrs', label: 'Report Time' },
  { num: '24/7', label: 'Emergency Testing' },
]

const faqs = [
  { q: 'Is the laboratory NABL accredited?', a: 'Yes. Our laboratory is NABL accredited, which means we follow the highest quality standards for diagnostic testing — ensuring accurate, reliable, and reproducible results every time.' },
  { q: 'Do I need a doctor\'s prescription for blood tests?', a: 'For most routine blood tests, a doctor\'s prescription is not mandatory. However, for specialized or advanced tests, a referral from your physician is recommended for accurate interpretation.' },
  { q: 'How do I receive my reports?', a: 'All lab reports are delivered digitally via WhatsApp and email. Hard copies are also available at the centre. Most routine reports are ready within 2–4 hours.' },
  { q: 'Is home sample collection available?', a: 'Yes. We offer home sample collection services in Indore. Please call us or book online to schedule a home visit at a convenient time.' },
  { q: 'How should I prepare for blood tests?', a: 'For fasting tests like blood sugar or lipid profile, avoid food and drinks (except water) for 8–12 hours before the test. For other tests, no special preparation is usually required unless advised by your doctor.' },
]

export default function PathologyPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
   <section className="relative py-24 px-4 overflow-hidden min-h-[480px] flex items-center">
        <img
          src="/pathology.png"
          alt="Pathology & Laboratory — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">NABL Accredited Laboratory</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Comprehensive<br />
              <span className="text-red-500">Laboratory Diagnostics</span>
            </h1>
            <p className="text-white font-bold text-lg leading-relaxed mb-8">
              Our modern NABL-accredited laboratory supports a broad spectrum of diagnostic investigations — from routine blood tests to advanced histopathology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book Lab Test
              </Link>
              <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-red-600 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 text-white">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <p className="font-heading text-2xl font-bold">{h.num}</p>
              <p className="font-mono text-xs tracking-widest uppercase opacity-80 mt-0.5">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">About Our Lab</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pathology & <span className="text-red-600">Laboratory Services</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Medwin Diagnostics operates a fully equipped, NABL-accredited laboratory offering over 500 diagnostic tests across clinical biochemistry, hematology, microbiology, immunology, and histopathology.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our laboratory is staffed by qualified pathologists and lab technicians who ensure rigorous quality control at every step — from sample collection to report generation.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Reports are delivered digitally within 2–4 hours for most tests, with home sample collection also available across Indore.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Lab Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Accreditation', value: 'NABL Certified' },
                { label: 'Tests Available', value: '500+ Investigations' },
                { label: 'Report Time', value: '2–4 hours (routine)' },
                { label: 'Home Collection', value: 'Available in Indore' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
                { label: 'Emergency', value: '24/7 for urgent tests' },
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

      {/* Departments */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Our Departments</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Laboratory <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive testing across all major laboratory departments under one roof.
            </p>
          </div>

          <div className="space-y-6">
            {departments.map((dept, di) => (
              <div key={dept.title} className={`rounded-2xl border p-8 ${dept.color}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-8 h-8 rounded-lg ${dept.badge} flex items-center justify-center flex-shrink-0`}>
                    <span className="font-mono font-bold text-white text-xs">
                      {String(di + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900">{dept.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {dept.tests.map((test) => (
                    <div key={test.name} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3">
                      <CheckCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-mono font-semibold text-gray-900 text-sm">{test.name}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{test.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
              <Calendar size={16} /> Book Lab Test
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">FAQs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Common <span className="text-red-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
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
            Book Your <span className="text-red-500">Lab Test</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            500+ tests, NABL accredited, digital reports in 2–4 hours. Home collection available.
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