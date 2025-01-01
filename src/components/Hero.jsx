import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div class="w-[100%] relative bg-primary/20 h-[100vh]  flex flex-col justify-center items-center gap-4">
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

      <img
        src="/image.png"
        class="w-[250px] h-[250px] rounded-md object-cover rotate-12 absolute bottom-48 left-8"
      />

      <img
        src="/image.png"
        class="w-[150px] h-[150px] rounded-md object-cover absolute bottom-8 left-72"
      />

      <img
        src="/image.png"
        class="w-[250px] h-[250px] rounded-md object-cover rotate-12 absolute bottom-48 right-8"
      />

      <img
        src="/image.png"
        class="w-[150px] h-[150px] rounded-md -rotate-12 object-cover absolute bottom-8 right-72"
      />

      <p class="bg-[#eee2f4] bottom-16 left-100 p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>

      <p class="bg-[#fff3ce] bottom-32 rotate-12 left-[500px] p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>

      <p class="bg-[#e8fbdd] bottom-32 -rotate-12 right-[550px] p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>

      <p class="bg-[#c6d3fe] bottom-48 rotate-12 left-[850px] p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>

      <p class="bg-[#c4ecee] bottom-48 -rotate-12 right-[850px] p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>
      <p class="bg-[#fce9dd] bottom-48 rotate-6  p-2 absolute rounded-3xl">
        Human Resource{" "}
      </p>
    </div>
  );
};

export default Hero;
