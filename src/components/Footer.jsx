import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/212616673340?text=Bonjour%20Bourak%20Beauty%2C%20je%20souhaite%20prendre%20rendez-vous';
const INSTAGRAM_URL = 'https://www.instagram.com/bourakbeauty';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-noir-soft border-t border-dore/15 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/images/bourak-beauty-logo.png"
              alt="Bourak Beauty"
              className="w-14 h-14 object-contain"
            />
            <div>
              <p className="font-playfair text-dore text-xl">Bourak Beauty</p>
              <p className="text-creme/50 text-xs uppercase tracking-[0.25em]">
                Salon · Depuis 2011
              </p>
            </div>
          </div>
          <p className="text-creme/60 text-sm leading-relaxed max-w-md">
            Salon de beauté dédié à la coiffure, au maquillage, à la beauté des
            mains et des pieds, à la beauté du regard et aux soins.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-dore text-sm uppercase tracking-widest mb-5">
            Navigation
          </h4>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-creme/60 hover:text-dore text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-dore text-sm uppercase tracking-widest mb-5">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creme/60 hover:text-dore text-sm flex items-center gap-2 transition-colors"
              >
                <FaWhatsapp /> 0616673340
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-creme/60 hover:text-dore text-sm flex items-center gap-2 transition-colors"
              >
                <FaInstagram /> @bourakbeauty
              </a>
            </li>
            <li className="text-creme/60 text-sm flex items-center gap-2">
              <FaMapMarkerAlt /> Rue el mouahidine n96
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-dore/10 text-center">
        <p className="text-creme/40 text-xs">
          © {new Date().getFullYear()} Bourak Beauty. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}