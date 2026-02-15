import React from "react";

function Corevalue({icon, title, subtitle}) {
  return (
    <div className="border w-120 border-gray-300 rounded-2xl p-4 mx-5">
      <div className="flex items-center my-2">
        {icon}
        <p className="text-2xl font-bold ml-4">{title}</p>
      </div>
      <p className="text-lg text-[#554d47]">
        {subtitle}
      </p>
    </div>
  );
}

export default Corevalue;
