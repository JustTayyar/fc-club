import { motion } from 'framer-motion';

const topNews = { 
  id: 1, 
  title: 'İmİşlİ PFK Yenİ Gənclər Akademiyasının İnşasına Başladı', 
  date: '07 Aprel, 2026', 
  tag: 'İNFRASRUKTUR', 
  desc: 'Gələcəyin ulduzlarını yetişdirmək üçün 5 hektar ərazini əhatə edəcək müasir təlim bazasının layihəsi təsdiqləndi. İmişli bölgəsi futbolda yeni innovasiya və inkişaf mərkəzi olacaq. Layihə çərçivəsində smart-məşq zalları inşa ediləcək.', 
  img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1200' 
};

const otherNews = [
  { id: 2, title: 'Yeni Kiber-Sponsorluq müqaviləsi imzalandı', date: '05 Aprel, 2026', tag: 'TƏRƏFDAŞLIQ', desc: 'Texnika nəhəngi NEON ENERGY ilə yeni 5 illik müqavilə bağlandı.' },
  { id: 3, title: 'Taktiki Laboratoriya fəaliyyətə başladı', date: '02 Aprel, 2026', tag: 'TEXNOLOGİYA', desc: 'Baş məşqçi azarkeşlərin suallarını virtual platformada cavablandırdı.' },
  { id: 4, title: 'C-Block Gənclər Layihəsi Uğurla Başa Çatdı', date: '28 Mart, 2026', tag: 'AZARKEŞ', desc: 'Abutiriyentlər üçün təşkil olunmuş kampaniya rezonans yaratdı.' },
  { id: 5, title: 'Yüksək Liqanın qaçılmaz rəqabəti', date: '25 Mart, 2026', tag: 'ÇEMPİONAT', desc: 'Rəqiblər İmişlinin yeni oyun modelinə qarşı strategiya dəyişir.' },
];

export default function NewsPage() {
  return (
    <div className="pt-48 pb-32 relative min-h-screen bg-[#020202] overflow-hidden">
       {/* High-Tech Background Map */}
       <div className="absolute inset-0 z-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTAgMjBoNDBNMCAzMGg0ME0xMCAwdjQwTTIwIDB2NDBNMzAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-primary/20 pb-8"
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-primary/20 bg-primary/5 rounded-full overflow-hidden relative">
               <div className="absolute top-0 left-[-100%] w-full h-full bg-primary/20 animate-[marquee_2s_linear_infinite]"></div>
               <span className="w-2 h-2 rounded-full bg-accent animate-ping relative z-10"></span>
               <span className="text-white/70 tracking-[0.3em] font-orbitron uppercase text-[10px] relative z-10">Canlı Xəbər Lentı</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-black uppercase tracking-tighter drop-shadow-2xl">
               MEDİA <span className="text-transparent bg-clip-text bg-linear-to-b from-primary via-accent to-secondary">MƏRKƏZİ</span>
            </h1>
          </div>
          
          <div className="flex gap-2">
             <button className="px-6 py-2 border border-primary/50 text-primary font-orbitron text-[10px] uppercase tracking-widest hover:bg-primary/10 transition-colors">Bütün Taglar</button>
             <button className="px-6 py-2 border border-white/20 text-white/50 font-orbitron text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">Son 30 Gün</button>
          </div>
        </motion.div>

        {/* Top Story Frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 group cursor-pointer"
        >
           <div className="relative h-[60vh] min-h-[400px] border border-white/10 rounded-3xl overflow-hidden glass hover:border-primary/50 transition-colors duration-700">
              <img 
                src={topNews.img} 
                alt={topNews.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 blur-[2px] group-hover:blur-0" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute top-8 right-8 mix-blend-overlay opacity-30 group-hover:opacity-100 transition-opacity">
                 <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-16 h-16 border border-dashed border-white rounded-full"></div>
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full lg:w-2/3">
                 <div className="flex flex-wrap gap-4 items-center mb-6">
                    <span className="px-4 py-1 bg-primary text-black font-orbitron font-bold text-[10px] uppercase tracking-widest rounded-sm">ƏSAS BURAXILIŞ</span>
                    <span className="px-4 py-1 border border-accent/50 text-accent font-orbitron font-bold text-[10px] uppercase tracking-widest rounded-sm">{topNews.tag}</span>
                    <span className="text-white/60 font-orbitron text-[10px] tracking-[0.2em] uppercase">{topNews.date}</span>
                 </div>
                 <h3 className="text-3xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 leading-[1.1] group-hover:text-primary transition-colors text-white text-shadow-[0_0_20px_rgba(0,0,0,1)]">
                    {topNews.title}
                 </h3>
                 <p className="text-white/80 font-light text-sm md:text-base max-w-2xl leading-relaxed text-shadow-[0_0_10px_rgba(0,0,0,1)]">
                    {topNews.desc}
                 </p>
              </div>
           </div>
        </motion.div>

        {/* Regular News Grid (Text-Heavy UI) */}
        <div className="grid md:grid-cols-2 gap-8">
          {otherNews.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all cursor-pointer group flex flex-col justify-between min-h-[250px] relative overflow-hidden"
             >
                {/* Neon Hover Line */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500"></div>

                <div>
                   <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                      <span className="text-accent text-[10px] font-orbitron font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded">{item.tag}</span>
                      <span className="text-white/40 text-[10px] font-orbitron tracking-widest uppercase">{item.date}</span>
                   </div>
                   <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors text-white/90 leading-snug">{item.title}</h3>
                   <p className="text-white/50 font-light text-sm mb-8 leading-relaxed max-w-md">{item.desc}</p>
                </div>

                <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-white/40 uppercase tracking-widest group-hover:text-primary transition-all">
                  Tam Hissəni Oxu <span className="block w-4 h-[1px] bg-white/40 group-hover:bg-primary group-hover:w-10 transition-all duration-300"></span>
                </div>
             </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
           <button className="px-12 py-4 glass text-primary font-orbitron uppercase text-[10px] tracking-[0.4em] font-bold rounded-full border border-primary/30 hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span> Arxivləri Yüklə
           </button>
        </div>
      </div>
    </div>
  );
}
