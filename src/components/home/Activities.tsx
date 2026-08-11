import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const activities = [
  {
    number: '01',
    title: 'Oeufs de ponte',
    description:
      'Ponte quotidienne maîtrisée. Coquilles solides, calibre régulier, fraîcheur garantie.',
  },
  {
    number: '02',
    title: 'Volaille de Reforme',
    description:
      'Poules pondeuses en fin de cycle, vendues vivantes. Regroupées, préservées des maladies et des oiseaux sauvages.',
  },
  {
    number: '03',
    title: 'Fiente Azotée',
    description:
      'Fiente riche en azote récupérée comme engrais organique pour l\'agriculteur. L\'économie circulaire du domaine.',
  },
];

function Activities() {
  return (
    <section id="activities" className="bg-[#EFF5EC] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E7D32]">
            Nos activités
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5x2">
            Trois productions, un cycle complet.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-[2rem] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-[#2E7D32]">
                  {activity.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EFF5EC] transition group-hover:bg-[#2E7D32] group-hover:text-white">
                  <FiArrowUpRight />
                </div>
              </div>

              <h3 className="mt-16 text-2xl font-bold">{activity.title}</h3>

              <p className="mt-4 leading-7 text-[#607078]">
                {activity.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;