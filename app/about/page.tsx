import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '50,000+', label: 'Patients Served' },
    { number: '10+', label: 'Expert Radiologists' },
    { number: '24/7', label: 'Emergency Services' },
  ]

  const team = [
    { name: 'Dr. Rajesh Sharma', role: 'Chief Radiologist', exp: '20+ Years Experience' },
    { name: 'Dr. Priya Mehta', role: 'Senior Radiologist', exp: '15+ Years Experience' },
    { name: 'Dr. Anil Verma', role: 'Pathologist', exp: '12+ Years Experience' },
    { name: 'Dr. Sunita Joshi', role: 'Sonologist', exp: '10+ Years Experience' },
  ]

  const values = [
    { icon: Shield, title: 'Accuracy', desc: 'Precise diagnostics using the latest technology and experienced professionals.' },
    { icon: Heart, title: 'Compassion', desc: 'Patient-first approach with care, empathy and respect at every step.' },
    { icon: Target, title: 'Excellence', desc: 'Highest standards in every report, every scan, every interaction.' },
    { icon: Clock, title: 'Speed', desc: 'Fast turnaround on reports without compromising quality.' },
  ]

  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      {/* <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Indore's Most Trusted<br />
            <span className="text-red-600">Diagnostic Centre</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Since 2010, Medwin Diagnostics has been delivering accurate, affordable, and compassionate diagnostic care to the people of Indore.
          </p>
        </div>
      </section> */}
      {/* Hero */}
<section className="relative text-white py-20 px-4 overflow-hidden">
  {/* Background image */}
  <img
    src="/aboutimg.png"
    alt="Medwin Diagnostics Centre"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65" />
  {/* Red gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <p className="section-badge justify-center mb-4">About Us</p>
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
      Indore's Most Trusted<br />
      <span className="text-red-500">Diagnostic Centre</span>
    </h1>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Since 2010, Medwin Diagnostics has been delivering accurate, affordable, and compassionate diagnostic care to the people of Indore.
    </p>
  </div>
</section>

      {/* Stats */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{s.number}</div>
              <div className="font-mono text-sm tracking-widest uppercase opacity-90">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-badge mb-4">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on Trust,<br />Driven by <span className="text-red-600">Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Medwin Diagnostics was founded in 2010 with a simple mission — to provide world-class diagnostic services to the people of Indore at affordable prices. Over the years, we have grown into one of the most trusted names in medical diagnostics in Madhya Pradesh.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our state-of-the-art facility is equipped with the latest MRI, CT Scan, Ultrasound, and Pathology technology. Each report is reviewed by experienced radiologists and pathologists to ensure maximum accuracy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe every patient deserves timely, accurate, and affordable diagnostics — and that belief drives everything we do.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-10 text-center">
            <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-4xl mx-auto mb-6">M</div>
            <div className="font-heading text-2xl font-bold text-gray-900 mb-2">MEDWIN DIAGNOSTICS</div>
            <div className="font-mono text-xs tracking-widest text-gray-500 uppercase mb-6">Indore, Madhya Pradesh</div>
            <div className="border-t border-gray-200 pt-6 text-gray-600 text-sm leading-relaxed">
              "Accurate diagnosis is the first step to healing. We are committed to getting it right, every time."
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">What We Stand For</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={24} className="text-red-600" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Our Experts</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">Meet the <span className="text-red-600">Team</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl border border-gray-100 shadow-sm card-hover overflow-hidden">
                <div className="bg-gray-900 h-40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-2xl">
                    {member.name.split(' ')[1][0]}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-gray-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-red-600 font-mono text-xs tracking-widest uppercase mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Book Your <span className="text-red-600">Appointment?</span></h2>
          <p className="text-gray-400 mb-8">Experience accurate diagnostics with a team that cares.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointment" className="btn-primary px-8 py-4 rounded-lg text-sm">Book Appointment</a>
            <a href="tel:+917314567890" className="btn-outline px-8 py-4 rounded-lg text-sm">Call Now</a>
          </div>
        </div>
      </section>

    </div>
  )
}