import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi'; // Assurez-vous d'avoir react-icons installé
import femmeIng from '../../assets/femme.jpeg'; // Assurez-vous que le chemin est correct

interface ImageItem {
  src: string;
  alt: string;
}

const IMAGES: ImageItem[] = [
  { src: femmeIng, alt: 'Femme ingénieure' },
  { src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1000&q=85', alt: 'Élevage' },
  { src: 'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85', alt: 'Activité' },
  { src: 'https://images.unsplash.com/photo-1569288063643-5d29ad64dfb7?auto=format&fit=crop&w=1000&q=85', alt: 'Poules' },
  { src: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1000&q=85', alt: 'Production' },
  { src: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1000&q=85', alt: 'Travail' },
  { src: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&w=1000&q=85', alt: 'Poulets' },
  { src: 'https://images.unsplash.com/photo-1544911845-1f34a0e1a2b1?auto=format&fit=crop&w=1000&q=85', alt: 'Vie ferme' },
  { src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85', alt: 'Local' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1000&q=85', alt: 'Agriculture' },
];

const HEX_CLIP_PATH = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';

export function Gallery() {
  // État pour gérer l'image agrandie en modal
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const itemsPerRow = Math.ceil(IMAGES.length / 2);
  const row1 = IMAGES.slice(0, itemsPerRow);
  const row2 = IMAGES.slice(itemsPerRow);

  return (
    <section id="gallery" className="overflow-hidden bg-[#FAFAF7] px-4 py-16 sm:px-6 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#2E7D32]">
              Galerie
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#263238] sm:text-4xl md:text-5xl">
              La ferme en images.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#607078]">
            Cliquez sur une image pour l'agrandir en plein écran.
          </p>
        </motion.div>

        {/* Grille Honeycomb */}
        <div className="mt-12 flex w-full flex-col items-center overflow-x-auto pb-12 pt-4 scrollbar-none">
          <div className="flex min-w-max flex-col items-center px-4">
            
            {/* Ligne 1 */}
            <div className="flex justify-center">
              {row1.map((image, index) => (
                <HexItem
                  key={image.src}
                  image={image}
                  index={index}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

            {/* Ligne 2 (Décalée) */}
            <div className="flex justify-center -mt-[3.5vw] sm:-mt-[3vw] md:-mt-[2.5vw] lg:-mt-[35px] translate-x-[7vw] sm:translate-x-[5.5vw] md:translate-x-[4.5vw] lg:translate-x-[55px]">
              {row2.map((image, index) => (
                <HexItem
                  key={image.src}
                  image={image}
                  index={index + row1.length}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Modal / Lightbox (Agrandissement au clic) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md cursor-pointer"
          >
            {/* Bouton Fermer */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              aria-label="Fermer"
            >
              <FiX size={24} />
            </button>

            {/* Image Agrandie */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique sur l'image elle-même
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-3xl bg-black shadow-2xl md:max-w-4xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-full w-full max-h-[80vh] object-contain"
              />
              <div className="bg-[#1B3020] px-6 text-center">
                <p className="text-base font-semibold text-white">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

{/* Composant Hexagone */}
function HexItem({
  image,
  index,
  onClick,
}: {
  image: ImageItem;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      onClick={onClick}
      className="
        group relative shrink-0 cursor-pointer
        h-[26vw] w-[22vw] -mx-[1.5vw]
        sm:h-[20vw] sm:w-[17vw] sm:-mx-[1vw]
        md:h-[16vw] md:w-[14vw] md:-mx-[0.8vw]
        lg:h-[210px] lg:w-[180px] lg:-mx-[14px]
      "
    >
      <div
        className="
          relative h-full w-full overflow-hidden bg-[#DDE8DB]
          transition-all duration-500 ease-out
          group-hover:z-40 group-hover:scale-110
          group-hover:shadow-[0_20px_40px_rgba(46,125,50,0.3)]
        "
        style={{ clipPath: HEX_CLIP_PATH }}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-115
          "
        />

        {/* Overlay au survol */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B3020]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Texte / Numéro */}
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center text-center opacity-0 transition-all duration-300 group-hover:bottom-4 sm:group-hover:bottom-5 group-hover:opacity-100">
          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#81C784]">
            #{String(index + 1).padStart(2, '0')}
          </span>
          <span className="mt-0.5 text-[9px] sm:text-[11px] font-semibold whitespace-nowrap text-white">
            {image.alt}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Gallery;