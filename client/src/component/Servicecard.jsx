import React from "react";
import { MapPin, Clock } from "lucide-react";
import Button from "../component/Button";

function Servicecard({ img, name, profession, location, experience, price, onClick }) {
  return (
    <div className="border w-70 relative border-gray-300 rounded-xl cursor-pointer shadow-lg">
      <div className="bg-[#ebf9f9] h-40 rounded-t-xl flex items-center justify-center">
        <p className="text-5xl text-[#b1daf9] text-center px-6 py-4">{img}</p>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-gray-500">{profession}</p>
        <p className="absolute top-3 right-4 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
          Verified
        </p>
        <div className="flex items-center my-2">
          <MapPin size={20} className="mr-2 text-gray-500" />
          <p className="text-gray-500">{location}</p>
        </div>
        <div className="flex items-center my-2">
          <Clock size={20} className="mr-2 text-gray-500" />
          <p className="text-gray-500">{experience} years of experience.</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <p className="text-[#2b92f3] font-bold text-2xl">₹ {price}/hr</p>
          <Button
            title={"View Profile"}
            size="sm"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Servicecard;
