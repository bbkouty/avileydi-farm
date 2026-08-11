import { useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

const navigation = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Nos activités', href: '#activities' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-black/20 px-5 py-3 text-white backdrop-blur-xl md:px-7">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2E7D32]">
            <span className="text-lg font-bold">AVL</span>
          </div>

          <div className="hidden leading-none sm:block">
            <span className="block text-sm font-bold tracking-[0.2em]">
              AVILEYDI
            </span>
            <span className="text-[10px] tracking-[0.35em] text-white/70">
              FARM
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#263238] transition hover:bg-[#C8E6C9] lg:flex"
        >
          Nous contacter
          <FiArrowUpRight />
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 lg:hidden"
          aria-label="Menu"
        >
          {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mx-4 mt-2 rounded-3xl border border-white/20 bg-[#1B3020]/95 p-5 text-white backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;