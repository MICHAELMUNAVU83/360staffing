import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      name: "Recruitment Solution",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor",
    },
    {
      name: "Recruitment Solution",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor",
    },
    {
      name: "Recruitment Solution",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor",
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
              class="flex p-4 justify-between bg-white gap-8  shadow-sm rounded-[35px] shadow-gray-300 flex-col 
            "
            >
              <p class="text-lightBlack font-medium text-xl arimo-bold">
                Recruitment Solution
              </p>
              <p class="text-lightGrey arimo-light">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium dolor error sit voluptatem accusantium dolor
              </p>

              <div class="flex flex-col gap-1">
                <div class="text-primary flex gap-2 items-center ">
                  <p>Explore Now</p>
                  <FaArrowRightLong class="" />
                </div>
                <p class="bg-primary h-[1px] w-[120px]" />
              </div>

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
