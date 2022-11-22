import React from "react";
import Phone1 from "../Assets/Images/1.svg";
import Phone2 from "../Assets/Images/2.svg";
import Phone3 from "../Assets/Images/3.svg";

const Hero = () => {
  return (
    <div className="bg-green-100 h-[661px] flex flex-row px-36">
      <div className="flex flex-col">
        <h2 className="mt-auto text-white-100 text-[64px] font-semibold">All in One Place</h2>
        <p className="mb-24 w-[579px] pr-8 text-lg text-white-100 pt-[30px]">
          Expert View on Topics of Interest | News & Articles Based on
          Preference Up-to-date exchange rates.{" "}
        </p>
        <span className="rounded-[5px] mb-24 w-fit bg-white-100 text-green-100 py-2.5 px-6 font-medium text-base">
          <a href="/#">Join Waitlist</a>
        </span>
      </div>
      <div className="flex">
        <img src={Phone1} alt="phone 1" className="pr-[127px] mt-0"/>
        <img src={Phone2} alt="phone 2" className="absolute right-[300px] top-[324px]"/>
        <img src={Phone3} alt="phone 3" className="mt-28"/>
      </div>
    </div>
  );
};

export default Hero;
