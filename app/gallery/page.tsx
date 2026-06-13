'use client'
import { useState } from 'react'

export default function GalleryPage() {
  const categories = ['All', 'MRI & CT', 'Ultrasound', 'Pathology Lab', 'Reception', 'Equipment']
  const [activeCategory, setActiveCategory] = useState('All')
  // const [lightbox, setLightbox] = useState(null)
  const [lightbox, setLightbox] = useState<{
  title: string;
  category: string;
  src: string;
} | null>(null);

  const images = [
    {
      title: 'MRI Machine',
      category: 'MRI & CT',
      src: 'MRI Machine.png',
    },
 
    {
      title: 'Ultrasound Room',
      category: 'Ultrasound',
      src: '/Ultrasound.png ',
    },
    {
      title: 'Pathology Lab',
      category: 'Pathology Lab',
      src: 'Pathology.png',
    },
    {
      title: 'Reception Area',
      category: 'Reception',
      src: 'Reception.png',
    },
 
       {
      title: 'CT Scanner',
      category: 'MRI & CT',
      src: 'ctscan.png',
    },
    {
      title: 'X-Ray Room',
      category: 'Equipment',
      src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
    },
    {
      title: 'Blood Test Lab',
      category: 'Pathology Lab',
      src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80',
    },
    {
      title: 'Echo Room',
      category: 'Equipment',
      src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
    },
    {
      title: 'Mammography Unit',
      category: 'Equipment',
      src: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&q=80',
    },
       {
      title: 'Waiting Lounge',
      category: 'Reception',
      src: 'Waiting.png',
    },
    {
      title: 'Doppler Lab',
      category: 'Ultrasound',
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    },
    {
      title: 'Doctor Cabin',
      category: 'Reception',
      src: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80',
    },
  ]

  const filtered =
    activeCategory === 'All'
      ? images
      : images.filter((img) => img.category === activeCategory)

  return (
    <div className="bg-white text-gray-800">

      {/* Hero */}
     <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/galleryimg.png"
          alt="Medwin Diagnostics Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - original image shows clearly */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="section-badge justify-center mb-4">Our Facility</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Photo <span className="text-red-500">Gallery</span>
          </h1>
          <p className="text-black font-bold text-lg max-w-2xl mx-auto">
            .
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-red-600 hover:text-red-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setLightbox(img)}
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white text-xs tracking-widest uppercase bg-red-600 px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-heading font-semibold text-gray-900">{img.title}</h3>
                  <p className="font-mono text-xs text-red-600 tracking-widest uppercase mt-1">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src.replace('w=600', 'w=1000')}
              alt={lightbox.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-gray-900 text-lg">{lightbox.title}</h3>
                <p className="font-mono text-xs text-red-600 tracking-widest uppercase mt-1">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="text-gray-400 hover:text-red-600 transition-colors font-mono text-xs tracking-widest uppercase border border-gray-200 rounded-full px-4 py-2 hover:border-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}


// export default function GalleryPage() {
//   const categories = ['All', 'MRI & CT', 'Ultrasound', 'Pathology Lab', 'Reception', 'Equipment']
  
//   const images = [
//     { title: 'MRI Machine', category: 'MRI & CT', color: 'bg-gray-200' },
//     { title: 'CT Scanner', category: 'MRI & CT', color: 'bg-gray-300' },
//     { title: 'Ultrasound Room', category: 'Ultrasound', color: 'bg-gray-200' },
//     { title: 'Pathology Lab', category: 'Pathology Lab', color: 'bg-gray-300' },
//     { title: 'Reception Area', category: 'Reception', color: 'bg-gray-200' },
//     { title: 'Waiting Lounge', category: 'Reception', color: 'bg-gray-300' },
//     { title: 'X-Ray Room', category: 'Equipment', color: 'bg-gray-200' },
//     { title: 'Blood Test Lab', category: 'Pathology Lab', color: 'bg-gray-300' },
//     { title: 'Echo Room', category: 'Equipment', color: 'bg-gray-200' },
//     { title: 'Mammography Unit', category: 'Equipment', color: 'bg-gray-300' },
//     { title: 'Doppler Lab', category: 'Ultrasound', color: 'bg-gray-200' },
//     { title: 'Doctor Cabin', category: 'Reception', color: 'bg-gray-300' },
//   ]

//   return (
//     <div className="bg-white text-gray-800">

//       {/* Hero */}
//       {/* Hero */}
// <section className="relative text-white py-20 px-4 overflow-hidden">
//   {/* Background image */}
//   <img
//     src="/galleryimg.png"
//     alt="Medwin Diagnostics Gallery"
//     className="absolute inset-0 w-full h-full object-cover"
//   />
//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/65" />
//   {/* Red gradient */}
//   <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

//   {/* Content */}
//   <div className="relative z-10 max-w-7xl mx-auto text-center">
//     <p className="section-badge justify-center mb-4">Our Facility</p>
//     <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
//       Photo <span className="text-red-500">Gallery</span>
//     </h1>
//     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//       Take a tour of our world-class diagnostic facility in Indore.
//     </p>
//   </div>
// </section>

//       {/* Gallery */}
//       <section className="py-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Filter tabs */}
//           <div className="flex flex-wrap gap-3 justify-center mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 className={`font-mono text-xs tracking-widest uppercase px-5 py-2 rounded-full border transition-all ${
//                   cat === 'All'
//                     ? 'bg-red-600 text-white border-red-600'
//                     : 'bg-white text-gray-600 border-gray-200 hover:border-red-600 hover:text-red-600'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {images.map((img, i) => (
//               <div key={i} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover">
//                 <div className={`${img.color} h-56 flex items-center justify-center relative`}>
//                   <div className="text-center">
//                     <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center mx-auto mb-3">
//                       <div className="w-8 h-8 rounded bg-red-600" />
//                     </div>
//                     <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">Photo Coming Soon</p>
//                   </div>
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
//                     <span className="opacity-0 group-hover:opacity-100 transition-opacity font-mono text-white text-xs tracking-widest uppercase bg-red-600 px-4 py-2 rounded-full">
//                       View
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-4 bg-white">
//                   <h3 className="font-heading font-semibold text-gray-900">{img.title}</h3>
//                   <p className="font-mono text-xs text-red-600 tracking-widest uppercase mt-1">{img.category}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }