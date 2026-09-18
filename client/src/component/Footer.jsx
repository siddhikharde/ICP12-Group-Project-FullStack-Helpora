import React from 'react';
import { HandHelping, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-[#f8f4ef]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.4fr_0.8fr_1.1fr] md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-[#ff7b65] text-white shadow-lg shadow-violet-200">
              <HandHelping size={22} />
            </span>
            <span className="text-2xl font-extrabold tracking-[-0.04em] text-slate-900">Helpora</span>
          </div>
          <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
            Your trusted local service platform for premium home support, fast bookings, and happier everyday routines.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
              <a key={index} href="https://example.com" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-violet-200 hover:text-violet-700">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-lg font-bold text-slate-900">Quick links</p>
          <div className="space-y-3">
            {[
              ['Home', '/'],
              ['Services', '/service'],
              ['About', '/about'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link key={href} to={href} className="block text-sm font-medium text-slate-600 transition hover:text-violet-700">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-lg font-bold text-slate-900">Contact</p>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-violet-600" />
              <span>Loni Pravara, Maharashtra, India</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-violet-600" />
              <a href="tel:+919876543210" className="hover:text-violet-700">+91 98765 43210</a>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-violet-600" />
              <a href="mailto:support@helpora.com" className="hover:text-violet-700">support@helpora.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#f3efe9]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-600 md:flex-row md:px-6">
          <p>© 2026 Helpora. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://example.com" className="hover:text-violet-700">Privacy Policy</a>
            <a href="https://example.com" className="hover:text-violet-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
