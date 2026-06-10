import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const conditions = [
  'Fatty Liver Disease',
  'Liver Fibrosis',
  'Liver Cirrhosis',
  'Chronic Hepatitis B',
  'Chronic Hepatitis C',
  'Alcohol-Related Liver Disease',
  'Metabolic Liver Disorders',
]

const advantages = [
  { title: 'Non-Invasive', desc: 'No needles, no cuts, no hospitalisation. The procedure is completely external and painless.' },
  { title: 'No Biopsy Required', desc: 'Accurately assesses liver health without the risks and discomfort of a traditional liver biopsy.' },
  { title: 'Quick Procedure', desc: 'The entire scan takes just 10–15 minutes — no preparation or recovery time needed.' },
  { title: 'Immediate Results', desc: 'Results are available immediately after the scan and your report is ready the same day.' },
  { title: 'Comfortable Experience', desc: 'Painless, radiation-free procedure performed in a relaxed, comfortable environment.' },
]

const recommended = [
  'Patients with Fatty Liver',
  'Individuals with Diabetes',
  'Patients with Chronic Liver Disease',
  'Individuals with Elevated Liver Enzymes',
  'Routine Liver Monitoring',
]

const faqs = [
  { q: 'What is FibroScan / Liver Elastography?', a: 'FibroScan is a specialised ultrasound-based technology that measures liver stiffness — an indicator of fibrosis (scarring). It provides accurate liver health assessment without biopsy.' },
  { q: 'Is FibroScan painful?', a: 'No. FibroScan is completely painless. The probe is placed on the skin over the liver area and sends vibrations — similar to a standard ultrasound experience.' },
  { q: 'How long does the procedure take?', a: 'The scan takes only 10–15 minutes. No anaesthesia or recovery time is required.' },
  { q: 'Do I need to fast before FibroScan?', a: 'Yes. It is recommended to fast for at least 2 hours before the procedure for accurate results.' },
  { q: 'Who should get a FibroScan?', a: 'Anyone with fatty liver, diabetes, chronic hepatitis, elevated liver enzymes, or a history of alcohol use should consider a FibroScan for liver health monitoring.' },
  { q: 'When will I get my report?', a: 'Reports are available the same day and delivered via WhatsApp or email.' },
]

export default function LiverElastographyPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden">
        <img
          src="/liver.png"
          alt="Liver Elastography FibroScan — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Liver Health Assessment</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Liver Elastography<br />
              <span className="text-red-500">(FibroScan)</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              FibroScan is an advanced diagnostic technology used to assess liver stiffness and detect liver fibrosis without the need for a biopsy — painless, quick, and highly effective.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book FibroScan
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
          {['No Biopsy Needed', 'Painless Procedure', 'Same Day Reports', 'Zero Radiation'].map((item) => (
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
            <p className="section-badge mb-4">About FibroScan</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is <span className="text-red-600">Liver Elastography?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Liver Elastography (FibroScan) is a non-invasive diagnostic procedure that measures liver stiffness using specialised ultrasound technology. It accurately detects liver fibrosis and cirrhosis without the need for a painful biopsy.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              The procedure is painless, quick, and highly effective in evaluating liver health. It is recommended for patients with fatty liver disease, chronic hepatitis, diabetes, and other liver conditions.
            </p>
            <p className="text-gray-500 leading-relaxed">
              At Medwin Diagnostics, our experienced team performs FibroScan with precision — providing you and your doctor with reliable liver health information for informed treatment decisions.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Procedure Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Technology', value: 'Vibration-Controlled Transient Elastography' },
                { label: 'Duration', value: '10–15 minutes' },
                { label: 'Radiation', value: 'Zero — Ultrasound Based' },
                { label: 'Fasting', value: '2 hours required' },
                { label: 'Report', value: 'Same Day' },
                { label: 'Biopsy Needed', value: 'No — Non-Invasive' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{item.label}</span>
                  <span className="font-semibold text-white text-sm text-right max-w-[180px]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">What We Evaluate</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Conditions <span className="text-red-600">Evaluated</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              FibroScan helps diagnose and monitor a wide range of liver conditions accurately and non-invasively.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {conditions.map((condition, i) => (
              <div key={condition} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm card-hover flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="font-mono font-bold text-red-600 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="font-heading font-semibold text-gray-900">{condition}</span>
                  <ArrowRight size={16} className="text-red-600 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why FibroScan</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Advantages of <span className="text-red-600">FibroScan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={adv.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 card-hover">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-5">
                  <span className="font-heading font-bold text-white">0{i + 1}</span>
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">Who Should Get It</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recommended <span className="text-red-600">For</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              FibroScan is particularly beneficial for individuals at risk of liver disease or those already diagnosed with a liver condition who need regular monitoring.
            </p>
            <ul className="space-y-4">
              {recommended.map((r) => (
                <li key={r} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="font-mono text-sm text-gray-700">{r}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm inline-flex items-center gap-2">
                <Calendar size={16} /> Book FibroScan Now
              </Link>
            </div>
          </div>

          <div className="bg-red-600 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-2xl font-bold mb-6">Did You Know?</h3>
            <div className="space-y-6">
              {[
                { stat: '1 in 4', desc: 'adults in India has some form of fatty liver disease.' },
                { stat: '80%', desc: 'of liver disease cases show no symptoms until advanced stages.' },
                { stat: '10 min', desc: 'is all it takes for a complete FibroScan assessment.' },
              ].map((fact) => (
                <div key={fact.stat} className="border-b border-white/20 pb-5">
                  <div className="font-heading text-4xl font-bold text-white mb-1">{fact.stat}</div>
                  <div className="text-red-100 text-sm">{fact.desc}</div>
                </div>
              ))}
            </div>
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
            Book Your <span className="text-red-500">FibroScan</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Non-invasive liver health assessment — no biopsy, no pain, same day reports.
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