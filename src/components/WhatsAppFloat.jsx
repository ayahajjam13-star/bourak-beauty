import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/212616673340?text=Bonjour%20Bourak%20Beauty%2C%20je%20souhaite%20prendre%20rendez-vous';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30"
      aria-label="Contacter sur WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </motion.a>
  );
}