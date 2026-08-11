import { FaLeaf } from 'react-icons/fa';
import { FiHeart, FiShield, FiZap } from 'react-icons/fi';

const values = [
  {
    icon: FaLeaf,
    title: 'Production locale',
    description: 'Créer de la valeur au cœur de notre territoire.',
  },
  {
    icon: FiShield,
    title: 'Qualité',
    description: 'Nous plaçons la qualité au centre de notre production.',
  },
  {
    icon: FiZap,
    title: 'Innovation',
    description: 'Nous utilisons la technologie pour mieux produire.',
  },
  {
    icon: FiHeart,
    title: 'Engagement',
    description: 'Une vision durable et responsable de notre activité.',
  },
];

function WhyUs() {
  return (
    <section className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E7D32]">
            Pourquoi Avileydi
          </p>

          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
            Plus qu'une ferme.
            <br />
            <span className="text-[#2E7D32]">Une vision.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-[2rem] border border-[#E4EAE2] p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF5EC] text-[#2E7D32]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-7 text-lg font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[#607078]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;