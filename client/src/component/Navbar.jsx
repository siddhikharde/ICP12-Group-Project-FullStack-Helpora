import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { HandHelping, Menu, X } from "lucide-react";
import { getData } from "../utils";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [userData, setUserData] = useState({});

  const fetchData = () => {
    const data = getData();
    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-3 px-10 fixed top-0 w-full border-b pb-2 border-gray-500 bg-white z-10">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <HandHelping
              size={45}
              className="bg-[#2b92f3] p-2 text-white rounded-2xl"
            />
            <p className="text-2xl font-extrabold mx-1 text-[#2b92f3]">
              Helpora
            </p>
          </Link>
        </div>
        <div className="hidden md:flex justify-evenly items-center">
          <Link
            to="/"
            className="text-xl mx-3 hover:text-[#2b92f3] scale-100 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/service"
            className="text-xl mx-3 hover:text-[#2b92f3] scale-100 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-xl mx-3 hover:text-[#2b92f3] scale-100 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl mx-3 hover:text-[#2b92f3] scale-100 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="relative hidden md:flex justify-evenly items-center cursor-pointer">
          {userData?.fullName ? (
            <div
              className="flex items-center"
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
              }}
            >
              <p className="text-xl px-3 py-1 font-bold bg-[#2b92f3] rounded-full text-white text-center mx-1">
                {userData.fullName.slice(" ")[0]}
              </p>
              <p className="mr-4 text-xl font-bold">{userData.fullName}</p>
            </div>
          ) : (
            <div>
              <Link
                to="/login"
                className="text-xl mx-3 px-3 py-2 rounded-2xl hover:bg-[#FACD47] hover:text-white scale-100 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          )}

          {isProfileOpen && (
            <div className="absolute bg-white border border-gray-300 w-50 h-28 top-13 right-24 rounded-b-lg">
              <X
                size={35}
                className="absolute right-2 top-2"
                onClick={() => {
                  setIsProfileOpen(false);
                }}
              />

              <div className="flex flex-col items-start px-4 py-7">
                {userData?.service === "Provide" ? (
                  <div className="flex flex-col items-start">
                    <Link
                      to="/profile"
                      className="text-xl hover:text-[#2b92f3]"
                    >
                      Service Profile
                    </Link>
                    <Link
                      to="/profile"
                      className="text-xl hover:text-[#2b92f3]"
                    >
                      Your Bookings
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-start">
                    <Link
                      to="/profile"
                      className="text-xl hover:text-[#2b92f3]"
                    >
                      User Profile
                    </Link>
                    <Link
                      to="/profile"
                      className="text-xl hover:text-[#2b92f3]"
                    >
                      Your Bookings
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {userData ? (
            <div>
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  setUserData({});
                  window.location.href = "/";
                }}
                className="text-xl mx-3 bg-red-500 cursor-pointer hover:opacity-70 px-3 py-2 rounded-2xl text-white text-center scale-100 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link
                to="/register"
                className="text-xl mx-3 bg-[#2b92f3] hover:opacity-70 px-3 py-2 rounded-2xl text-white text-center scale-100 transition-all duration-300"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={35} /> : <Menu size={35} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white border-b border-gray-300 z-10">
          <div className="flex flex-col items-center py-4">
            <Link
              to="/"
              className="font-bold text-xl py-2 hover:text-[#2b92f3]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/service"
              className="font-bold text-xl py-2 hover:text-[#2b92f3]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="font-bold text-xl py-2 hover:text-[#2b92f3]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="font-bold text-xl py-2 hover:text-[#2b92f3]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <span className="relative">
              {userData?.fullName ? (
                <div
                  className="flex items-center"
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                  }}
                >
                  <p className="text-xl px-3 py-1 font-bold bg-[#2b92f3] rounded-full text-white text-center mx-1">
                    {userData.fullName.slice(" ")[0]}
                  </p>
                  <p className="mr-4 text-xl font-bold">{userData.fullName}</p>
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="font-bold text-xl py-2 hover:text-[#2b92f3]"
                  >
                    Login
                  </Link>
                </div>
              )}
            </span>
            {isProfileOpen && (
              <div className="absolute bg-white border border-gray-300 w-50 h-28 top-58 right-auto rounded-b-lg">
                <X
                  size={35}
                  className="absolute right-2 top-2"
                  onClick={() => {
                    setIsProfileOpen(false);
                  }}
                />

                <div className="flex flex-col items-start px-4 py-7">
                  {userData?.service === "Provide" ? (
                    <div className="flex flex-col items-start">
                      <Link
                        to="/profile"
                        className="text-xl hover:text-[#2b92f3]"
                      >
                        Service Profile
                      </Link>
                      <Link
                        to="/profile"
                        className="text-xl hover:text-[#2b92f3]"
                      >
                        Your Bookings
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start">
                      <Link
                        to="/profile"
                        className="text-xl hover:text-[#2b92f3]"
                      >
                        User Profile
                      </Link>
                      <Link
                        to="/profile"
                        className="text-xl hover:text-[#2b92f3]"
                      >
                        Your Bookings
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}

            {userData ? (
              <div>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUserData({});
                    window.location.href = "/";
                  }}
                  className="font-bold text-xl py-2 text-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/register"
                  className="font-bold text-xl py-2 hover:text-[#2b92f3]"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
