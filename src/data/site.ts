import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "The Piper of Dawn Guide",
  brandMark: "POD",
  gameName: "The Piper of Dawn",
  domain: "thepiperofdawn.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://thepiperofdawn.pro").replace(/\/$/, ""),
  description:
    "The Piper of Dawn guide hub: launch coverage, gameplay loop, alchemy, time-loop mechanics and platform info.",
  tagline: "Launch coverage, gameplay loop, alchemy and time-loop guidance for The Piper of Dawn.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "The Piper of Dawn Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Steam store",
      href: "https://store.steampowered.com/app/3804370",
      description: "Official Steam product page for The Piper of Dawn.",
    },
    {
      label: "SteamDB",
      href: "https://steamdb.info/app/3804370/",
      description: "Steam app metadata, builds and price history.",
    },
    {
      label: "Publisher — Bone Nail",
      href: "https://store.steampowered.com/publisher/BoneNail",
      description: "Bone Nail Steam publisher page.",
    },
  ],
  disclaimer:
    "This site is an unofficial fan guide. Game facts, release windows and pricing details are sourced from official Steam listings and may change before launch.",
};
