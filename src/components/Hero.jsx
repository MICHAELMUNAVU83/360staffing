import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div class="w-[100%] bg-primary/20 h-[100vh] relative flex flex-col justify-center items-center gap-4">
      <div class="w-[60%] text-primaryDark arimo-bold mx-auto text-[80px] leading-[64px]  font-semibold flex flex-col justify-center items-center gap-1">
        <p>Best Solution To Get</p>
        <p>Good Employees</p>
      </div>

      <div class="w-[60%] arimo-light  text-gray-500 mx-auto text-xl leading-[20px]    flex flex-col justify-center items-center gap-1">
        <p>
          Social Creatures, living in pride , led by dominant male. They rely on{" "}
        </p>

        <p>
          teamwork during hunts , showcasing their exceptional hunting skills
        </p>
      </div>

      <div class="w-[100%] flex justify-center items-center gap-4">
        <div class="p-2 rounded-full w-[200px]   bg-primary text-primaryDark flex  gap-4 items-center">
          <p class="w-[40px] h-[40px] arimo-regular rounded-full text-black bg-white flex flex-col justify-center items-center">
            <FaArrowRightLong />
          </p>
          <p class="font-medium text-primaryDark">Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
