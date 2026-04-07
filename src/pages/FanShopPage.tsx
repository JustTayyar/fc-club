import { motion } from 'framer-motion';
import { FaShoppingCart, FaCube } from 'react-icons/fa';
import SpotlightCard from '../components/ui/SpotlightCard';

const products = [
  { id: 1, name: '2026/27 EV FORMASI', price: '120.00', category: 'KİBER-KİT', label: 'YENİ MODEL', glow: 'primary', img: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=600' },
  { id: 2, name: 'SƏFƏR FORMASI', price: '110.00', category: 'KİBER-KİT', label: 'AĞ/GÜMÜŞÜ', glow: 'white', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=600' },
  { id: 3, name: 'ANTRENMAN GEYİMİ', price: '85.00', category: 'PERFORMANS', label: 'THERMO-TECH', glow: 'accent', img: 'https://images.unsplash.com/photo-1551280857-2b9bbe52cfcd?auto=format&fit=crop&q=80&w=600' },
  { id: 4, name: 'KİBER ŞƏRF', price: '35.00', category: 'AKSESUAR', label: 'LED-İPLİ', glow: 'secondary', img: null },
];

export default function FanShopPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#010103] overflow-hidden">
      {/* Immersive Cyber-Armory Background */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,255,204,0.05),transparent_70%)] pointer-events-none"></div>
          {/* Laser Scanners */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 shadow-[0_0_20px_#00ffcc] animate-[scan_8s_ease-in-out_infinite_alternate]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div>
             <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full">
                <FaCube className="text-primary animate-pulse" />
                <span className="text-white/80 tracking-[0.4em] font-orbitron uppercase text-[10px]">Rəqəmsal Avadanlıq Portalı</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter drop-shadow-2xl">
               KİBER <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">ŞOP</span>
             </h1>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-2 border-b-2 border-primary text-white font-orbitron text-xs tracking-widest uppercase">Geyimlər</button>
             <button className="px-6 py-2 text-white/40 hover:text-white font-orbitron text-xs tracking-widest uppercase transition-colors">Aksesuarlar</button>
             <button className="px-6 py-2 text-white/40 hover:text-white font-orbitron text-xs tracking-widest uppercase transition-colors">Məhdud Sayda</button>
          </div>
        </motion.div>

        {/* Floating 3D Arsenal Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               className="group perspective-1000"
             >
                <SpotlightCard className={`relative h-[550px] p-6 flex flex-col justify-between border-white/5 bg-black/40 hover:border-${item.glow}/50 transition-all duration-700`}>
                   
                   {/* Top Info */}
                   <div className="flex justify-between items-start z-10 relative">
                      <span className="font-orbitron font-bold text-[9px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 rounded">{item.category}</span>
                      <span className={`font-orbitron font-bold text-[9px] uppercase tracking-widest text-black bg-${item.glow === 'white' ? 'white' : 'primary'} px-3 py-1 rounded-full animate-pulse shadow-[0_0_10px_currentColor]`}>{item.label}</span>
                   </div>

                   {/* Holographic Product Display Area */}
                   <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[300px] flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-700">
                      {/* Pedestal */}
                      <div className="absolute bottom-10 w-3/4 h-4 bg-linear-to-r from-transparent via-white/20 to-transparent rounded-[100%] blur-[2px]"></div>
                      
                      {item.img ? (
                        <div className="w-full h-full relative">
                           <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <img src={item.img} alt={item.name} className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }} />
                        </div>
                      ) : (
                        <div className={`w-full h-full border border-${item.glow}/20 flex items-center justify-center bg-${item.glow}/5`} style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
                            <FaCube className={`text-6xl text-${item.glow}/30 group-hover:text-${item.glow} group-hover:rotate-180 transition-all duration-1000`} />
                        </div>
                      )}
                   </div>

                   {/* Bottom Action Area */}
                   <div className="z-10 relative mt-auto pt-8 border-t border-white/10 backdrop-blur-md">
                      <div className="flex justify-between items-end mb-6">
                         <div>
                            <h3 className="text-xl font-bold font-orbitron uppercase mb-1 leading-tight w-2/3">{item.name}</h3>
                         </div>
                         <div className="text-right">
                            <span className="text-xs text-white/40 font-orbitron uppercase tracking-widest block mb-1">QİYMƏT</span>
                            <span className="text-2xl font-orbitron font-black text-white">{item.price}<span className="text-sm ml-1 text-primary">₼</span></span>
                         </div>
                      </div>
                      
                      <button className="w-full py-4 flex items-center justify-center gap-3 bg-white/5 border border-white/20 hover:border-primary/50 hover:bg-primary/20 text-white font-orbitron text-xs tracking-widest uppercase font-bold transition-all overflow-hidden relative">
                         <span className="absolute w-[2px] h-full bg-primary left-[-10px] group-hover:left-0 transition-all"></span>
                         <FaShoppingCart /> SƏBƏTƏ YÜKLƏ
                      </button>
                   </div>
                </SpotlightCard>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
