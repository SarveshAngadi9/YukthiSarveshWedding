import { Card } from "@/components/ui/card"
import Decorative from "../components/Decorative";
import Decorative2 from "@/components/Decorative2";
import Decorative3 from "@/components/Decorative3";

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
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FFF3F0" }}>
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
              <p className="text-slate-700 leading-relaxed text-lg">
                It wasn’t love at first sight — it was a bond that grew with time. 
                As our lives unfolded onto each other, conversations deepened, ideas flowed, 
                and a foundation of understanding and respect took root.
              </p>
              < br/>
              <p className="text-slate-700 leading-relaxed text-lg">
                What started as passing discussions soon turned into long exchanges about life, ambitions, and dreams. 
                With every conversation, the connection deepened, and so did the friendship — eventually leading us to this beautiful step forward.
                </p>
                < br/>
              <p className="text-slate-700 leading-relaxed text-lg">
                 Come celebrate, cheer us on, and be part of our story as we begin this brand-new adventure together. 💍✨
              </p>
            </div>
        </div>
      </section>

      {/*
      //* Fun Facts Quiz Section *
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
              {/* Text Block (transparent square) *
              <div className="flex flex-col items-start justify-start border border-transparent p-6 aspect-square">
                <p className="text-s tracking-widest text-slate-600 mb-4 font-mono">FUN FACTS</p>
                <h3 className="text-6xl md:text-4xl font-serif text-slate-800 mb-3">Quirky lil quiz about</h3>
                <h3 className="text-6xl md:text-4xl font-serif text-slate-800">the happy couple</h3>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <h3  className="text-[0.8rem] md:text-s text-green-600 tracking-[0.05em]" style={{ fontFamily: '"Segoe UI Semilight", "Segoe UI", sans-serif' }}>Hover for answer</h3>
              </div>

            
              {/* Card 1 *
              <div className="group perspective-1000 ">
                <div className="relative w-full h-104 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180">
                    {/* Front of card *
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
                    {/* Back of card *
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-rose-100 border border-none flex items-center justify-center rounded-none">
                    <p className="text-sm text-slate-800 text-center font-medium">
                        Sarvesh's nickname for his favorite snacks!
                    </p>
                    </div>
                </div>
              </div>

              {/* Card 2 *
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

              {/* Card 3 *
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

              {/* Card 4 *
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

              {/* Card 5 *
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
      </section>   */}

      {/* Marriage Celebration Section */}
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FFF4F0" }}>
        <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        < Decorative2 />
          <p className="text-xs tracking-widest text-slate-600 mb-6 font-mono">JOIN US IN MADIKERI</p>
          <h2 className="text-4xl font-serif text-slate-800 mb-8 tracking-wide">MARRIAGE CELEBRATION</h2>
          <p className="text-slate-700 leading-relaxed text-lg">
            We’re beginning our forever in Madikeri, surrounded by our family, friends and the hills. 🌿 </p>
          
          <p className="text-slate-700 leading-relaxed text-lg">
            But one celebration is never enough — so we’re bringing the party to Hampi! 🎉 </p>

            < br/>
          <p className="text-slate-700 leading-relaxed text-lg">
            Whether you’re flying in, driving in, or just showing up ready to groove,
            we can’t wait to eat, laugh, and dance the night away with all our favorite people.
          </p>
        </div>
      </section>

      {/* Weekend Events Section */}
      <section className="py-20 relative z-10 bg-rose-50" style={{ backgroundColor: "#FFF4F0" }}>
        <Decorative3 />

        {/* Floating decorative dots */}
        <div className="absolute top-1/6 left-3/4 w-5 h-5 bg-orange-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-300 rounded-full opacity-50"></div>
        <div className="absolute top-24 left-2/5 w-2 h-2 sm:w-3 sm:h-3 bg-rose-300 rounded-full opacity-40"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
            <p className="text-xs tracking-widest text-slate-600 mb-6 font-mono">Mountains, Breeze & Memories 🌄</p>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-800 leading-tight">
            Weekend
            <br />
            Events
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* First Event: Left column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-xs tracking-widest text-slate-600 mb-2 font-serif uppercase">Date</p>
            <p className="text-2xl md:text-3xl tracking-wide text-slate-800 mb-6 font-serif">26 & 27 Oct 2025</p>

            <div className="space-y-6 w-full max-w-sm">
              <div className="flex gap-4 md:gap-6">
                <div className="min-w-[80px] flex flex-col justify-center items-center">
                  <p className="text-xl md:text-2xl font-serif text-slate-800 ml-4 -mt-6">Saturday</p>
                </div>
                <div className="flex-1 ml-38">
                  <p className="text-lg md:text-xl font-serif text-slate-600 mb-1">Time</p>
                  <p className="text-lg md:text-xl font-serif mb-6 text-slate-700">7pm to Close</p>
                </div>
              </div>
            </div>

            <p className="text-xs tracking-widest text-slate-600 font-serif uppercase text-center mb-4 leading-none">The Location</p>
            <p className="text-xl md:text-3xl tracking-wide text-slate-800 font-serif text-center mb-4 leading-none">Crystal Hall, Madikeri</p>
          </div>

          {/* First Event Image */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img src="/coorg.jpg" alt="Madikeri" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Second Event: Left column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-xs tracking-widest text-slate-600 mb-2 font-serif uppercase">Date</p>
            <p className="text-2xl md:text-3xl tracking-wide text-slate-800 mb-1 font-serif">02 Nov 2025</p>
            <p className="text-lg md:text-2xl font-serif text-slate-800 mb-6">Reception</p>

            <div className="space-y-6 w-full max-w-sm">
              <div className="flex gap-4 md:gap-6">
                <div className="min-w-[80px] flex flex-col justify-center items-center">
                  <p className="text-xl md:text-2xl font-serif text-slate-800 ml-4 -mt-6">Sunday</p>
                </div>
                <div className="flex-1 ml-38">
                  <p className="text-lg md:text-xl font-serif text-slate-600 mb-1">Time</p>
                  <p className="text-lg md:text-xl font-serif mb-6 text-slate-700">12pm to 4pm</p>
                </div>
              </div>
            </div>

            <p className="text-xs tracking-widest text-slate-600 font-serif uppercase text-center mb-4 leading-none">The Location</p>
            <p className="text-xl md:text-3xl tracking-wide text-slate-800 font-serif text-center leading-none">Amar Jyothi, Gangavathi</p>
          </div>

          {/* Second Event Image */}
          <div className="flex flex-col gap-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img src="/hampi.jpeg" alt="Hampi" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        </div>
        </section>


      <section className="py-20 relative bg-rose-50 flex items-center justify-center">
        <div className="relative w-48 h-48">
        {/* Rotating circular text */}
        <div className="w-full h-full animate-spin-slow">
            <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
                <path
                id="circle-path"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                />
            </defs>
            <text className="text-xs font-mono tracking-widest fill-slate-600">
                <textPath href="#circle-path" startOffset="0%">
                ❤️💍🎉 YUKTHI & SARVESH • 02/11/25 • MADIKERI & HAMPI • 26/10/25 • YUKTHI & SARVESH • 02/11/25 •
                </textPath>
            </text>
            </svg>
        </div>

        {/* Image in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
            <img
          src="pixie.jpg"
          className="w-36 h-36 rounded-full object-cover [object-position:20%_center]"
            />
        </div>
        </div>
    </section>
   </div>
  )
}
