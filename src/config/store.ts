/**
 * Single source of truth for Luma's business facts.
 *
 * ⚠️ EDIT THESE BEFORE LAUNCH. Every value marked TODO is a real-world
 * fact only Luma can confirm — support contacts, delivery windows,
 * return terms, and legal identity. They are surfaced across the
 * storefront (contact page, policy pages, footer), so changing them here
 * changes them everywhere.
 */

export const storeConfig = {
  brandName: "Luma Socks",

  // TODO: confirm the production domain before launch. Absolute URLs in
  // metadata, the sitemap, and robots.txt are all built from this, so a
  // wrong value silently points share previews and crawlers elsewhere.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumasocks.ma",

  pricing: {
    singlePairMad: 80,
    editionMad: 235,
  },

  contact: {
    // TODO: confirm the real support inbox
    email: "hello@lumasocks.ma",
    // TODO: confirm the real support number (used for tel: links)
    phone: "+212 000 000 000",
    // TODO: confirm WhatsApp number, or set to null to hide
    whatsapp: "+212 000 000 000",
    // TODO: confirm support hours
    hours: "Monday to Friday, 9:00–18:00",
  },

  social: {
    instagram: "https://www.instagram.com/lumasocks.ma/",
    tiktok: "https://www.tiktok.com/@lumasocks.ma",
    handle: "@lumasocks.ma",
  },

  delivery: {
    feeMad: 35,
    // TODO: confirm the real delivery window with your courier
    estimate: "2–5 working days",
    areas: "All major cities in Morocco",
  },

  returns: {
    // TODO: confirm the real return window
    windowDays: 14,
    // TODO: confirm who pays return shipping
    returnShipping: "Return shipping is paid by the customer",
  },

  legal: {
    // TODO: confirm the registered company name
    entity: "Luma Socks",
    // TODO: confirm the registered business address
    address: "Casablanca, Morocco",
    lastUpdated: "July 2026",
  },
} as const;

export type StoreConfig = typeof storeConfig;
