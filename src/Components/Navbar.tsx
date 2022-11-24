import React, { useState } from "react";
import Logo from "../Assets/Images/logo.svg";
import { Burger } from "@mantine/core";

const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div className="flex pt-6 xl:pt-8 px-7 pb-5 xl:pb-7 md:px-10 lg:px-24 xl:px-36 items-center justify-between bg-green-100 lg:bg-white-100">
      <img src={Logo} alt="krew54 logo" />
      <div className="hidden md:block flex justify-between lg:ml-auto md:mr-12 xl:mr-36 text-green-100 font-bold text-base">
        <a className="pr-16" href="/#">
          Product
        </a>
        <a href="/#" className="pr-16">
          Company
        </a>
        <a href="/#" className="pr-16">
          Blog
        </a>
        <a href="/#" className="pr-16">
          Help
        </a>
      </div>
      <span className="hidden lg:block rounded-[5px] bg-green-100 text-white-100 py-2.5 px-6 font-medium text-base">
        <a href="/#">Join Waitlist</a>
      </span>
      <div className="lg:hidden ml-auto">
        <Burger
          opened={opened}
          color="white"
          onClick={() => setOpened((o) => !o)}
          title={title}
        />
      </div>
      {opened && (
        <div className="absolute right-0 top-16 w-[100%] px-7 sm:px-10 py-2 bg-white-100">
          <div className="flex flex-col text-green-100">
            <a className="py-2" href="/#">
              Product
            </a>
            <a href="/#" className="">
              Company
            </a>
            <a href="/#" className="pt-2">
              Blog
            </a>
            <a href="/#" className="py-2">
              Help
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
