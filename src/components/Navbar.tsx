import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Səhifə', href: '/' },
    { name: 'Klub Tarixi', href: '/history' },
    { name: 'Komanda', href: '/team' },
    { name: 'Oyunlar', href: '/matches' },
    { name: 'Xəbərlər', href: '/news' },
    { name: 'Əlaqə', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/60 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="flex items-center gap-3">
            <img src="/image/logo.png" alt="İmişli FC" className="rounded-full h-12 w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-orbitron font-bold text-xl tracking-tighter leading-none gradient-text"> İMİŞLİ PFK </span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className="font-orbitron text-sm uppercase tracking-widest text-white/70 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00ffcc]"></span>
              </Link>
            </motion.div>
          ))}
          <motion.div

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-linear-to-r from-primary to-accent rounded-full font-orbitron text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] transition-all active:scale-95"
          >
            <Link to="/tickets" className="inline-block px-6 py-2 bg-linear-to-r from-primary to-accent rounded-full font-orbitron text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] transition-all active:scale-95 text-bg">
              Bilet Al
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#030303] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden border-b border-white/10 relative z-50"
          >
            <div className="flex flex-col gap-6 p-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-orbitron text-lg uppercase tracking-widest text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/tickets" onClick={() => setIsOpen(false)} className="w-full py-4 bg-linear-to-r from-primary to-accent text-bg text-center rounded-xl font-orbitron font-bold uppercase tracking-widest">
                Bilet Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
