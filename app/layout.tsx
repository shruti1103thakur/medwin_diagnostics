import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Medwin Diagnostics Indore | MRI, CT Scan, Ultrasound & Pathology',
  description: 'Medwin Diagnostics – Indore\'s premier diagnostic centre. Advanced MRI, CT Scan, Ultrasound, Doppler, X-Ray, Pathology & more. Accurate results, experienced radiologists.',
  keywords: 'MRI Scan Indore, CT Scan Indore, diagnostic centre Indore, Medwin Diagnostics, ultrasound Indore, pathology Indore',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark text-white font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}