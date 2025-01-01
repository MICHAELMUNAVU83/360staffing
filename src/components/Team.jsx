import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Team = () => {
  const data = [
    {
      name: "Brenda Wakaba",
      email: "brendawakaba@gmail.com",
      role: "CEO",
      number: 1,
    },
    {
      name: "Brenda Wakaba",
      email: "brendawakaba@gmail.com",
      role: "CEO",
      number: 2,
    },
    {
      name: "Brenda Wakaba",
      email: "brendawakaba@gmail.com",
      role: "CEO",
      number: 3,
    },
    {
      name: "Brenda Wakaba",
      email: "brendawakaba@gmail.com",
      role: "CEO",
      number: 4,
    },
  ];
  return (
    <div class="w-[100%] py-16">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p class="text-primary  arimo-light text-xl">/ meet our experts /</p>
        <div class="text-5xl arimo-bold leading-[48px] w-[60%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>Our Leadership Team</p>
        </div>
        <div class="grid mt-8 grid-cols-4 w-[100%] gap-6">
          {data.map((item) => (
            <div
              className={`flex flex-col gap-2 items-start `}
              key={item.id} // Assuming each item has a unique id
            >
              <img
                src="/image.png"
                class={`w-[100%] h-[300px] rounded-3xl  object-cover  ${
                  item.number % 2 === 0 ? "mt-16" : ""
                }`}
                alt=""
              />
              <div class="flex flex-col gap-1">
                <p class="arimo-regular text-lightBlack text-xl font-medium">
                  Kadir Miyefee
                </p>
                <p class="arimo-light text-lightGrey">miye@example.com</p>
              </div>
              <p class="w-[100%] h-[1px] bg-gray-500" />

              <div class="flex gap-2 items-center">
                <FaInstagram class="text-primary text-2xl" />
                <FaLinkedinIn class="text-primary text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
