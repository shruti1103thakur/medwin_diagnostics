'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown, FileText, Mail } from 'lucide-react'

type NavChild =
  | { section: string; label?: undefined; href?: undefined }
  | { label: string; href: string; section?: undefined }

type NavLink = {
  label: string
  href: string
  children?: NavChild[]
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { section: 'IMAGING' },
      { label: 'CT Scan', href: '/services/ct-scan' },
      { label: 'Denta Scan', href: '/services/denta-scan' },
      { label: 'Ultrasound / USG', href: '/services/ultrasound' },
      { label: 'Liver Elastography (FibroScan)', href: '/services/liver-elastography' },
      { label: 'Colour Doppler', href: '/services/colour-doppler' },
      { label: 'Digital X-Ray', href: '/services/digital-xray' },
      { section: 'LAB & PROCEDURES' },
      { label: 'Pathology & Blood Tests', href: '/services/pathology' },
      { label: 'FNAC & Biopsy', href: '/services/fnac-biopsy' },
    ],
  },
  {
    label: 'Health Packages',
    href: '/packages',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Choose Medwin', href: '/why-choose-us' },
      { label: 'Quality & Technology', href: '/quality' },
      { label: 'Patient Testimonials', href: '/testimonials' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  { label: 'Online Reports', href: '/reports' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between bg-red-700 text-white text-xs font-mono py-2 px-6">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
            Emergency — 24/7 Available
          </span>
          <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="tel:+916260475501" className="flex items-center gap-1.5 hover:underline">
            <Phone size={12} /> +91 6260475501
          </a>
          <a href="mailto:dr.ritubansalgynac@gmail.com" className="flex items-center gap-1.5 hover:underline">
            <Mail size={12} /> dr.ritubansalgynac@gmail.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-white'
        } border-b border-gray-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.md.jpeg"
              alt="Medwin Diagnostics"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 font-mono text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                >
                  {link.label === 'Online Reports' && (
                    <FileText size={14} className="mr-0.5" />
                  )}
                  {link.label}
                  {link.children && (
                    <ChevronDown size={13} className="text-gray-400 ml-0.5" />
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl shadow-black/10 py-2 z-50 mt-1">
                    {link.children.map((child, i) => {
                      if ('section' in child && child.section) {
                        return (
                          <div
                            key={`section-${i}`}
                            className="px-4 pt-3 pb-1 text-[9px] tracking-[0.2em] text-red-500 font-mono font-semibold"
                          >
                            {child.section}
                          </div>
                        )
                      }
                      return (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="flex items-center px-4 py-2 text-sm font-mono text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l-2 border-transparent hover:border-red-600 transition-all"
                        >
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* <a href="tel:+916260475501"
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm font-mono text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
            >
              <Phone size={14} /> Call Now
            </a> */}
            <Link
              href="/appointment"
              className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-mono font-semibold transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-3 px-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                <div className="flex items-center justify-between border-b border-gray-100">
                  <Link
                    href={link.href}
                    className="flex-1 py-3 font-mono text-sm text-gray-700 hover:text-gray-900"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      className="py-3 px-3 text-gray-400"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.label ? null : link.label
                        )
                      }
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          mobileExpanded === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.children && mobileExpanded === link.label && (
                  <div className="pl-4 pb-2 bg-gray-50 rounded-lg my-1">
                    {link.children.map((child, i) => {
                      if ('section' in child && child.section) {
                        return (
                          <div
                            key={`section-${i}`}
                            className="pt-2 pb-1 text-[9px] tracking-[0.2em] text-red-500 font-mono font-semibold"
                          >
                            {child.section}
                          </div>
                        )
                      }
                      return (
                        <Link
                          key={child.href}
                          href={child.href!}
                          className="block py-2 text-sm font-mono text-gray-600 hover:text-red-600 transition-colors border-l-2 border-transparent hover:border-red-600 pl-2"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-4 flex flex-col gap-2 pb-2">
              <a href="tel:+916260475501"
                className="flex items-center justify-center gap-2 py-3 border border-gray-300 rounded text-sm font-mono text-gray-700 hover:text-gray-900"
              >
                <Phone size={14} /> +91 6260475501
              </a>
              <Link
                href="/appointment"
                className="py-3 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-mono font-semibold text-center transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}


// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Phone, Menu, X, ChevronDown, FileText, Mail } from 'lucide-react'

// type NavChild =
//   | { section: string; label?: undefined; href?: undefined }
//   | { label: string; href: string; section?: undefined }

// type NavLink = {
//   label: string
//   href: string
//   children?: NavChild[]
// }

// const navLinks: NavLink[] = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'Services',
//     href: '/services',
//     children: [
//       { section: 'IMAGING' },
   
//       { label: 'CT Scan', href: '/services/ct-scan' },
//       { label: 'Denta Scan', href: '/services/denta-scan' },
//       { label: 'Ultrasound / USG', href: '/services/ultrasound' },
//       { label: 'Liver Elastography (FibroScan)', href: '/services/liver-elastography' },
//       { label: 'Colour Doppler', href: '/services/colour-doppler' },
//       { label: 'Digital X-Ray', href: '/services/digital-xray' },
    
//       { section: 'LAB & PROCEDURES' },
//       { label: 'Pathology & Blood Tests', href: '/services/pathology' },
//       { label: 'FNAC & Biopsy', href: '/services/fnac-biopsy' },
//     ],
//   },
//   {
//     label: 'Health Packages',
//     href: '/packages',
//     // children: [ 
//     //   { label: 'Preventive Health Checkups', href: '/packages/preventive' },
//     //   { label: 'Cardiac Package', href: '/packages/cardiac' },
//     //   { label: "Women's Wellness", href: '/packages/women' },
//     //   { label: "Men's Wellness", href: '/packages/men' },
//     // ],
//   },
//   {
//     label: 'About',
//     href: '/about',
//     children: [
//       { label: 'About Us', href: '/about' },
//       { label: 'Why Choose Medwin', href: '/why-choose-us' },
//       { label: 'Quality & Technology', href: '/quality' },
//       { label: 'Patient Testimonials', href: '/testimonials' },
//       { label: 'Gallery', href: '/gallery' },
//     ],
//   },
//   { label: 'Online Reports', href: '/reports' },
//   { label: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Top bar */}
//       <div className="hidden md:flex items-center justify-between bg-red-700 text-white text-xs font-mono py-2 px-6">
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-1.5">
//             <span className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
//             Emergency  — 24/7 Available
//           </span>
//           <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
//         </div>
//         <div className="flex items-center gap-5">
//           <a href="tel:+916260475501" className="flex items-center gap-1.5 hover:underline">
//             <Phone size={12} /> +91 6260475501
//           </a>
//           <a href="mailto:dr.ritubansalgynac@gmail.com" className="flex items-center gap-1.5 hover:underline">
//             <Mail size={12} /> dr.ritubansalgynac@gmail.com
//           </a>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl shadow-black/50'
//           : 'bg-gray-900'
//         } border-b border-white/5`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <img
//               src="/logo.md.jpeg"
//               alt="Medwin Diagnostics"
//               className="h-12 w-auto object-contain"
//             />
//             <div>
//               {/* <div className="font-heading font-bold text-white text-xl leading-none tracking-widest">
//                 MEDWIN
//               </div>
//               <div className="font-mono text-gray-400 text-[10px] tracking-[0.2em] uppercase">
//                 Diagnostics · Indore
//               </div> */}
//             </div>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center gap-0.5">
//             {navLinks.map((link) => (
//               <div
//                 key={link.href}
//                 className="relative"
//                 onMouseEnter={() => link.children && setActiveDropdown(link.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 px-3 py-2 font-mono text-xs font-medium tracking-wide text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
//                 >
//                   {link.label === 'Online Reports' && (
//                     <FileText size={12} className="mr-0.5" />
//                   )}
//                   {link.label}
//                   {link.children && (
//                     <ChevronDown size={12} className="text-gray-500 ml-0.5" />
//                   )}
//                 </Link>

//                 {link.children && activeDropdown === link.label && (
//                   <div className="absolute top-full left-0 w-64 bg-gray-800 border border-white/10 rounded-lg shadow-2xl shadow-black/60 py-2 z-50 mt-1">
//                     {link.children.map((child, i) => {
//                       if ('section' in child && child.section) {
//                         return (
//                           <div
//                             key={`section-${i}`}
//                             className="px-4 pt-3 pb-1 text-[9px] tracking-[0.2em] text-red-500 font-mono font-semibold"
//                           >
//                             {child.section}
//                           </div>
//                         )
//                       }
//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href!}
//                           className="flex items-center px-4 py-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-red-600 transition-all"
//                         >
//                           {child.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center gap-2">
//             <a
//               href="tel:+916260475501"
//               className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded text-xs font-mono text-gray-300 hover:bg-white/5 hover:text-white transition-all"
//             >
//               <Phone size={13} /> Call Now
//             </a>
//             <Link
//               href="/appointment"
//               className="flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-mono font-semibold transition-colors"
//             >
//               Book Appointment
//             </Link>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-gray-800 border-t border-white/5 py-3 px-4 max-h-[80vh] overflow-y-auto">
//             {navLinks.map((link) => (
//               <div key={link.href}>
//                 <div className="flex items-center justify-between border-b border-white/5">
//                   <Link
//                     href={link.href}
//                     className="flex-1 py-3 font-mono text-sm text-gray-300 hover:text-white"
//                     onClick={() => !link.children && setMobileOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                   {link.children && (
//                     <button
//                       className="py-3 px-3 text-gray-500"
//                       onClick={() =>
//                         setMobileExpanded(
//                           mobileExpanded === link.label ? null : link.label
//                         )
//                       }
//                     >
//                       <ChevronDown
//                         size={14}
//                         className={`transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {link.children && mobileExpanded === link.label && (
//                   <div className="pl-4 pb-2 bg-gray-900/50 rounded-lg my-1">
//                     {link.children.map((child, i) => {
//                       if ('section' in child && child.section) {
//                         return (
//                           <div
//                             key={`section-${i}`}
//                             className="pt-2 pb-1 text-[9px] tracking-[0.2em] text-red-500 font-mono font-semibold"
//                           >
//                             {child.section}
//                           </div>
//                         )
//                       }
//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href!}
//                           className="block py-2 text-xs font-mono text-gray-400 hover:text-red-400 transition-colors border-l-2 border-transparent hover:border-red-600 pl-2"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {child.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div className="mt-4 flex flex-col gap-2 pb-2">
//               <a
//                 href="tel:+916260475501"
//                 className="flex items-center justify-center gap-2 py-3 border border-white/20 rounded text-sm font-mono text-gray-300 hover:text-white"
//               >
//                 <Phone size={14} /> +91 6260475501
//               </a>
//               <Link
//                 href="/appointment"
//                 className="py-3 bg-red-600 hover:bg-red-700 text-white rounded text-sm font-mono font-semibold text-center transition-colors"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }

// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Phone, Menu, X, ChevronDown, FileText, Mail } from 'lucide-react'

// const navLinks = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'Services',
//     href: '/services',
//     children: [
//       { section: 'IMAGING' },
//       { label: 'MRI Scan', href: '/services#mri' },
//       { label: 'CT Scan', href: '/services#ct' },
//       { label: 'Denta Scan', href: '/services#denta' },
//       { label: 'Ultrasound / USG', href: '/services#usg' },
//       { label: 'Liver Elastography (FibroScan)', href: '/services#fibroscan' },
//       { label: 'Color Doppler', href: '/services#doppler' },
//       { label: 'Digital X-Ray', href: '/services#xray' },
//       { label: 'Echocardiography', href: '/services#echo' },
//       { label: 'Mammography', href: '/services#mammo' },
//       { section: 'LAB & PROCEDURES' },
//       { label: 'Pathology & Blood Tests', href: '/services#pathology' },
//       { label: 'FNAC & Biopsy', href: '/services#fnac' },
//     ],
//   },
//   {
//     label: 'Health Packages',
//     href: '/packages',
//     children: [
//       { label: 'Preventive Health Checkups', href: '/packages#preventive' },
//       { label: 'Cardiac Package', href: '/packages#cardiac' },
//       { label: "Women's Wellness", href: '/packages#women' },
//       { label: "Men's Wellness", href: '/packages#men' },
//     ],
//   },
//   {
//     label: 'About',
//     href: '/about',
//     children: [
//       { label: 'About Us', href: '/about' },
//       { label: 'Why Choose Medwin', href: '/about#why' },
//       { label: 'Quality & Technology', href: '/about#quality' },
//       { label: 'Patient Testimonials', href: '/about#testimonials' },
//       { label: 'Gallery', href: '/gallery' },
//     ],
//   },
//   { label: 'Online Reports', href: '/reports' },
//   { label: 'Contact', href: '/contact' },
// ]

// type NavChild =
//   | { section: string; label?: undefined; href?: undefined }
//   | { label: string; href: string; section?: undefined }

// type NavLink = {
//   label: string
//   href: string
//   children?: NavChild[]
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Top bar */}
//       <div className="hidden md:flex items-center justify-between bg-red-700 text-white text-xs font-mono py-2 px-4">
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-1.5">
//             <span className="w-1.5 h-1.5 rounded-full bg-red-300 animate-pulse" />
//             Emergency CT & MRI — 24/7 Available
//           </span>
//           <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <a href="tel:+917314567890" className="flex items-center gap-1 hover:underline">
//             <Phone size={12} /> +91 731 456 7890
//           </a>
//           <a href="mailto:info@medwindiagnostics.com" className="flex items-center gap-1 hover:underline">
//             <Mail size={12} /> info@medwindiagnostics.com
//           </a>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-gray-900/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50'
//             : 'bg-gray-900 border-b border-white/5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[60px]">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="w-9 h-9 rounded-md bg-red-700 flex items-center justify-center font-bold text-white text-base group-hover:bg-red-800 transition-colors">
//               M
//             </div>
//             <div>
//               <div className="font-bold text-white text-[15px] leading-none tracking-widest">
//                 MEDWIN
//               </div>
//               <div className="font-mono text-gray-500 text-[9px] tracking-[0.18em] uppercase">
//                 Diagnostics
//               </div>
//             </div>
//           </Link>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center gap-0.5">
//             {(navLinks as NavLink[]).map((link) => (
//               <div
//                 key={link.href}
//                 className="relative group"
//                 onMouseEnter={() => link.children && setActiveDropdown(link.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 px-3 py-2 font-mono text-xs font-medium tracking-wide text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
//                 >
//                   {link.label === 'Online Reports' && (
//                     <FileText size={13} className="mr-0.5" />
//                   )}
//                   {link.label}
//                   {link.children && <ChevronDown size={12} className="text-gray-500" />}
//                 </Link>

//                 {link.children && activeDropdown === link.label && (
//                   <div className="absolute top-full left-0 w-60 bg-gray-800 border border-white/10 rounded-lg shadow-2xl shadow-black/50 py-1.5 z-50 mt-1">
//                     {link.children.map((child, i) => {
//                       if ('section' in child && child.section) {
//                         return (
//                           <div
//                             key={`section-${i}`}
//                             className="px-3 pt-3 pb-1 text-[9px] tracking-[0.15em] text-gray-500 font-mono"
//                           >
//                             {child.section}
//                           </div>
//                         )
//                       }
//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href!}
//                           className="flex items-center px-3 py-2 text-xs font-mono text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-red-600 transition-all mx-1.5 rounded-sm"
//                         >
//                           {child.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="hidden md:flex items-center gap-2">
            
//             <a  href="tel:+917314567890"
//               className="flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded text-xs font-mono text-gray-300 hover:bg-white/5 hover:text-white transition-all"
//             >
//               <Phone size={13} /> Call Now
//             </a>
//             <Link
//               href="/appointment"
//               className="flex items-center gap-2 px-4 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-mono font-semibold transition-colors"
//             >
//               Book Appointment
//             </Link>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-gray-800 border-t border-white/5 py-3 px-4">
//             {(navLinks as NavLink[]).map((link) => (
//               <div key={link.href}>
//                 <div className="flex items-center justify-between">
//                   <Link
//                     href={link.href}
//                     className="flex-1 py-3 font-mono text-sm text-gray-400 hover:text-white border-b border-white/5"
//                     onClick={() => !link.children && setMobileOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                   {link.children && (
//                     <button
//                       className="py-3 px-2 text-gray-500 border-b border-white/5"
//                       onClick={() =>
//                         setMobileExpanded(
//                           mobileExpanded === link.label ? null : link.label
//                         )
//                       }
//                     >
//                       <ChevronDown
//                         size={14}
//                         className={`transition-transform ${
//                           mobileExpanded === link.label ? 'rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {link.children && mobileExpanded === link.label && (
//                   <div className="pl-4 pb-2">
//                     {link.children.map((child, i) => {
//                       if ('section' in child && child.section) {
//                         return (
//                           <div
//                             key={`section-${i}`}
//                             className="pt-2 pb-1 text-[9px] tracking-[0.15em] text-gray-500 font-mono"
//                           >
//                             {child.section}
//                           </div>
//                         )
//                       }
//                       return (
//                         <Link
//                           key={child.href}
//                           href={child.href!}
//                           className="block py-2 text-xs font-mono text-gray-400 hover:text-red-400 transition-colors"
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           — {child.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             ))}

//             <div className="mt-4 flex flex-col gap-2">
              
//                 <a href="tel:+917314567890"
//                 className="flex items-center justify-center gap-2 py-3 border border-white/15 rounded text-sm font-mono text-gray-300"
//               >
//                 <Phone size={14} /> Call Now
//               </a>
//               <Link
//                 href="/appointment"
//                 className="py-3 bg-red-700 hover:bg-red-800 text-white rounded text-sm font-mono font-semibold text-center transition-colors"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }

// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { Phone, Menu, X, ChevronDown } from 'lucide-react'

// const navLinks = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'Services',
//     href: '/services',
//     children: [
//       { label: 'MRI Scan', href: '/services#mri' },
//       { label: 'CT Scan', href: '/services#ct' },
//       { label: 'Ultrasound / USG', href: '/services#usg' },
//       { label: 'Colour Doppler', href: '/services#doppler' },
//       { label: 'Digital X-Ray', href: '/services#xray' },
//       { label: 'Pathology & Blood Tests', href: '/services#pathology' },
//       { label: 'Echocardiography', href: '/services#echo' },
//       { label: 'Mammography', href: '/services#mammo' },
//     ],
//   },
//   { label: 'About Us', href: '/about' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'Contact', href: '/contact' },
// ]

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Top bar */}
//       <div className="bg-primary text-white text-xs font-mono py-2 px-4 hidden md:flex items-center justify-between">
//         <div className="flex items-center gap-6">
//           <span className="flex items-center gap-1.5">
//             <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
//             Emergency CT & MRI — 24/7 Available
//           </span>
//           <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <a href="tel:+917314567890" className="flex items-center gap-1 hover:underline">
//             <Phone size={12} /> +91 731 456 7890
//           </a>
//         </div>
//       </div>

//       {/* Main nav */}
//       <nav
//         className={`sticky top-0 z-50 transition-all duration-300 ${
//           scrolled
//             ? 'bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50'
//             : 'bg-dark border-b border-white/5'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           {/* <Link href="/" className="flex items-center gap-3 group">
//             <div className="w-10 h-10 rounded bg-primary flex items-center justify-center font-heading font-bold text-white text-lg group-hover:bg-primary-dark transition-colors">
//               M
//             </div>
//             <div>
//               <div className="font-heading font-bold text-white text-xl leading-none tracking-wide">
//                 MEDWIN
//               </div>
//               <div className="font-mono text-gray-muted text-[10px] tracking-[0.2em] uppercase">
//                 Diagnostics
//               </div>
//             </div>
//           </Link> */}
//           {/* Logo */}
// <Link href="/" className="flex items-center gap-3 group">
//   <img
//     src="/logo.md.jpeg"
//     alt="Medwin Diagnostics Logo"
//     className="h-10 w-auto object-contain"
//   />
//   <div>
   
//   </div>
// </Link>

//           {/* Desktop links */}
//           <div className="hidden md:flex items-center gap-1">
//             {navLinks.map((link) => (
//               <div
//                 key={link.href}
//                 className="relative group"
//                 onMouseEnter={() => link.children && setActiveDropdown(link.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   href={link.href}
//                   className="flex items-center gap-1 px-4 py-2 font-mono text-sm font-medium tracking-wide text-gray-muted hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
//                 >
//                   {link.label}
//                   {link.children && <ChevronDown size={14} />}
//                 </Link>
//                 {link.children && activeDropdown === link.label && (
//                   <div className="absolute top-full left-0 w-56 bg-dark-3 border border-white/10 rounded-lg shadow-xl shadow-black/50 py-2 z-50">
//                     {link.children.map((child) => (
//                       <Link
//                         key={child.href}
//                         href={child.href}
//                         className="block px-4 py-2.5 text-sm font-body text-gray-muted hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-primary transition-all"
//                       >
//                         {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <a href="tel:+917314567890" className="flex items-center gap-2 btn-outline px-4 py-2 rounded text-sm">
//               <Phone size={14} /> Call Now
//             </a>
//             <Link href="/appointment" className="btn-primary px-5 py-2 rounded text-sm">
//               Book Appointment
//             </Link>
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="md:hidden text-white p-2"
//             onClick={() => setMobileOpen(!mobileOpen)}
//           >
//             {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {mobileOpen && (
//           <div className="md:hidden bg-dark-2 border-t border-white/5 py-4 px-4">
//             {navLinks.map((link) => (
//               <div key={link.href}>
//                 <Link
//                   href={link.href}
//                   className="block py-3 font-mono text-sm text-gray-muted hover:text-white border-b border-white/5"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   {link.label}
//                 </Link>
//                 {link.children && (
//                   <div className="pl-4">
//                     {link.children.map((child) => (
//                       <Link
//                         key={child.href}
//                         href={child.href}
//                         className="block py-2 text-xs text-gray-light hover:text-primary"
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         — {child.label}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             <div className="mt-4 flex flex-col gap-3">
//               <a href="tel:+917314567890" className="btn-outline px-4 py-3 rounded text-sm text-center">
//                 <Phone size={14} className="inline mr-2" /> Call Now
//               </a>
//               <Link href="/appointment" className="btn-primary px-4 py-3 rounded text-sm text-center" onClick={() => setMobileOpen(false)}>
//                 Book Appointment
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }