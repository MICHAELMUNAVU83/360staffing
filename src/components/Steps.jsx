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
    <div class="w-[90%] mx-auto py-12 grid md:grid-cols-3 gap-8">
      <div class="flex flex-col gap-4 p-8 bg-[#c6d3fe] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Build your compelling job advertisement
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Create engaging job postings that attract top talent.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 p-8  bg-[#fff3ce] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Promote your ad on 100+ job search sites
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Reach more candidates by sharing your ad across multiple platforms.
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-4 p-8  bg-[#e8fbdd] rounded-[30px] shadow-sm shadow-gray-300  h-[250px]  ">
        <div class="flex flex-col text-white gap-3">
          <IoIosSearch class="text-lightBlack text-5xl" />
          <p class="text-xl  font-semibold arimo-bold text-lightBlack">
            Manage Candidates easy with hiring workflows
          </p>
          <p class="arimo-light text-lg leading-[20px] text-lightGrey ">
            Simplify hiring with workflows that track candidates from start to
            finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
