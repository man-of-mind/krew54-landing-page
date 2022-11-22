import React from "react";
import MissionContainer from "./Components/MissionContainer";

const Body = () => {
  return (
    <div className="bg-white-100 px-36 pt-[56px] pb-[102px]">
      <h3 className="font-semibold text-green-100 text-5xl">Mission</h3>
      <p className="w-[808px] text-base font-extrabold pt-3 leading-7 pb-9">
        We believe in the power of technology and social engagement, we leverage
        them to promote financial inclusion among Africans.
      </p>
      <MissionContainer
        missionStatement="All in One Place for Information"
        feature1="Expert Room"
        description1="Expert provide answers to niched questions... Quora for African."
        feature2="Customised Content Feed"
        description2="Articles and News based on prefernece."
        feature3="Exchange Rate"
        description3="Accurate and up-to-date exchange rates at your finger tips."
      />
      <div className="h-[39px]" />
      <MissionContainer
        missionStatement="Multiple Foreign Accounts - USD, EUR & GBP"
        feature1="Send & Receive"
        description1="Expert provide answers to niched questions... Quora for African."
        feature2="Spend & Shop "
        description2="Virtual card for all your international transactions."
        feature3="Invest & Earn "
        description3="Invest in foreign stocks, bonds and ETF."
      />
    </div>
  );
};

export default Body;
