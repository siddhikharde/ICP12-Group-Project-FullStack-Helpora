import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Servicecard from '../component/Servicecard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Search, SlidersHorizontal, MapPin, Sparkles } from 'lucide-react';

function Service() {
  const [serviceData, setServiceData] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const loadData = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/servicemens`);
    setServiceData(response.data.data);
  };

  const filteredServices = serviceData.filter((service) => {
    const item = searchItem.toLowerCase();
    const field = service.field?.toLowerCase() || '';
    const areas = service.serviceAreas?.join(' ')?.toLowerCase() || '';

    return field.includes(item) || areas.includes(item);
  });

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-[#fffaf7] text-slate-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pb-20 pt-14 md:px-6">
        <div className="surface-card rounded-[2.4rem] p-6 md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">
                <Sparkles size={14} />
                Service discovery
              </p>
              <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-6xl">
                Find the right help<br />for the job.
              </h1>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
              <MapPin size={16} className="text-violet-600" />
              Nearby trusted professionals
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-inner">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-violet-600" size={18} />
                <input
                  type="text"
                  value={searchItem}
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder="Search by service or area..."
                  className="w-full rounded-full border border-slate-200 bg-white px-12 py-3.5 text-sm text-slate-700 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                />
              </div>

              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700">
                <SlidersHorizontal size={16} className="text-violet-600" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {['Plumbing', 'Electrical', 'Cleaning', 'Driving', 'Repair', 'Carpentry'].map((label) => (
            <button type="button" key={label} onClick={() => setSearchItem(label)} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-200 hover:text-violet-700">
              {label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredServices.length === 0 ? (
            <div className="col-span-full rounded-[2rem] border border-dashed border-slate-300 bg-white p-12 text-center shadow-sm md:p-16">
              <p className="text-3xl font-extrabold tracking-[-0.06em] text-slate-900">No services match that search.</p>
              <p className="mt-3 text-slate-600">Try another service or city to discover more professionals nearby.</p>
            </div>
          ) : (
            filteredServices.map((service) => (
              <Servicecard
                key={service._id}
                img={service.userId?.fullName?.slice(0, 1).toUpperCase() || 'H'}
                name={service.userId?.fullName || 'Helpora Expert'}
                profession={service.field}
                location={service.serviceAreas?.join(' ') || 'Local area'}
                experience={service.experience}
                price={service.price}
                onClick={() => {
                  window.location.href = `/serviceinfo/${service._id}`;
                }}
              />
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Service;
