import React from "react";

const WhoWeAre = () => {
  const data = [
    {
      name: "Profile Highlighter",
      description: "Get highlighted by the company that you’ve been worked.",
    },
    {
      name: "Profile Highlighter",
      description: "Get highlighted by the company that you’ve been worked.",
    },
    {
      name: "Profile Highlighter",
      description: "Get highlighted by the company that you’ve been worked.",
    },
    {
      name: "Profile Highlighter",
      description: "Get highlighted by the company that you’ve been worked.",
    },
  ];
  return (
    <div class="w-[100%] md:h-[85vh] ">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p class="text-primary  arimo-light text-xl">/ who we are /</p>
        <div class="md:text-5xl text-2xl arimo-bold text-primaryDark md:leading-[48px] leading-[24px] w-[90%] md:w-[60%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>A Leading Global Provider </p>
          <p>Of Recruitment </p>
        </div>
        <div class="flex md:flex-row flex-col gap-8 justify-between w-[100%] items-start">
          <div class="md:w-[50%] w-[100%] relative">
            <img
              src="/image.png"
              class="md:h-[300px] h-[150px] absolute rounded-lg md:w-[400px] w-[300px] object-cover"
              alt=""
            />
            <img
              src="/image.png"
              class="md:h-[300px] h-[200px] absolute left-40 md:left-64 md:top-56 top-32 w-[200px] md:w-[300px] rounded-lg object-cover"
              alt=""
            />
          </div>

          <div class="md:w-[47%] w-[100%] mt-80 md:mt-0 flex flex-col gap-4">
            <p class="arimo-light text-lg text-lightBlack">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>

            <div class="grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div class="flex flex-col gap-1">
                  <p class="text-xl arimo-regular font-semibold">{item.name}</p>
                  <p class="text-[#9d9d9d] arimo-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
