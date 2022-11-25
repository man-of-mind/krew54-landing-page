import React from "react";
import Mock from "../Assets/Images/mock.svg";
import WaitlistModal from "./Modal";

const Hero = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-green-100 flex flex-col lg:flex-row lg:justify-between h-[500px] xx:h-[505px] sm:h-[585px] lg:pb-[27px] lg:pt-[103px] lg:h-fit md:px-10 lg:px-24 xl:px-36">
      <div className="flex flex-col items-center justify-center lg:items-start lg:max-w-lg xl:max-w-xl px-8 lg:px-0">
        <h2 className="pt-14 text-white-100 xl:text-[64px] text-[32px] md:text-5xl font-semibold text-center">
          All in One Place
        </h2>
        <p className="text-base opacity-50 lg:font-medium lg:opacity-100 mb-7 md:text-lg text-white-100 lg:pt-[5px] xl:pt-[20px] text-center lg:text-start">
          Expert View on Topics of Interest | News & Articles Based on
          Preference Up-to-date exchange rates.{" "}
        </p>
        <span
          onClick={() => setOpen(true)}
          className="cursor-pointer rounded-[5px] xl:mb-24 lg:mb-12 w-fit bg-white-100 text-green-100 py-2.5 px-6 font-medium text-base"
        >
          Join Waitlist
        </span>
      </div>
      <div className="flex items-center">
        <img
          src={Mock}
          alt="mock pcitures"
          width={400}
          className="hidden xl:block"
        />
        <img
          src={Mock}
          alt="mock pcitures"
          width={300}
          className="hidden lg:block xl:hidden"
        />
        <img
          src={Mock}
          alt="mock pcitures"
          width={320}
          className="hidden sm:block lg:hidden xl:hidden mx-auto pt-12"
        />
        <img
          src={Mock}
          alt="mock pcitures"
          width={200}
          className="hidden xx:block sm:hidden lg:hidden xl:hidden mx-auto pt-12"
        />
        <img
          src={Mock}
          alt="mock pcitures"
          width={180}
          className="block xls:hidden xx:hidden sm:hidden lg:hidden xl:hidden mx-auto pt-8"
        />
      </div>
      <WaitlistModal open={open} setOpened={setOpen} />
    </div>
  );
};

export default Hero;
