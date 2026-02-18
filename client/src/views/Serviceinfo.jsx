import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { MapPin, Clock } from "lucide-react";
import Button from "../component/Button";

function Serviceinfo() {
  return (
    <div>
      <Navbar />
      <div className="pt-25 pb-10 border-b border-gray-300 bg-[#ecf4f7] flex items-center justify-between px-20">
        <div>
          <p className="text-2xl font-bold md:text-4xl">Atharv</p>
          <p className="text-gray-500">Developer</p>
        </div>
        <p className="text-[#2b92f3] font-bold text-2xl md:text-4xl">
          ₹ 500/hr
        </p>
      </div>

      <div className="border w-[50vh] md:w-[100vh] mx-auto my-10 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
        <p className="text-3xl">About</p>
        <p className="text-gray-500 my-2">
          Experienced with over 5 years in the industry. Specializing in
          residential and commercial services.
        </p>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center my-6 bg-gray-100 px-4 py-2 w-fit rounded-lg">
            <Clock size={20} className="mr-2 text-[#2b92f3]" />
            <div>
              <p className="text-gray-500">Experience</p>
              <p className="font-bold text-lg">5 years of experience</p>
            </div>
          </div>
          <div className="flex items-center flex-wrap my-6 bg-gray-100 px-5 py-2 w-fit rounded-lg">
            <MapPin size={20} className="mr-2 text-[#2b92f3]" />
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-bold text-lg">Mumbai</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-[50vh] md:w-[100vh] mx-auto my-10 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
        <p className="text-3xl">Skills & Services</p>
        <div className="flex justify-start flex-wrap gap-2">
          <p className="text-lg w-fit my-2 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
            Plumber
          </p>
          <p className="text-lg w-fit my-2 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
            Electrician
          </p>
          <p className="text-lg w-fit my-2 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
            Driver
          </p>
          <p className="text-lg w-fit my-2 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
            Mechanic
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <Button title={"Continue to Booking"} size="lg" />
      </div>

      <p className="text-3xl text-center mt-15">Customer Reviews</p>
      <div className="border w-[50vh] md:w-[100vh] mx-auto my-8 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
        <p className="text-xl font-bold">Atharv Bolke</p>
        <p className="my-2 text-lg text-gray-500">
          The Service is good but the time required more..
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Serviceinfo;
