import React from "react";

const Stats = () => {
  const data = [
    {
      number: "834 .0 M",
      description: "Candidates",
    },
    {
      number: "834 .0 M",
      description: "Candidates",
    },
    {
      number: "834 .0 M",
      description: "Candidates",
    },
    {
      number: "834 .0 M",
      description: "Candidates",
    },
  ];
  return (
    <div class="w-[100%] py-16">
      <div class="grid grid-cols-4 gap-8">
        {data.map((item) => (
          <div class="flex flex-col gap-4 items-center">
            <p class="text-5xl font-semibold">{item.number}</p>
            <p class="text-xl font-semibold">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
