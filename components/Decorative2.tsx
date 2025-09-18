// components/decorative2.tsx
import React from "react";

const Decorative2: React.FC = () => {
  return (
    <section
      className="py-20 relative z-10 bg-rose-50"
      style={{ backgroundColor: "#FFF4F0" }}
    >

        {/* --- Flowing curved lines left area --- */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[25vw] h-[25vw] max-w-64 max-h-64 opacity-60">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M0,75 Q50,25 100,50 Q150,75 200,25" stroke="#8fbc8f" strokeWidth="3" fill="none" />
          <path d="M0,100 Q60,60 120,85 Q180,110 200,70" stroke="#8fbc8f" strokeWidth="2" fill="none" />
        </svg>
      </div>

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

        <div className="absolute bottom-5/8 left-4/7 w-32 h-32 sm:w-60 sm:h-60 md:w-80 md:h-80 opacity-14">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M0,150 Q75,50 150,100 Q225,150 300,100 Q225,250 150,200 Q75,250 0,150 Z" fill="#f8b4b4" />
        </svg>
      </div>

       <div className="absolute bottom-5/8 left-0 translate-x-[120%] sm:translate-x-[150%] md:translate-x-[180%] -translate-y-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
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

        <div className="absolute top-4/6 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-40"></div>
        <div className="absolute top-[83%] left-[50%] w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-50"></div>
        <div className="absolute top-1 left-2/5 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-300 rounded-full opacity-50"></div>
  {/* Left flower-like shape 
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[25vw] h-[25vw] max-w-64 max-h-64 opacity-60">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(100,100)">
              {[0, 72, 144, 216, 288].map((angle) => (
                <path
                  key={angle}
                  d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                  fill="#f4d03f"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="8" fill="#e67e22" />
            </g>
          </svg>
        </div>*/}

        {/* Right side abstract shapes 
        <div className="absolute right-0 top-0 w-[35vw] h-[70vh] max-w-80 opacity-30">
          <svg viewBox="0 0 300 600" className="w-full h-full">
            <path
              d="M250,100 Q200,50 150,100 Q100,150 150,200 Q200,250 250,200 Q300,150 250,100 Z"
              fill="#f8b4b4"
            />
            <path
              d="M280,300 Q230,250 180,300 Q130,350 180,400 Q230,450 280,400 Q330,350 280,300 Z"
              fill="#e8a87c"
            />
          </svg>
        </div>*/}

        {/* Top middle shape
        <div className="absolute top-0 left-1/3 w-[12vw] h-[12vw] max-w-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50,10 Q80,25 90,50 Q80,75 50,90 Q20,75 10,50 Q20,25 50,10 Z"
              fill="#f4d03f"
            />
          </svg>
        </div> */}

        {/* Bottom middle shape 
        <div className="absolute right-8 bottom-0 w-48 h-48 opacity-50">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <g>
              <ellipse cx="75" cy="130" rx="3" ry="15" fill="#228b22" />
              <ellipse cx="60" cy="100" rx="15" ry="8" fill="#32cd32" transform="rotate(-30 60 100)" />
              <ellipse cx="90" cy="100" rx="15" ry="8" fill="#32cd32" transform="rotate(30 90 100)" />
              <ellipse cx="50" cy="70" rx="12" ry="6" fill="#228b22" transform="rotate(-45 50 70)" />
              <ellipse cx="100" cy="70" rx="12" ry="6" fill="#228b22" transform="rotate(45 100 70)" />
              <ellipse cx="75" cy="50" rx="18" ry="10" fill="#32cd32" />
            </g>
          </svg>
        </div>*/}
        {/* Bottom middle shape 
        <div className="absolute bottom-1/3 left-1/2 w-[15vw] h-[15vw] max-w-40 opacity-15">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path
              d="M60,15 Q90,30 105,60 Q90,90 60,105 Q30,90 15,60 Q30,30 60,15 Z"
              fill="#e8a87c"
            />
          </svg>
        </div>*/}

        {/* Floating shape on the right 
        <div className="absolute top-1/4 right-1/3 w-[8vw] h-[8vw] max-w-24 opacity-20">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path
              d="M40,10 Q60,20 70,40 Q65,60 50,75 Q35,85 20,75 Q10,60 15,40 Q25,20 40,10 Z"
              fill="#d4a574"
            />
          </svg>
        </div>*/}
    </section>
  );
};

export default Decorative2;
