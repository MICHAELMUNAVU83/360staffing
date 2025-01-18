import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      name: "Recruitment Solutions",
      description:
        "We connect organizations with top talent, offering skilled, semi-skilled, and unskilled recruitment across various industries, as well as handling mass and corporate recruitment for both onsite and remote roles.",
    },
    {
      name: "HR Support for Remote Teams",
      description:
        "Managing remote employees in Kenya can be complex. We offer solutions like payroll management, engagement strategies, and HR integration to streamline operations and boost productivity.",
    },
    {
      name: "Recruitment Solutions",
      description:
        "We connect organizations with top talent, offering skilled, semi-skilled, and unskilled recruitment across various industries, as well as handling mass and corporate recruitment for both onsite and remote roles.",
    },
  ];
  return (
    <div class="w-[100%]">
      <div class="w-[90%] mx-auto py-12 flex justify-center items-center flex-col gap-2">
        <p class="text-primary  arimo-light text-xl">/ our services /</p>

        <div class="w-[100%]  my-5 flex justify-center text-center items-center">
          <div class=" md:text-4xl text-2xl text-lightBlack arimo-bold flex flex-col gap-2 leading-[20px] md:leading-[32px] font-semibold">
            <p> A Leading Global Provider </p>
            <p>Of Recruitment</p>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              class="flex p-4 bg-white gap-8  shadow-sm rounded-[35px] shadow-gray-300 flex-col 
            "
            >
              <p class="text-lightBlack font-medium text-xl arimo-bold">
                {service.name}
              </p>
              <p class="text-lightGrey h-[100px] arimo-light">
                {service.description}
              </p>

              <img
                src="/image.png"
                class="h-[200px] rounded-3xl w-[100%] object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
