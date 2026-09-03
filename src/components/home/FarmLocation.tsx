import { motion } from 'framer-motion';
import {
  FiMapPin,
  FiNavigation,
  FiMaximize2,
} from 'react-icons/fi';

// --------------------------------------------------
// Avileydi Farm coordinates
// --------------------------------------------------

const FARM_COORDINATES = '9.96446° N · 12.973621° W';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/@9.96446,-12.973621,18z/data=!3m1!1e3';

// --------------------------------------------------
// FarmLocation
// --------------------------------------------------

function FarmLocation() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-white px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* ------------------------------------------
            Header
        ------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#2E7D32]" />

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2E7D32]">
              Où nous trouver
            </p>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#263238] md:text-5xl">
            Là où notre histoire
            <span className="block text-[#2E7D32]">
              prend vie.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#607078] md:text-base">
            Découvrez l’emplacement d’Avileydi Farm et
            l’environnement dans lequel notre exploitation
            poursuit son développement.
          </p>
        </motion.div>

        {/* ------------------------------------------
            Satellite image
        ------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[#DDE8DB] bg-[#EAF2E8] shadow-[0_20px_60px_rgba(38,50,56,0.10)]">

            {/* Satellite image */}

            <div className="relative h-[420px] w-full md:h-[520px]">

              <img
                src={`${import.meta.env.BASE_URL}images/avileydi-farm-location.jpg`}
                alt="Vue satellite de l'emplacement d'Avileydi Farm"
                className="h-full w-full object-cover"
              />

              {/* Subtle overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

              {/* ------------------------------------
                  Farm marker
              ------------------------------------- */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                {/* Pulse */}

                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-[#2E7D32]/30" />

                {/* Marker */}

                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#2E7D32] text-white shadow-[0_8px_25px_rgba(46,125,50,0.40)]">
                  <FiMapPin size={21} />
                </div>

                {/* Label */}

                <div className="absolute left-1/2 top-14 -translate-x-1/2 whitespace-nowrap rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                  <p className="text-xs font-bold text-[#263238]">
                    Avileydi Farm
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#607078]">
                    Notre exploitation
                  </p>
                </div>

              </div>

              {/* ------------------------------------
                  Location card
              ------------------------------------- */}

              <div className="absolute left-5 top-5 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md md:left-6 md:top-6">
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF4E9] text-[#2E7D32]">
                    <FiMapPin size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2E7D32]">
                      Localisation
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#263238]">
                      Avileydi Farm
                    </p>

                    <p className="mt-0.5 text-xs text-[#607078]">
                      Guinée
                    </p>
                  </div>

                </div>
              </div>

              {/* ------------------------------------
                  Coordinates
              ------------------------------------- */}

              <div className="absolute bottom-5 left-5 hidden rounded-xl bg-black/55 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-md md:block">
                {FARM_COORDINATES}
              </div>

              {/* ------------------------------------
                  Google Maps button
              ------------------------------------- */}

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-5 right-5 flex items-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-bold text-[#263238] shadow-lg transition-all duration-300 hover:bg-[#2E7D32] hover:text-white md:bottom-6 md:right-6"
              >
                <FiNavigation
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                Voir sur Google Maps
              </a>

            </div>
          </div>

        </motion.div>

        {/* ------------------------------------------
            Bottom information
        ------------------------------------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 border-t border-[#E4ECE2] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A9990]">
              Coordonnées
            </p>

            <p className="mt-1 text-sm font-semibold text-[#263238]">
              {FARM_COORDINATES}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#607078]">
            <FiMaximize2 size={14} className="text-[#2E7D32]" />

            <span>
              Vue satellite de l'exploitation
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default FarmLocation;