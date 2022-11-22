import React from "react";

const MissionCard = ({
  feature,
  description,
  children
}: {
  feature: string;
  description: string;
  children: React.ReactNode
}) => {
  return (
    <div className="rounded-[20px] bg-green-100 py-12 px-6 flex flex-col items-center">
      <div className="bg-white-100 rounded w-[104px] h-[104px] rounded-[30px] mb-9 flex items-center justify-center">
        {children}
      </div>
      <p className="font-semibold text-xl">{feature}</p>
      <span className="text-center text-sm w-[243px]">{description}</span>
    </div>
  );
};

export default MissionCard;
