import { motion } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';

export default function MembershipPage() {
  return (
    <div className="pt-48 pb-24 relative min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-extrabold mb-4 uppercase tracking-tighter">
            Klub <span className="gradient-text">Üzvü Ol</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 uppercase tracking-[0.3em] font-light">
            Əsl azarkeşlər üçün imtiyaz dolu rəqəmsal kartlar
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="relative overflow-hidden p-10 rounded-[3rem] bg-linear-to-br from-black to-bg border border-white/10 shadow-[0_30px_60px_rgba(0,255,204,0.1)] group cursor-pointer"
           >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/30 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                       <FaCrown size={40} className="text-primary" />
                       <h3 className="font-orbitron font-black text-3xl uppercase tracking-widest text-primary">PRESTIGE</h3>
                    </div>
                    <ul className="space-y-4 mb-8">
                       <li className="text-white/70 font-light flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          Oyundan əvvəl VİP qapalı tədbirlərə çıxış
                       </li>
                       <li className="text-white/70 font-light flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          Bütün yeni formalarda pre-order haqqı
                       </li>
                       <li className="text-white/70 font-light flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                          Biletlərdə və Fan Şopda -20% Daimi Endirim
                       </li>
                    </ul>
                    <button className="px-8 py-3 bg-white/5 border border-primary text-primary hover:bg-primary hover:text-bg font-orbitron text-xs uppercase tracking-widest rounded-xl transition-all">
                       Müraciət Et
                    </button>
                 </div>
                 
                 <div className="w-full md:w-1/2 flex justify-center perspective-1000">
                    <div className="w-72 h-44 rounded-2xl bg-linear-to-r from-gray-900 to-black border border-white/20 p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(255,255,255,0.05)] transform rotate-y-[-10deg] rotate-x-[10deg] group-hover:rotate-y-[0deg] group-hover:rotate-x-[0deg] transition-transform duration-700">
                       <div className="flex justify-between items-start">
                          <img src="/image/logo.png" alt="Logo" className="w-8 h-8 opacity-80" />
                          <span className="font-orbitron font-bold text-[10px] tracking-widest text-white/50 uppercase">Prestige Card</span>
                       </div>
                       <div>
                          <div className="font-mono text-xl tracking-[0.2em] text-white/80 mb-1">0000 0000 0000 PFKX</div>
                          <div className="flex justify-between items-end">
                             <div className="font-orbitron text-xs font-bold text-white uppercase tracking-widest">AZARKEŞ ADI</div>
                             <div className="opacity-50">
                                <FaCrown size={20} className="text-primary"/>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
