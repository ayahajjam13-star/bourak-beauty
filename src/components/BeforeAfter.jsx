import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// 2 TRANSFORMATIONS
const transformations = [
  {
    id: 1,
    title: 'Soin protéiné',
    description: 'Restauration capillaire en profondeur',
    before: '/images/bourak-beauty-avant-soin-proteine.jpeg',
    after: '/images/bourak-beauty-apres-soin-proteine.jpeg',
  },
  {
    id: 2,
    title: 'Coiffure & Lissage',
    description: 'Un résultat lisse et brillant',
    before: '/images/bourak-beauty-avant-soin-1.jpeg',
    after: '/images/bourak-beauty-coiffure-lisse.jpeg',
  },
];

function BeforeAfterSlider({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseMove = (e) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-lg select-none cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={handleTouchMove}
    >
      {/* APRÈS */}
      <img
        src={item.after}
        alt={`Après - ${item.title}`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* AVANT */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={item.before}
          alt={`Avant - ${item.title}`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : '100%',
          }}
          draggable="false"
        />
      </div>

      {/* Ligne + bouton */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#C9A961] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#C9A961] rounded-full flex items-center justify-center shadow-lg">
          <svg
            className="w-6 h-6 text-[#0D0D0D]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5l-5 7 5 7V5zm8 0v14l5-7-5-7z" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-[#0D0D0D]/80 text-[#C9A961] text-xs uppercase tracking-widest px-3 py-1.5 rounded backdrop-blur-sm">
        Avant
      </span>
      <span className="absolute top-4 right-4 bg-[#C9A961] text-[#0D0D0D] text-xs uppercase tracking-widest px-3 py-1.5 rounded font-semibold">
        Après
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="transformations" className="bg-[#0D0D0D] py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-light">
            — Transformations
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#F5F1EA] mt-4 mb-4">
            Avant & Après
          </h2>
          <p className="text-[#F5F1EA]/60 max-w-xl mx-auto text-sm md:text-base">
            Découvrez la différence de nos soins professionnels
          </p>
        </motion.div>

        {/* 2 Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <BeforeAfterSlider item={item} />
              <div className="mt-5 text-center">
                <h3 className="font-['Playfair_Display'] text-xl text-[#C9A961] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#F5F1EA]/50 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}