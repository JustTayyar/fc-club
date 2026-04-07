import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

import { teamMembers } from '../data/team';

// Select 4 showcase players from the central database (Müdafiəçi, Yarımmüdafiəçi, Hücumçu, Qapıçı)
const players = [teamMembers[8], teamMembers[16], teamMembers[24], teamMembers[5]];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Gələcəyin <span className="gradient-text">Ulduzları</span></h2>
          <p className="text-white/40 uppercase tracking-[0.3em] font-light">Klubumuzun əsas heyəti barədə məlumatlar</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {players.map((player, i) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <SpotlightCard className="p-0 border-white/5 h-[450px] overflow-hidden group">
                <div className="relative h-full flex flex-col justify-end">
                   <div className="absolute inset-0 z-0 overflow-hidden">
                      <div className="w-full h-full bg-linear-to-tr from-white/[0.02] to-white/[0.08] group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
                         <span className="text-white/5 font-orbitron text-8xl font-black rotate-[-45deg] scale-150">İMİŞLİ</span>
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent"></div>
                   </div>

                   <div className="relative z-10 p-6 flex items-end justify-between">
                     <div>
                       <div className="flex gap-2 items-center mb-1">
                         <span className="text-primary text-[10px] font-orbitron font-black">{player.position}</span>
                         <div className="h-[1px] w-4 bg-primary/40"></div>
                       </div>
                       <div className="font-orbitron font-black text-2xl uppercase tracking-tighter leading-none mb-1">
                          {player.name}
                       </div>
                       <div className="font-orbitron font-black text-2xl uppercase tracking-tighter leading-none text-white/50">
                          {player.surname}
                       </div>
                     </div>
                     <div className="text-6xl font-orbitron font-black text-white/10 group-hover:text-primary/20 transition-all">
                       #{player.number}
                     </div>
                   </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="px-10 py-4 glass text-white/80 font-orbitron uppercase text-[10px] tracking-[0.3em] font-bold rounded-full border border-white/10 hover:border-primary/50 transition-all" onClick={() => window.location.href = '/team'}>
              Bütün Heyət ({teamMembers.length} Üzv)
           </button>
        </div>
      </div>
    </section>
  );
}
