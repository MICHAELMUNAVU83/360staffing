import React from "react";
import { ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  return (
    <div class="w-[100%] py-12">
      <div class="w-[90%] mx-auto flex justify-between items-start">
        <div class="w-[47%] ">
          <img
            src="/image.png"
            alt="review"
            class="w-[100%] rounded-tl-2xl rounded-tr-[100px]  rounded-bl-[100px] first-letter:rounded-br-3xl  h-[100%] object-cover"
          />
        </div>
        <div class="w-[47%] flex flex-col gap-4 ">
          <div class="w-[80px] h-[80px] bg-primary rounded-full flex justify-center items-center">
            <ImQuotesRight class="text-white text-4xl" />
          </div>

          <p class="text-2xl arimo-bold font-semibold">Our Happy Customers</p>

          <p class="italic arimo-light text-lightGrey">
            “HR Solutions are incredibly accommodating, diligent and competent.
            They understand the scope, needs and importance of both concerned
            parties within the interviewing and hiring process - That really
            helps with building a life and career”
          </p>

          <div class="flex flex-col gap-0">
            <p class="font-semibold text-lightBlack arimo-bold">
              James Thomas{" "}
            </p>
            <p class="arimo-light text-lightBlack">UI Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
