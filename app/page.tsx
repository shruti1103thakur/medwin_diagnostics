'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Phone, Calendar, ChevronRight, ArrowRight, Star, Shield, Clock,
  Zap, Award, Users, CheckCircle, Activity, Microscope, Heart, Eye, ChevronLeft
} from 'lucide-react'

// ─── Hero Slides ─────────────────────────────────────────────────────────────
const heroSlides = [
  {
    badge: "Indore's Premier Diagnostic Centre",
    headline: 'Precision',
    highlight: 'Diagnostics',
    sub: 'That You Can Trust',
    desc: 'Advanced MRI, CT Scan, Ultrasound, Pathology and more — with expert radiologists, fast digital reports, and compassionate care.',
    // Replace these URLs with your own images later
    image: '/drimg.png',
    imageAlt: 'Modern MRI Scanner',
  },
  {
    badge: '24/7 Emergency CT & MRI',
    headline: 'Fast &',
    highlight: 'Accurate',
    sub: 'Reports in 2–4 Hours',
    desc: '128-slice CT scanner and 1.5T/3T MRI available round the clock for emergency and scheduled diagnostics.',
    image: '/dring.png',
    imageAlt: 'CT Scan Equipment',
  },
  {
    badge: 'NABL Accredited Laboratory',
    headline: 'Trusted by',
    highlight: '50,000+',
    sub: 'Patients Across Indore',
    desc: 'From blood tests to advanced imaging — all under one roof. Expert radiologists, certified lab, affordable pricing.',
    image: '/drimgs.png',
    imageAlt: 'Pathology Laboratory',
  },
]

// ─── Animated Counter ────────────────────────────────────────────────────────
function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start += step
          if (start >= end) { setCount(end); clearInterval(timer) }
          else setCount(Math.floor(start))
        }, 16)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])
  return <div ref={ref}>{count}{suffix}</div>
}

// ─── Services Data ───────────────────────────────────────────────────────────
const services = [
  { icon: Activity, label: 'MRI Scan', desc: 'High-field 1.5T & 3T MRI for brain, spine, joints and more.', href: '/services#mri' },
  { icon: Zap, label: 'CT Scan', desc: '128-slice CT scanner for rapid, detailed imaging — 24/7.', href: '/services#ct' },
  { icon: Eye, label: 'Ultrasound / USG', desc: 'Whole abdomen, obstetric, pelvic and small parts USG.', href: '/services#usg' },
  { icon: Heart, label: 'Colour Doppler', desc: 'Vascular & cardiac Doppler studies with precision reporting.', href: '/services#doppler' },
  { icon: Microscope, label: 'Pathology & Blood Tests', desc: 'Complete blood workup, biochemistry, hormones and more.', href: '/services#pathology' },
  { icon: Shield, label: 'Digital X-Ray', desc: 'Instant digital X-rays with AI-assisted interpretation.', href: '/services#xray' },
  { icon: Activity, label: 'Echocardiography', desc: '2D Echo, Stress Echo and Doppler for cardiac evaluation.', href: '/services#echo' },
  { icon: Star, label: 'Mammography', desc: 'Digital mammography for early breast cancer screening.', href: '/services#mammo' },
]

const features = [
  { icon: Clock, title: '24/7 Emergency', desc: 'CT & MRI available round the clock for emergency cases.' },
  { icon: Award, title: 'Expert Radiologists', desc: 'MD/DNB qualified radiologists with 15+ years experience.' },
  { icon: Shield, title: 'NABL Accredited', desc: 'Certified laboratory ensuring highest quality standards.' },
  { icon: Zap, title: 'Fast Reports', desc: 'Digital reports delivered within 2–4 hours via WhatsApp & email.' },
  { icon: Users, title: '50,000+ Patients', desc: 'Trusted by over 50,000 patients across Indore and MP.' },
  { icon: CheckCircle, title: 'Affordable Pricing', desc: 'Best-in-class diagnostics at genuinely affordable rates.' },
]

const testimonials = [
  { name: 'Rajesh Patel', role: 'Patient — Vijay Nagar', text: 'Got my MRI done here. Reports were ready in 3 hours and the doctor explained everything clearly. Excellent service!', rating: 5 },
  { name: 'Dr. Sunita Sharma', role: 'Referring Physician — Indore', text: 'I regularly refer my patients to Medwin. Their image quality and report accuracy is consistently outstanding.', rating: 5 },
  { name: 'Meena Joshi', role: 'Patient — Palasia', text: "Very clean facility, courteous staff, and very affordable. My whole family's blood tests and ultrasound done here.", rating: 5 },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80)
      })
    }, { threshold: 0.1 })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════════════ HERO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-gray-900">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Red gradient accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="section-badge mb-5">
                {heroSlides[currentSlide].badge}
              </div>
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 transition-all duration-500">
                {heroSlides[currentSlide].headline}
                <span className="block text-red-500">{heroSlides[currentSlide].highlight}</span>
                <span className="block text-2xl md:text-3xl font-normal text-gray-300 mt-2">
                  {heroSlides[currentSlide].sub}
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                {heroSlides[currentSlide].desc}
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-base flex items-center gap-2">
                  <Calendar size={18} /> Book Appointment
                </Link>
                <a href="tel:+917314567890" className="btn-outline px-8 py-4 rounded-lg text-base flex items-center gap-2">
                  <Phone size={18} /> +91 6260475501
                </a>
              </div>
              {/* Trust signals */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Shield, text: 'NABL Accredited' },
                  { icon: Clock, text: '24/7 Emergency' },
                  { icon: Award, text: 'Expert Radiologists' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-gray-300">
                    <Icon size={14} className="text-red-500" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls — dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-red-600 w-8' : 'bg-white/40 w-2 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
        >
          <ChevronRight size={20} />
        </button>

        {/* Floating card — desktop */}
        <div className="hidden lg:block absolute right-8 bottom-12 z-20">
          <div className="bg-white rounded-2xl p-5 w-64 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs text-red-600 font-semibold tracking-widest uppercase">Emergency</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <p className="font-mono text-lg font-bold text-gray-900 mb-1">+91 6260475501</p>
            <p className="text-xs text-gray-500 mb-4">Available 24 hrs · CT & MRI on call</p>
            <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-2">
              {[['CT Scan', '~15 min'], ['MRI', '~45 min'], ['Reports', '2-4 hrs'], ['Parking', 'Free']].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] text-gray-400 font-mono uppercase">{k}</p>
                  <p className="text-gray-900 text-sm font-semibold">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ STATS */}
      <section className="bg-red-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { num: 50000, suffix: '+', label: 'Patients Served' },
            { num: 15, suffix: '+', label: 'Years Experience' },
            { num: 20, suffix: '+', label: 'Expert Specialists' },
            { num: 99, suffix: '%', label: 'Report Accuracy' },
          ].map(({ num, suffix, label }) => (
            <div key={label} className="py-2">
              <div className="font-heading text-4xl md:text-5xl font-bold">
                <Counter end={num} suffix={suffix} />
              </div>
              <div className="font-mono text-xs tracking-widest uppercase mt-1 opacity-80">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="section-badge justify-center mb-4">What We Offer</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              Diagnostic <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              State-of-the-art equipment with experienced radiologists ensuring the highest diagnostic accuracy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, label, desc, href }, i) => (
              <Link
                key={label}
                href={href}
                className="animate-on-scroll card-hover bg-white border border-gray-100 rounded-xl p-6 group shadow-sm"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon size={22} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-mono font-semibold text-gray-900 text-sm uppercase tracking-wide mb-2">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <div className="flex items-center gap-1 text-red-600 text-xs font-mono">
                  Learn more <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10 animate-on-scroll">
            <Link href="/services" className="btn-outline px-8 py-3 rounded-lg inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="section-badge mb-4">Why Medwin</div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence In Every
                <span className="block text-red-600">Diagnosis</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                At Medwin Diagnostics, we combine advanced technology with human expertise to deliver diagnostic reports that your doctor can rely on — and that you can understand.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                    <div className="w-9 h-9 rounded bg-red-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-mono font-semibold text-gray-900 text-sm mb-1">{title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="aspect-[4/5] bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-32 h-32 rounded-full border-4 border-red-100 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-red-50 border-2 border-red-200 flex items-center justify-center">
                        <Activity size={36} className="text-red-600" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="font-heading text-2xl font-bold text-gray-900">ISO 9001 : 2015</p>
                      <p className="font-mono text-xs text-gray-500 mt-1 tracking-widest uppercase">Certified Quality Management</p>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-3">
                      {['NABL Accredited', 'AERB Certified', 'ISO Certified', 'JCI Standards'].map((cert) => (
                        <div key={cert} className="bg-white rounded-lg p-3 flex items-center gap-2 border border-gray-100">
                          <CheckCircle size={12} className="text-red-600 flex-shrink-0" />
                          <span className="text-xs text-gray-600 font-mono">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ EQUIPMENT TICKER */}
      <div className="bg-red-50 border-y border-red-100 py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: 'marquee 20s linear infinite' }}>
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-12">
              {['1.5T Siemens MRI', '128-Slice CT', 'Philips Ultrasound', 'Digital Mammography', 'NABL Lab', 'AERB Certified', 'ISO 9001:2015', 'Digital X-Ray'].map((item) => (
                <span key={item} className="font-mono text-sm text-red-700 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ═══════════════════════════════════════════════ TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-on-scroll">
            <div className="section-badge justify-center mb-4">Patient Stories</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              What Our <span className="text-red-600">Patients Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }, i) => (
              <div
                key={name}
                className="animate-on-scroll card-hover bg-white border border-gray-100 rounded-xl p-6 shadow-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex mb-3">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ CTA BANNER */}
      <section className="relative py-20 overflow-hidden bg-red-600">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="font-mono text-sm tracking-widest uppercase text-white/70 mb-3">Get Diagnosed Today</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5">
            Book Your Appointment<br />in 60 Seconds
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Call us or book online. Our team will confirm your slot within minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/appointment" className="bg-white text-red-600 font-mono font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Calendar size={18} /> Book Online Now
            </Link>
            <a href="tel:+917314567890" className="border-2 border-white text-white font-mono font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
              <Phone size={18} /> Call  +91 6260475501
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
