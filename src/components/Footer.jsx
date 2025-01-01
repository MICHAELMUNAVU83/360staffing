import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <div class="w-[100%] bg-primary/20 ">
      <div class="w-[90%] mx-auto flex flex-col gap-4 py-12">
        <div class="w-[100%] grid grid-cols-4 gap-8">
          <div class="flex flex-col gap-3">
            <div class="flex gap-2 text-lg arimo-bold items-center">
              360 Recruit
            </div>
            <p class="text-lightBlack arimo-light">
              We are a team of professionals who are dedicated to providing you
              with the best recruitment services.
            </p>

            <div class="flex gap-4 items-center">
              <div class="w-[70px] h-[70px] rounded-full border-[1px] bg-white  flex justify-center items-center">
                <FaInstagram class="text-primary text-3xl" />
              </div>
              <div class="w-[70px] h-[70px] rounded-full border-[1px] bg-white  flex justify-center items-center">
                <FaInstagram class="text-primary text-3xl" />
              </div>
              <div class="w-[70px] h-[70px] rounded-full border-[1px] bg-white  flex justify-center items-center">
                <FaInstagram class="text-primary text-3xl" />
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <p class="text-xl arimo-bold">Solution</p>
            <div class="flex  text-lightBlack flex-col gap-1">
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-lg arimo-bold">Solution</p>
            <div class="flex text-lightBlack flex-col gap-1">
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-lg arimo-bold">Solution</p>
            <div class="flex text-lightBlack flex-col gap-1">
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        <p class="w-[100%] bg-gray-500 h-[1px]" />

        <div class="text-lightBlack text-base">
          Copyright @2025 360 Recruit. All Rights Reserved{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
