import React from "react";
import { category } from "../data/data";

const Section1 = () => {
  return (
    <div className=" container  mx-auto z-99">
      <h2 className=" text-2xl py-6">Browse by category</h2>
      <div className="flex gap-6 py-6  overflow-x-hidden">
        {category.map((item, index) => (
          <div
            key={index}
            className="  py-10 rounded-xl bg-gray-50 hover:text-white w-1/6 hover:bg-white cursor-pointer hover:shadow-lg"
          >
            <div className=" text-center ">
              <div className="flex hover:text-white items-center justify-center w-24 h-20 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16 ">
                <img src={item.img} alt="" className="h-14 rounded-full" />
              </div>
              <h6 className="mb-2 text-base font-semibold leading-5">
                {item.name}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
