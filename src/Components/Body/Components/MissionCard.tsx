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
      <div className="bg-white-100 rounded h-[95px] w-[95px] rounded-[30px] md:mb-7 xl:mb-9 flex items-center justify-center">
        <img src={icon} alt={feature} width={45} height={45}/>
      </div>
      <p className="font-semibold md:text-lg xl:text-xl text-center mt-auto pb-4">{feature}</p>
      <span className="text-center text-sm md:max-w-[250px] xl:w-[243px]">{description}</span>
    </div>
  );
};

export default MissionCard;
