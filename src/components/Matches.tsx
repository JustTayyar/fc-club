import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

export default function Matches() {
  const matches = [
    { id: 1, opponent: 'TURAN TOVUZ', date: '15 APREL', time: '19:00', type: 'HOME', stadium: 'İMİŞLİ ŞƏHƏR STADİONU' },
    { id: 2, opponent: 'QARABAĞ FK', date: '22 APREL', time: '20:30', type: 'AWAY', stadium: 'TOFİQ BƏHRAMOV STADİONU' },
    { id: 3, opponent: 'NEFTÇİ PFK', date: '30 APREL', time: '18:15', type: 'HOME', stadium: 'İMİŞLİ ŞƏHƏR STADİONU' },
  ];

  return (
    <section id="matches" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Növbəti <span className="gradient-text">Oyunlar</span></h2>
            <p className="text-white/40 uppercase tracking-[0.3em] font-light">Sezonun ən kritik qarşılaşmaları</p>
          </div>
          <button className="text-xs font-orbitron uppercase tracking-widest text-primary hover:text-accent transition-colors border-b border-primary pb-1">Bütün Oyunlar</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {matches.map((match, i) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <SpotlightCard className="h-full group">
                <div className="flex flex-col h-full bg-[#030303]/40 border-none">
                  <div className="flex justify-between items-center mb-10">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border border-primary/30 ${match.type === 'HOME' ? 'bg-primary/10 text-primary' : 'bg-white/10 text-white/70'}`}>
                      {match.type}
                    </span>
                    <span className="text-[10px] font-orbitron text-white/40 tracking-widest uppercase">{match.date}</span>
                  </div>

                  <div className="flex items-center justify-center gap-8 mb-10">
                    <div className="flex flex-col items-center">
                       <img src="/image/logo.png" className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all" alt="IMISLI" />
                       <span className="text-[10px] font-orbitron mt-2 font-black text-primary">İMİŞLİ</span>
                    </div>
                    <div className="text-3xl font-orbitron font-black text-white/20 italic">VS</div>
                    <div className="flex flex-col items-center">
                       <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-accent/40 transition-all overflow-hidden p-2">
                         <span className="font-orbitron font-bold text-xs text-white/40">{match.opponent.slice(0, 2)}</span>
                       </div>
                       <span className="text-[10px] font-orbitron mt-2 font-black text-white/40">{match.opponent.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-2xl font-orbitron font-bold text-white mb-2">{match.time}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{match.stadium}</div>
                  </div>

                  <button className="w-full py-3 glass rounded-xl border border-white/5 hover:border-primary/50 text-[10px] font-orbitron uppercase tracking-widest transition-all">
                    Bilet əldə et
                  </button>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
