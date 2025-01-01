import React from "react";
import { IoIosSearch } from "react-icons/io";

const HowWeWork = () => {
  const data = [
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
    {
      name: "Analysis",
      description: "Our commitment to support your HR needs every steps.",
    },
  ];
  return (
    <div class="w-[100%] py-16">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p class="text-primary  arimo-light text-xl">/ how we work /</p>
        <div class="md:text-5xl text-3xl  arimo-bold leading-[24px] md:leading-[48px] md:w-[60%] w-[90%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>Solutions To Improve </p>
          <p>Perfomance</p>
        </div>
        <div class="md:text-xl arimo-light text-center  text-gray-500 w-[90%]  md:w-[60%] mx-auto flex flex-col justify-center items-center">
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam </p>
          <p>quis nostrum exercitationem ullam </p>
        </div>

        <div class="grid  md:mt-12 mt-6 md:grid-cols-4 gap-8">
          {data.map((item) => (
            <div class="flex flex-col md:w-[100%] w-[80%] m-auto text-center gap-2 justify-center items-center">
              <div class="w-[70px] h-[70px] rounded-full bg-white  flex justify-center items-center">
                <IoIosSearch class="text-primary text-3xl" />
              </div>
              <p class="text-lightBlack text-xl arimo-regular ">{item.name}</p>
              <p class="text-lightGrey arimo-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
