import { motion } from 'framer-motion';
import { FaPlay, FaMapMarkerAlt, FaMicrochip } from 'react-icons/fa';

export default function StadiumTourPage() {
  return (
    <div className="pt-40 pb-32 relative min-h-screen bg-[#050505] overflow-hidden">
      
      {/* Tactical Blueprint Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDE1aDYwTTAgMzBoNjBNMCA0NWg2ME0xNSAwHYwTTE1IDMwaDYwTTMwIDB2NjBNDQ1IDB2NjAiIHN0cm9rZT0iIzAwZmZjYyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[80vh]">
        
        {/* Left: Holographic Info Panel */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-5/12"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-accent/30 rounded-full bg-accent/5 backdrop-blur-md">
             <FaMicrochip className="text-accent" />
             <span className="font-orbitron text-[10px] text-accent tracking-widest uppercase">Smart İnfrastruktur</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter drop-shadow-2xl mb-6">
            ARENA <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-transparent">X</span>
          </h1>
          
          <div className="border-l-2 border-primary/50 pl-6 mb-10">
             <p className="text-white/60 text-lg font-light leading-relaxed uppercase tracking-wider">
               Təkcə bir stadion deyil. 50.000 azarkeş tutumlu, tam avtomatlaşdırılmış dam sistemi və biometrik girişlə təchiz olunmuş qlobal futbol texnologiyasının mərkəzidir.
             </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
             <div className="p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-tl-3xl rounded-br-3xl">
                <span className="block text-4xl font-orbitron font-black text-primary mb-1">50K</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40">Kapasit</span>
             </div>
             <div className="p-4 border border-white/10 bg-black/40 backdrop-blur-md rounded-tr-3xl rounded-bl-3xl">
                <span className="block text-4xl font-orbitron font-black text-accent mb-1">AI</span>
                <span className="text-[9px] uppercase tracking-widest text-white/40">İqlim Nəzarəti</span>
             </div>
          </div>

          <button className="w-full relative overflow-hidden group border border-primary/50 bg-primary/10 py-5 flex items-center justify-center gap-4 cursor-pointer">
             <div className="absolute inset-0 bg-primary w-0 group-hover:w-full transition-all duration-500 z-0"></div>
             <FaPlay className="text-primary group-hover:text-black z-10 transition-colors" />
             <span className="font-orbitron font-bold uppercase tracking-widest text-xs z-10 group-hover:text-black transition-colors">3D Virtual Turu Başlat</span>
          </button>
        </motion.div>

        {/* Right: Immersive Map / Hologram Stand-in */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-7/12 relative h-[500px] lg:h-[700px] flex items-center justify-center"
        >
           {/* Futuristic wireframe or neon representation of a stadium */}
           <div className="absolute w-[80%] h-[60%] rounded-full border-4 border-primary/20 border-t-primary border-b-accent animate-[spin_40s_linear_infinite] shadow-[0_0_80px_rgba(0,255,204,0.1)]"></div>
           <div className="absolute w-[60%] h-[45%] rounded-[100px] border-2 border-white/10 border-l-white border-r-white/50 animate-[spin_30s_linear_infinite_reverse]"></div>
           <div className="absolute w-[40%] h-[30%] bg-primary/5 mix-blend-screen rounded-full filter blur-[20px] animate-pulse"></div>

           {/* The core image masked to look extremely high-tech */}
           <div className="relative z-10 w-[90%] h-[70%] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] mask-stadium group">
              <div className="absolute inset-0 bg-linear-to-tr from-accent/20 via-transparent to-primary/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-50 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover filter grayscale contrast-150 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                alt="Stadium Core" 
              />
              
              {/* Target Nodes floating on top of the image */}
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-red-500 rounded-full animate-ping z-20"></div>
              <div className="absolute top-[20%] left-[30%] w-3 h-3 bg-red-500 rounded-full z-20 shadow-[0_0_15px_red]"></div>
              
              <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-primary rounded-full animate-ping z-20"></div>
              <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-primary rounded-full z-20 shadow-[0_0_15px_#00ffcc]"></div>
           </div>
           
           {/* Informational callouts */}
           <div className="absolute top-[10%] right-[10%] glass px-4 py-2 flex items-center gap-3 backdrop-blur-xl border-l-[3px] border-l-red-500 rounded-lg">
             <FaMapMarkerAlt className="text-red-500" />
             <div>
                <span className="block text-[8px] font-orbitron uppercase tracking-widest text-white/50">Sektor</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-white">VİP Loja İdarəsi</span>
             </div>
           </div>

           <div className="absolute bottom-[10%] left-[5%] glass px-4 py-2 flex items-center gap-3 backdrop-blur-xl border-l-[3px] border-l-primary rounded-lg">
             <FaMapMarkerAlt className="text-primary" />
             <div>
                <span className="block text-[8px] font-orbitron uppercase tracking-widest text-white/50">Ərazi</span>
                <span className="block text-xs font-bold uppercase tracking-widest text-white">Performans Mərkəzi</span>
             </div>
           </div>

        </motion.div>

      </div>
    </div>
  );
}
