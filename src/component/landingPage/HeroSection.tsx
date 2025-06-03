import images from "@/constant/images";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

// Beleggen met een voorsprong!
const HeroSection = () => {
  const { language } = useChangeLanguageContext();
  return (
    <>
      {/* bg-[#EEF4F5] */}
      <section className="hero bg-[#EEF4F5]  mt-[4rem] md:h-[100vh] md:max-h-[700px]">
        <div className="container hero-container pt-[44px] sm:pt-0">
          <div className="hero-content">
            
            <h1 className="hero-title">
              {language === "en" ? "Investing" : "Beleggen met "}
              <br />
              {language === "en" ? "with An Edge" : "een voorsprong!"}
            </h1>

            <p className="hero-subtitle">
              {language === "nl"
                ? "Gebruik van dynamische, datagestuurde strategieën voor superieure rendementen met een beheerst risico."
                : "Using dynamic, data-driven strategy for superior returns with controlled risk"}
            </p>

            <ul className="hero-features">
              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.strategy} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Geavanceerde strategieën' : 'Advanced Strategies'}</span> -
                    {language === 'nl' ? ' Arbitrage en delta-neutraal voor bovengemiddelde rendementen.' : 'Arbitrage and delta-neutral for high returns.'}
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.bolt} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Op feiten gebaseerde strategieën' : 'Fact-Based Expertise'}</span> -
                    {language === 'nl' ? ' Vertrouw op zekerheden, niet op voorspellingen.' : 'Rely on certainties, not predictions.'}
                  </p>
                </div>
              </li>

              <li className="hero-feature">
                <div className="feature-icon">
                  <img src={images.landingPage.management} alt="Custom Icon" />
                </div>

                <div className="feature-text">
                  <p>
                    <span className="bold-text">{language === 'nl' ? 'Beheerd risico' : 'Managed Risk'}</span>
                    { language === 'nl' ? ' - Beheerst risico voor grootschalige investeringen.' : '- Controlled risk for large-scale investments.'}
                  </p>
                </div>
              </li>
            </ul>

            <div className="hero-buttons ">
              <button className="btn btn-primary">
                <Link
                  to="/contact"
                  className="block "
                  // onClick={toggleNav}
                >
                  { language === 'nl' ? 'Neem contact op' : 'Get in Touch'}
                </Link>
              </button>
              <button
                // onClick={()=> window.open('/requestinfo','_blank')}
                className="btn btn-secondary"
              >
                <Link to="/requestinfo">{ language === 'nl' ? 'Brochure aanvragen' : 'Request Brochure'}</Link>
              </button>
            </div>
          </div>

          <div className="hero-image">
            <video
              autoPlay
              loop
              muted
              playsInline
              src={images.landingPage.heroSectionVideo}
              className="w-full h-full  object-cover opacity-75"
            />
            {/* <img
              src={images.landingPage.heroSection}
              alt="Investment Illustration"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

//  {images.landingPage.strategy}
//  {images.landingPage.bolt}
//  {images.landingPage.management}
//  src={images.landingPage.heroSection}
