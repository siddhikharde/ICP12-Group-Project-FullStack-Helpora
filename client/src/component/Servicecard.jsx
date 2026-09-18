import React from 'react';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import Button from '../component/Button';

function Servicecard({ img, name, profession, location, experience, price, onClick }) {
  return (
    <div className="group relative w-full max-w-[22rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_45px_rgba(31,24,49,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(79,60,194,0.15)]">
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-100 via-white to-[#ffeae3] p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">Available</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-700">
            <Star size={12} fill="currentColor" /> 4.9
          </span>
        </div>
        <div className="mt-6 flex h-28 items-center justify-center rounded-[1.6rem] bg-white/80 ring-1 ring-white/80">
          <p className="text-5xl font-extrabold tracking-[-0.08em] text-violet-400">{img}</p>
        </div>
      </div>

      <div className="space-y-4 px-5 pb-5 pt-4">
        <div>
          <p className="text-[1.1rem] font-extrabold tracking-[-0.04em] text-slate-900">{name}</p>
          <p className="text-sm font-medium text-slate-500">{profession}</p>
        </div>

        <div className="space-y-2.5 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-violet-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-violet-600" />
            <span>{experience} years of experience</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">From</p>
            <p className="mt-1 text-2xl font-extrabold tracking-[-0.06em] text-violet-700">₹ {price}<span className="text-sm font-medium text-slate-500">/hr</span></p>
          </div>

          <Button title="View profile" size="sm" onClick={onClick} className="group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
}

export default Servicecard;
