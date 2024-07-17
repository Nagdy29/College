import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo.png";
const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidenav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* أيقونة القائمة */}
      <div className=" z-50">
        <button onClick={toggleSidenav}>
          <CiMenuFries className="text-2xl" />
        </button>
      </div>

      {/* الشريط الجانبي */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 w-80`}
      >
        <div className="flex justify-between items-center p-4 font-bold text-xl border-b">
          <span>القائمة</span>
          <button onClick={toggleSidenav}>
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <div className="my-8 text-center flex justify-center">
          <img src={logo} alt="" className="w-[250px]" />
        </div>
        <ul className="  menu-horizontal flex flex-col gap-7 gap-4 cursor-pointer px-2">
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
    </div>
  );
};

export default Sidenav;
