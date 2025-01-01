import React from "react";

import { IoIosSearch } from "react-icons/io";

const Steps = () => {
  const steps = [
    {
      name: "Analysis",
      description: "Our commitment to support your HR needs every steps.",
    },
    {
      name: "Analysis",
      description: "Our commitment to support your HR needs every steps.",
    },
    {
      name: "Analysis",
      description: "Our commitment to support your HR needs every steps.",
    },
  ];
  return (
    <div class="w-[90%] mx-auto py-24 grid grid-cols-3 gap-8">
      <div class="flex flex-col gap-4 p-8 bg-[#c6d3fe] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Build your compelling job advertisement
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Get o’clock guidance on how to attract more cadidates.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 p-8  bg-[#fff3ce] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Build your compelling job advertisement
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Get o’clock guidance on how to attract more cadidates.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 p-8  bg-[#e8fbdd] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Build your compelling job advertisement
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Get o’clock guidance on how to attract more cadidates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
