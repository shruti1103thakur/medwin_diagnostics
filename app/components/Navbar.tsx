'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'MRI Scan', href: '/services#mri' },
      { label: 'CT Scan', href: '/services#ct' },
      { label: 'Ultrasound / USG', href: '/services#usg' },
      { label: 'Colour Doppler', href: '/services#doppler' },
      { label: 'Digital X-Ray', href: '/services#xray' },
      { label: 'Pathology & Blood Tests', href: '/services#pathology' },
      { label: 'Echocardiography', href: '/services#echo' },
      { label: 'Mammography', href: '/services#mammo' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs font-mono py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Emergency CT & MRI — 24/7 Available
          </span>
          <span>Mon–Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 2:00 PM</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+917314567890" className="flex items-center gap-1 hover:underline">
            <Phone size={12} /> +91 731 456 7890
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl shadow-black/50'
            : 'bg-dark border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-primary flex items-center justify-center font-heading font-bold text-white text-lg group-hover:bg-primary-dark transition-colors">
              M
            </div>
            <div>
              <div className="font-heading font-bold text-white text-xl leading-none tracking-wide">
                MEDWIN
              </div>
              <div className="font-mono text-gray-muted text-[10px] tracking-[0.2em] uppercase">
                Diagnostics
              </div>
            </div>
          </Link> */}
          {/* Logo */}
<Link href="/" className="flex items-center gap-3 group">
  <img
    src="/logo.md.jpeg"
    alt="Medwin Diagnostics Logo"
    className="h-10 w-auto object-contain"
  />
  <div>
   
  </div>
</Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 font-mono text-sm font-medium tracking-wide text-gray-muted hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} />}
                </Link>
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-56 bg-dark-3 border border-white/10 rounded-lg shadow-xl shadow-black/50 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-body text-gray-muted hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-primary transition-all"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+917314567890" className="flex items-center gap-2 btn-outline px-4 py-2 rounded text-sm">
              <Phone size={14} /> Call Now
            </a>
            <Link href="/appointment" className="btn-primary px-5 py-2 rounded text-sm">
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-dark-2 border-t border-white/5 py-4 px-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 font-mono text-sm text-gray-muted hover:text-white border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-xs text-gray-light hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:+917314567890" className="btn-outline px-4 py-3 rounded text-sm text-center">
                <Phone size={14} className="inline mr-2" /> Call Now
              </a>
              <Link href="/appointment" className="btn-primary px-4 py-3 rounded text-sm text-center" onClick={() => setMobileOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}