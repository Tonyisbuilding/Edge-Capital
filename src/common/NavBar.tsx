import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import images from "@/constant/images";
import "../common/GoogleTranslate.css";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

interface DropdownState {
  [key: number]: boolean;
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: new (options: object, containerId: string) => void;
      };
    };
  }
}

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<DropdownState>({});
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useChangeLanguageContext();

  // Translation dictionary
  const translations = {
    en: {
      home: "Home",
      aboutUs: "About Us",
      about: "About",
      team: "Team",
      edgeFund: "EdgeFund",
      edgeImpact: "Edge Impact",
      // edgeConnect: "Edge Connect",
      edgeCares: "Edge Cares",
      edgeHorizonFoundation: "Edge Horizon Foundation",
      edgeCapitalCSR: "Edge Capital CSR",
      institutional: "Institutional",
      company: "Company",
      contact: "Contact",
      media: "Media",
      documents: "Documents",
      careers: "Careers",
      contactUs: "Contact Us",
      english: "English",
      dutch: "Nederlands",
    },
    nl: {
      home: "Home",
      aboutUs: "Over Ons",
      about: "Over",
      team: "Team",
      edgeFund: "EdgeFund",
      edgeImpact: "Edge Impact",
      // edgeConnect: "Edge Connect",
      edgeCares: "Edge Cares",
      edgeHorizonFoundation: "Edge Horizon Stichting",
      edgeCapitalCSR: "Edge Capital MVO",
      institutional: "Institutioneel",
      company: "Bedrijf",
      contact: "Contact",
      media: "Media",
      documents: "Documenten",
      careers: "Vacatures",
      contactUs: "Neem Contact op",
      english: "Engels",
      dutch: "Nederlands",
    }
  };

  // Get translation based on current language
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key];
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => setIsNavActive(!isNavActive);

  const toggleDropdown = (
    index: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdowns({
        ...activeDropdowns,
        [index]: !activeDropdowns[index],
      });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as "en" | "nl");
  };

  return (

       <>
      {/* AFM Warning Banner */}
      <div className="fixed top-0 left-0 w-full bg-[#256D7B] text-white text-center px-4 py-2 z-[9999] flex justify-center items-center gap-2">
       <p className="text-[10px] sm:text-sm leading-snug max-w-[90%] text-white">
  {language === "nl"
    ? "Let op! U belegt buiten toezicht van de AFM (Autoriteit Financiële Markten). Voor deze activiteit geldt geen vergunnings- of prospectusplicht."
    : "Attention! You are investing outside the supervision of the AFM (Authority for the Financial Markets). There is no requirement for licensing or prospectus for this activity."}
</p>

        <img
          src={images.landingPage.Afm_disclaimer}
          alt="AFM Notice Icon"
          className="h-4 sm:h-5"
        />
      </div>

    <nav
      className={`fixed top-[45px] sm:top-[30px] w-full bg-[#eef4f5cc] backdrop-blur-md border-b
     border-white z-50 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="flex-shrink-0">
          <img
            src={images.landingPage.EdgeCapitalLogoSVG}
            alt="Edge Capital"
            className="w-[202px] h-[54px] "
          />
        </Link>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ${
            isNavActive ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="flex-shrink-0">
              <Link to="/" onClick={toggleNav}>
                <img
                  src={images.landingPage.EdgeCapitalLogoSVG}
                  alt="Edge Capital"
                  className="w-[202px] h-[54px]"
                />
              </Link>
            </div>
            <button className="text-2xl text-black" onClick={toggleNav}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-70px)]">
            <ul className="px-4">
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  {t("home")}
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(1, e)}
                >
                  {t("aboutUs")}
                  <FontAwesomeIcon
                    icon={activeDropdowns[1] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[1] && (
                  <ul className="ml-4 mt-2">
                    <li className="py-2">
                      <Link
                        to="/about"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("about")}
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/team"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("team")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/edge-fund"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  {t("edgeFund")}
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(2, e)}
                >
                  {t("edgeImpact")}
                  <FontAwesomeIcon
                    icon={activeDropdowns[2] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[2] && (
                  <ul className="ml-4 mt-2">
                    {/* <li className="py-2">
                      <Link
                        to="/edge-connect"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("edgeConnect")}
                      </Link>
                    </li> */}
                    <li className="py-2">
                      <Link
                        to="/edge-cares"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("edgeCares")}
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/edge-foundation"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("edgeHorizonFoundation")}
                      </Link>
                    </li>
                    <li className="py-2">
                      <Link
                        to="/edge-capitla-csr"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("edgeCapitalCSR")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="py-4 border-b border-gray-100">
                <Link
                  to="/institutional"
                  className="text-[#192227] font-semibold block"
                  onClick={toggleNav}
                >
                  {t("institutional")}
                </Link>
              </li>
              <li className="py-4 border-b border-gray-100">
                <a
                  href="#"
                  className="text-[#192227] font-semibold flex justify-between items-center w-full"
                  onClick={(e) => toggleDropdown(3, e)}
                >
                  {t("company")}
                  <FontAwesomeIcon
                    icon={activeDropdowns[3] ? faChevronUp : faChevronDown}
                    className="text-xs"
                  />
                </a>
                {activeDropdowns[3] && (
                  <ul className="ml-4 mt-2">
                    <li className="py-2">
                      <Link
                        to="/contact"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("contact")}
                      </Link>
                    </li>
                    {/* <li className="py-2">
                      <Link
                        to="/media"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("media")}
                      </Link>
                    </li> */}
                    {/* <li className="py-2">
                      <Link
                        to="/documents"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("documents")}
                      </Link>
                    </li> */}
                    <li className="py-2">
                      <Link
                        to="/careers"
                        className="block text-[#192227]"
                        onClick={toggleNav}
                      >
                        {t("careers")}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>

            <div className="px-4 py-6 border-t border-gray-100 mt-4">
              <div className="relative w-auto my-2">
                <select
                  onChange={(e) => handleSelectChange(e)}
                  name="selectLanguage"
                  id="selectLanguage"
                  className="bg-[#D4DFDF40] border-2 border-white h-auto w-full py-[.69rem]
              rounded-lg px-3 outline-none text-black appearance-none pr-10 lg:text-[18px] font-bold"
                  value={language}
                >
                  <option value="en" className="text-black">
                    {translations.en.english}
                  </option>
                  <option value="nl" className="text-black">
                    {translations.nl.dutch}
                  </option>
                </select>

                {/* Custom Dropdown Arrow */}
                <div
                  className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2
             text-black text-xl lg:mr-[.5rem]"
                >
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <img
                      src={images.landingPage.vector}
                      alt="Research team analyzing market data"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <button className="bg-[#192227] text-white rounded-md px-6 py-3 font-semibold w-full">
                <Link to="/contact">{t("contactUs")}</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-5 lg:items-center relative justify-center">
          <li>
            <Link
              to="/"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              {t("home")}
            </Link>
          </li>
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              {t("aboutUs")}
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all">
              <li className="p-3">
                <Link
                  to="/about"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/team"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("team")}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/edge-fund"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              {t("edgeFund")}
            </Link>
          </li>

          <li>
            <Link
              to="/institutional"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors"
            >
              {t("institutional")}
            </Link>
          </li>
          
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              {t("edgeImpact")}
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul
              className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0
             invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all"
            >
              {/* <li className="p-3">
                <Link
                  to="/edge-connect"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("edgeConnect")}
                </Link>
              </li> */}
              <li className="p-3">
                <Link
                  to="/edge-cares"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("edgeCares")}
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/edge-foundation"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("edgeHorizonFoundation")}
                </Link>
              </li>
              <li className="p-3">
                <Link
                  to="/edge-capitla-csr"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("edgeCapitalCSR")}
                </Link>
              </li>
            </ul>
          </li>

         
          <li className="relative group">
            <a
              href="#"
              className="text-[#192227] font-semibold hover:text-[#206A7C] transition-colors flex items-center"
            >
              {t("company")}
              <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
            </a>
            <ul className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transition-all">
              <li className="p-3">
                <Link
                  to="/contact"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("contact")}
                </Link>
              </li>
              {/* <li className="p-3">
                <Link
                  to="/media"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("media")}
                </Link>
              </li> */}
              {/* <li className="p-3">
                <Link
                  to="/documents"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("documents")}
                </Link>
              </li> */}
              <li className="p-3">
                <Link
                  to="/careers"
                  className="block text-[#192227] font-medium hover:text-[#206A7C]"
                >
                  {t("careers")}
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* Desktop Contact */}
        <div
          className="hidden lg:flex items-center border border-white rounded-[15px] 
          p-3 w-auto  relative h-[5rem] gap-8"
        >
          <div className="relative w-auto ">
            <select
              onChange={(e) => handleSelectChange(e)}
              name="selectLanguage"
              id="selectLanguage"
              className="bg-[#D4DFDF40] border-2 border-white h-auto w-auto py-[.69rem]
              rounded-2xl px-3 outline-none text-black appearance-none pr-10 lg:text-[18px] font-bold"
              value={language}
            >
              <option value="en" className="text-black">
                {translations.en.english}
              </option>
              <option value="nl" className="text-black">
                {translations.nl.dutch}
              </option>
            </select>

            {/* Custom Dropdown Arrow */}
            <div
              className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2
             text-black text-xl lg:mr-[.5rem]"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={images.landingPage.vector}
                  alt="Research team analyzing market data"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <button
            className="bg-[#192227] text-white rounded-4xl px-6 py-3 font-semibold
           hover:bg-[#0e1417] transition-colors relative right-[1rem] w-auto"
          >
            <Link to="/contact">{t("contactUs")}</Link>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl cursor-pointer text-black mr-[.5rem]"
          onClick={toggleNav}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
        </>

  );
};

export default Navbar;