import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
    {/* Hero */}
<section className="relative text-white py-20 px-4 overflow-hidden">
  {/* Background image */}
  <img
    src="/contactimg.png"
    alt="Contact Medwin Diagnostics"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/65" />
  {/* Red gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <p className="section-badge justify-center mb-4">Get In Touch</p>
    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
      Contact <span className="text-red-500">Us</span>
    </h1>
    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
      Have a question or need to book an appointment? We're here to help.
    </p>
  </div>
</section>

      {/* Contact cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: 'Call Us', lines: ['+91 6260475501', '+91 6260475501'], action: 'tel:+91 6260475501' },
              { icon: Mail, title: 'Email Us', lines: ['dr.ritubansalgynac@gmail.com', 'dr.ritubansalgynac@gmail.com'], action: 'mailto:info@medwindiagnostics.com' },
              { icon: MapPin, title: 'Visit Us', lines: ['15/B, Ratlam Kothi, Near Hotel Omni Kalash, Main Road, Kanchanbaug Road, Indore-452001, Madhya Pradesh '],
action: '#map' },
              { icon: Clock, title: 'Working Hours', lines: ['Mon–Sat: 8AM – 9PM', 'Sun: 9AM – 2PM | Emergency 24/7'], action: null },
            ].map((card) => (
              <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm card-hover text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-5">
                  <card.icon size={24} className="text-red-600" />
                </div>
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid md:grid-cols-2 gap-12">

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <div className="space-y-5">
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Full Name</label>
                  <input type="text" placeholder="Your full name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors" />
                </div>
                <div>
                  <label className="block font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none" />
                </div>
                <button className="btn-primary w-full py-4 rounded-lg text-sm">Send Message</button>
              </div>
            </div>

            {/* Map placeholder */}
            <div id="map" className="bg-gray-100 rounded-2xl overflow-hidden min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-red-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-gray-900 text-xl mb-2">Find Us Here</h3>
                <p className="text-gray-500 text-sm mb-6">15/B, Ratlam Kothi, Near Hotel Omni Kalash,<br /> Main Road, Kanchanbaug Road ,Indore — 452001, Madhya Pradesh</p>
                
                  <a href="https://maps.google.com"
                  target="_blank"
                  className="btn-primary px-6 py-3 rounded-lg text-sm inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}