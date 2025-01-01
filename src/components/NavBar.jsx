import React, { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#2b3040");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("#F4F3EE");
        setTextColor("#2b3040");
      } else {
        setColor("transparent");
        setTextColor("#2b3040");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="w-[90%] m-auto flex justify-between items-center p-2 text-white">
        <a to="/">
          <img src="/Logo.png" alt="logo" className="w-[100px]" />
        </a>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <a to="/">
            <li className="p-4">Home</li>
          </a>
          <a to="/#gallery">
            <li className="p-4">About Us</li>
          </a>
          <a to="/#gallery">
            <li className="p-4">Our Services</li>
          </a>
          <a to="/work">
            <li className="p-4">Reviews</li>
          </a>
          <a to="/contact">
            <li className="p-4">Team</li>
          </a>
          <a to="/contact">
            <li className="p-4">Contact Us</li>
          </a>
        </ul>

        <div className="hidden sm:flex">
          <div class="p-2 rounded-full    bg-primary text-primaryDark flex  gap-4 items-center">
            <p class="w-[30px] h-[30px] arimo-regular rounded-full text-black bg-white flex flex-col justify-center items-center">
              <FaArrowRightLong />
            </p>
            <p class="font-medium pr-4 text-primaryDark">Learn More</p>
          </div>
        </div>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-white duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-white duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav}>
            <a to="/" className="p-4 text-4xl hover:text-gray-500">
              <li>Home</li>
            </a>
            <a to="/#gallery" className="p-4 text-4xl hover:text-gray-500">
              <li>Gallery</li>
            </a>
            <a to="/work" className="p-4 text-4xl hover:text-gray-500">
              <li>Work</li>
            </a>
            <a to="/contact" className="p-4 text-4xl hover:text-gray-500">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
