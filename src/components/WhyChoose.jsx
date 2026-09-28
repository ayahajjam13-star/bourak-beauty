import { motion } from 'framer-motion';
import { FaCut, FaHandSparkles, FaEye, FaSpa } from 'react-icons/fa';

const reasons = [
  {
    icon: FaCut,
    title: 'Coiffure & Coloration',
    text: 'Coloration, coupe, brushing, chignon et soin protéiné.',
  },
  {
    icon: FaHandSparkles,
    title: 'Mains & Pieds',
    text: 'Manucure, pédicure, vernis permanent, gel et acrylique.',
  },
  {
    icon: FaEye,
    title: 'Beauté du regard',
    text: 'Mise en valeur des cils pour un regard intense.',
  },
  {
    icon: FaSpa,
    title: 'Soins & Beauté',
    text: 'Épilation, soin du visage, massage et Tangaft.',
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-noir py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dore text-xs uppercase tracking-[0.3em] font-light">
            — Pourquoi nous choisir
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-creme mt-4 mb-4">
            Un savoir-faire complet
          </h2>
          <p className="text-creme/60 max-w-xl mx-auto text-sm md:text-base">
            De la coiffure au maquillage, tous vos besoins beauté au même endroit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-dore/15 hover:border-dore/40 transition-all duration-500 p-8 text-center"
              >
                <Icon className="text-dore text-4xl mx-auto mb-5" />
                <h3 className="font-playfair text-xl text-creme mb-3">
                  {reason.title}
                </h3>
                <p className="text-creme/60 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}