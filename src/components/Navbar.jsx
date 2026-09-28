import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#services', label: 'Services' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#contact', label: 'Contact' },
];

const WHATSAPP_URL = 'https://wa.me/212616673340?text=Bonjour%20Bourak%20Beauty%2C%20je%20souhaite%20prendre%20rendez-vous';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir/95 backdrop-blur-md py-3 shadow-lg shadow-dore/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src="/images/bourak-beauty-logo.png"
            alt="Bourak Beauty"
            className="w-12 h-12 object-contain"
          />
          <div className="leading-tight">
            <p className="font-playfair text-dore text-lg tracking-wide">
              Bourak Beauty
            </p>
            <p className="text-creme/50 text-[10px] uppercase tracking-[0.25em]">
              Salon · Depuis 2011
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-creme/80 hover:text-dore text-sm uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dore text-dore hover:bg-dore hover:text-noir px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300"
          >
            Rendez-vous
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-dore text-3xl"
          aria-label="Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-noir/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4 border-t border-dore/20">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-creme/80 hover:text-dore text-sm uppercase tracking-widest transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dore text-dore hover:bg-dore hover:text-noir px-5 py-2 text-xs uppercase tracking-widest transition-all text-center mt-2"
          >
            Rendez-vous
          </a>
        </div>
      </div>
    </nav>
  );
}