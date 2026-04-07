import { motion } from 'framer-motion';
import { FaDna, FaBrain, FaRobot } from 'react-icons/fa';

export default function AcademyPage() {
  return (
    <div className="pt-40 pb-32 relative min-h-screen bg-[#040404] overflow-hidden">
      
      {/* Genetic / Matrix Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
         <div className="absolute left-1/4 top-0 w-[1px] h-full bg-primary/50 shadow-[0_0_20px_#00ffcc]"></div>
         <div className="absolute right-1/4 top-0 w-[1px] h-full bg-accent/50 shadow-[0_0_20px_#00d4ff]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh] mb-32">
           {/* Left: Holographic Player Model Replacement */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
             className="relative h-[600px] flex items-center justify-center"
           >
              {/* Spinning DNA/Data Rings */}
              <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-primary/20 border-t-primary animate-[spin_20s_linear_infinite] filter blur-[1px]"></div>
              <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 border-l-white/50 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Central Academy Icon / Symbol */}
              <div className="w-[40%] h-[60%] bg-linear-to-t from-primary/10 to-transparent border border-white/10 backdrop-blur-md rounded-[100px] flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary/20 mix-blend-overlay animate-pulse-glow"></div>
                 <div className="flex flex-col items-center">
                    <FaDna className="text-6xl text-primary mb-4 opacity-80" />
                    <span className="font-orbitron text-[10px] tracking-widest text-white/50 uppercase">Genetik Təhlil</span>
                 </div>
              </div>
              
              {/* Stat Nodes */}
              <div className="absolute top-[20%] left-0 glass px-4 py-2 border-l border-primary text-[10px] font-orbitron uppercase tracking-widest text-white">Yenilənmə Sürəti <br/><span className="text-primary text-xl font-black">1.2ms</span></div>
              <div className="absolute bottom-[20%] right-0 glass px-4 py-2 border-r border-accent text-[10px] font-orbitron uppercase tracking-widest text-white text-right">Potensial <br/><span className="text-accent text-xl font-black">X900</span></div>
           </motion.div>

           {/* Right: Text content */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1 }}
           >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-primary/30 rounded-full bg-primary/5">
                 <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                 <span className="font-orbitron text-[10px] text-primary tracking-widest uppercase">Gələcəyi İstehsal Edirik</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter mb-8 leading-[1.1]">
                KİBER İNKUBATOR <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white/50 to-transparent text-3xl md:text-5xl">GƏNCLƏR AKADEMİYASI</span>
              </h1>
              <p className="text-white/50 font-light text-lg mb-10 leading-relaxed border-l-2 border-primary/30 pl-6">
                 Biz sadəcə futbolçu yetişdirmirik, yeni nəsil super-atletlərin layihələndirilməsi ilə məşğul oluruq. Süni intellekt dəstəkli məşq simulyatorları və VR mühitlərində taktiki ucalış. İşarələnmiş DNA, mükəmməl icra.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div className="p-4 border border-white/10 bg-white/5 rounded-xl">
                    <span className="block text-3xl font-orbitron font-black text-white mb-2">500+</span>
                    <span className="text-[9px] uppercase tracking-widest text-primary drop-shadow-[0_0_5px_rgba(0,255,204,0.5)]">Virtual Simulyasiya Şüşəsi</span>
                 </div>
                 <div className="p-4 border border-white/10 bg-white/5 rounded-xl">
                    <span className="block text-3xl font-orbitron font-black text-white mb-2">%99</span>
                    <span className="text-[9px] uppercase tracking-widest text-accent drop-shadow-[0_0_5px_rgba(0,212,255,0.5)]">Taktiki Alqoritm Sərrastlığı</span>
                 </div>
              </div>

              <button className="px-10 py-5 glass text-white font-orbitron font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-colors rounded-none border border-white/20">
                 Proqrama Qatıl
              </button>
           </motion.div>
        </div>

        {/* Modules Section */}
        <div className="border-t border-white/10 pt-24 relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-linear-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#00ffcc]"></div>
           <h2 className="text-3xl font-orbitron font-black text-center uppercase tracking-widest text-white mb-16">Metodologiya Modulları</h2>
           
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FaBrain />, title: 'NEYRO-TƏLİM', desc: 'Virtual reallıq (VR) vasitəsilə beyinin qərar vermə sürətini saniyədən minidə birinə qədər inkişaf etdirən xüsusi proqram.' },
                { icon: <FaRobot />, title: 'BİOMEXANİKA', desc: 'Süni intellekt kameralarının dəstəyi ilə əzələlərin düzgün hərəkət qrafiklərinin və enerjinin qorunmasının tənzimlənməsi.' },
                { icon: <FaDna />, title: 'TAKTIKİ SİXRONİKA', desc: 'Sürü kimi birlikdə hərəkət reaksiyası, komanda yoldaşlarının hərəkət alqoritmlərinin sistemli əzbərlənməsi.' },
              ].map((mod, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15 }}
                   className="glass p-10 border border-white/5 hover:border-primary/50 transition-colors group cursor-pointer"
                 >
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-3xl text-white/50 group-hover:text-primary group-hover:border-primary transition-all mb-8 shadow-[0_0_0_rgba(0,255,204,0)] group-hover:shadow-[0_0_20px_rgba(0,255,204,0.3)]">
                       {mod.icon}
                    </div>
                    <h3 className="text-2xl font-orbitron font-black text-white uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">{mod.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{mod.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
}
