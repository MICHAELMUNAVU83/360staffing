import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Quote = () => {
  return (
    <div class="w-[100%]">
      <div class="w-[90%] mx-auto md:pb-16  md:flex-row flex-col gap-8 flex justify-between items-start">
        <div class="md:w-[47%] w-[100%] flex flex-col gap-4 items-start">
          <div class="flex flex-col gap-1">
            <p class="text-primary  arimo-light text-xl">/ get a quote /</p>
            <p class="text-2xl arimo-bold text-lightDark font-semibold">
              Request A Call Back
            </p>
          </div>
          <p class="arimo-light text-lightGrey">
            Contact to us when you have questions for our solution or something
            elses.
          </p>

          <form class="flex w-[100%] flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name *"
              class="p-2 border w-[100%] border-none placeholder-lightGrey text-lightGrey bg-white rounded-2xl focus:border-none focus:ring-0"
            />

            <input
              type="text"
              placeholder="Your Email *"
              class="p-2 border w-[100%] border-none placeholder-lightGrey text-lightGrey bg-white rounded-2xl"
            />

            <input
              type="text"
              placeholder="Phone Number *"
              class="p-2 border w-[100%] border-none placeholder-lightGrey text-lightGrey bg-white rounded-2xl"
            />

            <select class="p-2 border w-[100%] border-none placeholder-lightGrey text-lightGrey bg-white rounded-2xl">
              <option>Choose a Service</option>
              <option>Service 1</option>
              <option>Service 2</option>
              <option>Service 3</option>
            </select>

            <textarea
              type="text"
              placeholder="Message *"
              class="p-2 border w-[100%] placeholder-lightGrey text-lightGrey h-[150px] border-none bg-white rounded-2xl"
            />

            <div class="w-[100%] mt-6 flex  gap-4">
              <div class="p-2 rounded-full w-[200px]   bg-primary text-primaryDark flex  gap-4 items-center">
                <p class="w-[40px] h-[40px] arimo-regular rounded-full text-black bg-white flex flex-col justify-center items-center">
                  <FaArrowRightLong />
                </p>
                <p class="font-medium text-primaryDark">Send Request</p>
              </div>
            </div>
          </form>
        </div>

        <div class="md:w-[47%] w-[100%] ">
          <img
            src="/left.png"
            alt="review"
            class="w-[100%] md:block hidden h-[500px] object-cover"
          />

          <img
            src="/up.png"
            alt="review"
            class="w-[100%] md:hidden block h-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
