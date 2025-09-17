
import React from "react";

const Decorative: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Large dark green organic plant form on the left */}
      <div className="w-[500px] h-[600px]">
          <svg
            viewBox="0 0 320 420"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="big decorative plant"
          >
            {/* Main stem */}
            <path
              d="M60,420 Q75,360 90,300 Q105,240 120,180 Q135,120 150,60 Q165,30 170,0"
              stroke="#1a5f5f"
              strokeWidth="10"
              fill="none"
            />

            {/* Leaves */}
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

      {/* Orange coral flower element 
      <div className="absolute top-60 left-32 w-16 h-16 opacity-90 z-0">
        <svg viewBox="0 0 64 64" className="w-full h-full z-0">
          <g transform="translate(32,32)">
            {[0, 72, 144, 216, 288].map((rot) => (
              <path
                key={rot}
                d="M0,-20 Q-8,-12 -15,-5 Q-8,2 0,0 Q8,2 15,-5 Q8,-12 0,-20 Z"
                fill="#ff6b47"
                transform={`rotate(${rot})`}
              />
            ))}
            <circle cx="0" cy="0" r="4" fill="#e74c3c" />
          </g>
        </svg>
      </div>*/}

      {/* Yellow botanical element with dots on the right */}
      <div className="absolute top-80 right-16 w-24 h-32 opacity-85 z-0">
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

      {/* Soft pink organic shapes */}
      <div className="absolute top-8/10 right-32 w-20 h-24 opacity-70 z-0">
        <svg viewBox="0 0 60 80" className="w-full h-full">
          <ellipse cx="20" cy="25" rx="8" ry="15" fill="#f8c8c8" transform="rotate(-15 20 25)" />
          <ellipse cx="35" cy="30" rx="6" ry="12" fill="#f8c8c8" transform="rotate(20 35 30)" />
          <ellipse cx="25" cy="50" rx="10" ry="18" fill="#f8c8c8" transform="rotate(-10 25 50)" />
          <ellipse cx="40" cy="55" rx="7" ry="14" fill="#f8c8c8" transform="rotate(25 40 55)" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/5 w-20 h-24 opacity-70 z-0">
        <svg viewBox="0 0 60 80" className="w-full h-full">
          <ellipse cx="20" cy="25" rx="8" ry="15" fill="#f8c8c8" transform="rotate(-15 20 25)" />
          <ellipse cx="35" cy="30" rx="6" ry="12" fill="#f8c8c8" transform="rotate(20 35 30)" />
          <ellipse cx="25" cy="50" rx="10" ry="18" fill="#f8c8c8" transform="rotate(-10 25 50)" />
          <ellipse cx="40" cy="55" rx="7" ry="14" fill="#f8c8c8" transform="rotate(25 40 55)" />
        </svg>
      </div>

      {/* Flowing curved lines */}
      <div className="absolute top-15 left-2/5 w-64 h-48 opacity-60 z-0">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M0,75 Q50,25 100,50 Q150,75 200,25" stroke="#8fbc8f" strokeWidth="3" fill="none" />
          <path d="M0,100 Q60,60 120,85 Q180,110 200,70" stroke="#8fbc8f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Flowing curved lines */}
      <div className="absolute top-4/6 left-4/6 w-64 h-48 opacity-60 z-0">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          <path d="M0,100 Q60,60 120,85 Q180,110 200,70" stroke="#8fbc8f" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Additional organic background shapes  */}
      {/* Top Right petals */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-10 z-0">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M250,150 Q200,50 100,80 Q50,120 80,200 Q120,250 200,220 Q250,180 250,150 Z" fill="#e8a87c" />
        </svg>
      </div>

      {/* Top Left petal */}
      <div className="absolute top-0 left-1/8 w-96 h-96 opacity-15 z-0">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M50,200 Q100,50 200,100 Q300,150 350,250 Q300,350 200,300 Q100,350 50,200 Z" fill="#f8b4b4" />
        </svg>
      </div>

      {/* Top Right petals */}
      <div className="absolute top-10 right-0 w-80 h-80 opacity-8 z-0">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M250,150 Q200,50 100,80 Q50,120 80,200 Q120,250 200,220 Q250,180 250,150 Z" fill="#e8a87c" />
        </svg>
      </div>

      {/* Diamond shape 
      <div className="absolute top-6/9 left-1/4 w-64 h-64 opacity-10 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,20 Q160,40 180,100 Q160,160 100,180 Q40,160 20,100 Q40,40 100,20 Z" fill="#d4a574" />
        </svg>
      </div>*/}

      {/* Diamond shape 
      <div className="absolute top-1/3 right-1/3 w-72 h-72 opacity-12 z-0">
        <svg viewBox="0 0 250 250" className="w-full h-full">
          <path d="M125,25 Q200,50 225,125 Q200,200 125,225 Q50,200 25,125 Q50,50 125,25 Z" fill="#f4d03f" />
        </svg>
      </div>*/}

      {/* Scattered leaf elements 
      <div className="absolute top-1/5 right-3/9 w-16 h-16 opacity-30 z-0">
        <svg viewBox="0 0 50 50" className="w-full h-full">
          <ellipse cx="25" cy="35" rx="3" ry="12" fill="#228b22" transform="rotate(15 25 35)" />
          <ellipse cx="25" cy="25" rx="8" ry="15" fill="#32cd32" transform="rotate(15 25 25)" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/5 w-20 h-20 opacity-25 z-0">
        <svg viewBox="0 0 60 60" className="w-full h-full">
          <ellipse cx="30" cy="40" rx="4" ry="15" fill="#228b22" transform="rotate(-20 30 40)" />
          <ellipse cx="30" cy="30" rx="10" ry="18" fill="#32cd32" transform="rotate(-20 30 30)" />
        </svg>
      </div>*/}

      {/* More abstract flowing shapes */}
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-8 z-0">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M0,150 Q75,50 150,100 Q225,150 300,100 Q225,250 150,200 Q75,250 0,150 Z" fill="#f8b4b4" />
        </svg>
      </div>

      <div className="absolute top-2/2 left-2/2 w-96 h-96 opacity-5 -translate-x-1/2 -translate-y-1/2 z-0">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path d="M200,50 Q300,100 350,200 Q300,300 200,350 Q100,300 50,200 Q100,100 200,50 Z" fill="#e8a87c" />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div className="absolute top-1/6 left-5/8 w-4 h-4 bg-rose-300 rounded-full opacity-40 z-0"></div>
      <div className="absolute top-5/5 left-4/6 w-3 h-3 bg-yellow-300 rounded-full opacity-50 z-0"></div>
      <div className="absolute top-2/5 left-1/6 w-3 h-3 bg-yellow-300 rounded-full opacity-50 z-0"></div>
      <div className="absolute bottom-2/4 right-1/5 w-5 h-5 bg-orange-300 rounded-full opacity-30 z-0"></div>
      <div className="absolute top-3/4 left-3/3 w-2 h-2 bg-green-300 rounded-full opacity-60 z-0"></div>


       <div className="absolute top-3/6 left-3/5 w-[60px] h-[80px]">
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

        <div className="absolute bottom-4 left-2/7 w-[120px] h-[140px]">
          <svg
            viewBox="0 0 120 140"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="yellow plant with decorative dots"
          >
            {/* Main yellow plant form */}
            <path
              d="M60,130 
                 Q40,100 30,60 
                 Q20,30 35,20 
                 Q50,30 55,60 
                 Q60,20 75,15 
                 Q90,30 85,60 
                 Q80,90 65,130 Z"
              fill="#e0b222"
            />

            {/* Decorative dark green dots */}
             <circle cx="55" cy="65" r="3" fill="#163830" />
            <circle cx="59" cy="85" r="3" fill="#163830" />
            <circle cx="42" cy="75" r="4" fill="#163830" />
            <circle cx="66" cy="49" r="3.5" fill="#163830" />
            <circle cx="57" cy="95" r="3" fill="#163830" />
            <circle cx="51" cy="51" r="3" fill="#163830" />
          </svg>
        </div>


        <div className="absolute top-3/5 left-6/7 w-[200px] h-[160px]">
              <svg
                viewBox="0 0 200 160"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="abstract blob with plant form"
              >
                {/* Off-white blob with dark green outline */}
                <path
                  d="M20,80 
                     Q30,30 80,40 
                     Q140,50 170,90 
                     Q150,140 80,130 
                     Q30,120 20,80 Z"
                  fill="#f9f4f2"
                  stroke="#163830"
                  strokeWidth="2"
                />

                {/* Pale green decorative dots */}
                <circle cx="55" cy="70" r="4" fill="#c8d8c4" />
                <circle cx="65" cy="75" r="3" fill="#c8d8c4" />
                <circle cx="50" cy="85" r="3" fill="#c8d8c4" />
                <circle cx="70" cy="85" r="3" fill="#c8d8c4" />
                <circle cx="60" cy="95" r="3.5" fill="#c8d8c4" />
                <circle cx="75" cy="100" r="3" fill="#c8d8c4" />
                <circle cx="45" cy="95" r="3" fill="#c8d8c4" />

                {/* Olive green plant-like shape */}
                <path
                  d="M120,40 
                     Q140,20 155,45 
                     Q170,70 160,100 
                     Q150,120 130,110 
                     Q110,100 100,80 
                     Q110,60 120,40 Z"
                  fill="#7c813d"
                />
              </svg>
            </div>


    </div>
  );
};

export default Decorative;
