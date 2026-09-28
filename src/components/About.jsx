import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="a-propos" className="bg-[#1A1A1A] py-20 md:py-28 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Image — Gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src="/images/bourak-beauty-hero.jpeg"
                alt="Intérieur du salon Bourak Beauty"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>

            {/* Cadre doré décoratif */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#C9A961] rounded-lg -z-10 hidden md:block"
            />
          </motion.div>

          {/* Texte — Droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-light inline-block"
            >
              — À Propos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#F5F1EA] mt-4 mb-6"
            >
              Bourak Beauty
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#F5F1EA]/70 leading-relaxed mb-4 text-sm md:text-base"
            >
              Bienvenue chez Bourak Beauty, un salon de beauté dédié à la coiffure, au maquillage, à la beauté des mains et des pieds, à la beauté du regard et aux soins.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-[#F5F1EA]/70 leading-relaxed mb-8 text-sm md:text-base"
            >
              Depuis 2011, nous mettons notre passion au service de votre beauté, dans un cadre élégant et chaleureux.
            </motion.p>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#C9A961] mb-1">
                  2011
                </div>
                <div className="text-[#F5F1EA]/50 text-xs uppercase tracking-widest">
                  Depuis
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="border-l border-[#C9A961]/30 pl-8 md:pl-12"
              >
                <div className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#C9A961] mb-1">
                  5
                </div>
                <div className="text-[#F5F1EA]/50 text-xs uppercase tracking-widest">
                  Univers Beauté
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}