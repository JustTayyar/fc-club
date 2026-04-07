import { motion } from 'framer-motion';
import { FaTerminal, FaFingerprint, FaShieldAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#000000] overflow-hidden">
      
      {/* Encrypted Matrix Background */}
      <div className="absolute inset-0 z-0 opacity-10">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
         <div className="absolute left-[20%] top-0 w-[1px] h-full bg-primary/20 blur-[1px]"></div>
         <div className="absolute right-[20%] top-0 w-[1px] h-full bg-accent/20 blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
             <FaTerminal className="text-primary" />
             <span className="font-orbitron font-black text-primary text-xs uppercase tracking-[0.4em]">// ŞİFRƏLİ_KANAL_AKTİV</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter drop-shadow-2xl text-white">
            İDARƏ <span className="text-transparent bg-clip-text bg-linear-to-b from-white/20 to-transparent">QƏRARGAHI</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
           
           {/* Terminal Interface UI */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="bg-[#050505] p-1 border border-white/10 rounded-2xl relative shadow-[0_0_40px_rgba(0,0,0,1)]"
           >
              {/* Fake Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#0a0a0a] rounded-t-xl">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                 </div>
                 <span className="text-[10px] uppercase font-mono text-white/30 tracking-widest">Connection_Secured</span>
              </div>
              
              <div className="p-8">
                 <form className="space-y-8 relative z-10">
                    <div className="relative group">
                       <input type="text" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-orbitron uppercase text-sm tracking-widest placeholder:text-white/20 focus:outline-hidden focus:border-primary transition-colors" placeholder="KİMLİYİNİZ (AD, SOYAD)" />
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity">
                         <FaFingerprint className="text-primary text-xl" />
                       </div>
                    </div>
                    
                    <div className="relative group">
                       <input type="email" className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-orbitron uppercase text-sm tracking-widest placeholder:text-white/20 focus:outline-hidden focus:border-accent transition-colors" placeholder="ŞƏBƏKƏ ÜNVANI (E-POÇT)" />
                    </div>
                    
                    <div className="relative group">
                       <textarea className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white font-mono text-sm placeholder:text-white/20 focus:outline-hidden focus:border-primary transition-colors min-h-[150px] resize-none" placeholder="// İFADƏ EDİLƏCƏK MƏLUMAT..."></textarea>
                    </div>

                    <button type="button" className="w-full py-5 bg-white/5 hover:bg-primary/20 border border-white/20 hover:border-primary text-primary font-orbitron font-black uppercase tracking-[0.5em] text-xs transition-all flex items-center justify-center gap-4 truncate">
                       <FaShieldAlt /> VERİLƏNLƏRİ ŞİFRƏLƏ VƏ GÖNDƏR
                    </button>
                 </form>
              </div>
           </motion.div>

           {/* Data Nodes Info Area */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col justify-center gap-10"
           >
              
              <div className="relative p-8 border-l border-white/10 group hover:border-primary transition-colors">
                 <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 group-hover:bg-primary rounded-full group-hover:shadow-[0_0_10px_#00ffcc] transition-all"></div>
                 <h4 className="font-orbitron font-black text-white/30 text-xs uppercase tracking-[0.3em] mb-2">Baş Qərargah</h4>
                 <p className="font-mono text-lg text-white/80">İmişli şəhər, İdman kompleksi 3, AZ3100</p>
                 <span className="block mt-4 text-[10px] font-orbitron uppercase tracking-widest text-primary animate-pulse">Aktiv Zonası</span>
              </div>

              <div className="relative p-8 border-l border-white/10 group hover:border-accent transition-colors">
                 <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 group-hover:bg-accent rounded-full group-hover:shadow-[0_0_10px_#00d4ff] transition-all"></div>
                 <h4 className="font-orbitron font-black text-white/30 text-xs uppercase tracking-[0.3em] mb-2">Əlaqə Tezliyi</h4>
                 <p className="font-mono text-2xl text-white">+994 50 000 00 00</p>
                 <p className="font-mono text-sm text-white/60 mt-1">cmd@imisli.fc</p>
              </div>

              <div className="relative p-8 border-l border-white/10 group hover:border-white transition-colors">
                 <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 bg-white/20 group-hover:bg-white rounded-full transition-all"></div>
                 <h4 className="font-orbitron font-black text-white/30 text-xs uppercase tracking-[0.3em] mb-2">Qarşılanma Saatları</h4>
                 <div className="flex items-center gap-4 mt-2">
                    <span className="font-mono text-white bg-white/10 px-3 py-1 rounded">09:00</span>
                    <span className="w-4 h-[1px] bg-white/30"></span>
                    <span className="font-mono text-white bg-white/10 px-3 py-1 rounded">18:00</span>
                 </div>
              </div>

           </motion.div>

        </div>
      </div>
    </div>
  );
}
