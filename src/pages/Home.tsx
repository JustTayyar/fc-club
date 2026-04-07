import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Matches from '../components/Matches';
import Team from '../components/Team';
import { FaBolt } from 'react-icons/fa';

export default function Home() {
  const breakingNews = [
    "İMİŞLİ PFK-NIN YENİ STADİONUNUN AÇILIŞ MƏRASİMİ 15 MAYA TƏYİN EDİLDİ",
    "BAŞ MƏŞQÇİ İLƏ 3 İLLİK YENİ MÜQAVİLƏ İMZALANDI",
    "GƏNCLƏR AKADEMİYASINA SEÇİMLƏR BAŞLAYIR",
    "YENİ PRЕSTİJ ÜZVLÜK KARTLARI ARTIQ SATIŞDADIR"
  ];

  return (
    <>
      <Hero />
      
      {/* Dynamic News Ticker */}
      <div className="w-full bg-primary text-black overflow-hidden relative py-2 z-10 border-y border-primary/50 shadow-[0_0_20px_rgba(0,255,204,0.2)]">
         <div className="flex whitespace-nowrap animate-marquee">
            {breakingNews.concat(breakingNews).map((text, i) => (
              <div key={i} className="flex items-center gap-4 mx-8 font-orbitron font-bold text-xs tracking-widest uppercase">
                 <FaBolt className="text-black/50" />
                 {text}
              </div>
            ))}
         </div>
      </div>

      <section id="news" className="py-32 relative bg-[#010202]">
         {/* Topography / Subtle map lines in background */}
         <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            >
               <div className="text-left">
                  <div className="flex items-center gap-4 mb-4">
                     <span className="w-12 h-1 bg-primary"></span>
                     <span className="font-orbitron font-bold tracking-widest text-primary text-xs uppercase">Rəsmi Bildirişlər</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-orbitron font-black uppercase tracking-tighter">İsti <span className="gradient-text">Xəbərlər</span></h2>
               </div>
               <button className="self-start md:self-end px-8 py-3 rounded-full border border-white/20 text-white/50 font-orbitron text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                  Arxivə Bax
               </button>
            </motion.div>
            
            <div className="grid lg:grid-cols-12 gap-8 text-left">
                {/* Featured Massive News Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 group cursor-pointer"
                >
                   <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden glass border border-white/10">
                      <img src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1200" alt="News Main" className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-none grayscale" />
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
                      
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                         <div className="flex gap-4 items-center mb-6">
                            <span className="px-4 py-1 bg-primary text-black font-orbitron font-bold text-[10px] uppercase tracking-widest rounded-sm">Əsas Xəbər</span>
                            <span className="text-white/60 font-orbitron text-[10px] tracking-widest uppercase">07 Aprel, 2026</span>
                         </div>
                         <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">İmişli PFK Yeni Gənclər Akademiyasının İnşasına Başladı</h3>
                         <p className="text-white/60 font-light max-w-2xl hidden md:block">Gələcəyin ulduzlarını yetişdirmək üçün 5 hektar ərazini əhatə edəcək müasir təlim bazasının layihəsi təsdiqləndi. İmişli bölgəsi futbolda yeni mərkəz olacaq.</p>
                      </div>
                   </div>
                </motion.div>

                {/* Sub News Column */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                   {[
                     { date: '05 APREL', title: 'Komanda taktiki analiz laboratoriyasını sınaqdan keçirdi', tag: 'TEXNOLOGİYA' },
                     { date: '02 APREL', title: 'Yeni qapıçı formalarının rəsmi təqdimatı', tag: 'FAN ŞOP' },
                     { date: '28 MART', title: 'Açıq məşq sessiyasında azarkeş rekordu', tag: 'AZARKEŞ' }
                   ].map((news, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer group flex-1 flex flex-col justify-between"
                      >
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-accent text-[10px] font-orbitron font-bold uppercase tracking-widest">{news.tag}</span>
                            <span className="text-white/40 text-[10px] font-orbitron tracking-widest uppercase">{news.date}</span>
                         </div>
                         <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">{news.title}</h3>
                         <div className="w-full h-[1px] bg-white/10 mt-6 relative overflow-hidden">
                            <div className="absolute top-0 left-[-100%] w-full h-full bg-primary group-hover:left-0 transition-all duration-500"></div>
                         </div>
                      </motion.div>
                   ))}
                </div>
            </div>
         </div>
      </section>

      {/* NEW: TACTICAL METRICS & DIGITAL INFRASTRUCTURE SECTION (ULTRA) */}
      <section className="py-24 relative overflow-hidden bg-black/80 border-t border-primary/20">
         <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
         
         <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Tactical Grid Visualization */}
            <div className="relative h-[400px] flex items-center justify-center">
               <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite] opacity-30"></div>
               <div className="absolute inset-8 border border-primary/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
               <div className="w-[300px] h-[300px] bg-primary/5 rounded-full border border-primary/30 shadow-[0_0_50px_rgba(0,255,204,0.1)] flex items-center justify-center backdrop-blur-md relative">
                  {/* Radar/Tactical elements */}
                  <div className="absolute w-full h-[1px] bg-primary/20 rotate-45"></div>
                  <div className="absolute w-full h-[1px] bg-primary/20 -rotate-45"></div>
                  <div className="absolute w-[1px] h-full bg-primary/20"></div>
                  <div className="absolute h-[1px] w-full bg-primary/20"></div>

                  <div className="text-center bg-black/60 p-6 rounded-full border border-primary/50 shadow-[0_0_20px_#00ffcc] relative z-20">
                     <span className="block text-4xl font-orbitron font-black text-primary animate-pulse">94%</span>
                     <span className="text-[10px] font-orbitron text-white/60 tracking-[0.2em] uppercase">Hücum Dəqiqliyi</span>
                  </div>
               </div>
               
               {/* Floating Stats */}
               <div className="absolute top-10 left-0 glass p-4 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <span className="block text-accent font-orbitron font-bold text-xl">2.1 MLN</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/50">Canlı Yayım İzləyicisi</span>
               </div>
               <div className="absolute bottom-10 right-0 glass p-4 rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                  <span className="block text-secondary font-orbitron font-bold text-xl">2S</span>
                  <span className="text-[8px] uppercase tracking-widest text-white/50">Yüksək Presinq Sürəti</span>
               </div>
            </div>

            {/* Description Text */}
            <div className="text-center lg:text-left">
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 border border-accent/30 rounded-full bg-accent/5">
                     <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                     <span className="font-orbitron text-[10px] text-accent tracking-widest uppercase">Performans Mərkəzi</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-black uppercase tracking-tighter mb-6 leading-tight">
                    Məlumatla <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-primary">İdarə Olunan</span> Zəfər
                  </h2>
                  <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8">
                     Futbol artıq sadəcə meydanda oynanılmır. İmişli PFK tərəfindən tətbiq edilən xüsusi süni intellekt alqoritmləri sayəsində rəqibin zəif nöqtələri saniyələr içində hesablanır. Biz şansa yox, dəqiq taktikaya və mütləq kiber idarəetməyə güvənirik.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="border border-white/10 p-4 rounded-xl bg-white/[0.02]">
                        <span className="block font-orbitron text-primary font-bold text-3xl mb-1">100+</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Gündəlik Taktiki Test</span>
                     </div>
                     <div className="border border-white/10 p-4 rounded-xl bg-white/[0.02]">
                        <span className="block font-orbitron text-accent font-bold text-3xl mb-1">X3</span>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest">Sürətli Hücum Qüvvəsi</span>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* NEW: MVP / PLAYER SPOTLIGHT SECTION */}
      <section className="py-24 relative overflow-hidden bg-bg">
         <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute top-0 left-0 text-[100px] md:text-[250px] font-orbitron font-black text-white/[0.01] leading-none select-none pointer-events-none whitespace-nowrap">
            MÖVSÜMÜN ULDUZU
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
               {/* Left: MVP Details */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="order-2 lg:order-1"
               >
                  <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full">
                     <span className="text-primary text-xl">★</span>
                     <span className="font-orbitron text-xs tracking-widest uppercase">Aprel Ayının Ən Yaxşısı</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter mb-4">
                     TURAL <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">HƏSƏNOV</span>
                  </h2>
                  <p className="text-white/40 text-lg mb-10 max-w-md font-light leading-relaxed">
                     Komandanın əsas mühərriki. Son 5 oyunda etdiyi fantastik məhsuldarlıq və komandanı idarəetmə bacarığı ilə İmişli PFK-nın qələbələrində birbaşa pay sahibi.
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                     <div className="glass p-4 rounded-2xl text-center border-t-2 border-t-primary">
                        <span className="block text-3xl font-orbitron font-bold text-white mb-1">12</span>
                        <span className="text-[9px] uppercase tracking-widest text-white/40">Mövsüm Qolu</span>
                     </div>
                     <div className="glass p-4 rounded-2xl text-center border-t-2 border-t-accent">
                        <span className="block text-3xl font-orbitron font-bold text-white mb-1">8</span>
                        <span className="text-[9px] uppercase tracking-widest text-white/40">Məhsuldar Ötürmə</span>
                     </div>
                     <div className="glass p-4 rounded-2xl text-center border-t-2 border-t-secondary">
                        <span className="block text-3xl font-orbitron font-bold text-white mb-1">%89</span>
                        <span className="text-[9px] uppercase tracking-widest text-white/40">Zərbə Dəqiqliyi</span>
                     </div>
                  </div>
                  
                  <button className="flex items-center gap-4 text-xs font-orbitron uppercase tracking-widest text-primary hover:text-white transition-colors group">
                     Oyunçunun Profilini Gör <span className="w-8 h-[1px] bg-primary group-hover:bg-white transition-colors"></span>
                  </button>
               </motion.div>

               {/* Right: Abstract Player Representation */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="order-1 lg:order-2 relative h-[500px] flex items-center justify-center"
               >
                  {/* Hexagon tech background */}
                  <div className="absolute w-[80%] h-[80%] border border-primary/20 rotate-45 rounded-3xl animate-[spin_30s_linear_infinite]"></div>
                  <div className="absolute w-[70%] h-[70%] border border-accent/20 rotate-12 rounded-full border-dashed animate-[spin_20s_linear_infinite_reverse]"></div>
                  
                  {/* Mock Player Silhouette */}
                  <div className="relative w-full h-full flex flex-col items-center justify-end z-10 group">
                      <div className="w-[80%] h-[100%] bg-linear-to-t from-primary/10 via-primary/5 to-transparent rounded-t-full relative overflow-hidden flex items-end justify-center border-b border-primary/40 shadow-[0_-20px_50px_rgba(0,255,204,0.1)]">
                         <span className="text-[150px] font-orbitron font-black text-white/[0.03] absolute top-10 leading-none">10</span>
                         {/* Player Image Placeholder (since we don't use real faces right now per your request) */}
                         <div className="w-1/3 h-2/3 bg-linear-to-t from-white/20 to-white/5 mx-auto rounded-t-[100px] flex items-center justify-center backdrop-blur-xs border-x border-t border-white/10 group-hover:from-primary/30 transition-all duration-700">
                            <span className="text-white/20 font-orbitron rotate-90 whitespace-nowrap text-2xl font-bold tracking-[0.5em] group-hover:text-primary transition-colors">HƏSƏNOV</span>
                         </div>
                      </div>
                      
                      {/* Floating Data Nodes */}
                      <div className="absolute top-[20%] -left-4 glass px-4 py-2 rounded-xl text-xs font-orbitron border-l-2 border-l-primary animate-pulse-glow">Sürət: 34km/s</div>
                      <div className="absolute top-[40%] -right-4 glass px-4 py-2 rounded-xl text-xs font-orbitron border-r-2 border-r-accent animate-pulse-glow" style={{ animationDelay: '1s' }}>Güc: 98/100</div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* NEW: VIP MEMBERSHIP TICKET ADVERTISEMENT */}
      <section className="py-12 relative z-20">
         <div className="container mx-auto px-6">
            <div className="w-full bg-linear-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 group hover:border-primary/30 transition-colors duration-500 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
               
               {/* Animated tech lines in background */}
               <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <div className="absolute h-[1px] w-full top-[20%] bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
                  <div className="absolute h-[1px] w-full top-[60%] bg-linear-to-r from-transparent via-accent/50 to-transparent"></div>
               </div>

               <div className="relative z-10 w-full lg:w-1/2">
                  <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full font-orbitron text-[10px] uppercase tracking-widest inline-block mb-6">Məhdud Sayda</span>
                  <h2 className="text-4xl md:text-5xl font-orbitron font-black uppercase mb-4 leading-tight">
                     KİBER ÜZVLÜK <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">KARTLARI</span>
                  </h2>
                  <p className="text-white/50 text-sm md:text-base font-light mb-8 max-w-lg">
                     Sadəcə oyun izləməyin, klubu idarə edin! Mövsümlük VIP biletlər, eksklüziv rəqəmsal səsvermə hüququ, qapalı təlimlərə buraxılış və limitli məhsullar.
                  </p>
                  <button className="px-8 py-4 bg-white text-black font-orbitron font-bold uppercase text-xs tracking-widest rounded-full hover:bg-primary transition-colors">
                     Karta Sahib Ol
                  </button>
               </div>

               {/* Right: Floating 3D Credit/VIP Card Concept */}
               <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1000px]">
                  <motion.div 
                    animate={{ rotateY: [0, 10, -10, 0], rotateX: [0, 5, -5, 0], y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="w-full max-w-[400px] aspect-[1.6/1] rounded-2xl p-6 border border-white/20 bg-linear-to-br from-[#1a1a1a] via-[#050505] to-[#111] shadow-[0_0_50px_rgba(0,255,204,0.15)] flex flex-col justify-between relative overflow-hidden backdrop-blur-3xl"
                  >
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCAwbDEwIDEwTTEwIDIwbC0xMC0xMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] z-0"></div>
                     <div className="relative z-10 flex justify-between items-start">
                        <span className="font-orbitron font-black text-2xl tracking-widest">İMİŞLİ<span className="text-primary">PFK</span></span>
                        <div className="w-12 h-8 rounded bg-primary/20 border border-primary/50 flex items-center justify-center">
                           <div className="w-6 h-4 bg-linear-to-br from-[#ffd700] to-[#b8860b] rounded-[2px] opacity-80"></div>
                        </div>
                     </div>
                     <div className="relative z-10">
                        <div className="font-orbitron text-lg tracking-[0.3em] font-medium text-white/80 mb-2 mt-4 text-glow">
                           **** **** **** 2026
                        </div>
                        <div className="flex justify-between items-end">
                           <div className="flex flex-col">
                              <span className="text-[8px] uppercase tracking-widest text-white/40 mb-1">Üzv Adı</span>
                              <span className="font-orbitron text-xs tracking-widest text-white/90">EKSKLÜZİV AZARKEŞ</span>
                           </div>
                           <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
                              <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
               
            </div>
         </div>
      </section>

      {/* NEW: SPONSORS & PARTNERS MARQUEE */}
      <section className="py-12 border-y border-white/5 bg-[#010101] overflow-hidden">
         <div className="container mx-auto px-6 mb-8 text-center">
            <span className="font-orbitron text-xs text-white/30 uppercase tracking-[0.3em]">Qlobal Kiber Tərəfdaşlarımız</span>
         </div>
         <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
            {[1, 2].map((group) => (
              <div key={group} className="flex items-center gap-16 mx-8">
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">NEON<span className="text-primary/50">ENERGY</span></div>
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">CYBER<span className="text-accent/50">LABS</span></div>
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">AZ<span className="text-blue-500/50">TECH</span></div>
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">QUANTUM<span className="italic">SPORT</span></div>
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">X-<span className="text-rose-500/50">VISION</span></div>
                 <div className="text-3xl font-orbitron font-black text-white/10 hover:text-white/50 transition-colors">GALAXY<span className="text-purple-500/50">NET</span></div>
              </div>
            ))}
         </div>
      </section>

      <Matches />
      <Team />
    </>
  );
}
