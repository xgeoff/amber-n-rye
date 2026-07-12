import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";

import interiorImg from "@assets/xgeoff_the_interior_of_a_large_contemporary_barpub_with_recla__1783797811646.png";

export default function AmberRye() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#E8DCC8] overflow-hidden selection:bg-[#B37B30] selection:text-[#0C0B0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center font-sans tracking-widest text-xs uppercase mix-blend-difference text-[#E8DCC8]">
        <Link href="/" className="hover:text-[#B37B30] transition-colors flex items-center gap-2">
          <span>&larr;</span> Polana
        </Link>
        <div className="hidden md:flex gap-8 text-[#B37B30]">
          <a href="#concept" className="hover:text-[#E8DCC8] transition-colors">Concept</a>
          <a href="#drinks" className="hover:text-[#E8DCC8] transition-colors">Drinks</a>
          <a href="#food" className="hover:text-[#E8DCC8] transition-colors">Food</a>
        </div>
        <div className="text-[#B37B30] font-serif lowercase tracking-normal text-lg italic">Amber & Rye</div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/40 to-[#0C0B0A]/80 z-10" />
          <img 
            src={interiorImg} 
            alt="Amber & Rye Interior" 
            className="w-full h-full object-cover object-center opacity-80"
          />
        </motion.div>
        
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <span className="font-sans text-[#B37B30] uppercase tracking-[0.4em] text-xs">After Dark</span>
            <h1 className="text-6xl md:text-9xl font-serif text-[#E8DCC8] tracking-tight">
              Amber & Rye
            </h1>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 z-20 flex flex-col items-center gap-4 text-[#B37B30]"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#B37B30] to-[#B37B30]" />
          <span className="font-sans text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* Concept */}
      <section id="concept" className="py-32 px-6 md:px-16 max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#B37B30] leading-tight max-w-2xl mx-auto">
            Like arriving at a cellar bar in Kraków after snow.
          </h2>
          <div className="font-sans font-light text-lg md:text-xl text-[#E8DCC8]/70 leading-relaxed max-w-3xl mx-auto space-y-6">
            <p>
              Reclaimed oak, dark green glazed tile, blackened steel, and brass fittings. Amber glass pendant lights and candles in jars illuminating heavy wooden tables. 
            </p>
            <p>
              No televisions. No loud distractions. Just close, warm, amber-lit conversation in a place that smells faintly of oak and caraway. 
            </p>
          </div>
        </motion.div>
      </section>

      {/* Drinks Section */}
      <section id="drinks" className="py-24 px-6 md:px-16 border-t border-[#B37B30]/20 relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#B37B30]/20 via-[#B37B30]/5 to-transparent hidden lg:block" />
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-[#E8DCC8] mb-6">The Bar</h2>
            <div className="w-24 h-[1px] bg-[#B37B30] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* House Infusions */}
            <div className="space-y-16">
              <div>
                <h3 className="font-sans uppercase tracking-[0.2em] text-[#B37B30] mb-8 text-sm flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#B37B30]/50" /> House Infusions <span className="w-8 h-[1px] bg-[#B37B30]/50" />
                </h3>
                <p className="font-serif italic text-xl mb-6 text-[#E8DCC8]/80">Twenty glass jars behind the bar. Served as flights.</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-sans font-light text-[#E8DCC8]/70 text-sm tracking-wide">
                  <span>Horseradish</span>
                  <span>Dill</span>
                  <span>Cucumber</span>
                  <span>Honey Pepper</span>
                  <span>Cranberry</span>
                  <span>Black Currant</span>
                  <span>Cherry</span>
                  <span>Raspberry</span>
                  <span>Elderflower</span>
                  <span>Apple Cinnamon</span>
                  <span>Pear</span>
                  <span>Spruce Tip</span>
                  <span>Juniper</span>
                  <span>Caraway</span>
                  <span>Vanilla</span>
                  <span>Walnut</span>
                </div>
              </div>

              <div>
                <h3 className="font-sans uppercase tracking-[0.2em] text-[#B37B30] mb-8 text-sm flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#B37B30]/50" /> Cocktails <span className="w-8 h-[1px] bg-[#B37B30]/50" />
                </h3>
                <div className="space-y-6">
                  {['Polish Old Fashioned', 'Birch Martini', 'Amber Manhattan', 'Black Currant Mule', 'Honey Rye Sour', 'Juniper Collins', 'Smoked Cherry Boulevardier'].map((cocktail) => (
                    <div key={cocktail} className="flex items-end gap-4 group cursor-default">
                      <div className="font-serif text-xl text-[#E8DCC8] group-hover:text-[#B37B30] transition-colors">{cocktail}</div>
                      <div className="flex-grow border-b border-dotted border-[#B37B30]/30 mb-2"></div>
                      <div className="font-sans text-sm text-[#B37B30]">14</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="aspect-[3/4] w-full overflow-hidden relative border border-[#B37B30]/20 p-2 pb-12">
                <img 
                  src={`${import.meta.env.BASE_URL}images/amber-cocktail.png`} 
                  alt="Amber Manhattan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-0 w-full text-center font-sans tracking-widest text-[#B37B30] text-[10px] uppercase">
                  Amber Manhattan
                </div>
              </div>

              <div>
                <h3 className="font-sans uppercase tracking-[0.2em] text-[#B37B30] mb-8 text-sm flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#B37B30]/50" /> Mead & Beer <span className="w-8 h-[1px] bg-[#B37B30]/50" />
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="font-serif text-2xl text-[#E8DCC8] mb-2">Mead selection</h4>
                    <p className="font-sans font-light text-[#E8DCC8]/70 text-sm leading-relaxed">
                      Dry mead, Sparkling mead, Oak-aged mead, Berry mead, Spiced winter mead.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-[#E8DCC8] mb-2">Poured & Bottled</h4>
                    <p className="font-sans font-light text-[#E8DCC8]/70 text-sm leading-relaxed">
                      Polish, Czech, Lithuanian, Latvian, Ukrainian, Slovak, along with excellent local craft beer. Eastern European imports featured weekly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image divider */}
      <section className="h-[50vh] w-full relative">
        <img 
          src={`${import.meta.env.BASE_URL}images/amber-infusions.png`}
          alt="House Infusions"
          className="w-full h-full object-cover opacity-60 grayscale-[30%] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#B37B30]/10 mix-blend-overlay" />
      </section>

      {/* Food Section */}
      <section id="food" className="py-32 px-6 md:px-16 bg-[#12100E] border-t border-[#B37B30]/20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="lg:w-1/2 w-full">
            <div className="aspect-[4/3] w-full overflow-hidden relative shadow-2xl shadow-black">
              <img 
                src={`${import.meta.env.BASE_URL}images/amber-board.png`}
                alt="Sharing Board"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 w-full space-y-16">
            <div>
              <h2 className="text-5xl font-serif text-[#B37B30] mb-6">Food for the Table</h2>
              <p className="font-sans font-light text-[#E8DCC8]/70 text-lg">
                Everything is shareable. Order three, five, eight plates. Very social.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="font-sans uppercase tracking-widest text-[#B37B30] border-b border-[#B37B30]/30 pb-3 mb-6 text-xs">From the Bar</h3>
                <p className="font-serif text-xl text-[#E8DCC8]">Rye bread with whipped twaróg, smoked butter, cultured butter, house pickles, house mustard.</p>
              </div>

              <div>
                <h3 className="font-sans uppercase tracking-widest text-[#B37B30] border-b border-[#B37B30]/30 pb-3 mb-6 text-xs">Boards</h3>
                <p className="font-serif text-xl text-[#E8DCC8]">Cheese board, sausage board, smoked fish board, pickled vegetable board.</p>
              </div>

              <div>
                <h3 className="font-sans uppercase tracking-widest text-[#B37B30] border-b border-[#B37B30]/30 pb-3 mb-6 text-xs">Warm Plates</h3>
                <p className="font-serif text-xl text-[#E8DCC8] leading-relaxed">
                  Pierogi, kielbasa, hunter's stew in a mug, potato pancakes, smoked trout spread, beet tartare, roasted mushrooms, cabbage rolls, soft pretzels with beer mustard.
                </p>
              </div>

              <div>
                <h3 className="font-sans uppercase tracking-widest text-[#B37B30] border-b border-[#B37B30]/30 pb-3 mb-6 text-xs">Dessert</h3>
                <p className="font-serif text-xl text-[#E8DCC8]">Honey cake, sernik, poppy seed cake, apple cake, ice cream with berry nalewka.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-16 border-t border-[#B37B30]/20 bg-[#0C0B0A] text-center">
        <div className="max-w-2xl mx-auto space-y-16">
          
          <div>
            <h2 className="font-serif text-4xl text-[#B37B30] mb-8">Amber & Rye</h2>
            <p className="font-sans font-light tracking-widest uppercase text-xs text-[#E8DCC8]/50">
              At Polana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[#E8DCC8]/80 font-sans font-light">
            <div className="space-y-2">
              <h4 className="uppercase tracking-widest text-xs text-[#B37B30] mb-4">Location</h4>
              <p>16 Merchant Row</p>
              <p>London EC2A 4RN</p>
              <p className="text-sm opacity-60 mt-2 italic">(Next door to Polana)</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="uppercase tracking-widest text-xs text-[#B37B30] mb-4">Hours</h4>
              <p>Mon–Sat: 16:00–01:00</p>
              <p>Sunday: 14:00–23:00</p>
            </div>
          </div>

          <div className="pt-8">
            <p className="font-serif italic text-2xl text-[#E8DCC8]">"Nazdrovye"</p>
          </div>

          <div className="pt-16 flex flex-col items-center gap-6 border-t border-[#B37B30]/20">
            <p className="font-sans text-sm text-[#E8DCC8]/60">Reservations and walk-ins both welcome.</p>
            <Link href="/" className="px-8 py-3 border border-[#B37B30] text-[#B37B30] hover:bg-[#B37B30] hover:text-[#0C0B0A] transition-colors font-sans uppercase tracking-widest text-xs">
              Return to Polana
            </Link>
          </div>

        </div>
      </footer>
    </div>
  );
}
