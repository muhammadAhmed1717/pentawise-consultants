// All editable copy and settings for the home page live here.

export const site = {
  name: "Pentawise Consultants",
  phoneDisplay: "+92 331 7922227",
  phoneHref: "tel:+923317922227",
  whatsappHref: "https://wa.me/923317922227",
  email: "info.pentawise@gmail.com",
  socials: {
    instagram: "#", // TODO: add the Instagram profile URL
    linkedin: "#", // TODO: add the LinkedIn page URL
    facebook: "#", // TODO: add the Facebook page URL
  },
  /**
   * The service descriptions are drawn as SVG so they match the approved
   * design pixel-for-pixel (Century Gothic). The real text is always in the
   * HTML for SEO and screen readers. If you license Century Gothic as a web
   * font, set this to true to render the descriptions as live text instead.
   */
  liveServiceText: false,
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Countries", href: "#countries" },
  { label: "Universities", href: "#universities" },
  { label: "Contact Us", href: "#contact" },
];

export const hero = {
  trustedBy: "Trusted by 1000s of students",
  title: "Vibing Your Way To Global Campuses",
  intro:
    "Pentawise is your trusted study abroad partner, guiding you to top universities across 20+ countries. From choosing the right course to securing your visa, we make global education simple, personal and full of possibilities.",
};

export const stats = [
  { value: 20, suffix: "+", label: "Countries" },
  { value: 500, suffix: "+", label: "Partner Universities" },
  { value: 50000, suffix: "+", label: "Courses Available" },
  { value: 10, suffix: "+", label: "Years of Experience" },
];

export type Service = {
  title: string;
  text: string;
  icon: string;
  textSvg: { src: string; width: number; height: number };
  textSvgCentered: { src: string; width: number; height: number };
};

export const services: Service[] = [
  {
    title: "Career Counselling",
    text: "Our expert advisors help you understand your strengths, interests, and academic goals. We provide one-on-one guidance to choose the right study path and career direction, ensuring every decision aligns with your long-term ambitions.",
    icon: "/svg/service-1-icon.svg",
    textSvg: { src: "/svg/service-1-text.svg", width: 368.6, height: 129.2 },
    textSvgCentered: { src: "/svg/service-1-text-centered.svg", width: 367.9, height: 129.2 },
  },
  {
    title: "Find Your Fit",
    text: "We assist you in selecting the ideal course, university, and destination that match your profile and aspirations. With insights from our global partner network across 20+ countries, you’ll find an academic environment where you can truly thrive.",
    icon: "/svg/service-2-icon.svg",
    textSvg: { src: "/svg/service-2-text.svg", width: 345.7, height: 151 },
    textSvgCentered: { src: "/svg/service-2-text-centered.svg", width: 345.5, height: 151 },
  },
  {
    title: "Scholarship Support",
    text: "Pentawise helps you explore and apply for scholarships that match your eligibility. From identifying opportunities to refining applications and essays, our team maximizes your chances of receiving financial aid.",
    icon: "/svg/service-3-icon.svg",
    textSvg: { src: "/svg/service-3-text.svg", width: 361.3, height: 125.8 },
    textSvgCentered: { src: "/svg/service-3-text-centered.svg", width: 361.3, height: 125.8 },
  },
  {
    title: "Document Support",
    text: "Navigating paperwork can be overwhelming; we make it effortless. Our consultants review and organize your academic, financial, and identity documents to ensure accuracy and compliance with university and visa requirements.",
    icon: "/svg/service-4-icon.svg",
    textSvg: { src: "/svg/service-4-text.svg", width: 354.1, height: 151 },
    textSvgCentered: { src: "/svg/service-4-text-centered.svg", width: 354.1, height: 151 },
  },
  {
    title: "Visa Support",
    text: "Our visa experts provide personalized, step-by-step guidance for your student visa application. We help you prepare documents, schedule interviews, and meet all requirements, making your visa process smooth, stress-free, and successful.",
    icon: "/svg/service-5-icon.svg",
    textSvg: { src: "/svg/service-5-text.svg", width: 345.4, height: 147.8 },
    textSvgCentered: { src: "/svg/service-5-text-centered.svg", width: 344.5, height: 147.8 },
  },
  {
    title: "Travel Guidance",
    text: "We prepare you for life abroad with detailed pre-departure sessions covering travel, accommodation, cultural adaptation, and essential checklists, ensuring you feel confident and ready from day one at your new university.",
    icon: "/svg/service-6-icon.svg",
    textSvg: { src: "/svg/service-6-text.svg", width: 355.7, height: 129 },
    textSvgCentered: { src: "/svg/service-6-text-centered.svg", width: 355.4, height: 129 },
  },
];

export const stories = [
  { image: "/images/stories/hungary.webp", alt: "Master’s student visa approved for Hungary (University of Debrecen)" },
  { image: "/images/stories/malaysia.webp", alt: "Bachelor’s student visa approved for Malaysia" },
  { image: "/images/stories/france-bachelors.webp", alt: "Bachelor’s student visa approved for France" },
  { image: "/images/stories/france-masters.webp", alt: "Master’s student visa approved for France" },
  { image: "/images/stories/ireland.webp", alt: "Master’s student visa approved for Ireland" },
];

/** Options for the “Desired Country” field (alphabetical). */
export const countries = [
  "Australia", "Canada", "Cyprus", "Finland", "France", "Germany", "Hungary", "Ireland", "Malaysia",
  "Malta", "New Zealand", "Poland", "Spain", "Sweden", "Turkey", "UAE", "UK", "USA",
];

/** Footer: three columns of six countries, in the order of the approved design. */
export const footerCountryColumns = [
  ["Malta", "Cyprus", "Spain", "New Zealand", "Ireland", "Finland"],
  ["Poland", "Hungary", "USA", "UK", "Australia", "Germany"],
  ["Turkey", "UAE", "Canada", "Malaysia", "Sweden", "France"],
];

export const footerCompanyLinks = [
  { label: "Home", href: "#top" },
  { label: "Countries", href: "#countries" },
  { label: "Services", href: "#services" },
  { label: "Universities", href: "#universities" },
  { label: "Contact Us", href: "#contact" },
];

export const faqs = [
  {
    q: "How do I start my study abroad process with Pentawise?",
    a: "Simply book a free consultation with our experts. We’ll assess your goals, help you choose the right country and university, and guide you through the next steps.",
  },
  {
    q: "Which countries can I apply to through Pentawise?",
    a: "We guide students to top universities across 20+ countries, including the UK, USA, Canada, Australia, Germany, France, Ireland, New Zealand, Malaysia and more. See the full list under Countries.",
  },
  {
    q: "Do you help with scholarships?",
    a: "Yes. Pentawise helps you explore and apply for scholarships that match your eligibility. From identifying opportunities to refining applications and essays, our team maximizes your chances of receiving financial aid.",
  },
  {
    q: "What documents do I need to apply?",
    a: "Typically your academic, financial and identity documents. Our consultants review and organize them to ensure accuracy and compliance with university and visa requirements for your chosen country.",
  },
];
