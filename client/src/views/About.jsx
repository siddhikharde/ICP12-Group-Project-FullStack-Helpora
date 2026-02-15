import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Corevalue from "../component/Corevalue";
import { CircleCheckBig, Medal, Lightbulb, Heart, UsersRound, Circle } from "lucide-react";

function About() {
  return (
    <div>
      <Navbar />
      <div className="my-25 mx-5 flex flex-col items-center justify-center flex-wrap">
        <p className="text-5xl text-center md:text-7xl font-bold text-[#2a2e32] mt-1">
          About Helpora
        </p>
        <p className="text-lg text-center md:text-xl text-[#554d47] mt-3">
          Your trusted platform for connecting with professional services.
        </p>
      </div>
      <div className="m-20">
        <div className="p-4 border my-10 border-gray-300 rounded-2xl">
          <p className="text-2xl font-bold text-[#554d47]">Our Mission</p>
          <p className="text-lg my-2 text-[#554d47]">
            Our mission is to design and deliver a secure, scalable, and
            user-centric local service platform that simplifies the process of
            finding, booking, and managing local services.
          </p>
        </div>

        <div className="p-4 border my-10 border-gray-300 rounded-2xl">
          <p className="text-2xl font-bold text-[#554d47]">Our Vision</p>
          <p className="text-lg my-2 text-[#554d47]">
            Our vision is to create a technology-driven local service ecosystem
            that bridges the gap between customers and skilled service
            professionals such as plumbers, electricians, drivers, carpenters,
            and other essential workers.
          </p>
        </div>
      </div>

      <div>
        <p className="text-4xl text-center my-8 text-[#554d47]">
          Our Core Values
        </p>
        <div className="m-10 flex items-center justify-center flex-wrap gap-10">
          <Corevalue
            icon={<CircleCheckBig size={30} className="text-[#2b92f3]" />}
            title="Trust & Verification"
            subtitle="Every professional is thoroughly vetted. We conduct background checks,
        verify credentials."
          />
          <Corevalue
            icon={<Medal size={30} className="text-[#2b92f3]" />}
            title="Quality Excellence"
            subtitle="We are committed to delivering excellence in every interaction. Quality is not negotiable at Helpora."
          />
          <Corevalue
            icon={<Lightbulb size={30} className="text-[#2b92f3]" />}
            title="Transparency"
            subtitle="Clear pricing, honest communication, and no hidden fees. Our customers always know what to expect."
          />
          <Corevalue
            icon={<Heart size={30} className="text-[#2b92f3]" />}
            title="24/7 Support"
            subtitle="Our dedicated customer support team is always available to help resolve any issues or concerns."
          />
          <Corevalue
            icon={<UsersRound size={30} className="text-[#2b92f3]" />}
            title="Community Focus"
            subtitle="We build a community where both professionals and customers can thrive and succeed together."
          />
          <Corevalue
            icon={<Circle size={30} className="text-[#2b92f3]" />}
            title="Innovation"
            subtitle="We continuously innovate to improve our platform and provide better services to our users."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
