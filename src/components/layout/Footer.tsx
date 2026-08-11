function Footer() {
  return (
    <footer className="bg-[#132218] px-6 py-10 text-white md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold tracking-[0.15em]">AVILEYDI</p>
          <p className="text-xs tracking-[0.3em] text-white/50">FARM</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-white/60">
          <a href="#about" className="transition hover:text-white">
            À propos
          </a>

          <a href="#activities" className="transition hover:text-white">
            Activités
          </a>

          <a href="#gallery" className="transition hover:text-white">
            Galerie
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Avileydi Farm. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;