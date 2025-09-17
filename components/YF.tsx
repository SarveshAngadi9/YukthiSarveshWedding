// components/AbstractYellowFlower.tsx
import React from "react";

const AbstractYellowFlower: React.FC = () => {
  return (
    <div className="absolute top-1/6 left-3/4 w-[120px] h-[120px]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="abstract yellow flower"
      >
        <path
          d="M50 10 
             Q55 25 70 20 
             Q80 25 75 40 
             Q90 45 80 55 
             Q90 70 70 70 
             Q75 85 60 80 
             Q55 95 45 85 
             Q35 95 30 80 
             Q15 85 20 70 
             Q5 65 15 55 
             Q5 45 20 40 
             Q15 25 30 25 
             Q35 10 50 10 Z"
          fill="#e0b222"
        />
        {/* center cutout */}
        <circle cx="50" cy="50" r="10" fill="#fef3c7" />
      </svg>
    </div>
  );
};

export default AbstractYellowFlower;
