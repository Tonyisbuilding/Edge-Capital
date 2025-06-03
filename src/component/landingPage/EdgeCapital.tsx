import "./component.css";
import React, { useEffect, useRef } from "react";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

const EdgeCapital: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { language } = useChangeLanguageContext();

  useEffect(() => {
    if (!containerRef.current) return;

    const wordSpans =
      containerRef.current.querySelectorAll<HTMLSpanElement>(".word-span");
    if (!wordSpans.length) return;

    const options: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "-20% 0px -20% 0px", // Adjust trigger zone as needed
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else if (
          entry.boundingClientRect.top > (entry.rootBounds?.top || 0)
        ) {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    wordSpans.forEach((word) => observer.observe(word));

    return () => {
      wordSpans.forEach((word) => observer.unobserve(word));
    };
  }, []);

  const originalText = `${
    language === "en"
       ? '"At Edge Capital, we believe in a different approach to investing. We are not guided by fundamental or technical analyses, which often lead to inaccurate predictions. It is widely known that 4 out of 5 traditional investment funds underperform the index they aim to beat over the long term. Instead of traditional methods, we use Quantitative trading systems based on predetermined parameters such as interest rates and option premiums. We mitigate risks by hedging all positions. We apply our strategies across various markets, including the options and futures markets."'
      : "Bij Edge Capital geloven we in een andere benadering van beleggen. We laten ons niet leiden door fundamentele of technische analyses die vaak tot onnauwkeurige voorspellingen kunnen leiden. Algemeen bekend is dat 4 op de 5 traditionele beleggingsfondsen op lange termijn achterblijven op de index die zij proberen te verslaan. In plaats van traditionele methodes maken wij met onze kwantitatieve handelssystemen gebruik van parameters die van tevoren vaststaan, zoals rentetarieven en optiepremies.We beperken de risico’s door middel van het afdekken van alle posities (hedging). We passen onze strategieën toe op verschillende markten zoals de optie en futuremarkt."
  }`;


  const words = originalText.split(/\s+/);

  return (
    <section className={`about-txt bg-[#EEF4F5]  h-fit-content py-[3.5rem]  
      ${ language === 'en' ? 'lg:h-auto lg:py-[2rem] lg:max-h-none pb-[23rem] ' : 
        ' lg:h-auto lg:pb-[5rem] md:pb-[27rem] pb-[35rem]'}    
    relative `}>
<div 
  ref={containerRef}
  className="scroll-text-container h-auto w-full max-w-[90rem] mx-auto px-6"
>
        {words.map((word, index) => (
          <span key={index} className="word-span">
            {word}
            {index < words.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </section>
  );
};

export default EdgeCapital;

// import "./component.css";
// import React, { useEffect, useRef } from "react";

// // Define props interface (even if empty) for better type consistency
// interface EdgeCapitalProps {}

// // Use explicit typing for the component
// const EdgeCapital: React.FC<EdgeCapitalProps> = () => {
//   // Type the ref explicitly
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Type guard for ref
//     const container = containerRef.current;
//     if (!container) return;

//     // Type the NodeList with specific HTMLElement type
//     const wordSpans = container.querySelectorAll<HTMLSpanElement>(".word-span");
//     if (!wordSpans.length) return;

//     // Type the IntersectionObserver options explicitly
//     const options: IntersectionObserverInit = {
//       root: null,
//       rootMargin: "-20% 0px -20% 0px",
//       threshold: 0.5,
//     };

//     // Type the observer callback parameters
//     const observer = new IntersectionObserver(
//       (entries: IntersectionObserverEntry[]) => {
//         entries.forEach((entry: IntersectionObserverEntry) => {
//           // Type assertion for target as HTMLElement since we know these are span elements
//           const target = entry.target as HTMLElement;

//           if (entry.isIntersecting) {
//             target.classList.add("active");
//           } else if (entry.boundingClientRect.top > (entry.rootBounds?.top ?? 0)) {
//             target.classList.remove("active");
//           }
//         });
//       },
//       options
//     );

//     // Type the word spans for the observer
//     wordSpans.forEach((word: HTMLSpanElement) => observer.observe(word));

//     // Cleanup function
//     return () => {
//       wordSpans.forEach((word: HTMLSpanElement) => observer.unobserve(word));
//     };
//   }, []); // Empty dependency array is fine since we only need this effect once

//   const originalText: string =
//     "At Edge Capital, we revolutionize investing with quantitative, fact-based strategies, not traditional predictions. Using predetermined parameters like interest rates and option premiums, we mitigate risks through hedging across options and futures markets. Our diverse products, tailored for large and small investors, offer optimized risk-return profiles, giving you a market edge.";

//   // Type the words array explicitly
//   const words: string[] = originalText.split(/\s+/);

//   return (
//     <section className="about-txt">
//       <div className="scroll-text-container" ref={containerRef}>
//         {words.map((word: string, index: number) => (
//           <span key={index} className="word-span">
//             {word}
//             {index < words.length - 1 ? " " : ""}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EdgeCapital;
