import { Star, Quote } from 'lucide-react'
import Link from 'next/link'

const testimonials = [
  {
    name: 'Rajesh Patel',
    role: 'Patient — Vijay Nagar, Indore',
    text: 'Professional team, excellent service, and accurate reports delivered on time. I was very impressed with the efficiency and care shown by the entire staff.',
    rating: 5,
    test: 'MRI Scan',
  },
  {
    name: 'Dr. Sunita Sharma',
    role: 'Referring Physician — Indore',
    text: 'Highly recommended diagnostic center with modern facilities and caring staff. I regularly refer my patients here and they always come back satisfied.',
    rating: 5,
    test: 'Multiple Referrals',
  },
  {
    name: 'Meena Joshi',
    role: 'Patient — Palasia, Indore',
    text: 'The entire experience was smooth, efficient, and comfortable. From registration to report delivery, everything was handled professionally.',
    rating: 5,
    test: 'Ultrasound & Blood Tests',
  },
  {
    name: 'Amit Verma',
    role: 'Patient — Scheme 54, Indore',
    text: 'Got my CT scan done here. The technicians were highly skilled and the report was ready within 2 hours. Excellent diagnostic centre in Indore.',
    rating: 5,
    test: 'CT Scan',
  },
  {
    name: 'Priya Malhotra',
    role: 'Patient — Vijay Nagar, Indore',
    text: 'Very affordable pricing compared to other centres. The staff was extremely helpful and the facility was spotlessly clean. Highly recommended!',
    rating: 5,
    test: 'Pathology & Blood Tests',
  },
  {
    name: 'Dr. Rakesh Gupta',
    role: 'Cardiologist — Indore',
    text: 'The echocardiography reports from Medwin are always detailed and accurate. I trust their reports completely for my cardiac patients.',
    rating: 5,
    test: 'Echocardiography',
  },
  {
    name: 'Sanjay Tiwari',
    role: 'Patient — Rau, Indore',
    text: 'Emergency MRI at midnight and the staff was extremely cooperative. 24/7 availability is a true lifesaver. Thank you Medwin team!',
    rating: 5,
    test: 'Emergency MRI',
  },
  {
    name: 'Kavita Singh',
    role: 'Patient — Nipania, Indore',
    text: 'The mammography was done with great care and sensitivity. Female staff made the entire experience comfortable. Reports were clear and detailed.',
    rating: 5,
    test: 'Mammography',
  },
  {
    name: 'Rohit Sharma',
    role: 'Patient — AB Road, Indore',
    text: 'Booked appointment online, got confirmed in 20 minutes, report on WhatsApp in 3 hours. This is how diagnostics should work. Brilliant service!',
    rating: 5,
    test: 'Digital X-Ray',
  },
]

const highlights = [
  { number: '50,000+', label: 'Happy Patients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '99%', label: 'Recommend Us' },
  { number: '15+', label: 'Years Trusted' },
]

export default function TestimonialsPage() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
      <section className="relative text-white py-24 px-4 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(204,0,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Patient Testimonials</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="text-red-500">Patients Say</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real stories from real patients — see why thousands trust Medwin Diagnostics for their healthcare needs.
          </p>
          {/* Stars */}
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className="text-red-500 fill-red-500" />
            ))}
          </div>
          <p className="text-gray-400 font-mono text-sm mt-2 tracking-widest">4.9 / 5 — Based on 500+ reviews</p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-red-600 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {highlights.map((h) => (
            <div key={h.label}>
              <div className="font-heading text-4xl md:text-5xl font-bold mb-2">{h.number}</div>
              <div className="font-mono text-xs tracking-widest uppercase opacity-90">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured 3 */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">Top Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              Patient <span className="text-red-600">Highlights</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <Quote size={18} className="text-red-600" />
                </div>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white text-lg flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-400 font-mono text-xs mt-0.5">{t.role}</p>
                    <span className="inline-block mt-1 font-mono text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      {t.test}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-badge justify-center mb-4">More Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              More Patient <span className="text-red-600">Stories</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(3).map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-heading font-bold text-white flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 font-mono text-xs">{t.role}</p>
                    <span className="inline-block mt-1 font-mono text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      {t.test}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} className="text-red-500 fill-red-500" />
            ))}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
            Had a Great Experience?
          </h2>
          <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto">
            Share your experience with others and help us serve our community better. Book your next appointment or reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="btn-primary px-8 py-4 rounded-lg text-sm"
            >
              Book Appointment
            </Link>
            
             <a href="https://wa.me/916260475501"
              target="_blank"
              className="border-2 border-white text-white font-mono font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Share on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}