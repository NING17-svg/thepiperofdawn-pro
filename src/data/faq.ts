import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "what-is-this-site",
    question: "What is The Piper of Dawn Guide?",
    answer:
      "The Piper of Dawn Guide is an unofficial fan guide covering Bone Nail's 2026 Steam RPG The Piper of Dawn (AppID 3804370). All facts are anchored to the official Steam store page and Steam Community Hub as of 2026-09-25.",
    pageIds: ["home-en-US", "faq", "fixed-overview-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-official",
    question: "Is this site the official game website?",
    answer:
      "No. This is an unofficial fan guide. Official sources are the Steam store page (AppID 3804370), SteamDB, the Bone Nail publisher profile, and the Steam Community Hub for The Piper of Dawn.",
    pageIds: ["home-en-US", "faq", "fixed-overview-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-known",
    question: "When did The Piper of Dawn release?",
    answer:
      "The Piper of Dawn released worldwide on Steam on September 22, 2026 under AppID 3804370. The introductory 10% discount runs until October 6, 2026.",
    pageIds: ["fixed-release-status-en-US", "home-en-US", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-known",
    question: "Which platforms is The Piper of Dawn on?",
    answer:
      "The Piper of Dawn is single-player on Steam (AppID 3804370) as of 2026-09-25. Mac, Linux, console, and Steam Deck ports are not announced.",
    pageIds: ["fixed-platforms-en-US", "home-en-US", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guide-depth",
    question: "What does this guide cover on launch day?",
    answer:
      "This guide covers launch-day status pages (release, Steam availability, system requirements, platforms, languages, price), mechanics guides (gameplay loop, time loop, alchemy, farming, Peoplesprouts), and story/records pages (companions, factions, endings, achievements, wiki).",
    pageIds: ["fixed-wiki-hub-en-US", "faq", "home-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
