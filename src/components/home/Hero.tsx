import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-[#16351D]"
    >
      {/* Image temporaire */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:px-10 lg:pb-28">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8E6C9]"
          >
            <span className="h-px w-10 bg-[#C8E6C9]" />
            Ferme moderne · Guinée
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8x2"
          >
            Travailler aujourd'hui.
            <br />
            <span className="text-[#A5D6A7]">Nourrir demain.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg"
          >
            Avileydi Farm développe une aviculture locale, responsable et
            tournée vers l'avenir, au service des communautés et de
            l'alimentation en Guinée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#about"
              className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#263238] transition hover:bg-[#C8E6C9]"
            >
              Découvrir Avileydi Farm
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#contact"
              className="flex items-center justify-center rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70 md:flex"
      >
        Découvrir
        <FiArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;