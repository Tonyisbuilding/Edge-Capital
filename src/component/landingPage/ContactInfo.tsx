import React from "react";
import ContactInput from "./ContactInput";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const ContactInfo = () => {
  const { language } = useChangeLanguageContext();

  return (
    <>
      <div className="md:p-[5rem] p-[1rem] relative">
        <div className=" bg-white w-[5rem] h-[2.5rem] flex items-center justify-center rounded-3xl">
          <button className=" text-black hover:cursor-pointer text-[1rem]">
            Contact
          </button>
        </div>
        <div className="">
          <h1 className=" text-[#111111] md:text-[50.27px] text-[30px] font-semibold ">
            {language === "nl"
              ? `We verwelkomen u graag!`
              : `We'd love to have you around`}
          </h1>
          <p className=" pt-[1rem] text-[#3D3D3D] text-[16.59px] font-normal">
            {language === "nl"
              ? `Neem contact met ons op en schrijf U in voor onze nieuwsbrief voor vragen, ondersteuning of feedback. We staan klaar om U bij elke stap te helpen.`
              : `Contact us and suscribe to our news letter for inquiries, support,
            or feedback. We're here to assist you every step of the way.`}
          </p>
        </div>
        <div className="">
          <ContactInput 
            placeholder="info@edge-capital.nl"
            CTAButton={ language === 'nl'? 'Mail ons' : 'Mail Us'}
            icon={images.landingPage.email}
          />
          <ContactInput
            placeholder="+31 252 781 777"
            CTAButton={ language === 'nl' ? 'Bel ons' : 'Call Us'}
            icon={images.landingPage.email}
          />
          <ContactInput
            placeholder="Walserij 15-I2211 SJ, Noordwijkerhout"
            CTAButton={ language === 'nl' ? 'Richting' : 'Get Direction'}
            icon={images.landingPage.email}
          />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
