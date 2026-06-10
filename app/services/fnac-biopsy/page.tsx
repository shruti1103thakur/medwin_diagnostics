import { CheckCircle, ArrowRight, Phone, Calendar } from 'lucide-react'
import Link from 'next/link'

const services = [
  { label: 'Ultrasound-Guided FNAC', desc: 'Precise fine needle aspiration cytology guided by real-time ultrasound for accurate tissue sampling.' },
  { label: 'Ultrasound-Guided Biopsy', desc: 'Core needle biopsy under ultrasound guidance for deeper tissue and organ lesions.' },
  { label: 'Thyroid FNAC', desc: 'Fine needle aspiration of thyroid nodules to evaluate benign vs malignant nature.' },
  { label: 'Lymph Node FNAC', desc: 'Cytological evaluation of enlarged lymph nodes for infection, lymphoma or metastasis.' },
  { label: 'Soft Tissue Lesion Evaluation', desc: 'Sampling of superficial and deep soft tissue masses for histological diagnosis.' },
]

const benefits = [
  { title: 'Image-Guided Precision', desc: 'Real-time ultrasound guidance ensures the needle reaches exactly the right location every time.' },
  { title: 'Minimally Invasive', desc: 'Tiny needle with minimal discomfort — no surgery, no stitches, no hospital stay required.' },
  { title: 'Fast & Accurate Results', desc: 'Tissue samples processed by expert pathologists with reports in 24–48 hours.' },
  { title: 'Expert Specialists', desc: 'Performed by experienced radiologists with specialized training in interventional procedures.' },
]

const faqs = [
  { q: 'What is FNAC?', a: 'FNAC (Fine Needle Aspiration Cytology) is a minimally invasive procedure where a thin needle is used to collect a small sample of cells from a lump or lesion. The sample is then examined under a microscope by a pathologist to determine its nature.' },
  { q: 'What is the difference between FNAC and Biopsy?', a: 'FNAC collects individual cells using a very fine needle and is used for cytological diagnosis. A biopsy collects a small core of tissue using a slightly larger needle and provides a more detailed histological diagnosis — useful for complex or deeper lesions.' },
  { q: 'Is the procedure painful?', a: 'FNAC and biopsy are minimally invasive procedures. Most patients experience only mild discomfort similar to a routine blood draw. Local anaesthesia is used for core biopsies to ensure patient comfort.' },
  { q: 'Why is ultrasound guidance used?', a: 'Ultrasound guidance allows the radiologist to visualize the needle in real time, ensuring it reaches the exact target — improving accuracy, reducing complications, and increasing diagnostic yield.' },
  { q: 'When will I get my report?', a: 'FNAC reports are usually available within 24 hours. Core biopsy reports with histopathology processing typically take 48–72 hours. Reports are delivered digitally via WhatsApp and email.' },
  { q: 'Do I need to prepare for FNAC or Biopsy?', a: 'For most FNAC procedures, no special preparation is needed. For core biopsies, you may be asked to avoid blood-thinning medications for a few days beforehand. Your doctor will provide specific instructions.' },
]

export default function FnacBiopsyPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden min-h-[480px] flex items-center">
        <img
          src="/fanc.png"
          alt="FNAC & Biopsy — Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="section-badge mb-4">Image-Guided Procedures</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              FNAC &<br />
              <span className="text-red-500">Biopsy Services</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our specialists perform image-guided procedures to obtain accurate tissue samples for diagnostic evaluation — minimally invasive, precise and reliable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book Procedure
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
          {['Ultrasound Guided', 'Expert Radiologists', 'Reports in 24–48 hrs', 'Minimally Invasive'].map((item) => (
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
            <p className="section-badge mb-4">About FNAC & Biopsy</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Image-Guided <span className="text-red-600">Diagnostic Procedures</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              FNAC and biopsy are minimally invasive procedures used to collect tissue or cell samples from lumps, nodules, or lesions for pathological analysis. At Medwin Diagnostics, all such procedures are performed under real-time ultrasound guidance for maximum precision and safety.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Our experienced radiologists use state-of-the-art equipment to ensure that samples are collected accurately from the target site — minimizing patient discomfort and maximizing diagnostic yield.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Tissue samples are processed in our NABL-accredited laboratory by qualified pathologists, delivering reliable reports that support accurate diagnosis and treatment planning.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-white">
            <h3 className="font-heading text-xl font-bold mb-6 text-red-500">Procedure Details</h3>
            <div className="space-y-5">
              {[
                { label: 'Guidance', value: 'Real-time Ultrasound' },
                { label: 'Anaesthesia', value: 'Local (for biopsy)' },
                { label: 'Duration', value: '15–30 minutes' },
                { label: 'FNAC Report', value: '24 hours' },
                { label: 'Biopsy Report', value: '48–72 hours' },
                { label: 'Availability', value: 'Mon–Sat 8AM–9PM' },
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
            <p className="section-badge justify-center mb-4">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive image-guided tissue sampling procedures performed by expert radiologists.
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
              <Calendar size={16} /> Book Your Procedure
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Benefits of <span className="text-red-600">Image-Guided Procedures</span>
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
            Book Your <span className="text-red-500">FNAC / Biopsy</span> Today
          </h2>
          <p className="text-gray-400 mb-8">
            Image-guided precision procedures by expert radiologists — results in 24–48 hours.
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