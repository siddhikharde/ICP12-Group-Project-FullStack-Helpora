import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

function Ourservices({ icon, title, subtitle }) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(31,24,49,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(79,60,194,0.13)]">
      <div className="absolute inset-x-6 top-0 h-24 rounded-b-[2rem] bg-gradient-to-r from-violet-100 via-purple-50 to-[#ffe6dc] opacity-70" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex rounded-2xl bg-violet-50 p-3 text-violet-700">{icon}</div>
        <p className="text-2xl font-extrabold tracking-[-0.04em] text-slate-900">{title}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{subtitle}</p>
        <Link to="/service" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-700 transition group-hover:text-[#ff7b65]">
          Book now
          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default Ourservices;
