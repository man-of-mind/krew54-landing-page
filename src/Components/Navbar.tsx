import React from "react";
import Logo from "../Assets/Images/logo.svg";

const Navbar = () => {
  return (
    <div className="flex pt-8 pb-7 px-36 items-center">
      <img src={Logo} alt="krew54 logo" />
      <div className="flex justify-between ml-auto mr-36 text-green-100 font-bold text-base">
        <a className="pr-16" href="/#">Product</a>
        <a href="/#" className="pr-16">Company</a>
        <a href="/#" className="pr-16">Blog</a>
        <a href="/#" className="pr-16">Help</a>
      </div>
      <span className="rounded-[5px] bg-green-100 text-white-100 py-2.5 px-6 font-medium text-base">
        <a href="/#">Join Waitlist</a>
      </span>
    </div>
  );
};

export default Navbar;
