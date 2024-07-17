import React from "react";
import img from "../assets/aaa.jpg";
import img2 from "../assets/يوم-المهنه.jpg";
export const SecEffect = () => {
  return (
    <>
      <div className="sec-effe flex justify-between p-20 flex-col  lg:flex-row">
        <div className="text-center flex justify-center items-center py-4  relative">
          <h2 className="text-5xl font-bold  text-white ">الفعاليات</h2>
        </div>
        <div>
          <div className="flex gap-5 justify-center items-center flex-col lg:flex-row ">
            <div className="card card-compact bg-base-100 w-80 h-72  shadow-xl">
              <figure>
                <img src={img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="font-bold text-2xl">حفل تخرج الدفعة التاسعة</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-[15px]"> 02 Jul</div>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 w-80 h-72  shadow-xl">
              <figure>
                <img src={img2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="font-bold text-2xl"> يوم المهنه 2024</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline text-[15px]"> 02 Jul</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
