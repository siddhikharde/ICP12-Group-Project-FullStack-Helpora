import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Servicecard from "../component/Servicecard";
import { useEffect, useState } from "react";
import axios from "axios";

function Service() {
  const [serviceData, setServiceData] = useState([]);
  const loadData = async () => {
    const responce = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/servicemens`,
    );
    console.log(responce.data.data);
    setServiceData(responce.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="my-25 mx-5 flex flex-col items-center justify-center flex-wrap">
        <p className="text-5xl text-center md:text-7xl font-bold text-[#2b92f3] mt-1">
          Browse Services
        </p>
        <p className="text-lg text-center md:text-xl text-[#554d47] mt-3">
          Find and book the right professional for your needs
        </p>
      </div>
      <div className="flex justify-center items-center gap-10 flex-wrap mb-20">
        {serviceData.map((service, idx) => {
          return (
            <Servicecard
              key={service._id}
              img={service.userId.fullName.slice(" ")[0].toUpperCase()}
              name={service.userId.fullName}
              profession={service.field}
              location={service.userId.location}
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
