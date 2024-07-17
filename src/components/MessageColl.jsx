import React from "react";
import img from "../assets/messa.png";
import { TbWorld } from "react-icons/tb";
import { SiGmail } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import { FaGraduationCap } from "react-icons/fa6";

export const MessageColl = () => {
  return (
    <>
      <div className="prog-se">
        <div className="text-center flex justify-center py-4  relative">
          <h2 className="text-4xl font-bold text-prog ">الأنظمة الإلكترونية</h2>
        </div>
        <div className="p-20 flex flex-col md:flex-row gap-8 justify-center items-center md:gap-32">
          <div className="w-[125px]   h-[125px] rounded-full flex justify-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              {" "}
              <TbWorld className="hover:text-[#0d6efd] text-[250px]" />
              <p className="text-2xl">النماذج</p>
            </div>
          </div>
          <div className="w-[125px]   h-[125px] rounded-full flex justify-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              {" "}
              <TbWorld className="hover:text-[#0d6efd] text-[250px]" />
              <p className="text-2xl">نظام المكاتب</p>
            </div>
          </div>
          <div className="w-[125px]   h-[125px] rounded-full flex justify-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              {" "}
              <SiGmail className="hover:text-[#0d6efd] text-[250px]" />
              <p className="text-2xl">البريد الالكتروني</p>
            </div>
          </div>
          <div className="w-[125px]   h-[125px] rounded-full flex justify-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              {" "}
              <CgMail className="hover:text-[#0d6efd] text-[250px]" />
              <p className="text-2xl">الخطط الدراسيه</p>
            </div>
          </div>
          <div className="w-[125px]   h-[125px] rounded-full flex justify-center ">
            <div className="flex justify-center items-center flex-col gap-3">
              {" "}
              <FaGraduationCap className="hover:text-[#0d6efd] text-[250px]" />
              <p className="text-2xl">بوابه القبول ةالتسجيل</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
