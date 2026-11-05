import { siteConfig } from "@/lib/site-config";

const SITE_URL = siteConfig.url.replace(/\/$/, "");
const BUSINESS_ID = `${SITE_URL}/#business`;

/**
 * Schema.org graph served on every page.
 *
 * The WebSite node identifies the site; the PhotographyBusiness node declares
 * the studio's NAP data, hours and service area so Google can tie the domain
 * to the local entity (and to the Google Business Profile with the same data).
 */
export function buildStructuredData() {
  const { business } = siteConfig;

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "es-ES",
    publisher: { "@id": BUSINESS_ID },
  };

  const localBusiness = {
    "@type": "PhotographyBusiness",
    "@id": BUSINESS_ID,
    name: siteConfig.name,
    alternateName: "Fresaikiwi",
    description: siteConfig.description,
    url: SITE_URL,
    logo: siteConfig.logo,
    image: siteConfig.logo,
    telephone: "+34633520862",
    email: siteConfig.email,
    priceRange: business.priceRange,
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street,
      postalCode: business.postalCode,
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    hasMap: business.mapUrl,
    openingHoursSpecification: business.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days,
      opens: slot.opens,
      closes: slot.closes,
    })),
    areaServed: [
      { "@type": "City", name: "La Vila Joiosa" },
      { "@type": "City", name: "Villajoyosa" },
      { "@type": "AdministrativeArea", name: "Alicante" },
    ],
    sameAs: [business.instagram, business.facebook],
    knowsLanguage: ["es"],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, localBusiness],
  };
}
