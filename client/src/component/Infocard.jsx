import React, { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import Button from "../component/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Infocard({
  img,
  name,
  profession,
  location,
  experience,
  price,
  skills = [],
  contact,
}) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [feedbackData, setFeedbackData] = useState([
    {
      username: "",
      discription: "",
    },
  ]);

  const postData = async () => {
    const postResponce = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/feedback`,
      feedbackData,
    );
    setFeedbackData(postResponce.data.data);
    if (postResponce.data) {
      toast.success("Feedback Recorded");
    } else {
      toast.error("Feedback Not Send");
    }
  };

  const fetchedData = async () => {
    const responce = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/feedback`,
    );
    setFeedbackList(responce.data.data);
    console.log(responce.data.data);
  };

  useEffect(() => {
    fetchedData();
  }, []);
  return (
    <div>
      <div className="pt-25 pb-10 border-b border-gray-300 bg-[#ecf4f7] flex items-center justify-between px-20">
        <div>
          <p className="text-2xl font-bold md:text-4xl">{name}</p>
          <p className="text-gray-500">{profession}</p>
        </div>
        <p className="text-[#2b92f3] font-bold text-2xl md:text-4xl">
          ₹ {price}/hr
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
              <p className="font-bold text-lg">
                {experience} years of experience
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap my-6 bg-gray-100 px-5 py-2 w-fit rounded-lg">
            <MapPin size={20} className="mr-2 text-[#2b92f3]" />
            <div>
              <p className="text-gray-500">Location</p>
              <p className="font-bold text-lg">{location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border w-[50vh] md:w-[100vh] mx-auto my-10 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
        <p className="text-3xl">Skills & Services</p>
        <div className="flex justify-start flex-wrap gap-2">
          {skills.map((skill, idx) => {
            return (
              <p className="text-lg w-fit my-2 bg-green-400 cursor-pointer px-3 text-white py-1 rounded-2xl">
                {skill}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        <a href={`tel:${contact}`}>
          <Button title={"Contact Serviceman"} size="lg" />
        </a>
      </div>
      <div className=" flex flex-col items-center justify-center flex-wrap border mt-20 w-fit mx-auto py-10 px-3 rounded-xl border-gray-300 shadow-lg ">
        <p className="text-3xl text-center">Customer Reviews</p>
        <div className="flex flex-col items-center justify-center flex-wrap my-7">
          <input
            type="text"
            value={feedbackData.username}
            placeholder="Enter your name.."
            className="border my-4 w-80 px-3 py-2 rounded-lg border-gray-500 focus:outline-0"
            onChange={(e) => {
              setFeedbackData({ ...feedbackData, username: e.target.value });
            }}
          />
          <textarea
            type="text"
            value={feedbackData.discription}
            placeholder="Enter Feedback.."
            className="border my-4 w-80 px-3 py-2 rounded-lg border-gray-500 focus:outline-0"
            onChange={(e) => {
              setFeedbackData({ ...feedbackData, discription: e.target.value });
            }}
          />
          <Button
            title={" Submit"}
            size="lg"
            onClick={() => {
              postData();
              setFeedbackData({ username: "", discription: "" });
              fetchedData();
            }}
          />
        </div>
      </div>
      <div>
        {feedbackList.map((item, idx) => {
          return (
            <div className="border w-[50vh] md:w-[100vh] mx-auto my-8 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
              <p className="text-xl font-bold">{item.username}</p>
              <p className="my-2 text-lg text-gray-500">{item.discription}</p>
            </div>
          );
        })}
      </div>
      <Toaster />
    </div>
  );
}

export default Infocard;
