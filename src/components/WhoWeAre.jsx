import React from "react";

const WhoWeAre = () => {
  const data = [
    {
      name: "Flexible Solutions",
      description: "Access top HR and recruitment professionals on-demand.",
    },
    {
      name: "HR Digitization",
      description:
        "Leverage cutting-edge tools to streamline your hiring and onboarding processes.",
    },
    {
      name: "Tailored Talent Strategies:",
      description:
        "From sourcing to onboarding, we craft solutions that align with your business needs.",
    },
    {
      name: "Global Reach",
      description:
        "Connect with a diverse talent pool to find the right fit for your organization, no matter the location.",
    },
  ];
  return (
    <div class="w-[100%] md:h-[85vh] ">
      <div class="w-[90%] flex flex-col justify-center items-center gap-4 mx-auto">
        <p class="text-primary  arimo-light text-xl">/ who we are /</p>
        <div class="md:text-5xl text-2xl arimo-bold text-primaryDark md:leading-[48px] leading-[24px] w-[90%] md:w-[60%] mx-auto flex flex-col justify-center items-center font-semibold">
          <p>Welcome to 360 Staffing </p>
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
            <p class="arimo-light text-lightBlack">
              At 360 Staffing, we are revolutionizing the way businesses connect
              with talent. Whether you need skilled professionals for long-term
              roles, semi-skilled workers for project-based assignments, or
              end-to-end HR solutions, we’ve got you covered.
            </p>
            <p class="arimo-light text-lightBlack">
              We specialize in Fractional Talent Acquisition, HR Digitization,
              and Global Recruitment Solutions for organizations across Europe,
              Africa, Asia, and the Gulf. From managing remote tech teams in
              Kenya to executing large-scale hiring campaigns, we deliver
              tailored workforce strategies designed to meet your unique
              business goals.
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
