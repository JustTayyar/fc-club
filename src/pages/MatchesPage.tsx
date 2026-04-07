import { motion } from 'framer-motion';
import SpotlightCard from '../components/ui/SpotlightCard';

const matches = [
  { id: 1, opponent: 'TURAN TOVUZ', date: '15 APREL', time: '19:00', type: 'EV OYUNU', stadium: 'İMİŞLİ ŞƏHƏR STADİONU', status: 'upcoming', comp: 'AZƏRBAYCAN PREMYER LİQASI' },
  { id: 2, opponent: 'QARABAĞ FK', date: '22 APREL', time: '20:30', type: 'SƏFƏR OYUNU', stadium: 'TOFİQ BƏHRAMOV STADİONU', status: 'upcoming', comp: 'AZƏRBAYCAN KUBOKU' },
  { id: 3, opponent: 'NEFTÇİ PFK', date: '30 APREL', time: '18:15', type: 'EV OYUNU', stadium: 'İMİŞLİ ŞƏHƏR STADİONU', status: 'upcoming', comp: 'AZƏRBAYCAN PREMYER LİQASI' },
  { id: 4, opponent: 'SƏBAİL FK', date: '05 APREL', time: '-', type: 'SƏFƏR OYUNU', stadium: 'ASCO ARENA', status: 'finished', score: '2 - 1', comp: 'AZƏRBAYCAN PREMYER LİQASI' },
  { id: 5, opponent: 'ZİRƏ FK', date: '28 MART', time: '-', type: 'EV OYUNU', stadium: 'İMİŞLİ ŞƏHƏR STADİONU', status: 'finished', score: '1 - 1', comp: 'AZƏRBAYCAN KUBOKU' },
];

export default function MatchesPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#010101] overflow-hidden">
       {/* High-Tech Background Map */}
       <div className="absolute inset-0 z-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
       <div className="absolute top-0 right-0 w-full h-[500px] bg-linear-to-bl from-primary/10 to-transparent pointer-events-none z-0 blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-primary/20 bg-primary/5 rounded-full backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
             <span className="text-white/70 tracking-[0.3em] font-orbitron uppercase text-xs">Mövsüm Xülasəsi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-4 uppercase tracking-tighter drop-shadow-2xl">
            TƏQVİM VƏ <span className="text-transparent bg-clip-text bg-linear-to-b from-primary via-accent to-secondary">NƏTİCƏLƏR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 uppercase tracking-[0.3em] font-light">
             Döyüş meydanında heç bir geri çəkilmə yoxdur.
          </p>
        </motion.div>

        {/* Upcoming Matches Grid */}
        <div className="mb-24 relative max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10 w-full">
            <span className="w-6 h-[2px] bg-primary"></span>
            <h2 className="text-3xl font-orbitron font-black text-white uppercase tracking-widest text-shadow-[0_0_15px_#00ffcc]">Canlı Siyahı</h2>
            <div className="flex-1 h-[1px] bg-linear-to-r from-primary/30 to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {matches.filter(m => m.status === 'upcoming').map((match, i) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <SpotlightCard className="h-full group hover:border-primary/50 transition-colors duration-500 overflow-hidden cursor-pointer relative p-0">
                  <div className="absolute top-0 right-[-50px] w-[150px] h-[150px] bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/20 transition-all duration-700 pointer-events-none"></div>
                  
                  <div className="flex flex-col h-full bg-black/60 backdrop-blur-3xl p-8 z-10 relative">
                    <div className="flex justify-between items-start mb-10">
                      <div className="flex flex-col gap-1">
                         <span className="text-[9px] font-orbitron text-primary tracking-[0.3em] uppercase">{match.comp}</span>
                         <span className={`text-[10px] font-bold px-3 py-1 rounded-sm w-max ${match.type === 'EV OYUNU' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-white/70 border border-white/10'}`}>
                           {match.type}
                         </span>
                      </div>
                      <div className="flex flex-col items-end">
                         <span className="text-[12px] font-orbitron font-bold text-white tracking-widest uppercase">{match.date}</span>
                         <span className="text-[10px] font-orbitron text-white/30 tracking-widest uppercase">{match.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-10">
                      <div className="flex flex-col items-center gap-3">
                         <div className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center p-2 mb-1 shadow-[0_0_20px_rgba(0,255,204,0.1)] relative">
                            <div className="absolute inset-[-4px] border border-primary/20 rounded-full animate-spin"></div>
                            <img src="/image/logo.png" className="w-full h-full object-contain" alt="IMISLI" />
                         </div>
                         <span className="text-[11px] font-orbitron font-black text-primary tracking-widest">İMİŞLİ PFK</span>
                      </div>
                      
                      <div className="w-[1px] h-12 bg-linear-to-b from-transparent via-white/20 to-transparent relative">
                         <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-white/20 font-orbitron text-xs font-black">X</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-3">
                         <div className="w-16 h-16 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-white/10 p-2 mb-1 group-hover:border-white/30 transition-all">
                           <span className="font-orbitron font-bold text-xl text-white/10 group-hover:text-white/30">{match.opponent.slice(0, 1)}</span>
                         </div>
                         <span className="text-[11px] font-orbitron font-black text-white/60 tracking-widest uppercase">{match.opponent}</span>
                      </div>
                    </div>

                    <div className="text-center mt-auto">
                      <div className="text-[9px] text-white/40 uppercase tracking-[0.3em] border-t border-white/5 pt-4 mb-6">Məkan: {match.stadium}</div>
                      <button className="w-full py-4 glass text-white font-orbitron font-bold uppercase text-[10px] tracking-[0.3em] rounded-xl hover:bg-primary hover:text-black transition-all border border-white/10 group-hover:border-primary/50 shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
                        Rəqəmsal Bilet Al
                      </button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Matches List */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 w-full justify-end">
            <div className="flex-1 h-[1px] bg-linear-to-r from-transparent to-white/20"></div>
            <h2 className="text-2xl font-orbitron font-medium text-white/60 uppercase tracking-widest">Tamamlanmış Əməliyyatlar</h2>
            <span className="w-6 h-[2px] bg-white/40"></span>
          </div>

          <div className="flex flex-col gap-4">
            {matches.filter(m => m.status === 'finished').map((match, i) => (
               <motion.div 
                 key={match.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col md:flex-row items-center justify-between p-6 bg-linear-to-r from-white/[0.02] to-transparent hover:bg-white/[0.05] border border-white/5 hover:border-white/20 rounded-2xl transition-colors cursor-crosshair group"
               >
                 <div className="flex items-center justify-center md:justify-start gap-4 md:w-1/4 mb-4 md:mb-0">
                    <span className="text-xs font-orbitron text-white/50 tracking-[0.2em]">{match.date}</span>
                    <span className={`text-[9px] font-bold px-2 py-1 rounded bg-white/5 text-white/60 uppercase tracking-widest`}>
                      {match.type.split(' ')[0]}
                    </span>
                 </div>

                 <div className="flex items-center justify-center gap-6 w-full md:w-2/4 mb-4 md:mb-0">
                    <span className="font-orbitron font-black text-sm uppercase md:w-24 text-right text-white/80 group-hover:text-primary transition-colors">İMİŞLİ PFK</span>
                    <div className="px-6 py-2 bg-black/60 rounded-xl text-xl font-orbitron font-black text-primary border border-white/10 shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
                      {match.score}
                    </div>
                    <span className="font-orbitron font-black text-sm uppercase md:w-24 text-left text-white/60">{match.opponent}</span>
                 </div>

                 <div className="flex flex-col items-center md:items-end md:w-1/4 text-center md:text-right">
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-orbitron mb-1 border-b border-white/10 pb-1">Təhlilə Bax</span>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest">{match.comp}</span>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
