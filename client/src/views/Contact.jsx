import { useState } from 'react';
import Navbar from '../component/Navbar';
import { Mail, MapPinHouse, Phone, Sparkles } from 'lucide-react';
import Input from '../component/Input';
import Button from '../component/Button';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../component/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const saveData = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error('All fields are required', { id: 'submitFailed' });
      return;
    }

    toast.success('Message sent successfully!', { id: 'savesuccess' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#fffaf7] px-4 pb-20 pt-14 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white/75 p-8 shadow-[0_24px_60px_rgba(31,24,49,0.05)] md:p-10">
            <p className="section-label">
              <Sparkles size={14} />
              Contact us
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-6xl">We’re here to help</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">Ask a question, plan a booking, or reach the Helpora team for support that feels personal and fast.</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              {[{
                title: 'Address',
                value: 'Loni Pravara, Maharashtra, India',
                meta: 'Loni, 413 736',
                icon: <MapPinHouse size={18} className="text-violet-700" />,
                href: null,
              }, {
                title: 'Phone',
                value: '+91 98765 43210',
                meta: 'Mon-Fri, 9am-6pm',
                icon: <Phone size={18} className="text-violet-700" />,
                href: 'tel:+919876543210',
              }, {
                title: 'Email',
                value: 'support@helpora.com',
                meta: 'We reply within 24 hours',
                icon: <Mail size={18} className="text-violet-700" />,
                href: 'mailto:support@helpora.com',
              }].map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(31,24,49,0.04)]">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-400">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-2 block text-lg font-semibold text-slate-900 hover:text-violet-700">{item.value}</a>
                      ) : (
                        <p className="mt-2 text-lg font-semibold text-slate-900">{item.value}</p>
                      )}
                      <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,49,0.05)] md:p-8">
              <h3 className="text-3xl font-extrabold tracking-[-0.06em] text-slate-900">Send a message</h3>
              <div className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <Input placeholder="Your name" type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <Input placeholder="you@example.com" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea
                    placeholder="Your message"
                    rows="4"
                    value={formData.message}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button title="Send message" size="lg" className="w-full" onClick={saveData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Contact;