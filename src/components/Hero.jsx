import React from "react";

const Hero = () => {
  return (
    <div class="w-[100%] h-[100vh] relative flex flex-col justify-center items-center gap-8">
      <div class="w-[60%] mx-auto text-[80px] leading-[64px]  font-semibold flex flex-col justify-center items-center gap-1">
        <p>Best Solution To Get</p>
        <p>Good Employees</p>
      </div>

      <div class="w-[60%] mx-auto text-2xl leading-[24px] text-gray-600   flex flex-col justify-center items-center gap-1">
        <p>
          Social Creatures, living in pride , led by dominant male. They rely on{" "}
        </p>

        <p>
          teamwork during hunts , showcasing their exceptional hunting skills
        </p>
      </div>

      <div class="w-[100%] flex justify-center items-center gap-4">
        <div class="p-2 rounded-full w-[200px] text-white bg-black flex  gap-4 items-center">
          <p class="w-[40px] h-[40px] rounded-full text-black bg-white flex flex-col justify-center items-center">
            icon
          </p>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
