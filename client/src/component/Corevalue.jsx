import React from 'react';

function Corevalue({ icon, title, subtitle }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(31,24,49,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(79,60,194,0.08)]">
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">{icon}</span>
        <p className="text-xl font-extrabold tracking-[-0.04em] text-slate-900">{title}</p>
      </div>
      <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
    </div>
  );
}

export default Corevalue;
