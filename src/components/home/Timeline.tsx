import { motion } from 'framer-motion';
import {
  FiArrowUpRight,
  FiHome,
  FiTrendingUp,
  FiLayers,
  FiZap,
  FiTarget,
} from 'react-icons/fi';

const milestones = [
  {
    year: '2011',
    title: 'La naissance d’une vision',
    description:
      'Avileydi Farm voit le jour avec une ambition simple : développer une activité agricole durable et créer de la valeur localement.',
    icon: FiHome,
    livestock: '0',
    eggs: '0',
  },
  {
    year: '2013',
    title: 'Les premiers élevages',
    description:
      'Juin 2012 : début des activités avicole mise en place et la ferme commence progressivement à structurer sa production.',
    icon: FiTrendingUp,
    livestock: '10 000',
    eggs: '3 679 616',
  },
  {
    year: '2016',
    title: 'Une nouvelle étape',
    description:
      'La ferme renforce ses capacités de production et structure progressivement ses opérations pour accompagner sa croissance.',
    icon: FiLayers,
    livestock: '40 000',
    eggs: '8 499 320',
  },
  {
    year: '2020',
    title: 'Modernisation',
    description:
      'De nouvelles méthodes et de nouveaux équipements sont progressivement introduits afin d’améliorer la productivité et la qualité.',
    icon: FiZap,
    livestock: '90 000',
    eggs: '17 107 003',
  },
  {
    year: '2025',
    title: 'Avileydi Farm aujourd’hui',
    description:
      'Une ferme en pleine évolution, avec une vision plus ambitieuse pour la production, l’innovation et le développement de nouvelles activités.',
    icon: FiTarget,
    livestock: '100 000',
    eggs: '20 279 473',
  },
];

function Timeline() {
  return (
    <section
      id="history"
      className="relative overflow-hidden bg-[#FAFAF7] px-6 py-20 md:px-10 md:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#E8F3E7] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-[#EEF4EC] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2E7D32]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2E7D32]">
              Notre histoire
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#263238] md:text-5xl">
            Une histoire qui
            <span className="block text-[#2E7D32]">
              continue de grandir.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#607078] md:text-base">
            Depuis 2011, Avileydi Farm évolue étape après étape.
            Chaque période représente une nouvelle expérience,
            un nouveau défi et une nouvelle ambition.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 md:mt-20">

          {/* Main timeline line */}
          <div className="absolute left-[15px] top-0 h-full w-[2px] bg-[#DCE8DA] md:left-1/2 md:-translate-x-1/2" />

          {/* Progress line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute left-[15px] top-0 w-[2px] bg-[#2E7D32] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-14 md:space-y-0">

            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={milestone.year}
                  className="relative md:grid md:min-h-[270px] md:grid-cols-2"
                >

                  {/* Timeline marker */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.12,
                    }}
                    className="absolute left-0 top-0 z-20 flex h-8 w-8 items-center justify-center rounded-full border-[5px] border-[#FAFAF7] bg-[#2E7D32] text-white shadow-[0_0_0_1px_#BFD6BD] md:left-1/2 md:-translate-x-1/2"
                  >
                    <Icon size={13} strokeWidth={2.2} />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -25 : 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: '-80px',
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className={`ml-14 md:ml-0 ${
                      isEven
                        ? 'md:pr-14 lg:pr-20'
                        : 'md:col-start-2 md:pl-14 lg:pl-20'
                    }`}
                  >

                    {/* Year */}
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-4xl font-black leading-none tracking-[-0.04em] text-[#D5E3D3] md:text-5xl">
                        {milestone.year}
                      </span>

                      <span className="h-px w-8 bg-[#C8D9C6]" />
                    </div>

                    {/* Card */}
                    <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#E0E9DE] bg-white p-6 shadow-[0_8px_30px_rgba(38,50,56,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#C5D9C2] hover:shadow-[0_18px_45px_rgba(38,50,56,0.09)] md:p-7">

                      {/* Decorative corner */}
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#F0F6EF] transition-transform duration-500 group-hover:scale-150" />

                      <div className="relative">

                        {/* Icon */}
                        <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF4E9] text-[#2E7D32]">
                          <Icon size={17} />
                        </div>

                        <h3 className="text-xl font-bold tracking-tight text-[#263238] md:text-[21px]">
                          {milestone.title}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#607078]">
                          {milestone.description}
                        </p>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#E8EEE6] pt-5">

                          <div className="rounded-xl bg-[#F7FAF6] px-4 py-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8A9990]">
                              Cheptel
                            </p>

                            <p className="mt-1 text-base font-bold text-[#2E7D32]">
                              {milestone.livestock}
                            </p>
                          </div>

                          <div className="rounded-xl bg-[#F7FAF6] px-4 py-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8A9990]">
                              Œufs produits
                            </p>

                            <p className="mt-1 text-base font-bold text-[#2E7D32]">
                              {milestone.eggs}
                            </p>
                          </div>

                        </div>
                        
                        {/* Card footer */}
                      </div>
                    </div>

                  </motion.div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-14 overflow-hidden rounded-[1.5rem] bg-[#1B3020] px-6 py-7 md:mt-16 md:px-8 md:py-8"
        >
          <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-[#2E7D32] opacity-20 blur-2xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A5D6A7]">
                Aujourd’hui
              </p>

              <p className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                Le prochain chapitre reste à écrire.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#263238] transition-all duration-300 hover:bg-[#C8E6C9]"
            >
              Construisons la suite

              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Timeline;
