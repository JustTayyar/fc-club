import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { teamMembers } from '../data/team';
import SpotlightCard from '../components/ui/SpotlightCard';
import { FaSearch, FaCrosshairs } from 'react-icons/fa';

export default function TeamPage() {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'QAPICI', 'MÜDAFİƏÇİ', 'YARIMMÜDAFİƏÇİ', 'HÜCUMÇU', 'RƏHBƏRLİK VƏ QƏRARGAH'];

  const filteredMembers = teamMembers.filter(member => {
    if (filter === 'ALL') return true;
    if (filter === 'RƏHBƏRLİK VƏ QƏRARGAH') return member.position === 'RƏHBƏRLİK VƏ QƏRARGAH';
    return member.position === filter;
  });

  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#050505] overflow-hidden">
      
      {/* Scanner grid overlay */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,204,0.03)_1px,transparent_1px)] bg-[size:100%_20px] pointer-events-none"></div>
         <div className="absolute top-[20%] left-0 w-full h-[300px] bg-primary/5 blur-[100px] rounded-[100%] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-accent/20 bg-accent/5 rounded-full backdrop-blur-md">
             <FaCrosshairs className="text-accent animate-pulse" />
             <span className="text-white/70 tracking-[0.4em] font-orbitron uppercase text-[10px]">Aktiv İnsan Resursları</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase tracking-tighter drop-shadow-[0_0_30px_rgba(0,255,204,0.3)]">
             DÖYÜŞ <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-transparent">HƏYƏTİ</span>
          </h1>
        </motion.div>

        {/* Cyber Command Filter UI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-6xl mx-auto mb-20 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
           <div className="flex items-center gap-4 text-white/30 font-orbitron text-sm px-4">
              <FaSearch />
              <span className="uppercase tracking-[0.2em] font-black text-white/50 text-[10px]">VERİLƏNLƏR BAZASI FİLTRİ</span>
           </div>
           
           <div className="flex flex-wrap gap-2 justify-center">
             {categories.map((cat) => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-4 py-2 rounded-xl text-[10px] font-orbitron uppercase font-bold tracking-widest transition-all ${
                   filter === cat 
                     ? 'bg-primary text-black shadow-[0_0_20px_rgba(0,255,204,0.6)]' 
                     : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-transparent cursor-cell'
                 }`}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>

        {/* Holographic Roster Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard className="group h-[380px] p-0 flex flex-col justify-end overflow-hidden border border-white/10 hover:border-primary/50 relative bg-black/50 backdrop-blur-md">
                   
                   {/* Abstract Silhouette/Placeholder Background */}
                   <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent flex items-end justify-center pointer-events-none group-hover:from-primary/20 transition-colors">
                       <span className="text-[120px] font-orbitron font-black text-white/[0.03] leading-none mb-10 group-hover:text-primary/[0.05] transition-colors">{member.number || 'X'}</span>
                       {/* Geometric representation of a player */}
                       <div className="w-[120px] h-[250px] bg-linear-to-t from-white/20 to-transparent rounded-t-[60px] mx-auto absolute bottom-0 border border-white/10 backdrop-blur-xs flex items-center justify-center filter mix-blend-overlay">
                          <span className="font-orbitron font-black text-white/30 rotate-90 text-2xl tracking-[0.4em]">{member.surname?.toUpperCase() || member.name.toUpperCase()}</span>
                       </div>
                   </div>

                   {/* Neon Border Line */}
                   <div className="absolute top-0 right-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-700"></div>

                   <div className="w-full bg-linear-to-t from-black via-black/80 to-transparent p-6 z-10 border-t border-white/5 backdrop-blur-xs relative group-hover:-translate-y-2 transition-transform duration-500">
                      
                      {member.number && (
                         <div className="absolute -top-12 left-6 text-4xl font-orbitron font-black text-transparent bg-clip-text bg-linear-to-b from-primary to-transparent opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(0,255,204,0.5)]">
                            {member.number}
                         </div>
                      )}

                      <h3 className="text-xl font-orbitron font-black uppercase tracking-widest text-white mb-2">{member.name} {member.surname}</h3>
                      
                      <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-2">
                         <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest max-w-[80%] leading-relaxed">{member.role}</span>
                         {member.position && (
                            <span className="text-[10px] font-orbitron font-bold text-accent tracking-[0.2em]">{member.position.substring(0,3)}</span>
                         )}
                      </div>
                   </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
