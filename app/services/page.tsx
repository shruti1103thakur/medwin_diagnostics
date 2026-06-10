import { ArrowRight, Clock, FileCheck, Users, Activity, Zap, Eye, Heart, Microscope, Shield, Star, Stethoscope } from 'lucide-react'
import Link from 'next/link'

const services = [

  {
    id: 'ct',
    icon: Zap,
    title: 'CT Scan',
    desc: 'Advanced computed tomography producing detailed cross-sectional images of internal organs, bones, blood vessels, and soft tissues.',
    details: ['Brain CT Scan', 'HRCT Chest', 'CT Abdomen & Pelvis', 'CT Angiography', 'Contrast Enhanced CT (CECT)', 'Trauma Imaging'],
  
    href: '/services/ct-scan',
  },
  {
    id: 'denta',
    icon: Star,
    title: 'Denta Scan',
    desc: 'Specialized 3D dental CT imaging for teeth, jawbones, and facial structures — critical for implant planning and oral surgery.',
    details: ['Dental Implant Planning', 'Wisdom Tooth Assessment', 'Orthodontic Planning', 'Jaw Bone Analysis', 'TM Joint Evaluation'],
  
    href: '/services/denta-scan',
  },
  {
    id: 'usg',
    icon: Eye,
    title: 'Ultrasound / USG',
    desc: 'Safe, radiation-free real-time imaging for abdomen, pelvis, obstetrics, thyroid, breast, and musculoskeletal conditions.',
    details: ['Whole Abdomen & Pelvis', 'Obstetric & Pregnancy Scans', 'Thyroid & Breast USG', 'Musculoskeletal USG', 'Guided Procedures'],
    
    href: '/services/ultrasound',
  },
  {
    id: 'fibroscan',
    icon: Stethoscope,
    title: 'Liver Elastography (FibroScan)',
    desc: 'Non-invasive liver health assessment to detect fibrosis, cirrhosis, and fatty liver disease — no biopsy required.',
    details: ['Fatty Liver Disease', 'Liver Fibrosis & Cirrhosis', 'Chronic Hepatitis B & C', 'Alcohol-Related Liver Disease', 'Immediate Results'],
 
    href: '/services/liver-elastography',
  },
  {
    id: 'doppler',
    icon: Heart,
    title: 'Colour Doppler',
    desc: 'Detailed blood flow analysis for veins, arteries, and cardiac evaluation using advanced Doppler technology.',
    details: ['Arterial & Venous Doppler', 'Carotid Doppler', 'Renal Doppler', 'Peripheral Vascular Doppler', 'Obstetric Doppler'],
   
    href: '/services/colour-doppler',
  },
  {
    id: 'xray',
    icon: Shield,
    title: 'Digital X-Ray',
    desc: 'High-definition digital radiography with significantly lower radiation than conventional X-rays. Instant results.',
    details: ['Chest X-Ray', 'Spine X-Ray', 'Joint & Trauma Imaging', 'Orthopedic Imaging', 'Contrast Studies'],
   
    href: '/services/digital-xray',
  },
  {
    id: 'pathology',
    icon: Microscope,
    title: 'Pathology & Blood Tests',
    desc: 'NABL-accredited laboratory offering 500+ tests — biochemistry, hematology, microbiology, immunology, and histopathology.',
    details: ['Blood Sugar, HbA1c, Lipid Profile', 'Complete Blood Count', 'Liver & Kidney Function Tests', 'Culture & Sensitivity', 'Home collection available'],
 
    href: '/services/pathology',
  },
  {
    id: 'echo',
    icon: Activity,
    title: 'Echocardiography',
    desc: '2D and Doppler echo for detailed heart structure and function assessment by expert cardiologists.',
    details: ['2D Echo', 'Colour Doppler Echo', 'Stress Echo', 'Foetal Echo', 'Reports in 2 hours'],
   
    href: '/services/echocardiography',
  },
  {
    id: 'mammo',
    icon: Star,
    title: 'Mammography',
    desc: 'Digital mammography for early breast cancer detection with maximum comfort and minimum radiation.',
    details: ['Digital Mammography', 'Breast USG', 'Early cancer detection', 'Female radiologist available', 'Private environment'],

    href: '/services/mammography',
  },
  {
    id: 'fnac',
    icon: Microscope,
    title: 'FNAC & Biopsy',
    desc: 'Image-guided minimally invasive procedures to obtain accurate tissue samples for pathological evaluation.',
    details: ['Ultrasound-Guided FNAC', 'Ultrasound-Guided Biopsy', 'Thyroid FNAC', 'Lymph Node FNAC', 'Soft Tissue Lesion Evaluation'],
   
    href: '/services/fnac-biopsy',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-20 px-4 overflow-hidden min-h-[380px] flex items-center">
        <img
          src="/servicesimg.png"
          alt="Medwin Diagnostics Services"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ imageRendering: 'crisp-edges' }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Complete Diagnostics</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              All Services <span className="text-red-600">Under One Roof</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              From advanced imaging to comprehensive lab testing — everything you need in one trusted centre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm card-hover p-8 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-red-600" />
                      </div>
                      <h2 className="font-heading text-xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    {/* <span className="font-mono text-xs text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 whitespace-nowrap ml-2">
                      {service.price}
                    </span> */}
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm">{service.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                        <ArrowRight size={13} className="text-red-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Link href="/appointment" className="btn-primary px-5 py-2.5 rounded-lg text-sm">
                      Book Now
                    </Link>
                    <Link
                      href={service.href}
                      className="px-5 py-2.5 rounded-lg text-sm font-mono font-semibold border border-gray-200 text-gray-600 hover:border-red-500 hover:text-red-600 transition-colors flex items-center gap-1.5"
                    >
                      Learn More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Not sure which test you need?
          </h2>
          <p className="text-gray-400 mb-8">
            Call us and our team will guide you to the right diagnostic test.
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