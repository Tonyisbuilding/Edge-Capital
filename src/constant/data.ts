import images from "./images";
// import { ReactNode } from "react";

export interface whyEdgeCapitalType {
  icon: string;
  title: string;
  desc: string;
  id: number;
}

export interface theTeamYouCanTrustDataType {
  avatar: string;
  name: string;
  id: number;
}
export interface teamMemberCardstDataType {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
  image: string;
}
export interface timelineDataType {
  year: string;
  content: string;
}

export interface charitiesDataType {
  image: string;
  name: string;
  organization: string;
  organizationColor: string;
  description: string;
  descriptionNL?: string;
}

export const whyEdgeCapitalData: whyEdgeCapitalType[] = [
  {
    icon: images.landingPage.profit,
    title: "Stable and Profitable",
    desc: "We ensure stability through a market-neutral approach, minimizing volatility with advanced algorithms. Our goal is to provide above-average returns while maintaining acceptable risk. Your investments grow steadily with us.",
    id: 1,
  },

  {
    icon: images.landingPage.access,
    title: "Personal and Accessible",
    desc: "Gain access to elite investment strategies typically reserved for institutions. Our approach combines arbitrage, delta-neutral investing, and cutting-edge technology to deliver precision and reliability. Invest with an edge.",
    id: 3,
  },
  {
    icon: images.landingPage.handshake,
    title: "Reliability First",
    desc: "Trust is our priority. We uphold strict agreements and work with external advisors to refine our methods. This ensures accountability, transparency, and long-term relationships built on reliability.",
    id: 4,
  },

  {
    icon: images.landingPage.server,
    title: "Professional and Exclusive",
    desc: "Gain access to top-tier investment strategies, typically reserved for institutions. Our arbitrage and delta-neutral approach combines precision, craftsmanship, and cutting-edge technology—giving you an exclusive edge in investing.",
    id: 6,
  },
];
export const whyEdgeCapitalDataDutch: whyEdgeCapitalType[] = [
  {
    icon: images.landingPage.profit,
    title: "Stabiel en rendabel",
    desc: "Onze stabiliteit is gebaseerd op onze markt neutrale aanpak in al onze beleggingsproducten. Uiteraard zijn er momenten van volatiliteit maar door onze goed ingestelde algoritmes zakken wij niet door de ondergrens. Wij streven naar een bovengemiddeld rendement met een aanvaardbaar risico. Kortom, wij bieden stabiliteit en een gestage groei van uw beleggingen tegen een aanvaardbaar risico.",
    id: 1,
  },

  {
    icon: images.landingPage.access,
    title: "Persoonlijk en toegankelijk",
    desc: "Edge Capital is een onderneming met een klein team van specialisten. Wij hechten heel veel waarde aan een persoonlijke relatie met onze klanten en wij willen onze klanten ook echt kennen. Bij Edge Capital bent u geen nummer maar een partner in het beleggingsproces.",
    id: 3,
  },
  {
    icon: images.landingPage.handshake,
    title: "Betrouwbaarheid Voorop",
    desc: "Vertrouwen is onze prioriteit. We hanteren strikte afspraken en werken met externe adviseurs om onze methodes te verfijnen. Dit garandeert verantwoording, transparantie en langdurige relaties gebaseerd op betrouwbaarheid.",
    id: 4,
  },
  
  {
    icon: images.landingPage.server,
    title: "Professioneel en exclusief",
    desc: "Bij Edge Capital krijgt u toegang tot professionele beleggingsstrategieën die normaal gesproken alleen beschikbaar zijn voor institutionele beleggers. Onze methodes van arbitreren en delta neutraal beleggen vergen niet alleen vakmanschap en precisie maar ook de juiste technologie. Wij bieden u deze exclusieve mogelijkheid om zodoende te kunnen beleggen met een voorsprong.",
    id: 6,
  },
];

export const theTeamYouCanTrustData: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner and Board of Directors",
    bio: `Teagan de Groot has been the director of Edge Capital since 2021.
Teagan has years of experience in investing, as an active trader he has been involved in developing successful trading strategies. In addition, Teagan has held various management positions, and his typical helicopter view makes him extremely suitable to take on the daily management of the company.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Founder and Board of Directors",
    bio: `Paul Lamain is the founder of Edge Capital.
Before founding Edge Capital, he worked at several renowned companies, including a large online broker with global operations and a European institutional asset manager, where he gained valuable knowledge and experience. Alongside Teagan, Paul is responsible for Edge Capital's policies and is closely involved in all aspects of the company.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];

export const theTeamYouCanTrustDataDutch: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner en Raad van Bestuur",
    bio: `Teagan de Groot is sinds 2021 directeur van Edge Capital. Teagan heeft jarenlange ervaring in beleggen en was als actieve handelaar betrokken bij het ontwikkelen van succesvolle handelsstrategieën. Daarnaast bekleedde Teagan diverse managementfuncties. Dankzij zijn helikopterview is hij bij uitstek geschikt voor het dagelijks bestuur van het bedrijf.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Oprichter en Raad van Bestuur",
    bio: `Paul Lamain is de oprichter van Edge Capital. Voordat hij Edge Capital oprichtte, werkte hij bij diverse gerenommeerde bedrijven, waaronder een grote online broker met wereldwijde activiteiten en een Europese institutionele vermogensbeheerder, waar hij waardevolle kennis en ervaring opdeed. Samen met Teagan is Paul verantwoordelijk voor het beleid van Edge Capital en nauw betrokken bij alle aspecten van het bedrijf.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];


export const timelineData: timelineDataType[] = [
  {
    year: "2015",
    content:
      "Paul Lamain establishes Algorithmic Services B.V., a company specializing in developing and optimizing algorithms for financial enterprises.",
  },
  {
    year: "2016",
    content:
      "Paul Lamain changes the company's name to Tradealot B.V. and introduces a bond issuance. Tradealot focuses on launching a trading platform where investors can trade shares for a fixed low monthly fee. With this, Tradealot aims to compete with the established players in the brokerage industry and disrupt the traditional revenue model. The bond issuance is a great success and is fully subscribed within 83 days.",
  },
  {
    year: "2019",
    content:
      "In partnership with JFD Bank, Tradealot becomes the first entity in the Netherlands to introduce free stock trading, allowing investors to trade physical shares without transaction costs.",
  },
  {
    year: "2022",
    content:
      "Tradealot expands its offerings by launching Tradealot EdgeFund, its first AFM-registered investment fund. Additionally, it initiates Tradealot Bond Issuance III, further strengthening its financial product lineup.",
  },
  {
    year: "2023",
    content:
      "Tradealot rebrands as Edge Capital, a name that better reflects its mission and vision. The new identity aligns with the company’s goal of empowering investors—true to its motto: Investing with an edge!",
  },
  {
    year: "Future",
    content:
      "Edge Capital remains committed to innovation and growth. In 2024, the company will focus on obtaining a full AFM license, enabling it to serve a broader audience and compete more effectively in the investment industry.",
  },
];
export const timelineDataDutch: timelineDataType[] = [
  {
    year: "2015",
    content:
      "Paul Lamain richt Algorithmic Services B.V. op,  een bedrijf dat gespecialiseerd is in het ontwikkelen en optimaliseren van algoritmes voor financiële ondernemingen.",
  },
  {
    year: "2016",
    content:
      "Paul Lamain verandert de naam van de onderneming naar Tradealot B.V. en introduceert een obligatie-uitgifte. Tradealot richt zich op het opzetten van een handelsplatform waarop beleggers aandelen kunnen verhandelen tegen vaste lage kosten per maand. Tradealot wil hiermee de concurrentie aangaan met de gevestigde orde in het brokerlandschap en het traditionele verdienmodel doorbreken. De obligatie-uitgifte is een groot succes en binnen 83 dagen volgeschreven.",
  },
  {
    year: "2019",
    content:
      "In samenwerking met JFD Bank wordt Tradealot de eerste partij in Nederland die gratis aandelenhandel introduceert, waardoor beleggers fysieke aandelen kunnen verhandelen zonder transactiekosten.",
  },
  {
    year: "2022",
    content:
      "Tradealot breidt zijn aanbod uit met de lancering van Tradealot EdgeFund, het eerste bij de AFM geregistreerde beleggingsfonds. Daarnaast start het met Tradealot Obligatie-uitgifte III, waarmee het zijn reeks financiële producten verder vergroot.",
  },
  {
    year: "2023",
    content:
      "Tradealot veranderd haar naam in Edge Capital. De nieuwe naam sluit perfect aan bij de bedrijfsactiviteiten en weerspiegelt ons motto; Beleggen met een voorsprong!",
  },
  {
    year: "Future",
    content:
      "Ook in de aankomende jaren zal Edge Capital blijven innoveren en investeren in verdere groei van de onderneming. In de nabije toekomst komt de focus te liggen op een volledige vergunning van de AFM. De onderneming kan hierdoor een breder publiek gaan bedienen en zich zo definitief meten met de gevestigde orde binnen de industrie.",
  },
];

export const teamMembers: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner and Board of Directors",
    bio: `Teagan de Groot has been the director of Edge Capital since 2021.
Teagan has years of experience in investing, as an active trader he has been involved in developing successful trading strategies. In addition, Teagan has held various management positions, and his typical helicopter view makes him extremely suitable to take on the daily management of the company.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Founder and Board of Directors",
    bio:  `Paul Lamain is the founder of Edge Capital.
Before founding Edge Capital, he worked at several renowned companies, including a large online broker with global operations and a European institutional asset manager, where he gained valuable knowledge and experience. Alongside Teagan, Paul is responsible for Edge Capital's policies and is closely involved in all aspects of the company.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];

export const teamMembersDutch: teamMemberCardstDataType[] = [
  {
    name: "Teagan de Groot",
    position: "Partner en Raad van Bestuur",
    bio: `Teagan de Groot is sinds 2021 directeur van Edge Capital. Teagan heeft jarenlange ervaring in beleggen en was als actieve handelaar betrokken bij het ontwikkelen van succesvolle handelsstrategieën. Daarnaast bekleedde Teagan diverse managementfuncties. Dankzij zijn helikopterview is hij bij uitstek geschikt voor het dagelijks bestuur van het bedrijf.`,
    linkedin: "https://www.linkedin.com/in/teagan-de-groot-9b512616a/",
    image: images.landingPage.teagan,
  },
  {
    name: "Paul Lamain",
    position: "Oprichter en Raad van Bestuur",
    bio: `Paul Lamain is de oprichter van Edge Capital. Voordat hij Edge Capital oprichtte, werkte hij bij diverse gerenommeerde bedrijven, waaronder een grote online broker met wereldwijde activiteiten en een Europese institutionele vermogensbeheerder, waar hij waardevolle kennis en ervaring opdeed. Samen met Teagan is Paul verantwoordelijk voor het beleid van Edge Capital en nauw betrokken bij alle aspecten van het bedrijf.`,
    linkedin: "https://www.linkedin.com/in/paul-lamain-72a079135/",
    image: images.landingPage.paul,
  },
];


export const advisoryBoard: teamMemberCardstDataType[] = [
  {
    name: "Henk van der Heijden",
    position: "Advisor and Chairman of the Trust Bonds Foundation Edge Capital",
    bio: `Henk van der Heijden has 30+ years of (project) management experience, including 14 at ASML. He holds a BSc in Computer Science and an Executive MBA in Strategic Change Management. Active in crypto and startups, he’s been an investor since 2017, Chairman of the Trust Bonds Foundation since August 2022, and advisor since March 2023.`,
    linkedin: "https://www.linkedin.com/in/mvandrunen/",
    image: images.landingPage.Henk,
  },
  {
    name: "Michiel van Drunen",
    position: "Member of the Advisory Board",
    bio: `Since 2024, Michiel van Drunen has been a member of the Advisory Board of Edge Capital.
He has been active in the financial (securities) world since 1988 and has extensive experience as an entrepreneur. He serves on the advisory boards of various companies across different industries and holds several executive positions. He is also involved in various charitable organizations, including serving as a fundraiser for the FoodBank.`,
    linkedin: "https://linkedin.com/in/paullamain",
    image: images.landingPage.Michiel,
  },
];

export const advisoryBoardDutch: teamMemberCardstDataType[] = [
  {
    name: "Henk van der Heijden",
    position: "Adviseur en Voorzitter van de Trust Bonds Stichting Edge Capital",
    bio: `Henk van der Heijden heeft meer dan 30 jaar (project)managementervaring, waaronder 14 jaar bij ASML. Hij heeft een BSc in Computerwetenschappen en een Executive MBA in Strategisch Verandermanagement. Actief in crypto en startups sinds 2017, voorzitter van de Trust Bonds Stichting sinds augustus 2022 en adviseur sinds maart 2023.`,
    linkedin: "https://www.linkedin.com/in/mvandrunen/",
    image: images.landingPage.Henk,
  },
  {
    name: "Michiel van Drunen",
    position: "Lid van de Raad van Advies",
    bio: `Sinds 2024 is Michiel van Drunen lid van de Raad van Advies van Edge Capital. Hij is sinds 1988 actief in de financiële (effecten)wereld en heeft ruime ervaring als ondernemer. Hij maakt deel uit van adviesraden van diverse bedrijven in verschillende sectoren en bekleedt meerdere bestuursfuncties. Daarnaast is hij actief betrokken bij verschillende goede doelen, waaronder als fondsenwerver voor de Voedselbank.`,
    linkedin: "https://linkedin.com/in/paullamain",
    image: images.landingPage.Michiel,
  },
];


export const SupportAndCommercial: teamMemberCardstDataType[] = [
  {
    name: "Brahim Bouzerrade",
    position: "Business Development Manager",
    bio: `Brahim is responsible for identifying, developing, and realizing growth opportunities for the company. His focus is on expanding the customer base and developing strategic partnerships. With years of experience, Brahim is regarded as a seasoned sales professional within our team.`,
    linkedin: "",
    image: images.landingPage.Brahim,
  },
];

export const SupportAndCommercialDutch: teamMemberCardstDataType[] = [
  {
    name: "Brahim Bouzerrade",
    position: "Manager Business Development",
    bio: `Brahim is verantwoordelijk voor het identificeren, ontwikkelen en realiseren van groeimogelijkheden voor het bedrijf. Zijn focus ligt op het uitbreiden van de klantenkring en het ontwikkelen van strategische partnerschappen.`,
    linkedin: "", // Add if available
    image: images.landingPage.Brahim, // assuming this exists
  },
];



export const charities: charitiesDataType[] = [
  {
    image: images.edgeConnect.panda,
    name: "Pascal",
    organization: "World Wildlife Fund",
    organizationColor: "text-yellow-500",
    description: "Protects nature and the environment worldwide.",
  },
  {
    image: images.edgeConnect.hartstiching,
    name: "Henk",
    organization: "Heart Foundation",
    organizationColor: "text-yellow-500",
    description: "Supports research and treatment of heart diseases.",
  },
  {
    image: images.edgeConnect.fork,
    name: "Michiel",
    organization: "Food Bank Netherlands",
    organizationColor: "text-yellow-500",
    description: "Provides food to people in need.",
  },
  {
    image: images.edgeConnect.jant,
    name: "Paul",
    organization: "Jantje Beton",
    organizationColor: "text-yellow-500",
    description: "Ensures that children play outside more.",
  },
  {
    image: images.edgeConnect.kika,
    name: "Teagan",
    organization: "KiKa Foundation",
    organizationColor: "text-yellow-500",
    description: "Supports research into childhood cancer.",
  },
  {
    image: images.edgeConnect.clini,
    name: "Brahim",
    organization: "CliniClowns",
    organizationColor: "text-yellow-500",
    description: "Brings joy to children in hospitals and care facilities.",
  },
];

export const charitiesDutch: charitiesDataType[] = [
  {
    image: images.edgeConnect.panda,
    name: "Pascal",
    organization: "Wereld Natuur Fonds",
    organizationColor: "text-yellow-500",
    description: "Beschermt de natuur en het milieu wereldwijd.",
  },
  {
    image: images.edgeConnect.hartstiching,
    name: "Henk",
    organization: "Hartstichting",
    organizationColor: "text-yellow-500",
    description: "Ondersteunt onderzoek en behandeling van hartziekten.",
  },
  {
    image: images.edgeConnect.fork,
    name: "Michiel",
    organization: "Voedselbank Nederland",
    organizationColor: "text-yellow-500",
    description: "Voorziet mensen in nood van voedsel.",
  },
  {
    image: images.edgeConnect.jant,
    name: "Paul",
    organization: "Jantje Beton",
    organizationColor: "text-yellow-500",
    description: "Zorgt ervoor dat kinderen meer buiten spelen.",
  },
  {
    image: images.edgeConnect.kika,
    name: "Teagan",
    organization: "KiKa Stichting",
    organizationColor: "text-yellow-500",
    description: "Ondersteunt onderzoek naar kinderkanker.",
  },
  {
    image: images.edgeConnect.clini,
    name: "Brahim",
    organization: "CliniClowns",
    organizationColor: "text-yellow-500",
    description: "Brengt plezier aan zieke kinderen in ziekenhuizen en zorginstellingen.",
  },
];
