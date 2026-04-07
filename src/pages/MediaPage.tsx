import { motion } from 'framer-motion';
import { FaPlay, FaImage } from 'react-icons/fa';
import SpotlightCard from '../components/ui/SpotlightCard';

const mediaItems = [
  { id: 1, type: 'video', title: 'SON MƏŞQ SESSİYASI (360°)', duration: '05:24', img: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?auto=format&fit=crop&q=80&w=800' },
  { id: 2, type: 'gallery', title: 'QARABAĞ MATÇI FOTOSSESİYA', count: '48 FOTO', img: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800' },
  { id: 3, type: 'video', title: 'BAŞ MƏŞQÇİ: TAKTİKİ BRİFİNQ', duration: '12:05', img: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&q=80&w=800' },
  { id: 4, type: 'gallery', title: 'YENİ FORMA TƏQDİMATI', count: '24 FOTO', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800' },
  { id: 5, type: 'video', title: 'AKADEMİYA SEÇMƏLƏRİ', duration: '08:45', img: 'https://images.unsplash.com/photo-1551280857-2b9bbe52cfcd?auto=format&fit=crop&q=80&w=800' },
  { id: 6, type: 'gallery', title: 'VİP LOJA İÇƏRİSİ', count: '12 FOTO', img: 'https://images.unsplash.com/photo-1574629810360-7efbb9274e58?auto=format&fit=crop&q=80&w=800' },
];

export default function MediaPage() {
  return (
    <div className="pt-40 pb-32 relative min-h-screen bg-[#030303] overflow-hidden">
      
      {/* Immersive Dark Grid */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDIwTTAgMjBoMjBNMCAzMGgyME0xMCAwdjIwTTIwIDB2MjBNMzAgMHYyMCIgc3Ryb2tlPSIjMDBmZmNjIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
             <span className="w-2 h-2 rounded-sm bg-accent animate-pulse"></span>
             <span className="text-white/70 tracking-[0.4em] font-orbitron uppercase text-[10px]">Holoqrafik Arxiv</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-4 uppercase tracking-tighter drop-shadow-2xl text-white">
            <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-white/30">VİZUAL</span> DATABAZA
          </h1>
        </motion.div>

        {/* Featured Video Pane completely detached layout */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="relative h-[60vh] min-h-[400px] w-full max-w-6xl mx-auto rounded-[30px] overflow-hidden mb-24 cursor-pointer group shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 hover:border-primary/50 transition-colors"
        >
           <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
           <img 
             src={mediaItems[0].img} 
             alt="Featured Play" 
             className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
           />
           <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
           
           <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-24 h-24 rounded-full border border-primary/50 flex items-center justify-center bg-black/40 backdrop-blur-md group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-[0_0_30px_rgba(0,255,204,0.3)]">
                 <FaPlay className="text-primary text-3xl ml-2 group-hover:text-black transition-colors" />
              </div>
           </div>

           <div className="absolute bottom-10 left-10 z-20">
              <span className="px-4 py-1 bg-red-500 text-white font-orbitron font-black text-[10px] uppercase tracking-widest rounded-sm mb-4 inline-block shadow-[0_0_15px_red]">RƏSMİ CANLI YAYIM</span>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-wider text-shadow-[0_0_10px_black] group-hover:text-primary transition-colors">YENİ STADİONUN AÇILIŞI</h2>
           </div>
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {mediaItems.slice(1).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group perspective"
              >
                 <SpotlightCard className="p-2 bg-white/5 border-white/10 hover:border-white/30 h-[300px] flex flex-col relative overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-full h-[70%] relative rounded-xl overflow-hidden glass mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500">
                       <img src={item.img} alt={item.title} className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                       {item.type === 'video' ? (
                          <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded text-[10px] font-mono text-white flex items-center gap-2">
                             <FaPlay className="text-primary" /> {item.duration}
                          </div>
                       ) : (
                          <div className="absolute bottom-3 right-3 bg-white/80 px-3 py-1 rounded text-[10px] font-mono text-black flex items-center gap-2">
                             <FaImage className="text-accent" /> {item.count}
                          </div>
                       )}
                    </div>
                    
                    <div className="mt-auto px-2 py-4">
                       <h3 className="text-sm font-orbitron font-bold text-white/80 uppercase tracking-widest leading-relaxed group-hover:text-primary transition-colors">{item.title}</h3>
                    </div>
                 </SpotlightCard>
              </motion.div>
           ))}
        </div>
        
        <div className="mt-20 text-center">
           <button className="px-12 py-4 border border-white/20 text-white/50 hover:text-white hover:border-white font-orbitron text-xs tracking-widest uppercase transition-colors">ARXİVDƏN YÜKLƏ (248 TERABAYT)</button>
        </div>

      </div>
    </div>
  );
}
