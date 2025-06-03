import React, { useState } from "react";
import { motion } from "framer-motion";
import { teamMemberCardstDataType } from "@/constant/data";
import images from "@/constant/images";
import "../component/landingPage/component.css";
import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";



const TeamCard = ({
  name,
  position,
  bio,
  linkedin,
  image,
}: teamMemberCardstDataType) => {
  const [isFlipped, setIsFlipped] = useState(false);


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const { pathname } = useLocation();
  console.log(pathname.slice(1), "Location");

  return (
    <div
      className="relative w-full h-[22.211rem] md:h-[30.375rem] cursor-pointer"
      onClick={handleFlip}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="absolute w-full h-full rounded-tr-[1rem] rounded-bl-[1rem] overflow-hidden"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="w-full h-full bg-black">
          <img
            src={image || "/api/placeholder/400/500"}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute bottom-0 left-0 p-4 text-white text-xl font-medium
          bg-[#26252521]  rounded-bl-3xl lg:w-[15vw] text-center rounded-tr-[.5rem]
            bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 
            ${pathname.slice(1) === "team" ? "hidden" : "block"}`}
          >
            {name}
          </div>
        </div>
      </motion.div>

      <motion.div
        className={` bg-white w-full absolute bottom-[0rem] md:bottom-[0rem] rounded-bl-[1rem] p-5
       shadow-lg shadow-[#9e9d9d54] text-[#192227] flex items-center justify-between
        ${pathname.slice(1) !== "team" ? "hidden" : "block"}`}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div>
          <h1 className="inter text-[13.14px] md:text-[22.58px] font-medium">
            {name}
          </h1>
          <h1 className="inter text-[8.15px] md:text-[14px] font-medium">
            {position}
          </h1>
        </div>
        <button
          className="flex items-center hover:cursor-pointer"
          onClick={() => window.open(`${linkedin}`, '_blank')}
        >
          <h1 className="inter text-[14px] md:text-[14px] font-medium text-[#206A7C]">
            About
          </h1>
          <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-left text-[#206A7C]" />
        </button>
      </motion.div>

      <motion.div
        className="absolute w-full h-full rounded-lg overflow-hidden bg-gray-800 text-white p-6"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <div className="h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-gray-300 mb-4">{position}</p>
            <p className="text-sm">{bio}</p>
          </div>
          {linkedin && (
            <div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};

type TeamMemberCardsProps = {
  teamMembers: teamMemberCardstDataType[];
  department?: string;
};

const TeamMemberCards = ({ teamMembers, department }: TeamMemberCardsProps) => {
  const { pathname } = useLocation();
  const { language } = useChangeLanguageContext();


  return (
    <>
      <div
        className={`bg-[#EEF4F5] py-[2rem] relative overflow-hidden
        `}
      >
        <div>
          <div>
            <img
              src={images.landingPage.dots_updated}
              alt=""
              className="absolute left-0 top-[2rem]"
            />
          </div>
          <div>
            <img
              src={images.landingPage.dots_updated}
              alt=""
              className="absolute left-0 top-[18rem] lg:block hidden"
            />
          </div>
          <div>
            <img
              src={images.landingPage.dots_updated}
              alt=""
              className="absolute right-0 top-[2rem] lg:block hidden"
            />
          </div>
        </div>
        {/* ........ */}
        <div
          className={`w-full max-w-6xl mx-auto px-4  ${pathname.slice(1) === "team" ? "py-0 md:py-5" : "py-12"
            }`}
        >
          <div
            className={`text-[27.1px] md:[60.23px] inter font-semibold text-left mb-3 text-black
          ${pathname.slice(1) !== "team" ? "hidden" : "block"} inter`}
          >
            <div className="relative inline-block">
              <h1 className="font-semibold md:text-[60.23px] text-[35.05px]">
                {department}
              </h1>
              <img
                src={images.landingPage.Brush}
                alt="Underline brush"
                className="absolute left-0 bottom-0 w-auto h-[8px] pointer-events-none"
              />
            </div>

            {/* <div className=" bg-[#F9A600] h-[2px] w-[5rem]"></div> */}
          </div>
          <h2
            className={`text-3xl md:text-5xl font-bold text-center mb-12 text-black
             ${pathname.slice(1) === "team" ? "hidden" : "block"}`}
          >
            {language === 'nl' ? 'Ons management team' : 'Our management team'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>

          <div
            className={`flex justify-center mt-10 ${pathname.slice(1) === "team" ? "hidden" : "block"
              }`}
          >
            <button
              className="bg-[#206A7C] text-white font-medium py-[10px] px-[20px] rounded-full 
  shadow-[0_4px_10px_rgba(32,106,124,0.3)] hover:shadow-[0_8px_20px_rgba(32,106,124,0.45)] 
  hover:-translate-y-[2px] transition-all duration-200"
            >
              <Link to="/team">
                {language === 'nl' ? 'Leer ons gehele team kennen' : 'Meet our entire team'}
              </Link>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMemberCards;
