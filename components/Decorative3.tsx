// components/decorative3.tsx
import React from "react";

const Decorative3: React.FC = () => {
  return (
    <>
      {/* Bottom left large shape */}
      <div className="absolute left-0 bottom-0 w-[40vw] h-[40vw] max-w-96 max-h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path
            d="M50,350 Q100,250 200,300 Q300,350 350,250 Q300,150 200,200 Q100,150 50,250 Q100,350 50,350 Z"
            fill="#f8b4b4"
          />
        </svg>
      </div>

      {/* Top right small shape */}
      <div className="absolute top-0 right-1/4 w-[12vw] h-[12vw] max-w-40 max-h-40 opacity-25">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <path
            d="M60,15 Q90,30 105,60 Q90,90 60,105 Q30,90 15,60 Q30,30 60,15 Z"
            fill="#e8a87c"
          />
        </svg>
      </div>

      {/* Bottom right medium shape */}
      <div className="absolute bottom-3/4 left-2 w-[18vw] h-[18vw] max-w-56 max-h-56 opacity-15">
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <path
            d="M90,20 Q140,35 160,90 Q140,145 90,160 Q40,145 20,90 Q40,35 90,20 Z"
            fill="#d4a574"
          />
        </svg>
      </div>

      <div className="absolute bottom-2/4 left-2/4 w-[18vw] h-[18vw] max-w-56 max-h-56 opacity-15">
        <svg viewBox="0 0 180 180" className="w-full h-full">
          <path
            d="M90,20 Q140,35 160,90 Q140,145 90,160 Q40,145 20,90 Q40,35 90,20 Z"
            fill="#d4a574"
          />
        </svg>
      </div>


      <div className="absolute top-1 left-1/5 w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-40"></div>
      <div className="absolute top-[83%] left-[50%] w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-4/3 right-1/5 w-2 h-2 sm:w-4 sm:h-4 bg-orange-300 rounded-full opacity-30"></div>
      <div className="absolute top-24 left-2/3 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full opacity-60"></div>

      <div className="absolute bottom-6/10 left-4/7 w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-14">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M0,150 Q75,50 150,100 Q225,150 300,100 Q225,250 150,200 Q75,250 0,150 Z" fill="#f8b4b4" />
        </svg>
      </div>

      <div className="absolute top-0 left-1/7 w-28 h-28 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-14">
         <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M50,200 Q100,50 200,100 Q300,150 350,250 Q300,350 200,300 Q100,350 50,200 Z" fill="#f8b4b4" />
        </svg>
      </div>


      {/* Left middle shape 
      <div className="absolute top-1/3 left-1/5 w-[15vw] h-[15vw] max-w-48 max-h-48 opacity-12">
        <svg viewBox="0 0 150 150" className="w-full h-full">
          <path
            d="M75,15 Q120,30 135,75 Q120,120 75,135 Q30,120 15,75 Q30,30 75,15 Z"
            fill="#f4d03f"
          />
        </svg>
      </div>*/}

      {/* Bottom middle shape 
      <div className="absolute bottom-0 left-1/3 w-[20vw] h-[20vw] max-w-64 max-h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,20 Q160,40 180,100 Q160,160 100,180 Q40,160 20,100 Q40,40 100,20 Z"
            fill="#f8b4b4"
          />
        </svg>
      </div>*/}
    </>
  );
};

export default Decorative3;
