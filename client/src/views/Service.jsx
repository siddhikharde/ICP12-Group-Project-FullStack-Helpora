import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Servicecard from "../component/Servicecard";
import { useEffect, useState } from "react";
import Input from "../component/Input"
import axios from "axios";
import { Search } from "lucide-react";

function Service() {
  const [serviceData, setServiceData] = useState([]);
  const [searchItem, setSearchItem]=useState("");
  const loadData = async () => {
    const responce = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/servicemens`,
    );
    console.log(responce.data.data);
    setServiceData(responce.data.data);
  };

  const filteredServices=serviceData.filter((service)=>{
    const item=searchItem.toLowerCase();
    return(
      service.field.toLowerCase().includes(item) ||
      service.serviceAreas?.join(" ").toLowerCase().includes(item)
    )
  })
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-25 mx-5 flex flex-col items-center justify-center flex-wrap">
        <p className="text-5xl text-center md:text-7xl font-bold text-[#2b92f3] mt-1">
          Browse Services
        </p>
        <p className="text-lg text-center md:text-xl text-[#554d47] mt-3">
          Find and book the right professional for your needs
        </p>
      </div>
<div className="px-5 py-10 flex justify-center">
  <div className="relative w-full max-w-2xl">
    
    <Search 
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
      size={20} 
    />

    <input
      type="text"
      placeholder="Search by location or service..."
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
      className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

  </div>
</div>
      <div className="flex justify-center items-center gap-10 flex-wrap mb-20">
        {filteredServices.map((service, idx) => {
          return (
            <Servicecard
              key={service._id}
              img={service.userId.fullName.slice(" ")[0].toUpperCase()}
              name={service.userId.fullName}
              profession={service.field}
              location={service.serviceAreas?.join(" ")}
              experience={service.experience}
              price={service.price}
                onClick={() => {
                  window.location.href = `/serviceinfo/${service._id}`;
                  console.log(service._id);
                }}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Service;
