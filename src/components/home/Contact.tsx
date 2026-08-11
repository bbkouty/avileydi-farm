import { FiArrowUpRight, FiMail } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="px-6 pb-24 md:px-10 md:pb-32">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#2E7D32] px-7 py-14 text-white md:px-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8E6C9]">
              Contactez-nous
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Construisons ensemble l'avenir de la Guinée.
            </h2>
          </div>

          <div className="lg:text-right">
            <p className="mb-6 text-white/80">
              Une question, une collaboration ou simplement envie d'en savoir
              plus sur Avileydi Farm ?
            </p>

            <a
              href="mailto:contact@avileydifarm.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#263238] transition hover:bg-[#C8E6C9]"
            >
              <FiMail />
              contact@avileydifarm.com
              <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;