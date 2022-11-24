import React from "react";
import Mock from '../Assets/Images/mock.svg';

const Hero = () => {
  return (
    <div className="bg-green-100 flex flex-col lg:flex-row lg:justify-between h-[490px] sm:h-[640px] xl:h-[581px] lg:h-[450px] md:px-10 lg:px-24 xl:px-36">
      <div className="flex flex-col items-center justify-center lg:items-start lg:max-w-lg xl:max-w-xl px-8 lg:px-0">
        <h2 className="pt-14 lg:mt-auto text-white-100 xl:text-[64px] text-[32px] md:text-4xl font-semibold">
          All in One Place
        </h2>
        <p className="text-base opacity-50 lg:mb-24 mb-12 md:text-lg text-white-100 pt-[30px] text-center lg:text-start">
          Expert View on Topics of Interest | News & Articles Based on
          Preference Up-to-date exchange rates.{" "}
        </p>
        <span className="rounded-[5px] xl:mb-24 lg:mb-12 w-fit bg-white-100 text-green-100 py-2.5 px-6 font-medium text-base">
          <a href="/#">Join Waitlist</a>
        </span>
      </div>
      <div className="flex items-center">
        <img src={Mock} alt="mock pcitures" width={400} className="hidden xl:block"/>
        <img src={Mock} alt="mock pcitures" width={300} className="hidden lg:block xl:hidden"/>
        <img src={Mock} alt="mock pcitures" width={320} className="hidden sm:block lg:hidden xl:hidden mx-auto pt-12"/>
        <img src={Mock} alt="mock pcitures" width={180} className="block sm:hidden lg:hidden xl:hidden mx-auto pt-8"/>
      </div>
    </div>
  );
};

export default Hero;
