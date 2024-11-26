import React from "react";

export default function Sponsor({ imgUrl, darkImgUrl, tier }) {
  const width =
    tier === "platinum"
      ? "500px"
      : tier === "gold"
      ? "400px"
      : tier === "silver"
      ? "250px"
      : "120px";
  return (
    <div className="grid grid-cols-1 mt-4 mx-8 object-center">
      <div className="lg:col-span-3 md:col-span-6">
        <div className="group text-center">
          <div className="relative inline-block h-25 w-100 rounded-lg overflow-hidden">
            <img
              className="inline-block dark:hidden"
              src={imgUrl}
              alt="Sponsor"
              width={width}
            />
            <img
              className="hidden dark:inline-block"
              src={darkImgUrl}
              alt="Sponsor Dark"
              width={width}
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}
