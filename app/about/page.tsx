import { Shield, Target, Heart, Clock, CheckCircle, Award, Users, Zap } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50,000+', label: 'Patients Served' },
    { number: '10+', label: 'Expert Radiologists' },
    { number: '24/7', label: 'Emergency Services' },
  ]

  const team = [
    { name: 'Dr. Rajesh Sharma', role: 'Chief Radiologist',  exp: '20+ Years Experience' },
    { name: 'Dr. Priya Mehta',   role: 'Senior Radiologist', exp: '15+ Years Experience' },
    { name: 'Dr. Anil Verma',    role: 'Pathologist',        exp: '12+ Years Experience' },
    { name: 'Dr. Sunita Joshi',  role: 'Sonologist',         exp: '10+ Years Experience' },
  ]

  const values = [
    { icon: Shield, title: 'Accuracy',    desc: 'Precise diagnostics using the latest technology and experienced professionals for dependable clinical information.' },
    { icon: Heart,  title: 'Compassion',  desc: 'Patient-first approach with care, empathy, and respect at every step of the diagnostic journey.' },
    { icon: Target, title: 'Excellence',  desc: 'Highest standards in every report, every scan, every interaction — no compromise on quality.' },
    { icon: Clock,  title: 'Speed',       desc: 'Fast turnaround on reports without compromising quality, supporting faster diagnosis and treatment planning.' },
  ]

  const whyPoints = [
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
      icon: CheckCircle,
      title: 'Accurate Reporting',
      desc: 'Comprehensive quality assurance protocols ensure consistency and reliability in every report we deliver.',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround Time',
      desc: 'Timely reporting supports faster diagnosis and treatment planning for better patient outcomes.',
    },
    {
      icon: Award,
      title: 'Affordable Healthcare',
      desc: 'We believe quality diagnostic services should be accessible and affordable for all patients across Indore.',
    },
    {
      icon: Heart,
      title: 'Patient Comfort',
      desc: 'Comfortable facilities and compassionate staff help create a stress-free, welcoming healthcare experience.',
    },
  ]

  const qualityPoints = [
    'Standardized Reporting Protocols',
    'Equipment Quality Assurance',
    'Regular Calibration & Maintenance',
    'Infection Control Practices',
    'Continuous Staff Training',
    'Patient Safety Standards',
  ]

  return (
    <div className="bg-white text-gray-800">

      {/* ══════════════════════════════════════════ HERO */}

      <section className="relative py-24 px-4 overflow-hidden">
        <img
          src="/aboutimg.png"
          alt="Medwin Diagnostics Centre"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No full overlay - image stays original */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* White backdrop only behind text block */}
          <div className="inline-block px-10 py-10 max-w-3xl mx-auto">
            <p className="section-badge justify-center mb-4">About Us</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Indore's Most Trusted<br />
              <span className="text-red-500">Diagnostic Centre</span>
            </h1>
            <p className="text-black font-bold text-lg max-w-2xl mx-auto leading-relaxed">
              
            </p>
            <p className="text-black font-bold text-sm font-mono tracking-widest mt-4 uppercase">
              
            </p>
          </div>
        </div>
      </section>
      {/* <section className="relative text-white py-24 px-4 overflow-hidden">
        <img
          src="/aboutimg.png"
          alt="Medwin Diagnostics Centre"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Indore's Most Trusted<br />
            <span className="text-red-500">Diagnostic Centre</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Providing reliable diagnostic solutions through modern imaging technology, expert medical professionals, and patient-centered healthcare services.
          </p>
          <p className="text-gray-400 text-sm font-mono tracking-widest mt-4 uppercase">
            Accurate Diagnosis • Advanced Technology • Trusted Care
          </p>
        </div>
      </section> */}
      {/* <section className="relative text-gray-900 py-24 px-4 overflow-hidden">
        <img
          src="/aboutimg.png"
          alt="Medwin Diagnostics Centre"
          className="absolute inset-0 w-full h-full object-cover" */}
        {/* /> */}
        {/* No overlay - original image shows clearly */}
        {/* <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Indore's Most Trusted<br />
            <span className="text-red-500">Diagnostic Centre</span>
          </h1> */}
          {/* <p className="text-gray-800 text-lg max-w-2xl mx-auto leading-relaxed">
            Providing reliable diagnostic solutions through modern imaging technology, expert medical professionals, and patient-centered healthcare services.
          </p>
          <p className="text-gray-700 text-sm font-mono tracking-widest mt-4 uppercase">
            Accurate Diagnosis • Advanced Technology • Trusted Care
          </p>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════ STATS */}
      <section className="py-14 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
              <div className="font-mono text-xs tracking-widest uppercase opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════ WELCOME */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
            <div>
              <p className="section-badge mb-4">Who We Are</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-red-600">Medwin Diagnostics</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Medwin Diagnostics is a modern diagnostic center dedicated to providing comprehensive imaging and laboratory services with the highest standards of quality, accuracy, and patient care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We understand that accurate diagnosis forms the foundation of effective treatment. By combining advanced diagnostic technology with clinical expertise, we help physicians and patients make informed healthcare decisions with confidence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our commitment extends beyond diagnostics. We strive to create a patient-friendly environment where every individual receives professional care, timely services, and reliable results.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Advanced Diagnostic Technology', 'Experienced Medical Experts', 'Fast & Reliable Reports', 'Affordable Pricing', 'Patient-Centered Care'].map((h) => (
                  <span key={h} className="flex items-center gap-1.5 text-xs text-red-700 bg-red-50 border border-red-100 rounded-full px-3 py-1 font-mono">
                    <CheckCircle size={11} className="text-red-500" /> {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Vision & Mission */}
            <div className="flex flex-col gap-6">
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mb-5">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Our <span className="text-red-400">Vision</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become one of the most trusted diagnostic healthcare providers by delivering excellence in medical diagnostics through innovation, quality, and compassionate service.
                </p>
              </div>
              <div className="bg-red-600 rounded-2xl p-8 text-white">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5">
                  <Heart size={22} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Our <span className="text-gray-900">Mission</span>
                </h3>
                <p className="text-red-50 leading-relaxed">
                  To improve healthcare outcomes by providing accurate diagnostic information, advanced technology solutions, and exceptional patient experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ WHY CHOOSE MEDWIN */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Why Choose Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Trusted by Patients.<br />
              <span className="text-red-600">Preferred by Doctors.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              At Medwin Diagnostics, excellence isn't just a promise — it's built into every process, every report, and every patient interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map(({ icon: Icon, title, desc }) => (
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

      {/* ══════════════════════════════════════════ CORE VALUES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">What We Stand For</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              These four pillars define how we work, how we care, and how we grow — every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover text-center hover:border-red-100 transition-all group">
                <div className="w-14 h-14 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mx-auto mb-5 group-hover:bg-red-600 transition-colors">
                  <v.icon size={24} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ QUALITY & TECHNOLOGY */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-badge mb-4">Excellence Through Innovation</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Quality & <span className="text-red-500">Technology</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                At Medwin Diagnostics, we continuously invest in advanced medical technology to ensure superior diagnostic quality and improved patient outcomes. Our quality commitment covers every aspect of the diagnostic process.
              </p>
              <ul className="space-y-3">
                {qualityPoints.map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={13} className="text-white" />
                    </div>
                    <span className="text-gray-300 text-sm font-mono">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Modern Imaging Systems',    desc: 'Advanced CT, Ultrasound, FibroScan, Color Doppler and Digital X-Ray equipment for superior accuracy.' },
                { title: 'NABL Accredited Lab',       desc: 'Fully automated laboratory with standardized protocols and certified quality management.' },
                { title: 'Digital Reporting',         desc: 'Secure digital reports delivered via WhatsApp and email within 2–4 hours of testing.' },
                { title: 'Infection Control',          desc: 'Strict infection control and sterilization practices maintained across all areas.' },
                { title: 'Expert Radiologists',       desc: 'MD/DNB qualified radiologists review and sign every diagnostic report personally.' },
                { title: 'Patient Safety',             desc: 'All procedures follow nationally and internationally recognised patient safety protocols.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-gray-800 border border-white/10 rounded-xl p-5 hover:border-red-600/40 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 flex items-center justify-center mb-3">
                    <CheckCircle size={14} className="text-red-400" />
                  </div>
                  <p className="font-mono font-semibold text-white text-xs mb-1">{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ TEAM */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Our Specialists</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our <span className="text-red-600">Expert Team</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Experienced specialists bringing extensive knowledge and expertise to every diagnostic procedure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, exp }) => (
              <div key={name} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                {/* Avatar placeholder */}
                {/* <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-100 border-4 border-white shadow-md flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-red-600">
                      {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-heading font-bold text-gray-900 text-base">{name}</h3>
                  <p className="text-red-600 font-mono text-xs mt-1 font-semibold tracking-wide">{role}</p>
                  <p className="text-gray-400 text-xs mt-1 font-mono">{exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */} 

      {/* ══════════════════════════════════════════ CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-red-400 mb-4">Your Health Deserves Accurate Diagnosis</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your <span className="text-red-500">Appointment?</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Partner with a diagnostic center committed to excellence, innovation, and patient care. Experience accurate diagnostics with a team that truly cares.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm">Book Appointment</a>
            <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm">Call Now</a>
          </div>
        </div>
      </section>

    </div>
  )
}


// import { Shield, Target, Heart, Clock } from 'lucide-react'

// export default function AboutPage() {
//   const stats = [
//     { number: '15+', label: 'Years of Excellence' },
//     { number: '50,000+', label: 'Patients Served' },
//     { number: '10+', label: 'Expert Radiologists' },
//     { number: '24/7', label: 'Emergency Services' },
//   ]

//   const team = [
//     { name: 'Dr. Rajesh Sharma', role: 'Chief Radiologist', exp: '20+ Years Experience' },
//     { name: 'Dr. Priya Mehta', role: 'Senior Radiologist', exp: '15+ Years Experience' },
//     { name: 'Dr. Anil Verma', role: 'Pathologist', exp: '12+ Years Experience' },
//     { name: 'Dr. Sunita Joshi', role: 'Sonologist', exp: '10+ Years Experience' },
//   ]

//   const values = [
//     { icon: Shield, title: 'Accuracy', desc: 'Precise diagnostics using the latest technology and experienced professionals.' },
//     { icon: Heart, title: 'Compassion', desc: 'Patient-first approach with care, empathy and respect at every step.' },
//     { icon: Target, title: 'Excellence', desc: 'Highest standards in every report, every scan, every interaction.' },
//     { icon: Clock, title: 'Speed', desc: 'Fast turnaround on reports without compromising quality.' },
//   ]

//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero */}
//       <section className="relative text-white py-20 px-4 overflow-hidden">
//         <img
//           src="/aboutimg.png"
//           alt="Medwin Diagnostics Centre"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/65" />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
//         <div className="relative z-10 max-w-7xl mx-auto text-center">
//           <p className="section-badge justify-center mb-4">About Us</p>
//           <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//             Indore's Most Trusted<br />
//             <span className="text-red-500">Diagnostic Centre</span>
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Since 2010, Medwin Diagnostics has been delivering accurate, affordable, and compassionate diagnostic care to the people of Indore.
//           </p>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-red-600">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
//           {stats.map((s) => (
//             <div key={s.label}>
//               <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
//               <div className="font-mono text-sm tracking-widest uppercase opacity-90">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Welcome + Vision + Mission */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">

//           {/* Welcome */}
//           <div className="text-center mb-16">
//             <p className="section-badge justify-center mb-4">About Us</p>
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Welcome to <span className="text-red-600">Medwin Diagnostics</span>
//             </h2>
//             <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
//               Medwin Diagnostics is a modern diagnostic center dedicated to providing comprehensive imaging and laboratory services with the highest standards of quality, accuracy, and patient care.
//             </p>
//             <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
//               We understand that accurate diagnosis forms the foundation of effective treatment. By combining advanced diagnostic technology with clinical expertise, we help physicians and patients make informed healthcare decisions with confidence.
//             </p>
//             <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
//               Our commitment extends beyond diagnostics. We strive to create a patient-friendly environment where every individual receives professional care, timely services, and reliable results.
//             </p>
//           </div>

//           {/* Vision & Mission */}
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-gray-900 rounded-2xl p-10 text-white">
//               <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center mb-6">
//                 <Target size={26} className="text-white" />
//               </div>
//               <h3 className="font-heading text-2xl font-bold mb-4">
//                 Our <span className="text-red-500">Vision</span>
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 To become one of the most trusted diagnostic healthcare providers by delivering excellence in medical diagnostics through innovation, quality, and compassionate service.
//               </p>
//             </div>
//             <div className="bg-red-600 rounded-2xl p-10 text-white">
//               <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
//                 <Heart size={26} className="text-white" />
//               </div>
//               <h3 className="font-heading text-2xl font-bold mb-4">
//                 Our <span className="text-gray-900">Mission</span>
//               </h3>
//               <p className="text-red-50 leading-relaxed">
//                 To improve healthcare outcomes by providing accurate diagnostic information, advanced technology solutions, and exceptional patient experiences.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="section-badge justify-center mb-4">What We Stand For</p>
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((v) => (
//               <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover text-center">
//                 <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
//                   <v.icon size={24} className="text-red-600" />
//                 </div>
//                 <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

    

//       {/* CTA */}
//       <section className="py-20 px-4 bg-gray-900 text-white text-center">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
//             Ready to Book Your <span className="text-red-600">Appointment?</span>
//           </h2>
//           <p className="text-gray-400 mb-8">Experience accurate diagnostics with a team that cares.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm">Book Appointment</a>
//             <a href="tel:+916260475501" className="btn-outline px-8 py-4 rounded-lg text-sm">Call Now</a>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }


// import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react'

// export default function AboutPage() {
//   const stats = [
//     { number: '15+', label: 'Years of Excellence' },
//     { number: '50,000+', label: 'Patients Served' },
//     { number: '10+', label: 'Expert Radiologists' },
//     { number: '24/7', label: 'Emergency Services' },
//   ]

//   const team = [
//     { name: 'Dr. Rajesh Sharma', role: 'Chief Radiologist', exp: '20+ Years Experience' },
//     { name: 'Dr. Priya Mehta', role: 'Senior Radiologist', exp: '15+ Years Experience' },
//     { name: 'Dr. Anil Verma', role: 'Pathologist', exp: '12+ Years Experience' },
//     { name: 'Dr. Sunita Joshi', role: 'Sonologist', exp: '10+ Years Experience' },
//   ]

//   const values = [
//     { icon: Shield, title: 'Accuracy', desc: 'Precise diagnostics using the latest technology and experienced professionals.' },
//     { icon: Heart, title: 'Compassion', desc: 'Patient-first approach with care, empathy and respect at every step.' },
//     { icon: Target, title: 'Excellence', desc: 'Highest standards in every report, every scan, every interaction.' },
//     { icon: Clock, title: 'Speed', desc: 'Fast turnaround on reports without compromising quality.' },
//   ]

//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero */}
//       {/* <section className="bg-gray-900 text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="section-badge justify-center mb-4">About Us</p>
//           <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//             Indore's Most Trusted<br />
//             <span className="text-red-600">Diagnostic Centre</span>
//           </h1>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Since 2010, Medwin Diagnostics has been delivering accurate, affordable, and compassionate diagnostic care to the people of Indore.
//           </p>
//         </div>
//       </section> */}
//       {/* Hero */}
// <section className="relative text-white py-20 px-4 overflow-hidden">
//   {/* Background image */}
//   <img
//     src="/aboutimg.png"
//     alt="Medwin Diagnostics Centre"
//     className="absolute inset-0 w-full h-full object-cover"
//   />
//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/65" />
//   {/* Red gradient */}
//   <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//   {/* Content */}
//   <div className="relative z-10 max-w-7xl mx-auto text-center">
//     <p className="section-badge justify-center mb-4">About Us</p>
//     <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//       Indore's Most Trusted<br />
//       <span className="text-red-500">Diagnostic Centre</span>
//     </h1>
//     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//       Since 2010, Medwin Diagnostics has been delivering accurate, affordable, and compassionate diagnostic care to the people of Indore.
//     </p>
//   </div>
// </section>

//       {/* Stats */}
//       <section className="py-16 bg-red-600">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
//           {stats.map((s) => (
//             <div key={s.label}>
//               <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
//               <div className="font-mono text-sm tracking-widest uppercase opacity-90">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Story */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
//           <div>
//             <p className="section-badge mb-4">Our Story</p>
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Built on Trust,<br />Driven by <span className="text-red-600">Excellence</span>
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Medwin Diagnostics was founded in 2010 with a simple mission — to provide world-class diagnostic services to the people of Indore at affordable prices. Over the years, we have grown into one of the most trusted names in medical diagnostics in Madhya Pradesh.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-4">
//               Our state-of-the-art facility is equipped with the latest MRI, CT Scan, Ultrasound, and Pathology technology. Each report is reviewed by experienced radiologists and pathologists to ensure maximum accuracy.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               We believe every patient deserves timely, accurate, and affordable diagnostics — and that belief drives everything we do.
//             </p>
//           </div>
//           <div className="bg-gray-100 rounded-2xl p-10 text-center">
//             <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-4xl mx-auto mb-6">M</div>
//             <div className="font-heading text-2xl font-bold text-gray-900 mb-2">MEDWIN DIAGNOSTICS</div>
//             <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-6">Indore, Madhya Pradesh</div>
//             <div className="border-t border-gray-200 pt-6 text-gray-600 text-sm leading-relaxed">
//               "Accurate diagnosis is the first step to healing. We are committed to getting it right, every time."
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="section-badge justify-center mb-4">What We Stand For</p>
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((v) => (
//               <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover text-center">
//                 <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
//                   <v.icon size={24} className="text-red-600" />
//                 </div>
//                 <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
//                 <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-14">
//             <p className="section-badge justify-center mb-4">Our Experts</p>
//             <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Meet the <span className="text-red-600">Team</span></h2>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member) => (
//               <div key={member.name} className="bg-white rounded-xl border border-gray-100 shadow-sm card-hover overflow-hidden">
//                 <div className="bg-gray-900 h-40 flex items-center justify-center">
//                   <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-2xl">
//                     {member.name.split(' ')[1][0]}
//                   </div>
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
//                   <p className="text-red-600 font-mono text-xs tracking-widest uppercase mb-2">{member.role}</p>
//                   <p className="text-gray-500 text-sm">{member.exp}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-4 bg-gray-900 text-white text-center">
//         <div className="max-w-2xl mx-auto">
//           <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Book Your <span className="text-red-600">Appointment?</span></h2>
//           <p className="text-gray-400 mb-8">Experience accurate diagnostics with a team that cares.</p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm">Book Appointment</a>
//             <a href="tel:+917314567890" className="btn-outline px-8 py-4 rounded-lg text-sm">Call Now</a>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }