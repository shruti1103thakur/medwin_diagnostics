'use client'
import Link from 'next/link'
import { CheckCircle, Phone, Calendar, Heart, Shield, Zap, Clock, Users, Award } from 'lucide-react'

const packages = [
  {
    name: 'Basic Health Checkup',
    tag: 'Essential',
    tagline: 'Perfect starting point for routine health monitoring',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar Fasting & PP',
      'Lipid Profile',
      'Liver Function Tests (LFT)',
      'Kidney Function Tests (KFT)',
      'Urine Routine & Microscopy',
      'Chest X-Ray',
    ],
    icon: Shield,
  },
  {
    name: 'Executive Health Checkup',
    tag: 'Most Popular',
    tagline: 'Comprehensive screening for working professionals',
    tests: [
      'All Basic Tests Included',
      'HbA1c (3-Month Sugar Average)',
      'Thyroid Profile (TSH, T3, T4)',
      'ECG (Electrocardiogram)',
      'USG Whole Abdomen',
      'Vitamin D & Vitamin B12',
      'Consultation with Specialist',
    ],
    icon: Award,
  },
  {
    name: 'Diabetes Screening',
    tag: 'Diabetes Care',
    tagline: 'Targeted screening for diabetes management & prevention',
    tests: [
      'Fasting Blood Sugar',
      'Post Prandial Blood Sugar',
      'HbA1c',
      'Insulin Levels',
      'Kidney Function Tests',
      'Urine Microalbumin',
      'Eye Checkup (Retinopathy)',
    ],
    icon: Zap,
  },
  {
    name: 'Cardiac Health Assessment',
    tag: 'Heart Care',
    tagline: 'Advanced cardiac evaluation for heart health',
    tests: [
      'ECG (Electrocardiogram)',
      'Echocardiography (2D Echo)',
      'Lipid Profile',
      'CRP (C-Reactive Protein)',
      'Troponin I',
      'Stress Test (TMT)',
      'Blood Pressure Monitoring',
    ],
    icon: Heart,
  },
  {
    name: 'Liver Health Package',
    tag: 'Liver Care',
    tagline: 'Complete liver function & fibrosis assessment',
    tests: [
      'Liver Function Tests (LFT)',
      'FibroScan (Liver Elastography)',
      'Hepatitis B Surface Antigen',
      'Hepatitis C Antibody',
      'USG Whole Abdomen',
      'Bilirubin (Total & Direct)',
      'Serum Albumin & GGT',
    ],
    icon: Shield,
  },
  {
    name: 'Senior Citizen Package',
    tag: 'Age 60+',
    tagline: 'Designed specifically for elderly health monitoring',
    tests: [
      'CBC + ESR',
      'Blood Sugar & HbA1c',
      'Lipid Profile',
      'Thyroid Profile (TSH)',
      'Bone Density (DEXA Scan)',
      'ECG + Echocardiography',
      'Chest X-Ray + USG Abdomen',
    ],
    icon: Users,
  },
  {
    name: 'Comprehensive Master Checkup',
    tag: 'All-Inclusive',
    tagline: 'The most complete head-to-toe health assessment',
    tests: [
      'All Executive Tests Included',
      'MRI Brain (Screening)',
      'CT Chest (HRCT)',
      'FibroScan (Liver)',
      'Full Body USG',
      'Cancer Markers (PSA, CEA, CA-125)',
      'Ophthalmology & Dental Review',
    ],
    icon: Award,
  },
]

const benefits = [
  { icon: Shield, title: 'Early Detection',    desc: 'Identify risk factors and medical conditions before symptoms develop — when treatment is most effective.' },
  { icon: Heart,  title: 'Preventive Care',    desc: 'Proactive health management reduces the risk of serious conditions and costly treatments later.' },
  { icon: Clock,  title: 'Fast Reports',       desc: 'All package reports delivered digitally within 2–4 hours via WhatsApp and email.' },
  { icon: Zap,    title: 'Advanced Equipment', desc: 'Tests conducted on modern, calibrated diagnostic equipment for accurate and reliable results.' },
  { icon: Users,  title: 'Expert Review',      desc: 'Every report reviewed and signed by MD/DNB qualified radiologists and pathologists.' },
  { icon: Award,  title: 'Affordable Pricing', desc: 'Best-in-class preventive health packages at genuinely affordable, transparent pricing.' },
]

export default function HealthPackagesPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* ══════════════════════════════════════════ HERO */}
      <section className="relative text-white py-24 px-4 overflow-hidden min-h-[480px] flex items-center">
        <img
          src="/healtha.png"
          alt="Preventive Health Checkups at Medwin Diagnostics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <p className="section-badge mb-5">Preventive Care</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Preventive Health<br />
              <span className="text-red-500">Checkups</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-3 font-semibold">
              Early Detection for Better Health
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
              Regular health screenings help identify risk factors and medical conditions before symptoms develop — giving you the best chance at effective treatment and a healthier life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/appointment" className="btn-primary px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <Calendar size={16} /> Book a Package
              </Link>
              <a href="tel:+916260475501" className="btn-outline px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ STATS */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: '7',       label: 'Health Packages' },
            { num: '50,000+', label: 'Patients Screened' },
            { num: '2–4 hrs', label: 'Report Delivery' },
            { num: '24/7',    label: 'Booking Available' },
          ].map(({ num, label }) => (
            <div key={label} className="py-2">
              <div className="font-heading text-4xl md:text-5xl font-bold">{num}</div>
              <div className="font-mono text-xs tracking-widest uppercase mt-1 opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════ WHY PREVENTIVE CARE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why It Matters</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Prevention is Better Than <span className="text-red-600">Cure</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Most serious health conditions — heart disease, diabetes, liver disease, cancer — can be detected early through regular screening. Early detection dramatically improves treatment outcomes and saves lives.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon size={20} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-mono font-semibold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ PACKAGES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Choose Your Package</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Our Health <span className="text-red-600">Packages</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Comprehensive preventive health checkup packages designed by our specialists — affordable, thorough, and convenient.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {packages.map(({ name, tag, tagline, tests, icon: Icon }) => (
              <div
                key={name}
                className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border flex flex-col ${
                  tag === 'Most Popular' || tag === 'All-Inclusive'
                    ? 'border-red-200 ring-2 ring-red-500/20'
                    : 'border-gray-100'
                }`}
              >
                <div className="bg-red-600 px-6 py-6 relative">
                  {(tag === 'Most Popular' || tag === 'All-Inclusive') && (
                    <div className="absolute top-4 right-4 bg-white text-red-600 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
                      ★ {tag === 'All-Inclusive' ? 'BEST VALUE' : 'POPULAR'}
                    </div>
                  )}
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className="inline-block text-xs font-mono text-red-100 bg-white/20 px-2 py-0.5 rounded-full mb-2">{tag}</span>
                  <h3 className="font-heading font-bold text-white text-xl leading-tight">{name}</h3>
                  <p className="text-red-200 text-xs mt-2 leading-relaxed">{tagline}</p>
                </div>
                <div className="p-6 bg-white flex flex-col flex-1">
                  <p className="font-mono text-[10px] tracking-widest text-gray-400 uppercase mb-3">Tests Included</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {tests.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={13} className="text-red-500 mt-0.5 flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/appointment"
                    className="block text-center py-3 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white font-mono text-sm font-semibold rounded-lg border border-red-100 hover:border-red-600 transition-all"
                  >
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ HOW IT WORKS */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Simple Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              How It <span className="text-red-500">Works</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Getting your health checkup done at Medwin is simple, fast, and hassle-free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Choose a Package',  desc: 'Select the health package that best suits your age, lifestyle, and health goals.' },
              { step: '02', title: 'Book Appointment',   desc: 'Book online or call us. Our team will confirm your slot within minutes.' },
              { step: '03', title: 'Visit & Get Tested', desc: 'Walk in at your scheduled time. Tests are conducted with care and precision.' },
              { step: '04', title: 'Get Your Report',    desc: 'Receive your complete digital report via WhatsApp & email within 2–4 hours.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-gray-800 border border-white/10 rounded-xl p-6 hover:border-red-600/40 transition-all text-center">
                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-5 font-mono font-bold text-white text-lg">
                  {step}
                </div>
                <h3 className="font-mono font-semibold text-white text-sm mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ WHO SHOULD GET TESTED */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-badge mb-4">Recommended For</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who Should Get a <span className="text-red-600">Health Checkup?</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Regular health screenings are recommended for everyone — but certain groups benefit most from routine preventive checkups. Early detection leads to better outcomes.
              </p>
              <ul className="space-y-3">
                {[
                  'Adults above 30 years for baseline health assessment',
                  'Individuals with diabetes, hypertension or heart disease',
                  'Patients with fatty liver or elevated liver enzymes',
                  'Working professionals with sedentary lifestyles',
                  'Senior citizens (60+) for annual health monitoring',
                  'Individuals with a family history of cancer or chronic disease',
                  'Anyone seeking routine preventive health screening',
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle size={15} className="text-red-500 mt-0.5 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
              <p className="font-mono text-xs text-red-600 tracking-widest uppercase mb-6">Quick Booking</p>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Book Your Checkup Today</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Not sure which package is right for you? Call us — our team will help you choose the most suitable health checkup based on your age, symptoms, and medical history.
              </p>
              <div className="space-y-3">
                <Link href="/appointment"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-mono font-semibold text-sm rounded-lg transition-colors">
                  <Calendar size={16} /> Book Appointment Online
                </Link>
                <a href="tel:+916260475501"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 font-mono font-semibold text-sm rounded-lg transition-all">
                  <Phone size={16} /> Call +91 6260475501
                </a>
                <a href="https://wa.me/916260475501" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 border border-gray-200 hover:border-green-400 text-gray-700 hover:text-green-600 font-mono font-semibold text-sm rounded-lg transition-all">
                  <Phone size={16} /> WhatsApp Us
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-mono text-center">
                  Reports delivered in 2–4 hours • Expert radiologist review • Digital PDF report
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ CTA */}
      <section className="py-20 px-4 bg-red-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-white/70 mb-4">Get Diagnosed Today</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Your Health Deserves<br />Accurate Diagnosis
          </h2>
          <p className="text-white/80 mb-4 text-lg leading-relaxed max-w-xl mx-auto">
            Partner with a diagnostic center committed to excellence, innovation, and patient care.
          </p>
          <p className="font-mono text-sm text-white/70 mb-10 tracking-wide">
            Schedule Your Appointment Today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            
            <a  href="tel:+916260475501"
              className="bg-white text-red-600 font-mono font-bold px-7 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
            >
              📞 Call Us
            </a>
            
             <a href="mailto:info@medwindiagnostics.com"
              className="border-2 border-white text-white font-mono font-bold px-7 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
            >
              📧 Email Us
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-mono font-bold px-7 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
            >
              📍 Visit Our Center
            </Link>
            <Link
              href="/appointment"
              className="border-2 border-white text-white font-mono font-bold px-7 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
            >
              🌐 Book Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}