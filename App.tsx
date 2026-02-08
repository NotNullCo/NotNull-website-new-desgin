
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusnadBackground from './components/MusnadBackground';
import ProjectDetails from './components/ProjectDetails';
import ServiceDetails from './components/ServiceDetails';
import LoadingScreen from './components/LoadingScreen';
import Clients from './components/Clients';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import { PROJECTS, TRANSLATIONS, FILTER_ICONS } from './constants';
import { Project, Service } from './types';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, LayoutGrid, MessageCircle } from 'lucide-react';

const INITIAL_PROJECTS_COUNT = 6;

const App: React.FC = () => {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const categories = useMemo(() => {
    const cats = PROJECTS.map(p => isRtl ? p.category_ar : p.category_en);
    const allLabel = isRtl ? 'الكل' : 'All';
    return [allLabel, ...new Set(cats)];
  }, [lang, isRtl]);

  const filteredProjects = useMemo(() => {
    const allLabel = isRtl ? 'الكل' : 'All';
    if (activeFilter === allLabel) return PROJECTS;
    return PROJECTS.filter(p => (isRtl ? p.category_ar : p.category_en) === activeFilter);
  }, [activeFilter, lang, isRtl]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const hasMore = visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
    setActiveFilter(isRtl ? 'All' : 'الكل');
    setVisibleCount(INITIAL_PROJECTS_COUNT);
  };

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(INITIAL_PROJECTS_COUNT);
  };

  return (
    <div className={`min-h-screen relative bg-[#050505] ${isRtl ? 'font-arabic' : 'font-english'}`}>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <MusnadBackground />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
            lang={lang}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedService && (
          <ServiceDetails 
            service={selectedService} 
            onBack={() => setSelectedService(null)} 
            lang={lang}
          />
        )}
      </AnimatePresence>

      {/* Floating Contact Button */}
      <a 
        href="https://wa.me/966500000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-50 p-4 bg-[#d4af37] text-black rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform flex items-center gap-2 group`}
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm px-0 group-hover:px-2">
          {isRtl ? 'اطلب استشارة' : 'Free Consultation'}
        </span>
        <MessageCircle size={28} />
      </a>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header lang={lang} toggleLanguage={toggleLanguage} />
        <main>
          <Hero lang={lang} />
          <AboutUs lang={lang} />
          <Services onServiceSelect={setSelectedService} lang={lang} />
          <Process lang={lang} />
          
          <section id="projects" className="py-24 bg-black/50 backdrop-blur-sm border-t border-[#d4af37]/5">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <motion.h3 className="text-[#d4af37] font-musnad tracking-widest mb-4 text-xl opacity-40">𐩩𐩨𐩫</motion.h3>
                <motion.h2 className={`text-4xl md:text-5xl font-bold ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                  {t.projects.title.split(' ')[0]} <span className="gold-metallic">{t.projects.title.split(' ').slice(1).join(' ')}</span>
                </motion.h2>
                <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light leading-relaxed">
                  {t.projects.desc}
                </p>
              </div>

              {/* Filters Container */}
              <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-5xl mx-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full text-xs md:text-sm transition-all duration-500 border ${
                      activeFilter === cat 
                        ? 'bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-105' 
                        : 'bg-black/40 text-gray-500 border-[#d4af37]/10 hover:border-[#d4af37]/40 hover:text-[#d4af37]'
                    } ${isRtl ? 'font-reem' : 'font-english'}`}
                  >
                    <span className={activeFilter === cat ? 'text-black' : 'text-[#d4af37]/60'}>
                      {FILTER_ICONS[cat] || <LayoutGrid size={16} />}
                    </span>
                    <span className="font-bold tracking-wide">{cat}</span>
                  </button>
                ))}
              </div>
              
              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedProjects.map((project) => (
                    <motion.div 
                      layout key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      onClick={() => setSelectedProject(project)}
                      className="group relative overflow-hidden rounded-2xl aspect-[16/10] cursor-pointer border border-[#d4af37]/10 bg-black/40 hover:border-[#d4af37]/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                    >
                      <img src={project.imageUrls[0]} alt={isRtl ? project.title_ar : project.title_en} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>
                      <div className={`absolute bottom-6 ${isRtl ? 'right-6 left-6' : 'left-6 right-6'} translate-y-2 group-hover:translate-y-0 transition-transform`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-4 h-[1px] bg-[#d4af37]"></span>
                          <span className="text-[#d4af37] text-[10px] font-serif-lux tracking-widest uppercase block font-bold">
                            {isRtl ? project.category_ar : project.category_en}
                          </span>
                        </div>
                        <h4 className={`text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors leading-tight ${isRtl ? 'font-reem' : 'font-serif-lux'}`}>
                          {isRtl ? project.title_ar : project.title_en}
                        </h4>
                        <div className="flex items-center gap-2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="tracking-widest uppercase text-[10px] font-bold">{t.projects.view}</span>
                          <span className="font-musnad text-lg">𐩰</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {hasMore && (
                <div className="mt-20 text-center">
                  <button onClick={handleShowMore} className="group relative px-12 py-5 border border-[#d4af37]/30 text-[#d4af37] text-lg hover:text-black transition-all overflow-hidden rounded-lg">
                    <span className="relative z-10 flex items-center gap-4 font-bold tracking-widest uppercase">
                      {t.projects.load_more}
                      <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform -z-0"></div>
                  </button>
                </div>
              )}
            </div>
          </section>

          <Team lang={lang} />
          <Clients lang={lang} />
          <Testimonials lang={lang} />
          <FAQ lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer lang={lang} />
      </motion.div>
    </div>
  );
};

export default App;
