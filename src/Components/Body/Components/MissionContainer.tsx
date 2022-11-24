import React from "react";
import MissionCard from "./MissionCard";

const MissionContainer = ({
  missionStatement,
  feature1,
  description1,
  icon1,
  feature2,
  description2,
  icon2,
  feature3,
  description3,
  icon3
}: {
  missionStatement: string;
  feature1: string;
  description1: string;
  icon1: string,
  feature2: string;
  description2: string;
  icon2: string,
  feature3: string;
  description3: string;
  icon3: string
}) => {
  return (
    <div className="bg-[#E0E7E7] py-11 xl:px-14 md:px-8">
      <h3 className="leadig-7 font-bold text-[32px] pb-12">
        {missionStatement}
      </h3>
      <div className="flex flex-row justify-between text-white-100">
        <MissionCard feature={feature1} description={description1} icon={icon1}/>
        <MissionCard feature={feature2} description={description2} icon={icon2}/>
        <MissionCard feature={feature3} description={description3} icon={icon3}/>
      </div>
    </div>
  );
};

export default MissionContainer;
