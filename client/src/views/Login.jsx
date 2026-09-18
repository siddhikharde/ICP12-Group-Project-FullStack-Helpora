import React from 'react';
import Input from '../component/Input';
import Button from '../component/Button';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router';
import { Eye, EyeClosed, ShieldCheck, Sparkles } from 'lucide-react';
import Footer from '../component/Footer';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const checkUser = async () => {
    const { email, password } = user;
    if (!email || !password) {
      toast.error('All fields are required', { id: 'loginFailed' });
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, user);
      if (res.data.success) {
        toast.success('Login successful!', { id: 'loginSuccess' });
        localStorage.setItem('user', JSON.stringify(res.data.data));
        localStorage.setItem('token', res.data.token);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        toast.error('Invalid Email or password', { id: 'loginFailed' });
      }
    } catch (e) {
      toast.error('Login failed. Please try again.', { id: 'loginFailed' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fffaf7] px-4 pb-16 pt-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="hidden rounded-[2.4rem] border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-[#ffeae4] p-8 shadow-[0_30px_60px_rgba(31,24,49,0.06)] lg:block">
            <p className="section-label">
              <Sparkles size={14} />
              Welcome back
            </p>
            <h1 className="mt-6 max-w-md text-4xl font-extrabold tracking-[-0.07em] text-slate-900 xl:text-6xl">
              Your next trusted fix starts here.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
              Book vetted local help, manage your upcoming appointments, and keep your home running smoothly.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Verified professionals',
                'Same-day help options',
                'Transparent pricing',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-slate-700 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700"><ShieldCheck size={16} /></span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_30px_60px_rgba(31,24,49,0.08)] backdrop-blur-sm md:p-8">
            <div className="mb-8 text-center">
              <p className="section-label justify-center mx-auto">Login</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.06em] text-slate-900">Welcome back</h2>
              <p className="mt-2 text-sm text-slate-500">Access your bookings and account details</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <Input
                  placeholder="you@example.com"
                  type="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <Input
                    placeholder="Your password"
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                  />
                  {showPassword ? (
                    <Eye
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-violet-600"
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <EyeClosed
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400"
                      onClick={() => setShowPassword(true)}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="mt-7">
              <Button title="Login" size="lg" className="w-full" onClick={checkUser} />
            </div>

            <div className="mt-6 text-center text-sm text-slate-600">
              Don’t have an account?{' '}
              <a href="/register" className="font-semibold text-violet-700 hover:text-violet-800">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Login
