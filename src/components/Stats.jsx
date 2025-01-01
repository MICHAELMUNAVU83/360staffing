import React from "react";

const Stats = () => {
  const data = [
    {
      number: "834.0 M",
      description: "Freelancers",
    },
    {
      number: "834.0 M",
      description: "Candidates",
    },
    {
      number: "834.0 M",
      description: "Orders",
    },
    {
      number: "834.0 M",
      description: "Projects",
    },
  ];
  return (
    <div class="w-[100%] py-16">
      <div class="grid grid-cols-4 gap-8">
        {data.map((item) => (
          <div class="flex flex-col gap-0 items-center">
            <p class="text-5xl arimo-bold text-primary  font-semibold">
              {item.number}
            </p>
            <p class="text-xl text-lightBlack arimo-regular ">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
