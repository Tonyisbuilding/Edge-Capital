import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import About from "./pages/About";
import Teams from "./pages/Teams";
import EdgeFund from "./pages/EdgeFund";
import EdgeConnect from "./pages/EdgeConnect";
import EdgeCapitalCSR from "./pages/EdgeCapitalCSR";
import Institutional from "./pages/Institutional";
import Careers from "./pages/Careers";
import EdgeDoc from "./pages/EdgeDoc";
import ContactPage from "./pages/Contact";
import EdgeHorizon from "./pages/EdgeHorizon";
import EdgeCare from "./pages/EdgeCare";
import ScrollToTop from "./common/ScrollToTop";
import ParticipateForm from "./pages/ParticipateForm/ParticipateForm";
import RequestInfo from "./pages/RequestInfo";
import { ChangeLanguageProvider } from "./context/ChangeLanguage"; // ✅ Correct import
import { useEffect, useState } from "react";
import ScrollToTopButton from './ScrollToTopButton';
import PrivacyPolicy from "./pages/Privacy";



declare global {
  interface Window {
    _lc?: any;
    __lc?: any;
    LiveChatWidget?: any;
  }
}

function App(): JSX.Element {
  // ✅ LiveChat integration
 // ✅ LiveChat integration
  useEffect(() => {
    window._lc = window._lc || {};
    window.__lc = {
      license: 15336711,
      integration_name: "manual_channels",
      product_name: "livechat",
    };
    (function(n, t, c) {
      function i(n: any) {
        return e.h ? e._h.apply(null, n) : e._q.push(n);
      }
      const e: any = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () { i(["on", c.call(arguments)]) },
        once: function () { i(["once", c.call(arguments)]) },
        off: function () { i(["off", c.call(arguments)]) },
        get: function () {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function () { i(["call", c.call(arguments)]) },
        init: function () {
          const n = t.createElement("script");
          n.async = true;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        }
      };
      if (!n._lc?.asyncInit) e.init();
      n.LiveChatWidget = n.LiveChatWidget || e;
    })(window, document, [].slice);
  }, []);
//   return (
//     <>
//     <ChangeLanguageContext.Provider
//     value={{
//       language,
//       setLanguage,
//     }}
//     > 
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/team" element={<Teams />} />
//         <Route path="/edge-fund" element={<EdgeFund />} />
//         <Route path="/edge-connect" element={<EdgeConnect />} />
//         <Route path="/edge-capitla-csr" element={<EdgeCapitalCSR />} />
//         <Route path="/institutional" element={<Institutional />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/documents" element={<EdgeDoc />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/edge-foundation" element={<EdgeHorizon />} />
//         <Route path="/edge-cares" element={<EdgeCare />} />
//         <Route path="/participate" element={<ParticipateForm />} />
//         <Route path="/requestinfo" element={<RequestInfo />} />
//         <Route path="/privacy" element={<PrivacyPolicy />} />
//       </Routes>
//     </ChangeLanguageContext.Provider>
//     <ScrollToTopButton />
//     </>
//   );
// }


  return (
    <ChangeLanguageProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/edge-fund" element={<EdgeFund />} />
        <Route path="/edge-connect" element={<EdgeConnect />} />
        <Route path="/edge-capitla-csr" element={<EdgeCapitalCSR />} />
        <Route path="/institutional" element={<Institutional />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/documents" element={<EdgeDoc />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/edge-foundation" element={<EdgeHorizon />} />
        <Route path="/edge-cares" element={<EdgeCare />} />
        <Route path="/participate" element={<ParticipateForm />} />
        <Route path="/requestinfo" element={<RequestInfo />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <ScrollToTopButton />
    </ChangeLanguageProvider>
  );
}

export default App;




