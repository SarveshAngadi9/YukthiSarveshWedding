import React from "react";
import AbstractYellowFlower from "../components/YF";


const Decorative: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* --- Large dark green organic plant form on the left --- */}
      <div className="absolute left-0 top-0 w-64 h-72 sm:w-48 sm:h-64 md:w-[500px] md:h-[600px]">
        <svg viewBox="0 0 320 420" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="big decorative plant">
          <path d="M60,420 Q75,360 90,300 Q105,240 120,180 Q135,120 150,60 Q165,30 170,0" stroke="#1a5f5f" strokeWidth="10" fill="none" />
          <ellipse cx="50" cy="140" rx="30" ry="55" fill="#1a5f5f" transform="rotate(-20 50 140)" />
          <ellipse cx="100" cy="120" rx="35" ry="60" fill="#2d7a7a" transform="rotate(15 100 120)" />
          <ellipse cx="40" cy="230" rx="40" ry="70" fill="#1a5f5f" transform="rotate(-30 40 230)" />
          <ellipse cx="110" cy="200" rx="32" ry="55" fill="#2d7a7a" transform="rotate(25 110 200)" />
          <ellipse cx="55" cy="320" rx="38" ry="65" fill="#1a5f5f" transform="rotate(-15 55 320)" />
          <ellipse cx="105" cy="290" rx="30" ry="48" fill="#2d7a7a" transform="rotate(20 105 290)" />
          <ellipse cx="75" cy="170" rx="20" ry="30" fill="#2d7a7a" transform="rotate(10 75 170)" />
          <ellipse cx="85" cy="250" rx="22" ry="35" fill="#1a5f5f" transform="rotate(-10 85 250)" />
        </svg>
      </div>

      {/* --- Yellow botanical element with dots on the right (top-right) --- */}
      <div className="absolute top-20 right-3 sm:top-32 sm:right-12 md:top-80 md:right-16 w-12 h-16 sm:w-20 sm:h-24 md:w-24 md:h-32 opacity-85">
        <svg viewBox="0 0 80 100" className="w-full h-full">
          <path d="M40,10 Q60,20 70,40 Q65,60 50,75 Q35,85 20,75 Q10,60 15,40 Q25,20 40,10 Z" fill="#f1c40f" />
          <circle cx="35" cy="30" r="2" fill="#2c3e50" />
          <circle cx="50" cy="35" r="1.5" fill="#2c3e50" />
          <circle cx="42" cy="45" r="2" fill="#2c3e50" />
          <circle cx="30" cy="50" r="1.5" fill="#2c3e50" />
          <circle cx="55" cy="50" r="2" fill="#2c3e50" />
          <circle cx="38" cy="60" r="1.5" fill="#2c3e50" />
          <circle cx="48" cy="65" r="2" fill="#2c3e50" />
        </svg>
      </div>

      {/* --- Soft pink organic shapes (right-top cluster) --- */}
      <div className="absolute top-[22%] right-10 sm:right-20 md:right-32 w-10 h-14 sm:w-16 sm:h-20 md:w-20 md:h-24 opacity-70">
        <svg viewBox="0 0 60 80" className="w-full h-full">
          <ellipse cx="20" cy="25" rx="8" ry="15" fill="#f8c8c8" transform="rotate(-15 20 25)" />
          <ellipse cx="35" cy="30" rx="6" ry="12" fill="#f8c8c8" transform="rotate(20 35 30)" />
          <ellipse cx="25" cy="50" rx="10" ry="18" fill="#f8c8c8" transform="rotate(-10 25 50)" />
          <ellipse cx="40" cy="55" rx="7" ry="14" fill="#f8c8c8" transform="rotate(25 40 55)" />
        </svg>
      </div>

      {/* --- Small pink cluster bottom-left (scaled) --- */}
      <div className="absolute bottom-[33%] left-1/6 w-10 h-14 sm:w-16 sm:h-20 md:w-20 md:h-24 opacity-70">
        <svg viewBox="0 0 60 80" className="w-full h-full">
          <ellipse cx="20" cy="25" rx="8" ry="15" fill="#f8c8c8" transform="rotate(-15 20 25)" />
          <ellipse cx="35" cy="30" rx="6" ry="12" fill="#f8c8c8" transform="rotate(20 35 30)" />
          <ellipse cx="25" cy="50" rx="10" ry="18" fill="#f8c8c8" transform="rotate(-10 25 50)" />
          <ellipse cx="40" cy="55" rx="7" ry="14" fill="#f8c8c8" transform="rotate(25 40 55)" />
        </svg>
      </div>

      {/* --- Flowing curved lines left area --- */}
      <div className="absolute top-32 left-2/8 sm:top-14 sm:left-1/3 w-40 h-28 sm:w-56 sm:h-40 md:w-64 md:h-48 opacity-60">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M0,75 Q50,25 100,50 Q150,75 200,25" stroke="#8fbc8f" strokeWidth="3" fill="none" />
          <path d="M0,100 Q60,60 120,85 Q180,110 200,70" stroke="#8fbc8f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* --- Flowing curved lines center-right --- */}
      <div className="absolute top-[80%] left-[60%] sm:left-[66%] md:left-[70%] w-40 h-28 sm:w-56 sm:h-40 md:w-64 md:h-48 opacity-60">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M0,100 Q60,60 120,85 Q180,110 200,70" stroke="#8fbc8f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* --- Top right petals --- */}
      <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-10">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M250,150 Q200,50 100,80 Q50,120 80,200 Q120,250 200,220 Q250,180 250,150 Z" fill="#e8a87c" />
        </svg>
      </div>

      {/* --- Top-left petal (scaled) --- */}
      <div className="absolute top-0 left-12 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 opacity-5">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M50,200 Q100,50 200,100 Q300,150 350,250 Q300,350 200,300 Q100,350 50,200 Z" fill="#f8b4b4" />
        </svg>
      </div>

      {/* --- Bottom-left petals (faint) --- */}
      <div className="absolute bottom-1/8 left-2/7 w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-8">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M0,150 Q75,50 150,100 Q225,150 300,100 Q225,250 150,200 Q75,250 0,150 Z" fill="#f8b4b4" />
        </svg>
      </div>

      {/* --- Center faint blob --- */}
      <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 opacity-5 -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M200,50 Q300,100 350,200 Q300,300 200,350 Q100,300 50,200 Q100,100 200,50 Z" fill="#e8a87c" />
        </svg>
      </div>

      {/* --- Right-side green/abstract blob (explicit, always visible, scaled) --- */}
     <div className="absolute bottom-38 right-6 sm:bottom-16 sm:right-12 md:bottom-24 md:right-32 w-32 h-36 sm:w-32 sm:h-40 md:w-64 md:h-48 opacity-70">
        <svg viewBox="0 0 200 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="abstract blob with plant form">
          <path d="M20,80 Q30,30 80,40 Q140,50 170,90 Q150,140 80,130 Q30,120 20,80 Z" fill="#f9f4f2" stroke="#163830" strokeWidth="2" />
          <circle cx="55" cy="70" r="4" fill="#c8d8c4" />
          <circle cx="65" cy="75" r="3" fill="#c8d8c4" />
          <circle cx="50" cy="85" r="3" fill="#c8d8c4" />
          <circle cx="70" cy="85" r="3" fill="#c8d8c4" />
          <circle cx="60" cy="95" r="3.5" fill="#c8d8c4" />
          <circle cx="75" cy="100" r="3" fill="#c8d8c4" />
          <circle cx="45" cy="95" r="3" fill="#c8d8c4" />
          <path d="M120,40 Q140,20 155,45 Q170,70 160,100 Q150,120 130,110 Q110,100 100,80 Q110,60 120,40 Z" fill="#7c813d" />
        </svg>
      </div>

      {/* --- Bottom-right yellow plant (explicit, always visible, scaled) --- */}
      <div className="absolute bottom-4 left-6 sm:bottom-8 sm:left-14 md:bottom-16 md:left-[26rem] w-38 h-42 sm:w-[220px] sm:h-[240px] md:w-[320px] md:h-[340px] opacity-95">
        <svg viewBox="0 0 120 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="yellow plant with decorative dots">
          <path d="M55,140 Q40,100 30,60 Q25,35 35,20 Q50,40 48,80 Q47,110 55,140 Z M65,140 Q60,90 62,50 Q63,25 70,10 Q78,30 76,70 Q74,110 70,140 Z M75,140 Q85,100 90,70 Q93,40 85,25 Q80,50 78,90 Q77,115 75,140 Z" fill="#e0b222" />
          <circle cx="55" cy="65" r="3" fill="#163830" />
          <circle cx="59" cy="85" r="3" fill="#163830" />
          <circle cx="42" cy="75" r="4" fill="#163830" />
          <circle cx="66" cy="49" r="3.5" fill="#163830" />
          <circle cx="57" cy="95" r="3" fill="#163830" />
          <circle cx="51" cy="51" r="3" fill="#163830" />
        </svg>
      </div>

      {/* --- Small decorative dots (various places) --- */}
      <div className="absolute top-4/6 left-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-40"></div>
      <div className="absolute top-[83%] left-[66%] w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute top-2/5 left-1/6 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-4/3 right-1/5 w-2 h-2 sm:w-4 sm:h-4 bg-orange-300 rounded-full opacity-30"></div>
      <div className="absolute top-24 left-2/3 w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full opacity-60"></div>

      {/* Yellow flower beside names */}
        <div className="absolute top-2/4 left-6/9 translate-x-[120%] sm:translate-x-[150%] md:translate-x-[180%] -translate-y-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
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
            <circle cx="50" cy="50" r="10" fill="#fef3c7" />
          </svg>
        </div>

        <AbstractYellowFlower />

        <div className="absolute 
        top-2/8 left-1/4 w-10 h-10    /* 📱 mobile */
        sm:top-1/4 sm:left-1/3 sm:w-16 sm:h-16   /* 📱+ small screens */
        md:top-1/5 md:left-1/3 md:w-[100px] md:h-[100px]   /* 💻 medium/desktop */
        z-0">
        <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="abstract pink flower"
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
            fill="#ECB197"   /* soft pink */
        />
        <circle cx="50" cy="50" r="10" fill="#fde2e4" /> {/* pale pink center */}
        </svg>
    </div>
    </div>
  );
};

export default Decorative;
