import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  // HAIR
  { src: '/images/bourak-beauty-coiffure-lisse.jpeg', alt: 'Coiffure lisse chez Bourak Beauty', category: 'Coiffure' },
  { src: '/images/bourak-beauty-coloration-balayage.jpeg', alt: 'Coloration balayage chez Bourak Beauty', category: 'Coloration' },
  { src: '/images/bourak-beauty-chignon.jpeg', alt: 'Chignon élégant chez Bourak Beauty', category: 'Coiffure' },

  // MANUCURE
  { src: '/images/bourak-beauty-manucure-blanc-dore.jpeg', alt: 'Manucure blanc et doré chez Bourak Beauty', category: 'Manucure' },
  { src: '/images/bourak-beauty-manucure-nude.jpeg', alt: 'Manucure nude chez Bourak Beauty', category: 'Manucure' },
  { src: '/images/bourak-beauty-vernis-rouge.jpeg', alt: 'Vernis rouge chez Bourak Beauty', category: 'Manucure' },
  { src: '/images/bourak-beauty-pedicure-spa.jpeg', alt: 'Pédicure spa chez Bourak Beauty', category: 'Pédicure' },

  // MAKEUP MARIÉE
  { src: '/images/bourak-beauty-maquillage-mariee-lila.jpeg', alt: 'Maquillage mariée lila chez Bourak Beauty', category: 'Maquillage' },
  { src: '/images/bourak-beauty-maquillage-mariee-rouge.jpeg', alt: 'Maquillage mariée rouge chez Bourak Beauty', category: 'Maquillage' },
  { src: '/images/bourak-beauty-maquillage-mariee-blanche.jpeg', alt: 'Maquillage mariée blanche chez Bourak Beauty', category: 'Maquillage' },
  { src: '/images/bourak-beauty-maquillage-mariee-backstage.jpeg', alt: 'Maquillage mariée backstage chez Bourak Beauty', category: 'Maquillage' },
  { src: '/images/bourak-beauty-tangaft-caftan.jpeg', alt: 'Tangaft caftan doré chez Bourak Beauty', category: 'Tangaft' },
  { src: '/images/bourak-beauty-tangaft-story.jpeg', alt: 'Tangaft mariée chez Bourak Beauty', category: 'Tangaft' },

  // SOURCILS & CILS
  { src: '/images/bourak-beauty-cils-avant-apres.jpeg', alt: 'Sourcils et cils chez Bourak Beauty', category: 'Sourcils & cils' },

  // SOINS
  { src: '/images/bourak-beauty-soin-visage.jpeg', alt: 'Soin du visage chez Bourak Beauty', category: 'Soin visage' },
  { src: '/images/bourak-beauty-epilation.jpeg', alt: 'Épilation chez Bourak Beauty', category: 'Épilation' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galerie" className="bg-[#1A1A1A] py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-light">
            — Galerie
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#F5F1EA] mt-4 mb-4">
            Nos réalisations
          </h2>
          <p className="text-[#F5F1EA]/60 max-w-xl mx-auto text-sm md:text-base">
            Un aperçu de notre savoir-faire
          </p>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="mb-4 break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[#C9A961] text-xs uppercase tracking-widest">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-[#C9A961] text-3xl w-12 h-12 flex items-center justify-center hover:bg-[#C9A961]/10 rounded-full transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Fermer"
            >
              ×
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}