import { motion } from 'framer-motion';
import SpotlightCard from '../components/ui/SpotlightCard';

export default function HistoryPage() {
  const milestones = [
    {
      year: '2024',
      title: 'Klubun Təsis Edilməsi',
      desc: 'İmişli şəhərində futbolun inkişafı və gənc istedadların kəşfi məqsədilə rəsmi olaraq İmişli PFK fəaliyyətə başladı. İlk infrastruktur inşasına start verildi və gələcəyin çempionları üçün baza formalaşdırıldı.',
      alignment: 'left'
    },
    {
      year: '2025',
      title: 'İlk Debüt və Regional Zəfər',
      desc: 'Komanda peşəkar liqalara qoşuldu, region daxili kuboku qazanaraq azarkeş ordusunun təməlini atdı. Kiber-texnologiyaların təhlillərə inteqrasiyası ilk bəhrəsini verdi.',
      alignment: 'right'
    },
    {
      year: '2026',
      title: 'Yüksək Liqaya Dönüş',
      desc: 'Yeni və tam modernləşdirilmiş stadion, xaricdən cəlb olunmuş kiber-idman mütəxəssisləri və texnoloji innovasiyalarla İmişli PFK Azərbaycanın ən elit komandasına çevrildi.',
      alignment: 'left',
      active: true
    }
  ];

  return (
    <div className="pt-48 pb-32 relative min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-[60%] left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
           <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-primary/50"></div>
              <span className="text-primary font-orbitron font-bold tracking-widest uppercase text-xs">Mirasımız</span>
              <div className="w-12 h-[2px] bg-primary/50"></div>
           </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter drop-shadow-2xl">
            Tarix <span className="text-transparent bg-clip-text bg-linear-to-b from-primary to-accent">Yazılır</span>
          </h1>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center justify-between group ${item.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline node in middle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center z-20">
                   <div className={`w-4 h-4 rounded-full border-2 transition-all duration-700 ${item.active ? 'bg-primary border-white scale-150 shadow-[0_0_20px_#00ffcc] animate-pulse' : 'bg-[#030303] border-primary group-hover:bg-primary group-hover:scale-125 group-hover:shadow-[0_0_15px_#00ffcc]'}`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] relative ${item.alignment === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                  <SpotlightCard className={`p-8 md:p-12 border-white/10 relative overflow-hidden backdrop-blur-xl ${item.active ? 'shadow-[0_0_30px_rgba(0,255,204,0.1)] border-primary/30' : ''}`}>
                     
                     {/* Giant Background Number */}
                     <div className="absolute -bottom-10 -right-4 text-[120px] md:text-[180px] font-orbitron font-black text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700 pointer-events-none select-none leading-none">
                       {item.year}
                     </div>

                     <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                           <span className={`text-4xl font-orbitron font-black ${item.active ? 'text-white' : 'text-primary drop-shadow-[0_0_10px_rgba(0,255,204,0.8)]'}`}>
                             {item.year}
                           </span>
                           <div className="flex-1 h-[1px] bg-linear-to-r from-primary/50 to-transparent"></div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-white/40 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                          {item.desc}
                        </p>
                     </div>
                  </SpotlightCard>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
             <div className="inline-block p-1 rounded-full bg-linear-to-r from-primary/20 via-transparent to-primary/20">
                <div className="px-8 py-3 rounded-full bg-[#030303] border border-white/5 font-orbitron tracking-widest text-xs uppercase text-white/50">
                  Şanlı yol davam edir...
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
