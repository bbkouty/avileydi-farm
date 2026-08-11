import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E7D32]">
            À propos
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Une ferme pensée pour{' '}
            <span className="text-[#2E7D32]">l'avenir.</span>
          </h2>

          <p className="mt-7 max-w-xl leading-8 text-[#607078]">
            Avileydi Farm est une exploitation avicole qui place la qualité,
            l'innovation et la production locale au cœur de son approche.
          </p>

          <p className="mt-4 max-w-xl leading-8 text-[#607078]">
            Notre ambition est de contribuer à une production plus moderne,
            durable et accessible tout en créant de la valeur localement.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-[#2E7D32] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#256628]"
          >
            En savoir plus
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85"
              alt="Production agricole"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-3xl bg-[#2E7D32] p-6 text-white shadow-xl sm:block">
            <p className="text-3xl font-bold">100%</p>
            <p className="mt-1 text-sm text-white/80">Engagement local</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;