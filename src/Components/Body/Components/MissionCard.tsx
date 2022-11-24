import React from "react";

const MissionCard = ({
  feature,
  description,
  icon
}: {
  feature: string;
  description: string;
  icon: string,
}) => {
  return (
    <div className="rounded-[20px] bg-green-100 md:py-10 xl:py-12 md:px-4 xl:px-6 flex flex-col items-center justify-between">
      <div className="bg-white-100 rounded h-[100px] px-7 rounded-[30px] md:mb-7 xl:mb-9 flex items-center justify-center">
        <img src={icon} alt={feature} />
      </div>
      <p className="font-semibold md:text-lg xl:text-xl text-center mt-auto">{feature}</p>
      <span className="text-center text-sm md:w-[230px] xl:w-[243px]">{description}</span>
    </div>
  );
};

export default MissionCard;
