import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const INSTAGRAM_URL = 'https://www.instagram.com/bourakbeauty';

export default function InstagramSection() {
  return (
    <section className="bg-noir-soft py-20 md:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaInstagram className="text-dore text-5xl mx-auto mb-6" />
          <h2 className="font-playfair text-3xl md:text-5xl text-creme mb-4">
            Suivez-nous sur Instagram
          </h2>
          <p className="text-creme/60 mb-8 max-w-lg mx-auto">
            Découvrez nos réalisations et notre univers beauté au quotidien.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-dore text-dore hover:bg-dore hover:text-noir px-8 py-4 text-xs uppercase tracking-widest transition-all duration-300"
          >
            <FaInstagram className="text-lg" />
            @bourakbeauty
          </a>
        </motion.div>
      </div>
    </section>
  );
}