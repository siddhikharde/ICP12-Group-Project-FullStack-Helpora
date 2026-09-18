import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Corevalue from '../component/Corevalue';
import { CircleCheckBig, Medal, Lightbulb, Heart, UsersRound, Circle } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-[#fffaf7] text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 md:px-6">
        <div className="rounded-[2.4rem] border border-slate-200 bg-white/75 p-6 shadow-[0_24px_60px_rgba(31,24,49,0.05)] md:p-10">
          <p className="section-label">About Helpora</p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-6xl">
            Built to make everyday support feel effortless.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Helpora connects people with trusted local professionals for the jobs that keep life running smoothly—from urgent fixes at home to routine services that deserve reliability.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-8 shadow-[0_18px_40px_rgba(31,24,49,0.04)]">
            <p className="text-2xl font-extrabold tracking-[-0.05em] text-slate-900">Our mission</p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              To simplify the way people find dependable local service providers by combining trust, transparency, and a truly effortless booking experience.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-[#fff2ee] to-white p-8 shadow-[0_18px_40px_rgba(31,24,49,0.04)]">
            <p className="text-2xl font-extrabold tracking-[-0.05em] text-slate-900">Our vision</p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              To create a modern service ecosystem where customers and skilled professionals feel supported, informed, and connected in every interaction.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Core values</p>
          <h2 className="mt-4 text-center text-3xl font-extrabold tracking-[-0.06em] text-slate-900 md:text-5xl">The standards behind Helpora.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <Corevalue icon={<CircleCheckBig size={28} className="text-violet-700" />} title="Trust & verification" subtitle="Every professional is reviewed for reliability, quality, and transparency before they reach your inbox." />
            <Corevalue icon={<Medal size={28} className="text-violet-700" />} title="Quality excellence" subtitle="We value careful execution and visible outcomes to help people feel confident at every step." />
            <Corevalue icon={<Lightbulb size={28} className="text-violet-700" />} title="Transparency" subtitle="Clear pricing, straightforward communication, and no confusing steps in the service journey." />
            <Corevalue icon={<Heart size={28} className="text-violet-700" />} title="Support that feels personal" subtitle="Friendly guidance and responsive communication keep every booking calm, clear, and seamless." />
            <Corevalue icon={<UsersRound size={28} className="text-violet-700" />} title="Community focus" subtitle="We help local professionals and customers find value in strong, dependable everyday relationships." />
            <Corevalue icon={<Circle size={28} className="text-violet-700" />} title="Continuous improvement" subtitle="The platform keeps evolving to match the way real people work, live, and solve daily problems." />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
