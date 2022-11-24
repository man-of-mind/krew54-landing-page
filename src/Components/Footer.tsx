import React from "react";
import Logo from "../Assets/Images/logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <section className="hidden lg:flex bg-green-100 md:px-10 lg:px-24 xl:px-36 py-10 flex-row justify-between h-[268px]">
        <div className="pb-[38px] flex flex-col justify-between">
          <img src={Logo} alt="krew54 logo" className="self-start" />
          <p className="w-[310px] text-[#9E9E9E] text-sm">
            Leveraging technology &#38; social engagement to promote African`s
            financial inclusion.
          </p>
        </div>
        <div className="flex text-[#F8EFD3]">
          <div className="flex flex-col justify-between">
            <span className="mb-auto font-semibold text-base">Company</span>
            <span className="pb-[18px] text-sm">About Us</span>
            <span className="pb-[18px] text-sm">Privacy Policy</span>
            <span className="text-sm">Terms and Condition</span>
          </div>
          <div className="flex flex-col justify-between pl-12">
            <span className="mb-auto font-semibold text-base">Users</span>
            <span className="pb-[18px] text-sm">Download App</span>
            <span className="pb-[18px] text-sm">Join Waitlist</span>
            <span className="text-sm">Blog</span>
          </div>
          <div className="flex flex-col justify-between pl-8">
            <span className="mb-auto font-semibold text-base">Connect</span>
            <span className="pb-[18px] text-sm">****@krew54.com</span>
            <span className="pb-[18px] text-sm">+234 812 *** 6789</span>
            <div className="flex justify-between">
              <AiFillInstagram size={20} />
              <FaLinkedin size={20} />
              <BsTwitter size={20} />
              <SiTelegram size={20} />
            </div>
          </div>
          <div className="flex flex-col justify-between pl-12">
            <span className="mb-auto font-semibold text-base">Help</span>
            <span className="pb-[18px] text-sm">FAQs</span>
            <span className="pb-[18px] text-sm">Contact Us</span>
            <span className="pb-[18px] text-sm"> </span>
          </div>
        </div>
      </section>
      <section className="lg:hidden px-7 md:px-10 bg-green-100 text-white-100 py-[15px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-between">
            <span className="mb-auto font-semibold text-base">Company</span>
            <span className="pb-[10px] text-sm">About Us</span>
            <span className="pb-[10px] text-sm">Privacy Policy</span>
            <span className="text-sm">Terms and Condition</span>
          </div>
          <div className="flex flex-col justify-between pl-12">
            <span className="mb-auto font-semibold text-base">Users</span>
            <span className="pb-[10px] text-sm">Download App</span>
            <span className="pb-[10px] text-sm">Join Waitlist</span>
            <span className="text-sm">Blog</span>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-8">
          <div className="flex flex-col justify-between">
            <span className="mb-auto font-semibold text-base">Connect</span>
            <span className="pb-[10px] text-sm">****@krew54.com</span>
            <span className="pb-[10px] text-sm">+234 812 *** 6789</span>
            <div className="flex justify-between">
              <AiFillInstagram size={20} />
              <FaLinkedin size={20} />
              <BsTwitter size={20} />
              <SiTelegram size={20} />
            </div>
          </div>
          <div className="flex flex-col justify-between xx:pr-7 pr-4">
            <span className="mb-auto font-semibold text-base">Help</span>
            <span className="pb-[10px] text-sm">FAQs</span>
            <span className="pb-[10px] text-sm">Contact Us</span>
            <span className="pb-[10px] text-sm"> </span>
          </div>
        </div>
        <hr className="mt-10"></hr>
        <div className="text-white-100 flex justify-center pt-2">
          <span className="text-center">
            Leveraging technology &#38; social engagement to promote African’s
            financial inclusion.{" "}
          </span>
        </div>
      </section>
      <section className="md:h-[50px] xl:h-[100px] h-[29px] lg:bg-[black] bg-white-90" />
    </div>
  );
};

export default Footer;
