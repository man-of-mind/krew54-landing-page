import React from "react";
import MissionContainer from "./Components/MissionContainer";
import Box from "../../Assets/Images/box.svg";
import ContentFeed from "../../Assets/Images/content-feed.svg";
import Exchange from "../../Assets/Images/exchange.svg";
import SendReceive from "../../Assets/Images/send-receive.svg";
import Shop from "../../Assets/Images/shop.svg";
import Earn from "../../Assets/Images/earn.svg";

const Body = () => {
  return (
    <div className="bg-white-100 px-7 md:px-10 lg:px-24 xl:px-36 pt-[56px] pb-[35px] lg:pb-[102px]">
      <h3 className="font-semibold text-[#200E32] text-base sm:text-3xl sm:pt-6 md:text-4xl lg:text-5xl">
        Mission
      </h3>
      <p className="md:w-[808px] text-base font-light md:font-extrabold pt-3 leading-7 pb-9">
        We believe in the power of technology and social engagement, we leverage
        them to promote financial inclusion among Africans.
      </p>
      <div className="hidden lg:block">
        <MissionContainer
          missionStatement="All in One Place for Information"
          feature1="Expert Room"
          description1="Expert provide answers to niched questions... Quora for African."
          icon1={Box}
          feature2="Customised Content Feed"
          description2="Articles and News based on prefernece."
          icon2={ContentFeed}
          feature3="Exchange Rate"
          description3="Accurate and up-to-date exchange rates at your finger tips."
          icon3={Exchange}
        />
        <div className="h-[39px]" />
        <MissionContainer
          missionStatement="Multiple Foreign Accounts - USD, EUR & GBP"
          feature1="Send & Receive"
          description1="Expert provide answers to niched questions... Quora for African."
          icon1={SendReceive}
          feature2="Spend & Shop "
          description2="Virtual card for all your international transactions."
          icon2={Shop}
          feature3="Invest & Earn "
          description3="Invest in foreign stocks, bonds and ETF."
          icon3={Earn}
        />
      </div>
      <div className="lg:hidden">
        <p className="font-semibold text-base">
          All in One Place for Information
        </p>
        <div className="rounded-[10px] bg-[#E0E7E7] p-4 mt-3">
          <div>
            <span className="text-green-100 sm:text-lg font-semibold">
              Expert Room
            </span>
            <p className="text-sm sm:text-base font-light">
              Expert provide answers to niched questions... Quora for African.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-green-100 sm:text-lg font-semibold">
              Customised Content Feed
            </span>
            <p className="text-sm sm:text-base font-light">
              Articles and News based on preference.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-green-100 sm:text-lg font-semibold">
              Expert Rate
            </span>
            <p className="text-sm sm:text-base font-light">
              Accurate and up-to-date exchange rates at your finger tips.
            </p>
          </div>
        </div>
        <p className="font-semibold text-base pt-4">
          Multiple Foreign Accounts - USD, GBP & EUR
        </p>
        <div className="rounded-[10px] bg-[#E0E7E7] p-4 mt-3">
          <div>
            <span className="text-green-100 sm:text-lg font-semibold">
              Send &#38; Receive
            </span>
            <p className="text-sm sm:text-base font-light">
              Send money to and from Africa - as remittance or payment for
              oversea expenses.
            </p>
          </div>
          <div className="pt-6">
            <span className="text-green-100 sm:text-lg font-semibold">
              Spend &#38; Shop
            </span>
            <p className="text-sm sm:text-base font-light">
              Virtual card for all your international transactions
            </p>
          </div>
          <div className="pt-6">
            <span className="text-green-100 sm:text-lg font-semibold">
              Invest &#38; Earn
            </span>
            <p className="text-sm sm:text-base font-light">
              Invest in foreign stocks, ETF and Bonds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
