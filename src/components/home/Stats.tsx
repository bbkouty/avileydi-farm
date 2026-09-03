function Stats() {
  const stats = [
    ['2025', 'Trois batiments de ponte'],
    ['100 000', 'Poules pondeuses'],
    ['38', 'Employés, tous issus de la communauté, dont 6 femmes'],
    ['80 000', 'Bénéficiaire directs et indirects de la ferme'],
  ];

  return (
    <section className="bg-[#1B3020] px-6 py-14 text-white md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="text-4xl font-bold md:text-5xl">{value}</p>
            <p className="mt-2 text-sm text-white/60">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;