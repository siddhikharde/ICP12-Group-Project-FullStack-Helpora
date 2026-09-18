import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { HandHelping, Menu, X, Bell, Sparkles } from 'lucide-react';
import { getData } from '../utils';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const fetchData = () => {
    const data = getData();
    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/service' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <div className="mx-auto max-w-7xl rounded-full border border-slate-200/80 bg-white/75 px-4 py-3 shadow-[0_18px_40px_rgba(31,24,49,0.08)] backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-[#ff7b65] text-white shadow-lg shadow-violet-200">
              <HandHelping size={22} />
            </span>
            <span className="text-xl font-extrabold tracking-[-0.04em] text-slate-900">Helpora</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-violet-200 hover:text-violet-700">
              <Bell size={16} />
            </button>

            {userData?.fullName ? (
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-sm transition hover:border-violet-200"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-[#ff7b65] text-sm font-bold text-white">
                    {userData.fullName.charAt(0).toUpperCase()}
                  </span>
                  <span className="pr-1 text-sm font-semibold text-slate-800">{userData.fullName}</span>
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 top-14 w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Account</span>
                      <button type="button" onClick={() => setIsProfileOpen(false)} className="text-slate-400 hover:text-slate-700">
                        <X size={16} />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <Link to={userData?.role === 'Provide' ? '/servicemen-profile' : '/profile'} className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-violet-700" onClick={() => setIsProfileOpen(false)}>
                        {userData?.role === 'Provide' ? 'Service Profile' : 'User Profile'}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="rounded-full px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                  Login
                </Link>
                <Link to="/register" className="premium-button px-4 py-2.5 text-sm">
                  Join now
                </Link>
              </div>
            )}

            {userData?.fullName && (
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('user');
                  setUserData({});
                  window.location.href = '/';
                }}
                className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
              >
                Logout
              </button>
            )}
          </div>

          <button type="button" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} className="block rounded-2xl px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}

            <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
              {userData?.fullName ? (
                <>
                  <Link to={userData?.role === 'Provide' ? '/servicemen-profile' : '/profile'} className="block rounded-2xl px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700" onClick={() => setIsOpen(false)}>
                    {userData?.role === 'Provide' ? 'Service Profile' : 'User Profile'}
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem('user');
                      setUserData({});
                      setIsOpen(false);
                      window.location.href = '/';
                    }}
                    className="w-full rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2.5 text-left text-base font-semibold text-rose-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block rounded-2xl px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-violet-700" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="premium-button mt-1 w-full px-4 py-3" onClick={() => setIsOpen(false)}>
                    Join now
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
