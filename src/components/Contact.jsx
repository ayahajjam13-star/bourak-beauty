import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/212616673340?text=Bonjour%20Bourak%20Beauty%2C%20je%20souhaite%20prendre%20rendez-vous';
const INSTAGRAM_URL = 'https://www.instagram.com/bourakbeauty';

export default function Contact() {
  return (
    <section id="contact" className="bg-noir py-20 md:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-dore text-xs uppercase tracking-[0.3em] font-light">
            — Contact
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-creme mt-4 mb-4">
            Prenez rendez-vous
          </h2>
          <p className="text-creme/60 max-w-xl mx-auto text-sm md:text-base">
            Contactez-nous directement sur WhatsApp
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-dore/20 hover:border-dore p-8 text-center transition-all duration-500 group"
          >
            <FaWhatsapp className="text-dore text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-playfair text-xl text-creme mb-2">WhatsApp</h3>
            <p className="text-creme/60 text-sm">0616673340</p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-dore/20 hover:border-dore p-8 text-center transition-all duration-500 group"
          >
            <FaInstagram className="text-dore text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-playfair text-xl text-creme mb-2">Instagram</h3>
            <p className="text-creme/60 text-sm">@bourakbeauty</p>
          </motion.a>

          {/* Adresse */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-dore/20 p-8 text-center"
          >
            <FaMapMarkerAlt className="text-dore text-4xl mx-auto mb-4" />
            <h3 className="font-playfair text-xl text-creme mb-2">Adresse</h3>
            <p className="text-creme/60 text-sm">Rue el mouahidine n96</p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-dore text-noir px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-dore-light transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            Prendre rendez-vous sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}