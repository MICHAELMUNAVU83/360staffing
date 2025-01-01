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
    <div class="w-[100%] h-[85vh] ">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p class="text-primary  arimo-light text-xl">/ who we are /</p>
        <div class="text-5xl arimo-bold text-primaryDark leading-[48px] w-[60%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>A Leading Global Provider </p>
          <p>Of Recruitment </p>
        </div>
        <div class="flex justify-between w-[100%] items-start">
          <div class="w-[50%] relative">
            <img
              src="/image.png"
              class="h-[300px] absolute rounded-lg w-[400px] object-cover"
              alt=""
            />
            <img
              src="/image.png"
              class="h-[300px] absolute left-64 top-56 w-[300px] rounded-lg object-cover"
              alt=""
            />
          </div>

          <div class="w-[47%] flex flex-col gap-4">
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
