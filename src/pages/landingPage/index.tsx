import Footer from "@/common/Footer";
import NavBar from "@/common/NavBar";
import TeamMemberCards from "@/common/TeamMemberCards";
import Contact from "@/component/landingPage/Contact";
import EdgeCapital from "@/component/landingPage/EdgeCapital";
import HeroSection from "@/component/landingPage/HeroSection";
import Marquee from "@/component/landingPage/Marquee";
import Presentation from "@/component/landingPage/Presentation";
import HomepageVideo from "@/component/landingPage/HomepageVideo";

// import TheTeamYouCanTrust from "@/component/landingPage/TheTeamYouCanTrust";
import WhyEdgeCapital from "@/component/landingPage/WhyEdgeCapital";
// import OurHistory from "@/component/About/OurHistory";
import { theTeamYouCanTrustData, theTeamYouCanTrustDataDutch } from "@/constant/data";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";



const LandingPage = () => {
  const { language } = useChangeLanguageContext();
  return (
    <>
      <div>
        <NavBar />
        <div
          style={{
            maxWidth: "1550px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <HeroSection />
          <Marquee speed={15} />
          <EdgeCapital />
          <WhyEdgeCapital />
          <TeamMemberCards 
          teamMembers={language === 'nl' ? theTeamYouCanTrustDataDutch : theTeamYouCanTrustData} />
          <HomepageVideo />

          <Presentation />
          <Contact />
        <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
