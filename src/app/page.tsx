"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant entrance animation for the Hero section
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // Simple intersection observer for the other sections (no ScrollTrigger plugin needed)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const revealElements = document.querySelectorAll(".reveal-section");
      revealElements.forEach((el) => {
        gsap.set(el, { y: 60, opacity: 0 }); // Initial state
        observer.observe(el);
      });

      return () => observer.disconnect();
    });

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent relative z-10 w-full overflow-hidden">
      
      {/* Premium Minimal Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[calc(100vh-68px)] h-[calc(100vh-68px)] flex flex-col justify-center py-10 sm:py-14 px-6 sm:px-12 lg:px-24 bg-transparent"
      >
        <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-start">
          <div className="hero-element mb-6 inline-flex items-center gap-4">
            <div className="w-12 h-[1px] bg-amber-600"></div>
            <span className="text-amber-800 font-bold tracking-[0.3em] uppercase text-sm sm:text-base">Think India SVNIT</span>
          </div>
          
          <h1 className="hero-element text-5xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter text-zinc-900 leading-[0.95] font-heading max-w-5xl">
            EMPOWERING<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
              YOUTH.
            </span>
          </h1>
          
          <div className="hero-element mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between w-full border-t border-zinc-900/10 pt-8 gap-8">
            <p className="text-lg text-zinc-700 font-medium max-w-xl leading-relaxed">
              A student-led organization fostering national consciousness and leadership through dialogue, policy discussions, and civic engagement—uniting India's brightest minds for nation-building.
            </p>
          </div>
        </div>
      </section>

      {/* About Section - Introduction & Objectives */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-transparent via-amber-50/50 to-amber-100/40 border-t border-amber-300/30">
        <div className="reveal-section max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-20">
            <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-6 block">Who We Are</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight font-heading mb-8 max-w-4xl leading-tight">
              Think India: Fostering National Consciousness & Leadership
            </h2>
            <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed max-w-4xl">
              Think India is a student-led organization dedicated to fostering national consciousness, leadership, and intellectual growth among youth through discussions, events, and policy-oriented activities. We bring together the best intellectual talent from premier institutions across India to foster a "Nation First" attitude—encouraging deliberation on critical national issues and proposing innovative solutions for the country.
            </p>
          </div>

          {/* Objectives */}
          <div>
            <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-8 block">Our Mission</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">01</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Design sustainable development strategies for underdeveloped and rural Bharat
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">02</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Address environmental, cultural, and security needs of Bharat and the world
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">03</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Support initiatives promoting India-centric action, thought, and innovation
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">04</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Sustain India-centric activities on campus and among the intelligentsia
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">05</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Denounce terrorism, interference, and forces against our national interest
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="flex items-start gap-5">
                  <span className="text-5xl sm:text-6xl font-black text-amber-700 group-hover:text-amber-600 transition-colors shrink-0 leading-none pt-1">06</span>
                  <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium">
                    Uphold gender justice and family values—Bharat's unique contributions to civilization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Premium Section Blocks */}
      <section ref={sectionsRef} className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-amber-50/40 via-amber-100/30 to-orange-100/30 backdrop-blur-sm border-t border-amber-300/60">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          
          {/* Block 1: Events */}
          <div className="reveal-section flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-5/12 flex flex-col items-start">
              <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-4">01 / Events</span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight font-heading mb-6">
                Conclaves & Dialogues
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed mb-8">
                Engage in leadership conclaves, keynote sessions, panel discussions, and seminars with national leaders and changemakers.
              </p>
              <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-amber-600 transition-colors uppercase tracking-widest border-b-2 border-zinc-900 hover:border-amber-600 pb-1">
                Explore Events
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg> */}
              </Link>
            </div>
            <div className="w-full md:w-7/12 aspect-[4/3] bg-amber-50/60 border border-amber-300/60 rounded-3xl overflow-hidden relative shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://res.cloudinary.com/sbnycgli/image/upload/v1789059916/DSC_6213.JPG.jpg" alt="Events" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>

          {/* Block 2: Blogs (Reversed) */}
          <div className="reveal-section flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-5/12 flex flex-col items-start">
              <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-4">02 / Social Impact</span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight font-heading mb-6">
                Community & Service
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed mb-8">
                Discover our social initiatives, community outreach programs, and civic engagement efforts aimed at building a stronger, more united nation.
              </p>
              <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-amber-600 transition-colors uppercase tracking-widest border-b-2 border-zinc-900 hover:border-amber-600 pb-1">
                Read More
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg> */}
              </Link>
            </div>
            <div className="w-full md:w-7/12 aspect-[4/3] bg-amber-50/60 border border-amber-300/60 rounded-3xl overflow-hidden relative shadow-xl group">
               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://res.cloudinary.com/sbnycgli/image/upload/v1789056957/tiov.jpg" alt="Blogs" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>

          {/* Block 3: Gallery */}
          <div className="reveal-section flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-5/12 flex flex-col items-start">
              <span className="text-amber-600 font-black tracking-widest uppercase text-xs mb-4">03 / Activities</span>
              <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight font-heading mb-6">
                Initiatives & Action
              </h2>
              <p className="text-zinc-700 text-lg leading-relaxed mb-8">
                Explore our diverse activities including workshops, student forums, awareness campaigns, and collaborative projects driving positive change.
              </p>
              <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-amber-600 transition-colors uppercase tracking-widest border-b-2 border-zinc-900 hover:border-amber-600 pb-1">
                View Gallery
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg> */}
              </Link>
            </div>
            <div className="w-full md:w-7/12 aspect-[4/3] bg-amber-50/60 border border-amber-300/60 rounded-3xl overflow-hidden relative shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://res.cloudinary.com/sbnycgli/image/upload/v1788691119/rsrkgefcqt7yev3lllvn.jpg" alt="Gallery" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>

        </div>
      </section>
      
      {/* Minimal Footer CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-orange-100/30 via-amber-100/40 to-amber-50/50 border-t border-amber-300/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent pointer-events-none"></div>
        <div className="reveal-section max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black font-heading text-zinc-900 mb-8">Ready to make an impact?</h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-amber-600 text-white font-bold tracking-widest uppercase hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/20">
            Join The Chapter
          </Link>
        </div>
      </section>

    </div>
  );
}
