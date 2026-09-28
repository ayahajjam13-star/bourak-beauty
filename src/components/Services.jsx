import { motion } from 'framer-motion';

const services = [
  {
    id: 'coiffure',
    title: 'Coiffure',
    image: '/images/bourak-beauty-coiffure-lisse.jpeg',
    services: [
      'Spécialiste en coloration',
      'Coupe',
      'Brushing',
      'Coiffures',
      'Chignon',
      'Soin protéiné des cheveux',
    ],
  },
  {
    id: 'mains-pieds',
    title: 'Beauté des mains & pieds',
    image: '/images/bourak-beauty-manucure-blanc-dore.jpeg',
    services: [
      'Minicure',
      'Pédicure',
      'Vernis permanent',
      'Gel',
      'Acrylique',
    ],
  },
  {
    id: 'maquillage',
    title: 'Maquillage',
    image: '/images/bourak-beauty-maquillage-mariee-lila.jpeg',
    services: [
      'Make-up invité',
      'Make-up mariée',
    ],
  },
  {
    id: 'regard',
    title: 'Beauté du regard',
    image: '/images/bourak-beauty-cils-avant-apres.jpeg',
    services: [
      'Les cils',
    ],
  },
  {
    id: 'soins',
    title: 'Soins & Beauté',
    image: '/images/bourak-beauty-soin-visage.jpeg',
    services: [
      'Épilation',
      'Soin du visage',
      'Massage',
      'Tangaft',
    ],
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] border border-[#C9A961]/20 hover:border-[#C9A961]/60 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 relative">
        <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#C9A961] mb-6">
          {service.title}
        </h3>
        <ul className="space-y-2.5">
          {service.services.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#F5F1EA]/80 text-sm">
              <span className="text-[#C9A961] mt-1.5 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0D0D0D] py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-light">
            — Nos Services
          </span>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#F5F1EA] mt-4 mb-4">
            L'art de la beauté
          </h2>
          <p className="text-[#F5F1EA]/60 max-w-xl mx-auto text-sm md:text-base">
            Une gamme complète de soins pour sublimer votre beauté
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}