import React from "react";
import MissionCard from "./MissionCard";
import Disc from "../../../Assets/Images/disc.svg";
import Box from "../../../Assets/Images/box.svg";

const MissionContainer = ({
  missionStatement,
  feature1,
  description1,
  feature2,
  description2,
  feature3,
  description3,
}: {
  missionStatement: string;
  feature1: string;
  description1: string;
  feature2: string;
  description2: string;
  feature3: string;
  description3: string;
}) => {
  return (
    <div className="bg-[#E0E7E7] py-11 px-14">
      <h3 className="leadig-7 font-bold text-[32px] pb-12">
        {missionStatement}
      </h3>
      <div className="flex flex-row justify-between text-white-100">
        <MissionCard feature={feature1} description={description1}>
          <img src={Box} alt="" />
        </MissionCard>
        <MissionCard feature={feature2} description={description2}>
          <img src={Disc} alt="" />
        </MissionCard>
        <MissionCard
          feature={feature3}
          description={description3}
        >

        </MissionCard>
      </div>
    </div>
  );
};

export default MissionContainer;
