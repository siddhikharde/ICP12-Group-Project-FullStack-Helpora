import React from "react";
import { Link } from "react-router";

function Ourservices({icon, title, subtitle}) {
  return (
    <div className=" text-white hover:text-[#2b92f3] border-gray-300 border rounded-xl w-88 p-5 hover:border hover:border-hidden hover:duration-300 hover:shadow-[#2b92f3] hover:shadow-sm">
      {icon}
      <p className="text-[#2a2e32] font-bold text-2xl mt-3">{title}</p>
      <p className="text-[#554d47] text-[17px] mt-3">
        {subtitle}
      </p>
      <Link to="/service">
        <p className="font-bold mt-3">Book Now →</p>
      </Link>
    </div>
  );
}

export default Ourservices;
