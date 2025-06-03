import React, { useRef, useState, useEffect } from "react";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Add this import at the top


const videoSources = [images.landingPage.EC_businessclass, images.landingPage.EC_businessclass2];

const HomepageVideo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { language } = useChangeLanguageContext();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSwitch = (dir: "next" | "prev") => {
    const nextIndex =
      dir === "next"
        ? (activeIndex + 1) % videoSources.length
        : (activeIndex - 1 + videoSources.length) % videoSources.length;

    setActiveIndex(nextIndex);
    setIsPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Autoload preview
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [activeIndex]);

  // Translations
  const translations = {
    en: {
      title: "EdgeCapital in the media",
      subtitle:
        "Discover how Edge Capital is making headlines — explore media coverage and events that highlight our innovation, strategy, and people.",
      next: "Next",
      previous: "Previous",
    },
    nl: {
      title: "EdgeCapital in de Media",
      subtitle:
        "Ontdek hoe Edge Capital in het nieuws komt — bekijk mediaberichtgeving en evenementen die onze innovatie, strategie en mensen belichten.",
      next: "Volgende",
      previous: "Vorige",
    },
  };

  const t = translations[language] || translations.en;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 text-left">
      {/* Title with brush */}
      <h2
        className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-0 inline-block"
        style={{
          backgroundImage: `url(${images.landingPage.Brush})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 100%",
          backgroundSize: "contain",
          paddingBottom: "0.5rem",
        }}
      >
        {t.title}
      </h2>


      {/* Subtitle */}
      <p className="relative text-gray-600 max-w-2xl  mt-3 text-left mb-8">
        {t.subtitle}
      </p>

      {/* Video */}
      <div className="relative rounded-xl overflow-hidden max-w-7xl mx-auto">
        <video
          ref={videoRef}
          src={videoSources[activeIndex]}
          className={`w-full h-auto rounded-xl transition-all duration-300 object-cover ${isPlaying ? "blur-0" : "blur-sm"
            }`}
          controls={isPlaying}
          preload="metadata"
          // muted
          playsInline
        />

        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-Black/40 backdrop-blur-md border border-white/30 p-4 rounded-full shadow-xl transition hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => handleSwitch("prev")}
          className="bg-[#206A7C] text-white px-6 py-2 rounded-4xl hover:bg-[#42717C] transition flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          {t.previous}
        </button>
        <button
          onClick={() => handleSwitch("next")}
          className="bg-[#206A7C] text-white px-6 py-2 rounded-4xl hover:bg-[#42717C] transition flex items-center gap-2"
        >
          {t.next}
          <ArrowRight size={16} />
        </button>
      </div>

    </section>
  );
};

export default HomepageVideo;
