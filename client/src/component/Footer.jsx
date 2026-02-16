import React from "react";
import {
  HandHelping,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router";

function Footer() {
  return (
    <div className="border-t border-gray-300 bg-[#eef0f4]">
      <div className="flex items-start justify-start md:justify-around bg-[#eef0f4] p-8 md:p-16 flex-wrap">
        <div className="my-9">
          <div className="flex items-center">
            <HandHelping
              size={45}
              className="bg-[#2b92f3] p-2  rounded-2xl"
            />
            <p className="text-3xl font-bold mx-1 text-[#2b92f3]">
              Helpora
            </p>
          </div>
          <p className=" mt-5 w-60 md:w-80 text-lg">
            Your trusted platform for booking professional services.
          </p>
          <div className="my-5 flex">
            <a href="https://www.instagram.com/p/DUifv3BkT_c/">
              <Instagram
                size={45}
                className="border border-gray-300  p-3 m-2 rounded-4xl hover:bg-[#2b92f3] duration-300 cursor-pointer"
              />
            </a>
            <a href="https://www.facebook.com/LocalServiceAds/">
              <Facebook
                size={45}
                className="border border-gray-300  p-3 m-2 rounded-4xl hover:bg-[#2b92f3] duration-300 cursor-pointer"
              />
            </a>

            <a href="https://x.com/">
              <Twitter
                size={45}
                className="border border-gray-300  p-3 m-2 rounded-4xl hover:bg-[#2b92f3] duration-300 cursor-pointer"
              />
            </a>

            <a href="https://www.linkedin.com/pulse/local-service-platform-market-size-2026-innovation-izytf/">
              <Linkedin
                size={45}
                className="border border-gray-300 p-3 m-2 rounded-4xl hover:bg-[#2b92f3] duration-300 cursor-pointer"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start m-5">
          <p className=" text-2xl text-start my-3">Quick Links</p>
          <div className="flex flex-col  justify-evenly items-start">
            <Link
              to="/"
              className=" text-xl mx-3 my-2 hover:text-[#2b92f3] scale-100 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/service"
              className=" text-xl mx-3 my-2 hover:text-[#2b92f3] scale-100 transition-all duration-300"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-xl mx-3 my-2 hover:text-[#2b92f3] scale-100 transition-all duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xl mx-3 my-2 hover:text-[#2b92f3] scale-100 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start m-5">
          <p className=" text-2xl text-center my-3">Contact Us</p>
          <div className="flex flex-col justify-evenly h-50">
            <div className="flex justify-evenly items-start">
              <MapPin size={20} className="text-[#2b92f3] mr-4" />
              <p className="text-start text-sm w-60">
                123 Services Avenue, Suite 100, Los Angeles, CA 90001
              </p>
            </div>
            <div className="flex justify-evenly items-start">
              <Phone size={20} className="text-[#2b92f3] mr-4" />
              <a href="tel:+918262019461" className="text-start text-sm  w-60 cursor-pointer hover:text-[#2b92f3] duration-300">+91 8262019461</a>
            </div>

            <div className="flex justify-evenly items-start">
              <Mail size={20} className="text-[#2b92f3] mr-4 " />
              <a href="mailto:info@servicehub.com" className="text-start text-sm  w-60 cursor-pointer hover:text-[#2b92f3] duration-300">info@servicehub.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-10  flex flex-col-reverse py-4 md:flex-row justify-between items-center">
        <p className="py-5 text-center">
          © 2026 Helpora. All rights reserved.
        </p>

        <div className="flex items-center">
          <a
            href="https://www.termsfeed.com/public/uploads/2021/12/sample-privacy-policy-template.pdf"
            className="hover:text-[#2b92f3] cursor-pointer duration-300 mx-3"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf"
            className="hover:text-[#2b92f3] cursor-pointer duration-300 mx-3"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
