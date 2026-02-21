import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Infocard from "../component/Infocard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function Serviceinfo() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState([]);

  console.log(id);

  const fetchData = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/servicemen/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log(res.data);
    setServiceData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Infocard
        key={serviceData?.userId?._id}
        name={serviceData?.userId?.fullName}
        profession={serviceData?.field}
        location={serviceData?.userId?.location}
        experience={serviceData?.experience}
        price={serviceData?.price}
        skills={serviceData?.skills}
        contact={serviceData?.userId?.phoneNo}
      />
      <Footer />
    </div>
  );
}

export default Serviceinfo;
