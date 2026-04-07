import { motion } from 'framer-motion';
import { FaCheck, FaQrcode } from 'react-icons/fa';
import SpotlightCard from '../components/ui/SpotlightCard';

const plans = [
  {
    name: 'STANDART',
    type: 'Üzvlük',
    price: '5',
    features: ['Şimal və Cənub Sektorları', 'Rəqəmsal Bilet (QR)', 'Fan-Şopda 5% Endirim', 'Matç Əvvəli Konsertlərə Giriş'],
    recommended: false,
    color: 'from-white/10 to-white/5',
    neon: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
  },
  {
    name: 'PRESTİJ',
    type: 'VIP Pass',
    price: '20',
    features: ['Mərkəzi Ultra Sektor', 'Sürətli Keçid (Fast-Track)', 'Fan-Şopda 15% Endirim', 'Holloqrafik Matç Proqramı', 'Tribuna Arxası Xidmət'],
    recommended: true,
    color: 'from-primary/20 to-primary/5',
    neon: 'shadow-[0_0_50px_rgba(0,255,204,0.3)] border-primary/50'
  },
  {
    name: 'SİYASİ LOJA',
    type: 'Premium',
    price: '50',
    features: ['Şüşəli Kiber Loja', 'Fərdi Rəqəmsal Monitordan Yayım', 'İsti Yemək və Limitsiz Catering', 'Oyunçularla Virtual Qapalı İclaslar', 'Mövsüm Boyunca 30% Endirim'],
    recommended: false,
    color: 'from-accent/20 to-accent/5',
    neon: 'hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:border-accent/50'
  }
];

export default function TicketsPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#020303] overflow-hidden">
      
      {/* Abstract Digital Field Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-primary/10 to-transparent opacity-30"></div>
         {/* Perspective Grid */}
         <div className="absolute bottom-0 left-0 w-full h-[60%] perspective-[1000px]">
             <div className="w-full h-[200%] bg-[linear-gradient(to_right,rgba(0,255,204,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,204,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(75deg)_translateY(-100px)_translateZ(-200px)] pointer-events-none opacity-40"></div>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-white/10 bg-white/5 rounded-full backdrop-blur-md">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
             <span className="text-white/70 tracking-[0.3em] font-orbitron uppercase text-xs">Ağıllı Stadion C-Block</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 uppercase tracking-tighter drop-shadow-2xl">
             Rəqəmsal <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Buraxılış</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/50 uppercase tracking-[0.2em] font-light leading-relaxed">
             Stadionda Canlı İzləmək Üçün Öz Sektorunu Seç. Kağız biletlər tarixə qovuşdu, QR keçidlərinizi aktivləşdirin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {plans.map((plan, i) => (
             <motion.div 
               key={plan.name}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.2, duration: 0.8 }}
             >
                <SpotlightCard className={`relative h-full flex flex-col p-1 border backdrop-blur-2xl transition-all duration-700 ${plan.neon} ${!plan.recommended && 'border-white/10'}`}>
                   
                   {/* Recommendation Tag */}
                   {plan.recommended && (
                     <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-linear-to-r from-primary to-accent text-bg px-6 py-2 rounded-full text-[10px] font-orbitron font-black uppercase tracking-widest shadow-[0_5px_20px_rgba(0,255,204,0.5)] z-20">
                        Ən Çox Tələb Olunan
                     </div>
                   )}
                   
                   <div className={`p-10 h-full flex flex-col rounded-[1.2rem] bg-linear-to-b ${plan.color} relative overflow-hidden`}>
                      {/* Decorative Barcode / Watermark */}
                      <div className="absolute -right-10 top-1/2 -translate-y-1/2 rotate-90 opacity-10 flex flex-col items-center gap-2 pointer-events-none">
                         <div className="w-48 h-8 bg-[repeating-linear-gradient(90deg,white,white_2px,transparent_2px,transparent_6px,white_6px,white_12px,transparent_12px,transparent_14px)]"></div>
                         <span className="font-orbitron font-black text-2xl tracking-[0.5em]">{plan.name}</span>
                      </div>

                      <div className="relative z-10 flex-1">
                         <h4 className="text-white/40 font-orbitron text-xs tracking-[0.3em] uppercase mb-2">{plan.type}</h4>
                         <h3 className="text-3xl font-orbitron font-black uppercase tracking-widest mb-6">{plan.name}</h3>
                         
                         <div className="mb-10 flex items-start text-primary">
                            <span className="text-xl font-bold mt-2 mr-1">₼</span>
                            <span className="text-7xl font-black font-orbitron tracking-tighter leading-none">{plan.price}</span>
                            <span className="text-sm font-orbitron tracking-widest uppercase ml-2 self-end mb-2">/ OYUN</span>
                         </div>
         
                         <div className="space-y-5 mb-10">
                            {plan.features.map((feature, idx) => (
                               <div key={idx} className="flex items-start gap-4">
                                  <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 mt-0.5 ${plan.recommended ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/50'}`}>
                                     <FaCheck size={10} />
                                  </div>
                                  <span className="text-sm text-white/80 font-light leading-relaxed">{feature}</span>
                               </div>
                            ))}
                         </div>
                      </div>
      
                      <button className={`relative overflow-hidden w-full py-5 rounded-xl font-orbitron font-black uppercase text-xs tracking-widest transition-all group ${
                        plan.recommended 
                           ? 'bg-linear-to-r from-primary to-accent text-bg shadow-[0_0_20px_rgba(0,255,204,0.4)] hover:shadow-[0_0_40px_rgba(0,255,204,0.6)]' 
                           : 'border border-white/20 bg-black/40 hover:bg-white hover:text-black hover:border-white'
                      }`}>
                         <span className="relative z-10 flex items-center justify-center gap-3">
                            <FaQrcode className={plan.recommended ? 'text-bg' : 'text-primary group-hover:text-black transition-colors'} /> RƏQƏMSAL BİLET AL
                         </span>
                      </button>
                   </div>
                </SpotlightCard>
             </motion.div>
          ))}
        </div>

        {/* Tələbə Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden glass border border-accent/20 p-8 md:p-12"
        >
           {/* Abstract shape overlay */}
           <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-accent/10 to-transparent pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                 <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-accent text-black font-orbitron font-bold text-[10px] uppercase tracking-widest rounded-sm">Xüsusi Endirim</span>
                 </div>
                 <h3 className="font-orbitron font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4 text-white">
                    Abituriyent və <span className="text-accent">Tələbələr</span> Üçün
                 </h3>
                 <p className="text-white/60 font-light max-w-xl leading-relaxed text-sm">
                    Studiya biletini və ya Tələbə biletini rəqəmsal şəkildə təqdim edən hər kəs üçün ayrılmış <strong>"Gənclər Gedişi C-Blok"</strong> sektorunda biletlər cəmi <span className="text-white font-bold inline-block px-2 py-1 border border-accent/30 rounded mx-1">2.00 ₼</span> təşkil edir.
                 </p>
              </div>
              <button className="px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black font-orbitron font-bold uppercase text-[10px] tracking-[0.2em] rounded-full transition-all shrink-0">
                 Təsdiq Göndər
              </button>
           </div>
        </motion.div>

      </div>
    </div>
  );
}
