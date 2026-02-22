import React, { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";
import Button from "../component/Button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Input from "./Input";

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
  const [feedbackData, setFeedbackData] = useState({
    username: "",
    discription: "",
  });

  const postData = async () => {
    const postResponce = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/feedback`,
      feedbackData,
    );
    setFeedbackData(postResponce.data.data);
    if (postResponce.data) {
      toast.success("Feedback Recorded");
      setFeedbackData({
        username: "",
        discription: "",
      })
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

      <div className="border max-w-3xl w-[90%] mx-auto my-10 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
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

      <div className="border max-w-3xl w-[90%] mx-auto my-10 rounded-2xl border-gray-300 px-10 py-5 flex flex-col flex-wrap">
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
      <div className="flex mt-10 justify-center flex-col m-auto items-center mx-auto  w-[90%] md:w-[450px]  bg-white px-5 py-8 h-auto rounded-2xl  shadow-lg rounded-lg gap-5  ">
        <p className="text-3xl text-center">Customer Reviews</p>
        <div className='w-full p-3 flex flex-col gap-5  '>
          <div className='flex flex-col gap-2'>
            <Input
              type="text"
              value={feedbackData.username}
              placeholder="Enter your name.."
              className="border my-4 w-80 px-3 py-2 rounded-lg border-gray-500 focus:outline-0"
              onChange={(e) => {
                setFeedbackData({ ...feedbackData, username: e.target.value });
              }}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <textarea
              type="text"
              value={feedbackData.discription}
              placeholder="Enter Feedback.."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setFeedbackData({ ...feedbackData, discription: e.target.value });
              }}
            />
          </div>
        </div>
        <Button
          title={" Submit"}
          size="lg"
          onClick={() => {
            postData();
            fetchedData();
          }}
        />

      </div>
      <div className="max-w-3xl mx-auto mt-12 space-y-6 max-h-[400px] overflow-y-auto px-4 pb-6">

        {feedbackList.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          feedbackList.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm hover:shadow-md transition duration-300 rounded-2xl p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#2b92f3] to-blue-400 text-white font-bold text-lg">
                  {item.username?.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="font-semibold text-lg">
                    {item.username}
                  </p>
                  <p className="text-xs text-gray-400">

                    {item.createdAt
                      ? new Date(item.createdAt).toLocaleString()
                      : "Just now"}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {item.discription}
              </p>
            </div>
          ))
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default Infocard;
