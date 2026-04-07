import { motion } from 'framer-motion';
import { FaChevronDown, FaPlay } from 'react-icons/fa';
import { GiSoccerBall, GiTrophyCup } from 'react-icons/gi';
import DecryptedText from './ui/DecryptedText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      
      {/* Giant Futuristic Football Watermark */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03, rotate: 360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] flex items-center justify-center blur-[2px]"
      >
        <GiSoccerBall className="w-full h-full text-white" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Massive Typography & Call to Action */}
        <div className="text-left py-10 md:py-20 flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, ease: 'easeOut' }}
             className="mb-8 hidden lg:block"
           >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                 <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                 <span className="text-[10px] uppercase font-orbitron tracking-widest text-primary font-bold">Rəsmi Veb-Portal 2026/27</span>
              </div>
           </motion.div>

           <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8 lg:hidden mx-auto"
           >
              <img 
                src="/image/logo.png" 
                alt="Logo Big" 
                className="w-40 rounded-full drop-shadow-[0_0_40px_rgba(0,255,204,0.3)] animate-float border border-white/10"
              />
           </motion.div>

           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-5xl sm:text-6xl md:text-[80px] leading-[1.1] font-orbitron font-black mb-6 tracking-tighter drop-shadow-2xl text-center lg:text-left"
           >
             <DecryptedText 
               text="İMİŞLİ" 
               animateOn="view" 
               className="block text-white"
             />
             <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary animate-pulse">PEŞƏKAR FUTBOL</span>
             <br />
             <span className="text-white/80">KOMANDASI</span>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="text-white/60 text-base md:text-xl font-light tracking-[0.2em] uppercase mb-10 max-w-xl text-center lg:text-left mx-auto lg:mx-0 border-l-2 border-primary/50 pl-4"
           >
             Gələcəyin futbolu İmişlidə başlayır. Yeni nəsil gənclik, yenilməz kiber-taktika və möhtəşəm stadion.
           </motion.p>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
           >
             <button className="px-10 py-4 bg-linear-to-r from-primary to-accent text-bg font-orbitron font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,255,204,0.4)] flex items-center justify-center gap-3">
               Klubu Kəşf Et
             </button>
             <button className="px-10 py-4 glass text-white font-orbitron font-semibold uppercase tracking-widest rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center justify-center gap-3">
               <FaPlay className="text-primary text-xs" /> Promo Video
             </button>
           </motion.div>
        </div>

        {/* Right Side: Floating Next Match Widget */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.5, duration: 1 }}
           className="hidden lg:flex justify-end items-center relative"
        >
           {/* Abstract tactical board graphics */}
           <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbGgtaDEydjRoLTh2OGgtNHYtOHpNMTIgMzR2LWxoLTEydjRoOHY4aDR2LTh6IiBmaWxsPSIjMDBmZmNjIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-50 mash-mask"></div>

           <div className="glass w-[400px] p-8 rounded-3xl border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10 backdrop-blur-2xl">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                 <div className="flex items-center gap-2">
                    <GiTrophyCup className="text-accent text-2xl" />
                    <span className="font-orbitron font-bold text-xs uppercase tracking-widest text-white/70">Azərbaycan Kuboku</span>
                 </div>
                 <span className="text-[10px] font-orbitron tracking-widest text-primary animate-pulse border border-primary/30 px-2 py-1 rounded-full">CANLI GÖZLƏNİLİR</span>
              </div>

              <div className="flex items-center justify-between mt-8 mb-8">
                 {/* Home Team */}
                 <div className="flex flex-col items-center gap-3">
                    <img src="/image/logo.png" alt="İmişli FC" className="w-20 rounded-full border-2 border-primary/50 shadow-[0_0_20px_rgba(0,255,204,0.2)]" />
                    <span className="font-orbitron font-bold text-sm tracking-widest uppercase">İMİŞLİ</span>
                 </div>

                 {/* VS or Score */}
                 <div className="flex flex-col items-center justify-center">
                    <span className="font-orbitron font-black text-4xl text-transparent bg-clip-text bg-linear-to-b from-white to-white/20">VS</span>
                    <span className="text-[10px] text-white/40 tracking-[0.2em] mt-2">12 Aprel, 20:00</span>
                 </div>

                 {/* Away Team (Placeholder) */}
                 <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                       <span className="font-orbitron font-black text-xl text-white/30">RƏQİB</span>
                    </div>
                    <span className="font-orbitron font-bold text-sm tracking-widest uppercase text-white/50">Qonaq</span>
                 </div>
              </div>

              <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden mb-4 relative">
                 <div className="absolute top-0 left-0 h-full bg-linear-to-r from-primary to-accent w-[85%] animate-pulse rounded-full"></div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-orbitron uppercase text-white/40 tracking-widest">
                 <span>Biletlərin 85% Satılıb</span>
                 <a href="/tickets" className="text-primary hover:text-accent transition-colors">Bilet Al</a>
              </div>
           </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 cursor-pointer"
      >
        <span className="text-[10px] font-orbitron uppercase tracking-widest">Aşağı sürüşdür</span>
        <FaChevronDown className="text-primary text-xl drop-shadow-[0_0_10px_#00ffcc]" />
      </motion.div>
    </section>
  );
}
