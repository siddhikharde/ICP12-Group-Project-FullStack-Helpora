import React from "react";
import Navbar from "../component/Navbar";
import { Axe, Zap, Car, BrushCleaning, Hammer, Toolbox } from "lucide-react";
import { Link } from "react-router";
import Ourservices from "../component/Ourservices";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-30 mx-5 flex flex-col items-center justify-center flex-wrap">
        <p className=" text-5xl text-center md:text-7xl font-bold text-[#2a2e32]">
          Find Trusted
        </p>
        <p className="text-5xl text-center md:text-7xl font-bold text-[#2b92f3] mt-1">
          Professional Services
        </p>
        <p className="text-lg text-center md:text-xl text-[#554d47] mt-3">
          Book expert plumbers, electricians, cleaners, and more in your area
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mx-5">
        <p className="text-4xl text-center font-bold text-[#2a2e32]">
          Our Services
        </p>
        <p className="text-lg text-center text-[#554d47] mt-3">
          Browse our wide selection of professional services
        </p>
      </div>
      <div className="my-15 mx-5 flex items-center justify-center flex-wrap gap-10">
        <Ourservices
          icon={
            <Axe
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Plumber"
          subtitle="Professional plumbing repairs and installations."
        />

        <Ourservices
          icon={
            <Zap
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Electrician"
          subtitle="Licensed electrical services for homes and businesses."
        />

        <Ourservices
          icon={
            <Car
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Driver"
          subtitle="Professional driving and transportation services."
        />

        <Ourservices
          icon={
            <BrushCleaning
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Cleaner"
          subtitle="Thorough cleaning for homes and businesses."
        />

        <Ourservices
          icon={
            <Hammer
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Carpenter"
          subtitle="Expert carpentry and woodworking services."
        />

        <Ourservices
          icon={
            <Toolbox
              size={55}
              className="text-[#2b92f3] bg-[#EAF4FD] p-2 rounded-2xl "
            />
          }
          title="Mechanic"
          subtitle="Reliable auto repair and maintenance services."
        />
      </div>

      <div className="my-10 flex flex-col items-center justify-center flex-wrap bg-[#EAF4FD] py-20">
        <p className="text-4xl text-center font-bold text-[#2a2e32] mx-4">
          Ready to Book a Service?
        </p>
        <p className="text-lg text-center text-[#554d47] mt-5 mx-4">
          Browse through our trusted professionals and book your service today
        </p>
        <div className="flex justify-center text-center items-center mt-8 flex-wrap">
          <Link
            to="/services"
            className="text-xl m-3 bg-[#2b92f3] hover:opacity-70 px-4 py-2 rounded-lg text-white text-center scale-100 transition-all duration-300"
          >
            Browse Services
          </Link>
          <Link
            to="/signup"
            className="text-xl m-3 px-4 py-2 border border-gray-300 bg-white rounded-lg hover:bg-[#FACD47] hover:text-white scale-100 transition-all duration-300"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
