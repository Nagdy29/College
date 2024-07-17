import React from "react";
import logo from "../assets/logo.png";
import Sidenav from "./Sidenav";
export const NavvBar = () => {
  return (
    <>
      <div className="container mx-auto bg-transparent  px-8 py-3 flex justify-center items-center">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-6"
              >
                <li>
                  <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                    عن الجامعه
                  </a>
                </li>
                <li>
                  <a className="text-[22px] link-nav  font-bold text-gray-600 hover:text-blue-800 bg-white ">
                    {" "}
                    برامجنا
                  </a>
                </li>
                <li>
                  <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                    {" "}
                    التحق الان
                  </a>
                </li>
                <li>
                  <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                    {" "}
                    الأسئلة الأكثر شيوعاً
                  </a>
                </li>
              </ul>
            </div>
            <a className=" text-xl">
              <img src={logo} alt="" className="w-[240px] " />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="  menu-horizontal gap-4 cursor-pointer px-2">
              <li>
                <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                  عن الجامعه
                </a>
              </li>
              <li>
                <a className="text-[22px] link-nav  font-bold text-gray-600 hover:text-blue-800 bg-white ">
                  {" "}
                  برامجنا
                </a>
              </li>
              <li>
                <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                  {" "}
                  التحق الان
                </a>
              </li>
              <li>
                <a className="text-[22px] link-nav font-bold text-gray-600 hover:text-blue-800 bg-white ">
                  {" "}
                  الأسئلة الأكثر شيوعاً
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex justify-center items-center gap-11">
            <div className="flex gap-8 items-center justify-center ">
              <div className="relative">
                <input
                  placeholder="Search..."
                  className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
                  name="search"
                  type="search"
                />
              </div>
            </div>
            <Sidenav />
          </div>
        </div>
      </div>
    </>
  );
};
