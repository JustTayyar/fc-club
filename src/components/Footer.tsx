import { FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import DecryptedText from './ui/DecryptedText';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/image/logo.png" alt="Logo" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(0,255,204,0.4)]" />
              <span className="font-orbitron font-bold text-lg tracking-tighter leading-none gradient-text"> İMİŞLİ PFK </span>
            </div>
            <p className="text-white/40 text-sm mb-8 leading-relaxed font-light tracking-wide uppercase">
              Azərbaycan futbolunun gələcəyi üçün çalışan peşəkar klub. Yeni nəsil ümidlər, tək hədəf: Qələbə.
            </p>
            <div className="flex gap-4">
              {[FaInstagram, FaFacebookF, FaXTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center border border-white/10 hover:border-primary/50 text-white/50 hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-orbitron text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white">Sürətli Keçid</h4>
             <ul className="space-y-4">
                {[
                  { name: 'Ana Səhifə', href: '/' },
                  { name: 'Klub Tarixi', href: '/history' },
                  { name: 'Bilet Al', href: '/tickets' },
                  { name: 'Fan Şop', href: '/fanshop' },
                  { name: 'Media', href: '/media' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-xs font-orbitron uppercase tracking-widest text-white/40 hover:text-primary transition-colors">{item.name}</Link>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-orbitron text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white">Xidmətlər</h4>
             <ul className="space-y-4">
                {[
                  { name: 'VİP Biletlər', href: '/tickets' },
                  { name: 'Akademiya', href: '/academy' },
                  { name: 'Sponsorluq', href: '/sponsorship' },
                  { name: 'Stadion Turu', href: '/stadium-tour' },
                  { name: 'Üzvlük', href: '/membership' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-xs font-orbitron uppercase tracking-widest text-white/40 hover:text-primary transition-colors">{item.name}</Link>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-orbitron text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white">Bizimlə Əlaqə</h4>
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <FaMapMarkerAlt className="text-primary mt-1" />
                   <div className="text-xs font-orbitron uppercase tracking-widest text-white/50 leading-relaxed">
                      İmişli ş., Heydər Əliyev pr. 104, Azərbaycan
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <FaPhoneAlt className="text-primary" />
                   <div className="text-xs font-orbitron uppercase tracking-widest text-white/50">
                      +994 50 123 45 67
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <FaEnvelope className="text-primary" />
                   <div className="text-xs font-orbitron uppercase tracking-widest text-white/50">
                      info@imisli-fc.az
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[10px] font-orbitron uppercase tracking-[0.2em] text-white/20">
              © {new Date().getFullYear()} İMİŞLİ PEŞƏKAR FUTBOL KOMANDASI. Bütün hüquqlar qorunur.
           </div>
           <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">
              Dizayn: <span className="text-primary/60">Huseynov</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
