import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Axe, Zap, Car, BrushCleaning, Hammer, Toolbox, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import Ourservices from "../component/Ourservices";
import feedback from "../config/feedback";
import { useState } from "react";

function Home() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="bg-[url(./assets/home_bg.jpg)] h-[90vh] bg-cover bg-center mb-30 flex flex-col items-center justify-center flex-wrap">
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

      <div className="mt-10 flex flex-col items-center justify-center flex-wrap bg-[#EAF4FD] py-20">
        <p className="text-4xl text-center font-bold text-[#2a2e32] mx-4">
          Ready to Book a Service?
        </p>
        <p className="text-lg text-center text-[#554d47] mt-5 mx-4">
          Browse through our trusted professionals and book your service today
        </p>
        <div className="flex justify-center text-center items-center mt-8 flex-wrap">
          <Link
            to="/service"
            className="text-xl m-3 bg-[#2b92f3] hover:opacity-70 px-4 py-2 rounded-lg text-white text-center scale-100 transition-all duration-300"
          >
            Browse Services
          </Link>
        </div>
      </div>

      <div>
        <div className="flex flex-col justify-center items-center my-10">
          <p className="text-4xl my-4 font-semibold text-center">
            What Our Customers Say
          </p>
          <p className="text-[#554d47] text-center mb-4">
            Real reviews from satisfied customers
          </p>
          <div className="p-20 md:w-200 w-80 shadow-2xl relative mt-10 flex flex-col justify-center items-center flex-wrap rounded-xl">
            <Quote
              size={50}
              className="-top-6 bg-[#2b92f3] text-white p-3 rounded-4xl left-[47%] absolute"
            />
            <p className="text-[#554d47] text-sm md:text-lg text-center">
              "{feedback[index].title}"
            </p>
            <img
              src={feedback[index].img}
              alt="profile-image"
              className="h-20 my-5 rounded-[50%] border-2 border-[#2b92f3]"
            />
            <p className="font-semibold text-lg">{feedback[index].name}</p>
            <div className="flex justify-center items-center mt-5">
              <ChevronLeft
                size={50}
                className="m-2 cursor-pointer text-white bg-neutral-600 rounded-3xl hover:text-[#2b92f3] duration-300"
                onClick={() => {
                  if (index > 0) {
                    setIndex(index - 1);
                  } else {
                    setIndex(0);
                  }
                }}
              />
              <ChevronRight
                size={50}
                className="m-2 cursor-pointer text-white bg-neutral-600 rounded-3xl hover:text-[#2b92f3] duration-300"
                onClick={() => {
                  if (index < feedback.length - 1) {
                    setIndex(index + 1);
                  } else {
                    setIndex(0);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
