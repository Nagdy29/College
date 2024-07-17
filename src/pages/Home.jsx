import React from "react";
import { NavvBar } from "../components/NavvBar";
import backgroundVideo from "../assets/video_2024-07-16_21-17-58.mp4"; // قم بتعديل المسار حسب موقع الفيديو الخاص بك
import { Prog } from "../components/Prog";
import { SecTitle } from "../components/SecTitle";
import { MessageColl } from "../components/MessageColl";
import { SecEffect } from "../components/SecEffect";
import { Fotter } from "../components/Fotter";

export const Home = () => {
  return (
    <>
      <div>
        <NavvBar />
        <div className="video-container p-24">
          <video className="video" src={backgroundVideo} autoPlay loop muted />
          <div className="overlay">
            <div className="content my-5">
              <h1 className="text-4xl font-bold mb-4  my-4  lg:w-[1200px] flex justify-center items-center">
                {" "}
                فتح باب القبول لبرامج البكالوريوس وبرنامج ماجستير إدارة الأعمال
                التنفيذي EMBA للفصل الدراسي الأول للعام 1446هـ{" "}
              </h1>
              <div className="flex gap-2 lg:flex-row flex-col my-4 justify-center items-center">
                <button className="btn btn-outline btn-accent w-80 h-20 text-2xl">
                  البرامج الدراسيه
                </button>
                <button className="btn btn-outline btn-accent w-80 h-20 text-2xl">
                  المنح الدراسيه
                </button>
                <button className="btn btn-outline btn-accent w-80 h-20 text-2xl">
                  التمويل الدراسي
                </button>
                <button className="btn btn-outline btn-accent w-80 h-20 text-2xl ">
                  الرسوم الدراسيه
                </button>
              </div>
              <div className="my-4">
                <button className="btn btn-active btn-success w-80 h-14 text-2xl">
                  التحق الان
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" prog-se p-24 ">
          <Prog />
        </div>
        <div>
          <SecTitle />
        </div>
        <div>
          <MessageColl />
        </div>
        <div>
          <SecEffect />
        </div>
        <div>
          <Fotter />
        </div>
      </div>
    </>
  );
};
