import { useState } from "react";
import Navbar from "../component/Navbar";
import {Mail, MapPinHouse, Phone } from "lucide-react";
function Contact() {
  

  return (
    <div className="min-h-screen bg-gray-50 text-textMain px-6 py-16">
      <Navbar/>
      <div className="text-center mb-12 mt-7">
        <h1 className="text-4xl font-bold text-[#2b92f3] mb-3">
          Contact Us
        </h1>
        <p className="text-[#554d47] text-lg">
          We're here to help you anytime
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex  gap-10">
        <div className="bg-white p-8 rounded-2xl w-1/2 shadow-lg">
          <h2 className="text-2xl font-semibold text-[#2b92f3] mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5 text-textMain">
            <p className=" flex items-center gap-2 cursor-pointer">
              <span className="font-semibold flex items-center gap-1 "><MapPinHouse size={17} strokeWidth={2.5} className="text-red-800" /> Address:</span> Loni Pravara, India
            </p>

            <p className=" flex items-center gap-2 cursor-pointer">
              <a href="tel:+919876543210" className="flex gap-2"><span className="font-semibold flex items-center gap-1 "><Phone size={17} strokeWidth={2.5} className="text-red-800" /> Phone:</span> +91 98765 43210</a>
            </p>

            <p className=" flex items-center gap-2 cursor-pointer">
            <a href="mailto:support@helpora.com" className="flex gap-2">   <span className="font-semibold flex items-center gap-1 "><Mail size={17} strokeWidth={2.5} className="text-red-800" />Email:</span> support@helpora.com</a>
            </p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default Contact;