const images = [
  'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85',
];

function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#2E7D32]">
              Galerie
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              La ferme en images.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#607078]">
            Découvrez notre environnement, nos activités et notre quotidien.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-[2rem] ${
                index === 0 ? 'sm:row-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt="Avileydi Farm"
                className={`w-full object-cover transition duration-700 hover:scale-105 ${
                  index === 0 ? 'h-full min-h-[400px]' : 'h-[300px]'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;