import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/constant/images";
import { useChangeLanguageContext } from "@/context/ChangeLanguage";

// Define types for document data
interface DocumentItem {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  category: CategoryType;
  pdf: string;
}

type CategoryType = "fund" | "bond" | "privacy";
type IconType =
  | "document"
  | "person"
  | "discount_email"
  | "form_submission"
  | "security";
type DocumentCategory = "all" | "fund" | "bond" | "privacy";

interface Documents {
  all: DocumentItem[];
  fund: DocumentItem[];
  bond: DocumentItem[];
  privacy: DocumentItem[];
}

// Icons component
const Icon = ({ type, imageAlt }: { type: IconType; imageAlt: string }) => {
  switch (type) {
    case "document":
      return (
        <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.document}
            alt={imageAlt}
            className="w-[70%] h-[70%] object-cover"
          />
        </div>
      );
    case "person":
      return (
        <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.person}
            alt={imageAlt}
            className="w-[60%] h-[60%] object-cover"
          />
        </div>
      );
    case "discount_email":
      return (
        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.discount_email}
            alt={imageAlt}
            className="w-[60%] h-[60%] object-cover"
          />
        </div>
      );
    case "form_submission":
      return (
        <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.form_submission}
            alt={imageAlt}
            className="w-[70%] h-[70%] object-cover"
          />
        </div>
      );
    case "security":
      return (
        <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.security}
            alt={imageAlt}
            className="w-[60%] h-[60%] object-cover"
          />
        </div>
      );
    default:
      return (
        <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center">
          <img
            src={images.edgeDoc.document}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      );
  }
};

// Document Card component
const DocumentCard = ({
  document,
  downloadLabel,
  imageAlt,
}: {
  document: DocumentItem;
  downloadLabel: string;
  imageAlt: string;
}) => {

  const { language } = useChangeLanguageContext();

  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-4 
      relative ${language === 'nl' ? 'lg:h-[20rem] ' : 'lg:h-[19rem] '}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0">
        <Icon type={document.icon} imageAlt={imageAlt} />
      </div>

      <div className="mt-5">
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          {document.title}
        </h3>
        <p className="text-sm text-gray-600 leading-snug whitespace-normal break-words">
          {document.description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4 lg:absolute lg:bottom-6 lg:left-6 lg:right-6">
        <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
          PDF
        </span>
        <a
          href={document.pdf}
          target="_blank"
          className="flex items-center text-sm text-gray-700 hover:text-blue-600"
          aria-label={`${downloadLabel} ${document.title}`}
        >
          <div className="flex-shrink-0 flex items-center justify-center">
            <img
              src={images.form.download}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>{" "}
          {downloadLabel}
        </a>
      </div>
    </motion.div>
  );
};

// Main component
const DocumentCardSections = () => {
  const { language } = useChangeLanguageContext();
  const [activeTab, setActiveTab] = useState<DocumentCategory>("all");

  // Define translations for English and Dutch
  const translations = {
    en: {
      heading: "Edge Documents",
      tabs: [
        { id: "all", label: "All Documents" },
        { id: "fund", label: "Fund Documents" },
        { id: "bond", label: "Bond Documents" },
        { id: "privacy", label: "Privacy & Legal" },
      ],
      documents: {
        all: [
          {
            id: "edgefund-kid",
            title: "EdgeFund KID",
            description:
              "Key investor information document with all the essential details about EdgeFund investment opportunities and risk factors.",
            icon: "document",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/001_-EDGECAPITAL_EdgeFund_EID.pdf",
          },
          {
            id: "subscription-natural",
            title: "Subscription Forms (Natural Persons)",
            description:
              "Complete subscription forms for individual investors looking to participate in EdgeFund opportunities.",
            icon: "person",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "subscription-bvs",
            title: "Subscription Forms (BVs)",
            description:
              "Subscription forms for private limited companies (BVs) interested in EdgeFund investment opportunities.",
            icon: "discount_email",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edgefund-change",
            title: "EdgeFund Change Form",
            description:
              "Update your EdgeFund account details, investment preferences, or personal information with this change form.",
            icon: "form_submission",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/004_EDGECAPITAL_Obligatie_III_EID.pdf",
          },
          {
            id: "edge-capital-kid",
            title: "Edge Capital KID",
            description:
              "Key investor information document outlining all essential details about Edge Capital Bond offerings.",
            icon: "document",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/005_EDGECAPITAL_Obligatie_III_-Natuurlijk_persoon.pdf",
          },
          {
            id: "bond-subscription-natural",
            title: "Bond Subscription (Natural Persons)",
            description:
              "Complete subscription forms for individual investors interested in Edge Capital Bond opportunities.",
            icon: "person",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/006_EDGECAPITAL_Obligatie_III_Rechtspersoon.pdf",
          },
          {
            id: "bond-subscription-bvs",
            title: "Bond Subscription (BVs)",
            description:
              "Subscription forms for private limited companies (BVs) interested in Edge Capital Bond investments.",
            icon: "discount_email",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/007_EDGECAPITAL_Privacy_en_Cookies_Policy.pdf",
          },
          {
            id: "privacy-cookies",
            title: "Privacy and Cookies Policy",
            description:
              "Comprehensive overview of how Edge Capital handles your personal data and information privacy.",
            icon: "security",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/008_EDGECAPITAL_Cookies.pdf",
          },
          {
            id: "data-rights",
            title: "Data and Rights",
            description:
              "Information about your rights regarding your personal data and how to exercise those rights with Edge Capital.",
            icon: "discount_email",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/009_EDGECAPITAL_Persoonsgegevens_en_uw_rechten.pdf",
          },
        ],
        fund: [
          {
            id: "subscription-natural",
            title: "Subscription Forms (Natural Persons)",
            description:
              "Complete subscription forms for individual investors looking to participate in EdgeFund opportunities.",
            icon: "person",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "subscription-bvs",
            title: "Subscription Forms (BVs)",
            description:
              "Subscription forms for private limited companies (BVs) interested in EdgeFund investment opportunities.",
            icon: "discount_email",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edgefund-kid",
            title: "EdgeFund KID",
            description:
              "Key investor information document with all the essential details about EdgeFund investment opportunities and risk factors.",
            icon: "document",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/001_-EDGECAPITAL_EdgeFund_EID.pdf",
          },
          {
            id: "edgefund-change",
            title: "EdgeFund Change Form",
            description:
              "Update your EdgeFund account details, investment preferences, or personal information with this change form.",
            icon: "form_submission",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/004_EDGECAPITAL_Obligatie_III_EID.pdf",
          },
        ],
        bond: [
          {
            id: "bond-subscription-natural",
            title: "Bond Subscription (Natural Persons)",
            description:
              "Complete subscription forms for individual investors interested in Edge Capital Bond opportunities.",
            icon: "person",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "bond-subscription-bvs",
            title: "Bond Subscription (BVs)",
            description:
              "Subscription forms for private limited companies (BVs) interested in Edge Capital Bond investments.",
            icon: "discount_email",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edge-capital-kid",
            title: "Edge Capital KID",
            description:
              "Key investor information document outlining all essential details about Edge Capital Bond offerings.",
            icon: "document",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/005_EDGECAPITAL_Obligatie_III_-Natuurlijk_persoon.pdf",
          },
        ],
        privacy: [
          {
            id: "privacy-cookies",
            title: "Privacy and Cookies Policy",
            description:
              "Comprehensive overview of how Edge Capital handles your personal data and information privacy.",
            icon: "security",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/008_EDGECAPITAL_Cookies.pdf",
          },
          {
            id: "data-rights",
            title: "Data and Rights",
            description:
              "Information about your rights regarding your personal data and how to exercise those rights with Edge Capital.",
            icon: "discount_email",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/009_EDGECAPITAL_Persoonsgegevens_en_uw_rechten.pdf",
          },
        ],
      },
      downloadLabel: "Download",
      imageAlt: "Research team analyzing market data",
    },
    nl: {
      heading: "Edge Documenten",
      tabs: [
        { id: "all", label: "Alle Documenten" },
        { id: "fund", label: "Fondsdocumenten" },
        { id: "bond", label: "Obligatiedocumenten" },
        { id: "privacy", label: "Privacy & Juridisch" },
      ],
      documents: {
        all: [
          {
            id: "edgefund-kid",
            title: "EdgeFund KID",
            description:
              "Belangrijk informatiedocument voor beleggers met alle essentiële details over EdgeFund-investeringsmogelijkheden en risicofactoren.",
            icon: "document",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/001_-EDGECAPITAL_EdgeFund_EID.pdf",
          },
          {
            id: "subscription-natural",
            title: "Inschrijfformulieren (Natuurlijke Personen)",
            description:
              "Volledige inschrijfformulieren voor individuele beleggers die willen deelnemen aan EdgeFund-mogelijkheden.",
            icon: "person",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "subscription-bvs",
            title: "Inschrijfformulieren (BVs)",
            description:
              "Inschrijfformulieren voor besloten vennootschappen (BVs) die geïnteresseerd zijn in EdgeFund-investeringsmogelijkheden.",
            icon: "discount_email",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edgefund-change",
            title: "EdgeFund Wijzigingsformulier",
            description:
              "Werk uw EdgeFund-accountgegevens, investeringsvoorkeuren of persoonlijke informatie bij met dit wijzigingsformulier.",
            icon: "form_submission",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/004_EDGECAPITAL_Obligatie_III_EID.pdf",
          },
          {
            id: "edge-capital-kid",
            title: "Edge Capital KID",
            description:
              "Belangrijk informatiedocument voor beleggers met alle essentiële details over Edge Capital-obligatieaanbiedingen.",
            icon: "document",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/005_EDGECAPITAL_Obligatie_III_-Natuurlijk_persoon.pdf",
          },
          {
            id: "bond-subscription-natural",
            title: "Obligatie-inschrijving (Natuurlijke Personen)",
            description:
              "Volledige inschrijfformulieren voor individuele beleggers die geïnteresseerd zijn in Edge Capital-obligatiemogelijkheden.",
            icon: "person",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/006_EDGECAPITAL_Obligatie_III_Rechtspersoon.pdf",
          },
          {
            id: "bond-subscription-bvs",
            title: "Obligatie-inschrijving (BVs)",
            description:
              "Inschrijfformulieren voor besloten vennootschappen (BVs) die geïnteresseerd zijn in Edge Capital-obligatie-investeringen.",
            icon: "discount_email",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/007_EDGECAPITAL_Privacy_en_Cookies_Policy.pdf",
          },
          {
            id: "privacy-cookies",
            title: "Privacy- en Cookiesbeleid",
            description:
              "Uitgebreid overzicht van hoe Edge Capital omgaat met uw persoonlijke gegevens en informatieprivacy.",
            icon: "security",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/008_EDGECAPITAL_Cookies.pdf",
          },
          {
            id: "data-rights",
            title: "Gegevens en Rechten",
            description:
              "Informatie over uw rechten met betrekking tot uw persoonlijke gegevens en hoe u deze rechten kunt uitoefenen bij Edge Capital.",
            icon: "discount_email",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/009_EDGECAPITAL_Persoonsgegevens_en_uw_rechten.pdf",
          },
        ],
        fund: [
          {
            id: "subscription-natural",
            title: "Inschrijfformulieren (Natuurlijke Personen)",
            description:
              "Volledige inschrijfformulieren voor individuele beleggers die willen deelnemen aan EdgeFund-mogelijkheden.",
            icon: "person",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "subscription-bvs",
            title: "Inschrijfformulieren (BVs)",
            description:
              "Inschrijfformulieren voor besloten vennootschappen (BVs) die geïnteresseerd zijn in EdgeFund-investeringsmogelijkheden.",
            icon: "discount_email",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edgefund-kid",
            title: "EdgeFund KID",
            description:
              "Belangrijk informatiedocument voor beleggers met alle essentiële details over EdgeFund-investeringsmogelijkheden en risicofactoren.",
            icon: "document",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/001_-EDGECAPITAL_EdgeFund_EID.pdf",
          },
          {
            id: "edgefund-change",
            title: "EdgeFund Wijzigingsformulier",
            description:
              "Werk uw EdgeFund-accountgegevens, investeringsvoorkeuren of persoonlijke informatie bij met dit wijzigingsformulier.",
            icon: "form_submission",
            category: "fund",
            pdf: "https://edge-capital.nl/media/2023/05/004_EDGECAPITAL_Obligatie_III_EID.pdf",
          },
        ],
        bond: [
          {
            id: "bond-subscription-natural",
            title: "Obligatie-inschrijving (Natuurlijke Personen)",
            description:
              "Volledige inschrijfformulieren voor individuele beleggers die geïnteresseerd zijn in Edge Capital-obligatiemogelijkheden.",
            icon: "person",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/002_EDGECAPITAL_Inschrijfformulier_-Natuurlijkpersoon.pdf",
          },
          {
            id: "bond-subscription-bvs",
            title: "Obligatie-inschrijving (BVs)",
            description:
              "Inschrijfformulieren voor besloten vennootschappen (BVs) die geïnteresseerd zijn in Edge Capital-obligatie-investeringen.",
            icon: "discount_email",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/003_EDGECAPITAL_Inschrijfformulier_Rechtspersoon.pdf",
          },
          {
            id: "edge-capital-kid",
            title: "Edge Capital KID",
            description:
              "Belangrijk informatiedocument voor beleggers met alle essentiële details over Edge Capital-obligatieaanbiedingen.",
            icon: "document",
            category: "bond",
            pdf: "https://edge-capital.nl/media/2023/05/005_EDGECAPITAL_Obligatie_III_-Natuurlijk_persoon.pdf",
          },
        ],
        privacy: [
          {
            id: "privacy-cookies",
            title: "Privacy- en Cookiesbeleid",
            description:
              "Uitgebreid overzicht van hoe Edge Capital omgaat met uw persoonlijke gegevens en informatieprivacy.",
            icon: "security",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/008_EDGECAPITAL_Cookies.pdf",
          },
          {
            id: "data-rights",
            title: "Gegevens en Rechten",
            description:
              "Informatie over uw rechten met betrekking tot uw persoonlijke gegevens en hoe u deze rechten kunt uitoefenen bij Edge Capital.",
            icon: "discount_email",
            category: "privacy",
            pdf: "https://edge-capital.nl/media/2023/05/009_EDGECAPITAL_Persoonsgegevens_en_uw_rechten.pdf",
          },
        ],
      },
      downloadLabel: "Downloaden",
      imageAlt: "Onderzoeksteam dat marktgegevens analyseert",
    },
  };

  // Select the appropriate content based on language, with fallback to English
  const content = translations[language] || translations.en;
  const documents: Documents = {
    all: content.documents.all.map((doc) => ({
      ...doc,
      icon: doc.icon as IconType,
      category: doc.category as CategoryType,
    })),
    fund: content.documents.fund.map((doc) => ({
      ...doc,
      icon: doc.icon as IconType,
      category: doc.category as CategoryType,
    })),
    bond: content.documents.bond.map((doc) => ({
      ...doc,
      icon: doc.icon as IconType,
      category: doc.category as CategoryType,
    })),
    privacy: content.documents.privacy.map((doc) => ({
      ...doc,
      icon: doc.icon as IconType,
      category: doc.category as CategoryType,
    })),
  };
  const tabs = content.tabs;

  return (
    <section
      className="py-8 w-full max-w-7xl mx-auto px-4 md:px-8 bg-[#F8F9FA]"
      aria-labelledby="documents-heading"
    >
      <h2 id="documents-heading" className="sr-only">
        {content.heading}
      </h2>

      {/* Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-6 scrollbar-hide">
        <div className="inline-flex bg-[#F1F5F9] p-1 rounded-lg min-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as DocumentCategory)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors flex-1 whitespace-nowrap ${activeTab === tab.id
                  ? "bg-white shadow-md text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
                }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Document Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {documents[activeTab].map((doc) => (
            <motion.div
              key={doc.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DocumentCard
                document={doc}
                downloadLabel={content.downloadLabel}
                imageAlt={content.imageAlt}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default DocumentCardSections;