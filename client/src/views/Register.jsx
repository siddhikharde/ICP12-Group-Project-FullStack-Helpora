import React from 'react';
import Input from '../component/Input';
import Button from '../component/Button';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';
import Navbar from '../component/Navbar';
import { Eye, EyeClosed, ShieldCheck, Sparkles } from 'lucide-react';
import Footer from '../component/Footer';
import MultiSelect from '../component/MultiSelect';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNo: '',
    role: '',
    location: '',
  });

  const [providerData, setProviderData] = useState({
    field: '',
    experience: '',
    skills: [],
    certifications: '',
    professionalSummary: '',
    serviceAreas: [],
    price: 0,
  });

  const saveUser = async () => {
    const { fullName, email, password, phoneNo, role, location } = newUser;
    if (!fullName || !email || !password || !phoneNo || !role || !location) {
      toast.error('All fields are required', { id: 'registerFailed' });
      return;
    }

    if (role === 'Provide') {
      if (!providerData.field || !providerData.experience || !providerData.serviceAreas) {
        toast.error('Please fill provider details');
        return;
      }
    }

    try {
      const userData = {
        ...newUser,
        field: providerData.field,
        experience: providerData.experience,
        price: providerData.price,
        skills: providerData.skills,
        serviceAreas: providerData.serviceAreas,
        professionalSummary: providerData.professionalSummary,
      };
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, userData);
      if (res.data.success) {
        toast.success('Registration successful! Please login.', { id: 'registerSuccess' });
        window.location.href = '/login';
      } else {
        toast.error(res.data.message, { id: 'registerFailed' });
      }
    } catch (error) {
      toast.error('Registration failed. Please try again.', { id: 'registerFailed' });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fffaf7] px-4 pb-16 pt-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="hidden rounded-[2.4rem] border border-slate-200 bg-gradient-to-br from-[#20163d] via-[#2d2157] to-[#ff8d73] p-8 text-white shadow-[0_30px_60px_rgba(31,24,49,0.1)] lg:block">
            <p className="section-label border-white/20 bg-white/10 text-white">Create account</p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.07em] xl:text-6xl">Join the Helpora network.</h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-violet-100">
              Whether you need help or offer expertise, Helpora helps you connect with trusted local support faster.
            </p>

            <div className="mt-8 space-y-4">
              {['Quick onboarding', 'Verified community', 'Secure account access'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/8 px-4 py-3 text-white/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10"><ShieldCheck size={16} /></span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_30px_60px_rgba(31,24,49,0.08)] backdrop-blur-sm md:p-8">
            <div className="mb-8 text-center">
              <p className="section-label justify-center mx-auto">
                <Sparkles size={14} />
                Join Helpora
              </p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.06em] text-slate-900">Create your account</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <Input placeholder="Full Name" type="text" onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <Input placeholder="Email" type="email" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <div className="relative">
                  <Input placeholder="Password" type={showPassword ? 'text' : 'password'} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} />
                  {showPassword ? (
                    <Eye size={18} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-violet-600" onClick={() => setShowPassword(false)} />
                  ) : (
                    <EyeClosed size={18} className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400" onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                <Input placeholder="Phone Number" type="text" onChange={(e) => setNewUser({ ...newUser, phoneNo: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Location</label>
                <Input placeholder="City / Area" type="text" onChange={(e) => setNewUser({ ...newUser, location: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Service Type</label>
                <select
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                  onChange={(e) => {
                    setNewUser({ ...newUser, role: e.target.value });
                  }}
                >
                  <option value="">I want to</option>
                  <option value="Book">Book Service</option>
                  <option value="Provide">Provide Service</option>
                </select>
              </div>

              {newUser.role === 'Provide' && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Service Field</label>
                    <Input placeholder="Electrician / Plumber" type="text" onChange={(e) => setProviderData({ ...providerData, field: e.target.value })} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Experience (Years)</label>
                    <Input placeholder="Experience" type="text" onChange={(e) => setProviderData({ ...providerData, experience: e.target.value })} />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">Skills</label>
                    <MultiSelect
                      selectedItems={providerData.skills}
                      placeholder={'Enter Skills'}
                      onAddItem={(val) => setProviderData({ ...providerData, skills: [...providerData.skills, val] })}
                      onRemoveItems={(val) => setProviderData({ ...providerData, skills: providerData.skills.filter((skill) => skill !== val) })}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">Service Areas</label>
                    <MultiSelect
                      selectedItems={providerData.serviceAreas}
                      placeholder={'Enter cities'}
                      onAddItem={(val) => setProviderData({ ...providerData, serviceAreas: [...providerData.serviceAreas, val] })}
                      onRemoveItems={(val) => setProviderData({ ...providerData, serviceAreas: providerData.serviceAreas.filter((city) => city !== val) })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Price (₹)</label>
                    <Input placeholder="500" type="text" onChange={(e) => setProviderData({ ...providerData, price: e.target.value })} />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-slate-700">Professional Summary</label>
                    <textarea
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                      placeholder="Tell about your experience"
                      rows={4}
                      onChange={(e) => setProviderData({ ...providerData, professionalSummary: e.target.value })}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-8">
              <Button title="Register" size="lg" className="w-full" onClick={saveUser} />
            </div>

            <div className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{' '}
              <a href="/login" className="font-semibold text-violet-700 hover:text-violet-800">Login here</a>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Register
