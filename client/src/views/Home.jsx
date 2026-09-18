import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import {
  Axe,
  Zap,
  Car,
  BrushCleaning,
  Hammer,
  Toolbox,
  Quote,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MapPin,
  ShieldCheck,
  Clock3,
  Search,
  ArrowRight,
  Star,
  BadgeCheck,
  Check,
} from 'lucide-react';
import { Link } from 'react-router';
import Ourservices from '../component/Ourservices';
import feedback from '../config/feedback';

const serviceCategories = [
  { name: 'Plumbing', icon: <Axe size={16} />, tone: 'bg-violet-100 text-violet-700' },
  { name: 'Electrical', icon: <Zap size={16} />, tone: 'bg-orange-100 text-orange-700' },
  { name: 'Driving', icon: <Car size={16} />, tone: 'bg-emerald-100 text-emerald-700' },
  { name: 'Cleaning', icon: <BrushCleaning size={16} />, tone: 'bg-sky-100 text-sky-700' },
  { name: 'Carpentry', icon: <Hammer size={16} />, tone: 'bg-rose-100 text-rose-700' },
  { name: 'Repair', icon: <Toolbox size={16} />, tone: 'bg-amber-100 text-amber-700' },
];

const processSteps = [
  { number: '01', title: 'Discover', text: 'Search trusted professionals by service, area, and availability.' },
  { number: '02', title: 'Compare', text: 'Check profiles, reviews, pricing, and experience before choosing.' },
  { number: '03', title: 'Book', text: 'Secure your appointment with a seamless, guided booking flow.' },
  { number: '04', title: 'Done', text: 'Enjoy reliable help and keep every booking in one place.' },
];

const trustPoints = [
  { title: 'Verified professionals', text: 'Background-checked experts with proven expertise.', icon: <ShieldCheck size={18} /> },
  { title: 'Transparent pricing', text: 'No surprise charges. The value is clear before booking.', icon: <Check size={18} /> },
  { title: 'Fast response', text: 'Most services confirm within minutes, not days.', icon: <Clock3 size={18} /> },
];

function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#fffaf7] text-slate-900">
      <Navbar />

      <main className="relative overflow-hidden">
        <div className="hero-glow" />

        <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-6 lg:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <span className="section-label">
                <Sparkles size={14} />
                trusted home services
              </span>

              <h1 className="mt-6 max-w-xl text-5xl font-extrabold leading-[0.98] tracking-[-0.08em] text-slate-900 md:text-6xl xl:text-[5rem]">
                Find someone who can <span className="text-gradient">get it done.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Helpora helps you discover reliable local experts for home care, repairs, and everyday essentials—without the stress of endless searching.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/service" className="premium-button px-6 py-3.5 text-sm sm:text-base">
                  Browse services
                </Link>
                <Link to="/about" className="premium-button secondary px-6 py-3.5 text-sm sm:text-base">
                  Why Helpora
                </Link>
              </div>

              <div className="mt-8 max-w-xl rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-[0_20px_50px_rgba(31,24,49,0.06)] backdrop-blur-sm">
                <div className="flex items-center gap-3 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-3">
                  <Search size={18} className="text-violet-600" />
                  <input
                    type="text"
                    placeholder="Search plumbers, cleaners, drivers..."
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                  <button className="premium-button px-4 py-2.5 text-sm">Search</button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {serviceCategories.map((category) => (
                  <span key={category.name} className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold ${category.tone}`}>
                    {category.icon}
                    {category.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute left-4 top-10 h-40 w-40 rounded-full bg-violet-200/60 blur-3xl" />
              <div className="absolute bottom-8 right-0 h-48 w-48 rounded-full bg-[#ffd8c8]/80 blur-3xl" />

              <div className="relative w-full max-w-[32rem] rounded-[2.3rem] border border-slate-200 bg-white/90 p-4 shadow-[0_40px_80px_rgba(31,24,49,0.12)] backdrop-blur-sm">
                <div className="rounded-[2rem] bg-gradient-to-br from-[#20163d] via-[#3d2d77] to-[#ff9b7b] p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-violet-100">Featured match</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-violet-100">
                      <Star size={12} fill="currentColor" /> 4.9
                    </span>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-extrabold tracking-[-0.06em]">Plumbing</p>
                      <p className="mt-2 text-sm text-violet-100">Same-day availability</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3 text-right">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-violet-100">from</p>
                      <p className="text-2xl font-extrabold">₹499</p>
                    </div>
                  </div>

                  <div className="mt-7 rounded-[1.7rem] bg-white/85 p-4 text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-[#ff7b65] text-xl font-extrabold text-white">A</div>
                      <div>
                        <p className="text-lg font-extrabold">Amit Verma</p>
                        <p className="text-sm text-slate-500">Licensed plumber</p>
                      </div>
                      <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                        <BadgeCheck size={12} /> confirmed
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-600">
                      <div className="rounded-2xl bg-slate-100 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Location</p>
                        <p className="mt-2 flex items-center gap-2 font-semibold text-slate-800"><MapPin size={14} /> Loni West</p>
                      </div>
                      <div className="rounded-2xl bg-slate-100 p-3">
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">Experience</p>
                        <p className="mt-2 font-semibold text-slate-800">8+ years</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-chip left-[-1.3rem] top-16 rotate-[-8deg]">
                  <BadgeCheck size={14} className="text-emerald-600" />
                  100% verified
                </div>

                <div className="floating-chip bottom-8 right-[-1rem] rotate-[7deg]">
                  <Clock3 size={14} className="text-violet-600" />
                  Book in 12 min
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="section-label">Popular services</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-slate-900 md:text-5xl">Everything your home needs.</h2>
            </div>
            <Link to="/service" className="hidden items-center gap-2 text-sm font-bold text-violet-700 md:inline-flex">
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Ourservices icon={<Axe size={28} />} title="Plumber" subtitle="Rapid repairs, fittings, and leak solutions across your neighborhood." />
            <Ourservices icon={<Zap size={28} />} title="Electrician" subtitle="Safe electrical fixes, panel upgrades, and smart-home support." />
            <Ourservices icon={<BrushCleaning size={28} />} title="Cleaner" subtitle="Refresh your home with vetted, detail-focused cleaning professionals." />
            <Ourservices icon={<Hammer size={28} />} title="Carpenter" subtitle="Custom work, touch-ups, and durable repairs for every room." />
            <Ourservices icon={<Car size={28} />} title="Driver" subtitle="Daily rides and local transport done by reliable drivers you can trust." />
            <Ourservices icon={<Toolbox size={28} />} title="Mechanic" subtitle="Dependable vehicle care with transparent advice and quick turnaround." />
          </div>
        </section>

        <section className="bg-[#f2edf8] py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 text-center">
              <p className="section-label">How Helpora works</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.06em] text-slate-900 md:text-5xl">The service journey, simplified.</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.number} className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(31,24,49,0.04)]">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold tracking-[-0.08em] text-violet-200">{step.number}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.04em] text-slate-900">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2.25rem] bg-gradient-to-br from-[#20163d] via-[#33265d] to-[#ff8d73] p-8 text-white shadow-[0_28px_55px_rgba(31,24,49,0.12)]">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-200">Why people choose Helpora</p>
              <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.06em]">A smoother way to book trusted help.</h3>
              <div className="mt-8 space-y-4">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex items-start gap-3 rounded-2xl bg-white/8 p-3">
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white/12 text-white">{point.icon}</span>
                    <div>
                      <p className="font-bold">{point.title}</p>
                      <p className="mt-1 text-sm text-violet-100">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="surface-card rounded-[2rem] p-6">
                <p className="section-label">Built for busy lives</p>
                <h3 className="mt-5 text-3xl font-extrabold tracking-[-0.06em] text-slate-900">Professional service, without the hassle.</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    ['2 min', 'Average response'],
                    ['4.9/5', 'Customer rating'],
                    ['1 tap', 'Instant booking'],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-2xl font-extrabold tracking-[-0.05em] text-slate-900">{value}</p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(31,24,49,0.04)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-400">Customer stories</p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-slate-900">Real people, real outcomes.</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" aria-label="Previous review" onClick={() => setIndex((prev) => (prev === 0 ? feedback.length - 1 : prev - 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-200 hover:text-violet-700">
                      <ChevronLeft size={18} />
                    </button>
                    <button type="button" aria-label="Next review" onClick={() => setIndex((prev) => (prev === feedback.length - 1 ? 0 : prev + 1))} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-200 hover:text-violet-700">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.7rem] bg-slate-50 p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-[#ff7b65] text-sm font-bold text-white">
                      {feedback[index].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{feedback[index].name}</p>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Verified customer</p>
                    </div>
                  </div>

                  <Quote className="mt-5 text-violet-600" size={18} />
                  <p className="mt-3 text-base leading-7 text-slate-600">“{feedback[index].title}”</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
