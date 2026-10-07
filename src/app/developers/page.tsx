import Link from "next/link";

const developmentHeads = [
  {
    name: "Ayushman Singh",
    admissionNo: "U24CS103",
    github: "https://github.com/ayushman-svnit",
  },
  {
    name: "Sneha Kumari",
    admissionNo: "U24CS046",
    github: "https://github.com/Sneha25-bit",
  },
];

const juniorDevelopers = [
  {
    name: "Dev Prajapati",
    admissionNo: "U25AI009",
    github: "https://github.com/dvprajapati5090",
  },
  {
    name: "Divyansh Tiwari",
    admissionNo: "U25CS079",
    github: "https://github.com/divyansh2102t-dev",
  },
  {
    name: "Subham Maheshwari",
    admissionNo: "U25CS101",
    github: "https://github.com/subhammaheswari2007",
  },
  {
    name: "Smit Pandit",
    admissionNo: "U25AI065",
    github: "https://github.com/Smit-Pandit",
  },
  {
    name: "Lavanya Choukiker",
    admissionNo: "U25CS052",
    github: "https://github.com/lavanyachoukiker8",
  },
  {
    name: "Subrato Ghosh",
    admissionNo: "U25CS012",
    github: "https://github.com/subratoghosh",
  },
  {
    name: "Arav Mathur",
    admissionNo: "U25CS088",
    github: "https://github.com/AravMathur07",
  },
  {
    name: "Shyam Sunder K.",
    admissionNo: "U25EC040",
    github: "https://github.com/shyam-199",
  },
  {
    name: "Gayathri Janyavula",
    admissionNo: "U25CS007",
    github: "https://github.com/Gayathri-Janyavula",
  },
];

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50/30 to-amber-100/40 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <section className="relative py-16 sm:py-24 px-6 sm:px-12 lg:px-24 border-b border-amber-300/40">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-amber-600 to-orange-500"></div>
            <span className="text-amber-800 font-bold tracking-[0.3em] uppercase text-xs">Development Team</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 font-heading mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Developers</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed max-w-3xl">
            The talented team of student developers from SVNIT Surat who brought this website to life with code, creativity, and dedication.
          </p>
        </div>
      </section>

      {/* Development Heads */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 font-heading tracking-tight">
              Development Heads
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentHeads.map((dev, index) => (
              <div
                key={dev.admissionNo}
                className="group relative bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-300 rounded-3xl p-8 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="absolute top-6 right-6">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-900 text-white hover:bg-gradient-to-br hover:from-amber-600 hover:to-orange-500 transition-all duration-300 shadow-xl hover:scale-110 hover:rotate-12"
                    aria-label={`${dev.name}'s GitHub`}
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="relative">
                  <h3 className="text-3xl font-black text-zinc-900 mb-2 font-heading">{dev.name}</h3>
                  <p className="text-sm font-bold text-amber-700 tracking-wider">{dev.admissionNo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Developers */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-transparent to-amber-100/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 font-heading tracking-tight">
              Junior Developers
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {juniorDevelopers.map((dev, index) => (
              <div
                key={dev.admissionNo}
                className="group relative bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                  <span className="text-xs font-black text-amber-800">{String(index + 1).padStart(2, '0')}</span>
                </div>

                <div className="absolute top-3 right-3">
                  <a
                    href={dev.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900 text-white hover:bg-gradient-to-br hover:from-amber-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:scale-110 hover:rotate-6"
                    aria-label={`${dev.name}'s GitHub`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <div className="mt-12 relative">
                  <h3 className="text-xl font-black text-zinc-900 mb-1.5 font-heading pr-6 group-hover:text-amber-700 transition-colors">{dev.name}</h3>
                  <p className="text-xs font-bold text-amber-700 tracking-wider">{dev.admissionNo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
