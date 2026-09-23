import {
  brand,
  contact,
  services,
  expertise,
  serviceKeywords,
} from "../data/content";
import personPhoto from "../assets/kapilesh-cutout.jpg";
import brandLogo from "../assets/kapilesh-brand-card.jpg";

const sameAs = [contact.linkedin, contact.instagram, contact.youtube];
const keywords = serviceKeywords.join(", ");

const founder = {
  "@type": "Person",
  name: "Kapilesh",
};

const address = {
  "@type": "PostalAddress",
  addressLocality: contact.city,
  addressRegion: contact.region,
  addressCountry: contact.country,
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: brand.siteUrl,
  slogan: brand.tagline,
  description: brand.positioning,
  email: contact.email,
  telephone: contact.phoneDisplay,
  logo: `${brand.siteUrl}${brandLogo}`,
  address,
  keywords,
  founder,
  sameAs,
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kapilesh",
  jobTitle: "Learning & Development and Organisational Capability Consultant",
  worksFor: { "@type": "Organization", name: brand.name },
  url: `${brand.siteUrl}/about`,
  image: `${brand.siteUrl}${personPhoto}`,
  knowsAbout: [...expertise, ...serviceKeywords],
  sameAs,
};

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Consulting Solutions",
  itemListElement: services.map((service, i) => ({
    "@type": "Offer",
    position: i + 1,
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.summary,
    },
  })),
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  description: brand.positioning,
  url: brand.siteUrl,
  email: contact.email,
  telephone: contact.phoneDisplay,
  address,
  areaServed: "IN",
  keywords,
  founder,
  hasOfferCatalog: offerCatalog,
};

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${brand.siteUrl}${item.path}`,
    })),
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
