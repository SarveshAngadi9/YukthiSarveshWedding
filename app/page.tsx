import { Card } from "@/components/ui/card"
import Decorative from "../components/Decorative";


export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50 relative overflow-hidden z-0" style={{ backgroundColor: "#FEF1EC" }}>
        
      {/* Hero Section */}
      
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center">

        
        
       
       <div className="max-w-6xl mx-auto px-4">
        <Decorative />
            <p className="text-l font-weight: normal tracking-widest text-slate-600 mb-12 font-mono -mt-10">October 27 2025</p> 
                <h1 className="text-6xl sm:text-6xl md:text-8xl font-normal heading-lean text-slate-800"> 
                    Yukthi 
                        <br /> 
                    Sarvesh 
                </h1> 
       </div> 
       </section>

      {/* Our Story Section */}
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FEF1EC" }}>
        {/* <div className="absolute top-0 right-0 w-48 h-48 opacity-15">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <path d="M75,15 Q120,30 135,75 Q120,120 75,135 Q30,120 15,75 Q30,30 75,15 Z" fill="#d4a574" />
          </svg>
        </div>

        <div className="absolute top-0 left-0 w-80 h-80 opacity-10">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <path d="M0,150 Q75,50 150,100 Q225,150 300,100 Q225,250 150,200 Q75,250 0,150 Z" fill="#f8b4b4" />
          </svg>
        </div>

        <div className="absolute top-1/2 right-1/4 w-64 h-64 opacity-8">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,20 Q160,40 180,100 Q160,160 100,180 Q40,160 20,100 Q40,40 100,20 Z" fill="#e8a87c" />
          </svg>
        </div>

        <div className="absolute top-1/4 left-1/3 w-20 h-20 opacity-30">
          <svg viewBox="0 0 60 60" className="w-full h-full">
            <ellipse cx="30" cy="40" rx="4" ry="15" fill="#228b22" transform="rotate(25 30 40)" />
            <ellipse cx="30" cy="30" rx="10" ry="18" fill="#32cd32" transform="rotate(25 30 30)" />
          </svg>
        </div>*/}

       <div className="max-w-7xl mx-auto px-4 text-center font-sans">
          <p className="text-xl tracking-widest text-slate-600 mb-6 font-mono">OUR STORY</p>
          <h2 className="text-4xl font-serif text-slate-800 mb-8 tracking-wide">
            DANCE, DANCE, DANCE
          </h2>
          <div className="max-w-5xl mx-auto px-4">
              <p className="text-2xl md:text-xl font-serif text-slate-700 leading-10  text-justify">
                We first met at the office — not love at first sight, but a smile that refused to fade.
                Those little conversations soon turned into hours of sharing thoughts, emotions, and big ideas about life.
                Yukthi’s kindness, empathy, and laughter pulled Sarvesh closer every single day.
    
              </p>
              <p className="text-2xl md:text-xl font-serif text-slate-700 leading-10  text-justify mt-6">
                Together we’ve faced every emotion — anger, jealousy, joy, and endless laughter and grown stronger through it all.
                From Kotagiri to Ooty to Gokarna, adventures only proved how unshakable this bond really is.
                And now… the wait is over! Sarvesh and Yukthi are getting married — come celebrate love, laughter, and the start of forever! 💍✨
              </p>
            </div>
        </div>
      </section>

      {/* Fun Facts Quiz Section */}
      <section className="w-full py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FEF1EC" }}>
        <div className="absolute top-0 left-1/4 w-72 h-72 opacity-12">
          <svg viewBox="0 0 250 250" className="w-full h-full">
            <path d="M125,25 Q200,50 225,125 Q200,200 125,225 Q50,200 25,125 Q50,50 125,25 Z" fill="#f4d03f" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-8">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M200,50 Q300,100 350,200 Q300,300 200,350 Q100,300 50,200 Q100,100 200,50 Z" fill="#e8a87c" />
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/5 w-16 h-16 opacity-25">
          <svg viewBox="0 0 50 50" className="w-full h-full">
            <ellipse cx="25" cy="35" rx="3" ry="12" fill="#228b22" transform="rotate(-15 25 35)" />
            <ellipse cx="25" cy="25" rx="8" ry="15" fill="#32cd32" transform="rotate(-15 25 25)" />
          </svg>
        </div>

        <div className="absolute bottom-1/4 left-1/6 w-6 h-6 bg-yellow-300 rounded-full opacity-40"></div>
        <div className="absolute top-1/5 right-1/3 w-4 h-4 bg-rose-300 rounded-full opacity-50"></div>

        <div className="w-full px-4 ">
          <Card className="bg-white/80 border-rose-400 p-6 sm:p-10 md:p-14 relative rounded-none" style={{ backgroundColor: "#FEEEE9" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Text Block (transparent square) */}
              <div className="flex flex-col items-start justify-start border border-transparent p-6 aspect-square">
                <p className="text-s tracking-widest text-slate-600 mb-4 font-mono">FUN FACTS</p>
                <h3 className="text-6xl md:text-4xl font-serif text-slate-800 mb-3">Quirky lil quiz about</h3>
                <h3 className="text-6xl md:text-4xl font-serif text-slate-800">the happy couple</h3>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <h3  className="text-[0.8rem] md:text-s text-green-600 tracking-[0.05em]" style={{ fontFamily: '"Segoe UI Semilight", "Segoe UI", sans-serif' }}>Hover for answer</h3>
              </div>

            
              {/* Card 1 */}
              <div className="group perspective-1000 ">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="absolute inset-0 backface-hidden bg-white border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                        <svg viewBox="0 0 64 64" className="w-full h-full">
                        <circle cx="32" cy="25" r="8" fill="#f8b4b4" />
                        <ellipse cx="32" cy="45" rx="12" ry="8" fill="#f8b4b4" />
                        <circle cx="28" cy="23" r="1" fill="#333" />
                        <circle cx="36" cy="23" r="1" fill="#333" />
                        <path d="M30 27 Q32 29 34 27" stroke="#333" strokeWidth="1" fill="none" />
                        </svg>
                    </div>
                    <p className="text-sm text-slate-700 text-center">What is a boochie boy?</p>
                    </div>
                    {/* Back of card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 border border-none flex items-center justify-center rounded-none">
                    <p className="text-sm text-slate-800 text-center font-medium">
                        Sarvesh's nickname for his favorite snacks!
                    </p>
                    </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group perspective-1000">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect x="16" y="20" width="32" height="24" rx="2" fill="#e8a87c" />
                        <rect x="20" y="24" width="6" height="4" fill="white" />
                        <rect x="28" y="24" width="6" height="4" fill="white" />
                        <rect x="36" y="24" width="6" height="4" fill="white" />
                        <rect x="20" y="32" width="6" height="4" fill="white" />
                        <rect x="28" y="32" width="6" height="4" fill="white" />
                        <rect x="36" y="32" width="6" height="4" fill="white" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">How long have we known each other?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-none flex items-center justify-center rounded-none">
                    <p className="text-xs text-slate-800 text-center font-medium">Since 2015 - 4 amazing years!</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group perspective-1000">
                 <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect x="20" y="35" width="24" height="20" fill="#d4a574" />
                        <polygon points="20,35 32,15 44,35" fill="#e8a87c" />
                        <rect x="28" y="40" width="8" height="15" fill="#8b4513" />
                        <circle cx="26" cy="25" r="2" fill="#333" />
                        <circle cx="38" cy="25" r="2" fill="#333" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">Where did we meet?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-rose-200 p-4 flex items-center justify-center">
                    <p className="text-xs text-slate-800 text-center font-medium">Design studio at grad school!</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group perspective-1000">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <ellipse cx="32" cy="40" rx="8" ry="12" fill="#f8b4b4" />
                        <rect x="30" y="20" width="4" height="20" fill="#d4a574" />
                        <ellipse cx="32" cy="18" rx="6" ry="3" fill="#e8a87c" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">Comfort food?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-rose-200 p-4 flex items-center justify-center">
                    <p className="text-xs text-slate-800 text-center font-medium">Ice cream & pizza!</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group perspective-1000">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect x="28" y="35" width="8" height="20" fill="#8fbc8f" />
                        <ellipse cx="32" cy="30" rx="12" ry="8" fill="#90ee90" />
                        <path d="M20 35 L32 25 L44 35" fill="#228b22" />
                        <circle cx="26" cy="30" r="1" fill="#006400" />
                        <circle cx="38" cy="30" r="1" fill="#006400" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">Where did we get engaged?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-rose-200 p-4 flex items-center justify-center">
                    <p className="text-xs text-slate-800 text-center font-medium">Beautiful Yosemite National Park!</p>
                  </div>
                </div>
              </div>


              <div className="group perspective-1000">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect x="16" y="35" width="32" height="20" fill="#d4a574" />
                        <polygon points="16,35 32,15 48,35" fill="#e8a87c" />
                        <rect x="28" y="40" width="8" height="15" fill="#8b4513" />
                        <rect x="20" y="25" width="6" height="8" fill="#87ceeb" />
                        <rect x="38" y="25" width="6" height="8" fill="#87ceeb" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">Where's our dream house?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-rose-200 p-4 flex items-center justify-center">
                    <p className="text-xs text-slate-800 text-center font-medium">Somewhere with a big kitchen!</p>
                  </div>
                </div>
              </div>

              <div className="group perspective-1000">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden bg-white rounded-lg border border-none flex flex-col items-center justify-center rounded-none">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <path d="M32 8 L28 28 L8 32 L28 36 L32 56 L36 36 L56 32 L36 28 Z" fill="#ff69b4" />
                        <circle cx="32" cy="32" r="8" fill="#ffb6c1" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-700 text-center">Favorite LA spot?</p>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 rounded-lg border border-rose-200 p-4 flex items-center justify-center">
                    <p className="text-xs text-slate-800 text-center font-medium">The rooftop at Perch!</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Marriage Celebration Section */}
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FFF4F0" }}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-60">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(100,100)">
              <path
                d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                fill="#f4d03f"
                transform="rotate(0)"
              />
              <path
                d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                fill="#f4d03f"
                transform="rotate(72)"
              />
              <path
                d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                fill="#f4d03f"
                transform="rotate(144)"
              />
              <path
                d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                fill="#f4d03f"
                transform="rotate(216)"
              />
              <path
                d="M0,-40 Q-15,-25 -25,-10 Q-15,5 0,0 Q15,5 25,-10 Q15,-25 0,-40 Z"
                fill="#f4d03f"
                transform="rotate(288)"
              />
              <circle cx="0" cy="0" r="8" fill="#e67e22" />
            </g>
          </svg>
        </div>

        <div className="absolute right-0 top-0 w-80 h-full opacity-30">
          <svg viewBox="0 0 300 600" className="w-full h-full">
            <path d="M250,100 Q200,50 150,100 Q100,150 150,200 Q200,250 250,200 Q300,150 250,100 Z" fill="#f8b4b4" />
            <path d="M280,300 Q230,250 180,300 Q130,350 180,400 Q230,450 280,400 Q330,350 280,300 Z" fill="#e8a87c" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/3 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 Q80,25 90,50 Q80,75 50,90 Q20,75 10,50 Q20,25 50,10 Z" fill="#f4d03f" />
          </svg>
        </div>

        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 opacity-15">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path d="M60,15 Q90,30 105,60 Q90,90 60,105 Q30,90 15,60 Q30,30 60,15 Z" fill="#e8a87c" />
          </svg>
        </div>

        <div className="absolute top-1/4 right-1/3 w-24 h-24 opacity-20">
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <path d="M40,10 Q60,20 70,40 Q65,60 50,75 Q35,85 20,75 Q10,60 15,40 Q25,20 40,10 Z" fill="#d4a574" />
          </svg>
        </div>

        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
          <p className="text-xs tracking-widest text-slate-600 mb-6 font-mono">JOIN US IN CALIFORNIA</p>
          <h2 className="text-4xl font-serif text-slate-800 mb-8 tracking-wide">MARRIAGE CELEBRATION</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            We will marry in San Francisco in August 2019 at a small ceremony with our parents. But we definitely want
            to celebrate this special event with all our friends and family. Whether flying in or driving in, we hope to
            dance the night away in beautiful LA!
          </p>
        </div>

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
        </div>
      </section>

      {/* Weekend Events Section */}
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FFF4F0" }}>
        <div className="absolute left-0 bottom-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path
              d="M50,350 Q100,250 200,300 Q300,350 350,250 Q300,150 200,200 Q100,150 50,250 Q100,350 50,350 Z"
              fill="#f8b4b4"
            />
          </svg>
        </div>

        <div className="absolute top-0 right-1/4 w-40 h-40 opacity-25">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path d="M60,15 Q90,30 105,60 Q90,90 60,105 Q30,90 15,60 Q30,30 60,15 Z" fill="#e8a87c" />
          </svg>
        </div>

        <div className="absolute bottom-1/4 right-0 w-56 h-56 opacity-15">
          <svg viewBox="0 0 180 180" className="w-full h-full">
            <path d="M90,20 Q140,35 160,90 Q140,145 90,160 Q40,145 20,90 Q40,35 90,20 Z" fill="#d4a574" />
          </svg>
        </div>

        <div className="absolute top-1/3 left-1/5 w-48 h-48 opacity-12">
          <svg viewBox="0 0 150 150" className="w-full h-full">
            <path d="M75,15 Q120,30 135,75 Q120,120 75,135 Q30,120 15,75 Q30,30 75,15 Z" fill="#f4d03f" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-1/3 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,20 Q160,40 180,100 Q160,160 100,180 Q40,160 20,100 Q40,40 100,20 Z" fill="#f8b4b4" />
          </svg>
        </div>

        <div className="absolute top-1/6 left-3/4 w-5 h-5 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-300 rounded-full opacity-50"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-slate-600 mb-6 font-mono">FUN IN THE SUN</p>
            <h2 className="text-5xl font-serif text-slate-800 leading-tight">
              Weekend
              <br />
              Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs tracking-widest text-slate-600 mb-6 font-mono">THE LOCATION / ETC</p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="text-right min-w-[80px]">
                    <p className="text-sm font-mono text-slate-600">THUR</p>
                    <p className="text-2xl font-serif text-slate-800">Thursday</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">Welcome Drinks</h4>
                    <p className="text-sm text-slate-600 mb-2">TIME</p>
                    <p className="text-sm text-slate-700">8pm to Close</p>
                    <p className="text-sm text-slate-600 mb-2 mt-2">ATTIRE</p>
                    <p className="text-sm text-slate-700">Poolside</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/rooftop-bar-with-city-view-at-sunset.jpg"
                alt="Rooftop venue"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-rose-50 flex items-center justify-center">
        <div className="relative">
          {/* Rotating circular text */}
          <div className="w-48 h-48 relative animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <path id="circle-path" d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
              </defs>
              <text className="text-xs font-mono tracking-widest fill-slate-600">
                <textPath href="#circle-path" startOffset="0%">
                  YUKTHI & SARVESH • 27/10/25 • YUKTHI & SARVESH • 27/10/25 • YUKTHI & SARVESH • 27/10/25 •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
