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
    <div class="w-[100%] py-16">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p>/ who we are /</p>
        <div class="text-5xl leading-[48px] w-[60%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>A Leading Global Provider </p>
          <p>Of Recruitment Solutions</p>
        </div>
        <div class="flex justify-between w-[100%] items-start">
          <div class="w-[47%]">
            <img src="/image" class="h-[500px] w-[100%] object-cover" alt="" />
          </div>

          <div class="w-[47%] flex flex-col gap-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>

            <div class="grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div class="flex flex-col gap-2">
                  <p class="text-xl font-semibold">{item.name}</p>
                  <p>{item.description}</p>
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
