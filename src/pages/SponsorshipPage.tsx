import { motion } from 'framer-motion';
import SpotlightCard from '../components/ui/SpotlightCard';
import { FaHandshake } from 'react-icons/fa';

const partners = [
  { name: 'NEON ENERGY', type: 'BAŞ TƏRƏFDAŞ', desc: 'Klubun əsas enerji və texnologiya təminatçısı. Bütün stadion infrastrukturunu təmiz kiber-enerji ilə təchiz edir.', color: 'primary' },
  { name: 'CYBER LABS', type: 'ROBOTEXNİKA SPONSORU', desc: 'Məşq proseslərində istifadə olunan süni intellekt və avtomatlaşdırılmış rəqəmsal analiz sistemlərinin mühəndis partnyoru.', color: 'accent' },
  { name: 'AZTECH', type: 'TELEKOMMUNİKASİYA', desc: 'Dünya üzrə 12 milyondan çox kiber-azarkeşi fasiləsiz VR yayım və yüksək sürətli 7G şəbəkəsi ilə təmin edir.', color: 'secondary' },
  { name: 'QUANTUM SPORT', type: 'TƏCHİZAT', desc: 'Performans artıran xüsusi geyimlər, smart-butslar və bədən göstəricilərini anlıq ölçən nano-formalar.', color: 'white' }
];

export default function SponsorshipPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#050505] overflow-hidden">
      
      {/* Immersive Dark Wireframe Grid */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[20%] left-[-10%] w-[50vh] h-[50vh] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute bottom-[20%] right-[-10%] w-[50vh] h-[50vh] bg-accent/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
             <FaHandshake className="text-white animate-pulse" />
             <span className="text-white/70 tracking-[0.4em] font-orbitron uppercase text-[10px]">Strateji Əməkdaşlıqlar</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase tracking-tighter drop-shadow-2xl">
             QLOBAL <span className="text-transparent bg-clip-text bg-linear-to-b from-primary via-white to-transparent">BİRLİKLƏR</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/50 uppercase tracking-[0.2em] font-light leading-relaxed">
             Bizimlə birlikdə gələcəyi inşa edən sənaye nəhəngləri və yüksək texnologiya partnyorları.
          </p>
        </motion.div>

        {/* Dynamic Sponsor Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {partners.map((partner, i) => (
             <motion.div 
               key={partner.name}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15 }}
             >
                <SpotlightCard className="h-full group cursor-pointer border border-white/10 bg-black/40 backdrop-blur-md p-10 hover:border-primary/50 transition-colors duration-500 overflow-hidden relative">
                   {/* Abstract Brand Identity shapes based on index */}
                   <div className="absolute right-[-40px] top-[-40px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                      {i % 2 === 0 ? (
                         <div className="w-64 h-64 border-[10px] border-primary rounded-full"></div>
                      ) : (
                         <div className="w-64 h-64 border-[10px] border-accent rotate-45 transform"></div>
                      )}
                   </div>
                   
                   <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                         <div className="flex items-start justify-between mb-8">
                            <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-white/60 font-orbitron text-[10px] uppercase tracking-widest rounded">
                               {partner.type}
                            </span>
                            <div className={`w-8 h-8 rounded-full border border-${partner.color}/50 bg-${partner.color}/10 flex items-center justify-center`}>
                               <div className={`w-3 h-3 bg-${partner.color} rounded-sm animate-pulse`}></div>
                            </div>
                         </div>
                         <h3 className="text-4xl md:text-5xl font-orbitron font-black text-white group-hover:text-primary transition-colors tracking-widest mb-6 leading-none">
                            {partner.name}
                         </h3>
                         <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm">
                            {partner.desc}
                         </p>
                      </div>
                      
                      <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
                         <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">Müqavilə_Aktiv</span>
                         <div className="w-32 h-[1px] bg-white/20 relative overflow-hidden group-hover:bg-primary/20 transition-colors">
                            <div className="absolute top-0 left-[-100%] w-full h-full bg-primary animate-[marquee_2s_linear_infinite]"></div>
                         </div>
                      </div>
                   </div>
                </SpotlightCard>
             </motion.div>
           ))}
        </div>

        {/* Sponsor Onboarding CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 relative max-w-4xl mx-auto rounded-[40px] overflow-hidden glass border border-white/10 p-12 md:p-20 text-center"
        >
           <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none"></div>
           <h2 className="text-3xl md:text-5xl font-orbitron font-black uppercase text-white mb-6">MİSYANIN BİR HİSSƏSİ <span className="text-primary">OLUN</span></h2>
           <p className="text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed text-sm">
             Rəqəmsal transformasiya əsrində ən mütərəqqi idman klubu ilə tərəfdaşlıq etmək, qlobal kiber-auditoriyaya birbaşa çıxış deməkdir. Əməkdaşlıq üçün Təkliflər İdarəsinə müraciət edin.
           </p>
           <button className="px-12 py-5 bg-white text-black font-orbitron font-black text-xs tracking-[0.4em] uppercase rounded-full hover:bg-primary transition-colors shadow-[0_10px_40px_rgba(255,255,255,0.2)]">
              Əlaqə Portalına Keç
           </button>
        </motion.div>

      </div>
    </div>
  );
}
