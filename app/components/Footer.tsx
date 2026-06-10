import Link from 'next/link'
import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react'

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
)

export default function Footer() {
  const services = [
    { label: 'CT Scan',               href: '/ct-scan' },
    { label: 'Denta Scan',            href: '/denta-scan' },
    { label: 'Ultrasound / USG',      href: '/ultrasound' },
    { label: 'FibroScan',             href: '/fibroscan' },
    { label: 'Colour Doppler',        href: '/doppler' },
    { label: 'Digital X-Ray',         href: '/xray' },
    { label: 'Pathology & Lab Tests', href: '/laboratory' },
    { label: 'Health Packages',       href: '/packages' },
  ]

  const quickLinks = [
    { label: 'Home',             href: '/' },
    { label: 'About Us',         href: '/about' },
    { label: 'Online Reports',   href: '/reports' },
    { label: 'Health Packages',  href: '/packages' },
    { label: 'Book Appointment', href: '/appointment' },
    { label: 'Contact Us',       href: '/contact' },
  ]

  const socialLinks = [
    { icon: <FacebookIcon />,  href: '#', label: 'Facebook' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
    { icon: <YoutubeIcon />,   href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-dark-2 border-t border-white/5">

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          {/* <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded bg-primary flex items-center justify-center font-heading font-bold text-white text-lg">
                M
              </div>
              <div>
                <div className="font-heading font-bold text-white text-xl">MEDWIN</div>
                <div className="font-mono text-gray-muted text-[10px] tracking-[0.2em] uppercase">Diagnostics · Indore</div>
              </div>
            </div>
            <p className="text-gray-muted text-sm leading-relaxed mb-2">
              Advanced CT Scan · Denta Scan · Ultrasound · FibroScan · Color Doppler · Digital X-Ray · Pathology Services
            </p>
            <p className="text-primary font-mono text-xs tracking-wide mb-5">
              Accurate Diagnosis • Faster Results • Better Healthcare
            </p>
            <p className="text-gray-muted text-sm leading-relaxed mb-5">
              Providing trusted diagnostic services through advanced technology, experienced specialists, and compassionate patient care.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                
                <a  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div> */}
          {/* Brand */}
<div>
  <div className="flex items-center gap-3 mb-5">
    <img
      src="/logo.md.jpeg"
      alt="Medwin Diagnostics Logo"
      className="h-12 w-auto object-contain"
    />
  </div>
  <p className="text-gray-muted text-sm leading-relaxed mb-2">
    Advanced CT Scan · Denta Scan · Ultrasound · FibroScan · Color Doppler · Digital X-Ray · Pathology Services
  </p>
  <p className="text-primary font-mono text-xs tracking-wide mb-5">
    Accurate Diagnosis • Faster Results • Better Healthcare
  </p>
  <p className="text-gray-muted text-sm leading-relaxed mb-5">
    Providing trusted diagnostic services through advanced technology, experienced specialists, and compassionate patient care.
  </p>
  <div className="flex gap-3">
    {socialLinks.map((item) => (
      
     <a   key={item.label}
        href={item.href}
        aria-label={item.label}
        className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
      >
        {item.icon}
      </a>
    ))}
  </div>
</div>

          {/* Services */}
          <div>
            <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Our Services
            </h4>
            <ul className="space-y-2.5 mt-6">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center gap-2 text-sm text-gray-muted hover:text-primary transition-colors group"
                  >
                    <ArrowRight size={12} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-2.5 mt-6">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-gray-muted hover:text-primary transition-colors group"
                  >
                    <ArrowRight size={12} className="text-primary group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Contact Info
            </h4>
            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-muted">
                  15/B, Ratlam Kothi, Near Hotel Omni Kalash, Main Road, Kanchanbaug Road, Indore-452001, Madhya Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+916260475501" className="text-sm text-gray-muted hover:text-primary transition-colors">
                  +91 6260475501
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:dr.ritubansalgynac@gmail.com" className="text-sm text-gray-muted hover:text-primary transition-colors">
                  dr.ritubansalgynac@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-muted">
                  <p>Mon–Sat: 8:00 AM – 9:00 PM</p>
                  <p>Sunday: 9:00 AM – 2:00 PM</p>
                  <p className="text-primary font-mono text-xs mt-1">Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-muted font-mono">
          <span>© {new Date().getFullYear()} Medwin Diagnostics, Indore. All rights reserved.</span>
          <span>Designed for excellence in patient care.</span>
        </div>
      </div>

    </footer>
  )
}


// import Link from 'next/link'
// import { Phone, MapPin, Clock, Mail, ArrowRight } from 'lucide-react'

// const FacebookIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//   </svg>
// )

// const InstagramIcon = () => (
//   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={15} height={15}>
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//     <circle cx="12" cy="12" r="4"/>
//     <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
//   </svg>
// )

// const YoutubeIcon = () => (
//   <svg viewBox="0 0 24 24" fill="currentColor" width={15} height={15}>
//     <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
//     <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
//   </svg>
// )

// export default function Footer() {
//   const services = [
//     'MRI Scan', 'CT Scan', 'Ultrasound / USG', 'Colour Doppler',
//     'Digital X-Ray', 'Pathology & Blood Tests', 'Echocardiography', 'Mammography',
//   ]
//   const quickLinks = [
//     { label: 'About Us', href: '/about' },
//     { label: 'Our Services', href: '/services' },
//     { label: 'Book Appointment', href: '/appointment' },
//     { label: 'Gallery', href: '/gallery' },
//     { label: 'Contact Us', href: '/contact' },
//   ]
//   const socialLinks = [
//     { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
//     { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
//     { icon: <YoutubeIcon />, href: '#', label: 'YouTube' },
//   ]

//   return (
//     <footer className="bg-dark-2 border-t border-white/5">
//       {/* Main footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-5">
//               <div className="w-10 h-10 rounded bg-primary flex items-center justify-center font-heading font-bold text-white text-lg">M</div>
//               <div>
//                 <div className="font-heading font-bold text-white text-xl">MEDWIN</div>
//                 <div className="font-mono text-gray-muted text-[10px] tracking-[0.2em] uppercase">Diagnostics · Indore</div>
//               </div>
//             </div>
//             <p className="text-gray-muted text-sm leading-relaxed mb-5">
//               Indore's advanced diagnostic centre. Accurate reports, experienced radiologists, and compassionate patient care since 2010.
//             </p>
//             <div className="flex gap-3">
//               {socialLinks.map((item) => (
                
//                  <a key={item.label}
//                   href={item.href}
//                   aria-label={item.label}
//                   className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-muted hover:text-white hover:border-primary hover:bg-primary/10 transition-all"
//                 >
//                   {item.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
//               Our Services
//             </h4>
//             <ul className="space-y-2.5 mt-6">
//               {services.map((s) => (
//                 <li key={s}>
//                   <Link href="/services" className="flex items-center gap-2 text-sm text-gray-muted hover:text-primary transition-colors group">
//                     <ArrowRight size={12} className="text-primary group-hover:translate-x-1 transition-transform" />
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
//               Quick Links
//             </h4>
//             <ul className="space-y-2.5 mt-6">
//               {quickLinks.map((l) => (
//                 <li key={l.href}>
//                   <Link href={l.href} className="flex items-center gap-2 text-sm text-gray-muted hover:text-primary transition-colors group">
//                     <ArrowRight size={12} className="text-primary group-hover:translate-x-1 transition-transform" />
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-mono font-semibold text-white text-sm tracking-widest uppercase mb-5 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-primary">
//               Contact Info
//             </h4>
//             <ul className="space-y-4 mt-6">
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
//                 <span className="text-sm text-gray-muted">15/B, Ratlam Kothi, Near Hotel Omni Kalash, Main Road, Kanchanbaug Road, Indore-452001, Madhya Pradesh</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={16} className="text-primary flex-shrink-0" />
//                 <a href="tel:+917314567890" className="text-sm text-gray-muted hover:text-primary transition-colors">
//                   +91 6260475501
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={16} className="text-primary flex-shrink-0" />
//                 <a href="mailto:info@medwindiagnostics.com" className="text-sm text-gray-muted hover:text-primary transition-colors">
//                 dr.ritubansalgynac@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
//                 <div className="text-sm text-gray-muted">
//                   <p>Mon–Sat: 8:00 AM – 9:00 PM</p>
//                   <p>Sunday: 9:00 AM – 2:00 PM</p>
//                   <p className="text-primary font-mono text-xs mt-1">Emergency: 24/7</p>
//                 </div>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/5 py-5 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-muted font-mono">
//           <span>© {new Date().getFullYear()} Medwin Diagnostics, Indore. All rights reserved.</span>
//           <span>Designed for excellence in patient care.</span>
//         </div>
//       </div>
//     </footer>
//   )
// }