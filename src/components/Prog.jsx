import React from "react";
import img1 from "../assets/برنامج-التمريض-copy1-scaled.jpg";
import img2 from "../assets/برنامج-الطب-والجراحة-copy-scaled.jpg";
import img3 from "../assets/laboratory.png";
import img4 from "../assets/d4be1874-1d7d-4deb-9b70-92c3e0ae308c.jpg";
export const Prog = () => {
  return (
    <>
      <div>
        <div className="text-center flex justify-center py-4 prog-se relative">
          <h2 className="text-4xl font-bold text-prog ">برامجنا</h2>
        </div>
        {/* imdges */}
        <div className="flex flex-col md:flex-row justify-start  md:justify-center flex-wrap  ">
          <div className="card  w-[300px] md:w-[600px]  shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img1} alt=".." className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#441a85] text-2xl">
                برنامج التمريض
              </h2>

              <div className="card-actions">
                <button className="btn bg-[#8e71bb] text-white text-2xl">
                  كليه التمريض
                </button>
              </div>
            </div>
          </div>
          <div className="card  w-[300px] md:w-[600px]  shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img2} alt=".." className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#441a85] text-2xl">
                {" "}
                بكالوريوس الطب والجراحة
              </h2>

              <div className="card-actions">
                <button className="btn bg-[#8e71bb] text-white text-2xl">
                  كليه الطب
                </button>
              </div>
            </div>
          </div>
          <div className="card  w-[300px] md:w-[600px]  shadow-sm">
            <figure className="px-10 pt-10">
              <img src={img4} alt=".." className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#441a85] text-2xl">
                {" "}
                الماجستير التنفيذي في إدارة الأعمال
              </h2>

              <div className="card-actions">
                <button className="btn bg-[#8e71bb] text-white text-2xl">
                  كليه الاعمال
                </button>
              </div>
            </div>
          </div>
          <div className="card  w-[300px] md:w-[600px]  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={img3}
                alt=".."
                className="rounded-xl h-[300px] w-[600px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#441a85] text-2xl">
                {" "}
                برنامج علوم المختبرات الطبية
              </h2>

              <div className="card-actions">
                <button className="btn bg-[#8e71bb] text-white text-2xl">
                  كلية العلوم التطبيقية
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
