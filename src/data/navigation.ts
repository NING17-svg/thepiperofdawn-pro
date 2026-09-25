export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

const pageLabelMap: Record<string, string> = {
  home: "Home",
  overview: "Overview",
  "release-status": "Release",
  "steam-availability": "Steam",
  "system-requirements": "System Requirements",
  platforms: "Platforms",
  languages: "Languages",
  "price-and-editions": "Price",
  "reviews-and-reception": "Reviews",
  demo: "Demo",
  "gameplay-loop": "Gameplay",
  "time-loop-mechanics": "Time Loop",
  "alchemy-system": "Alchemy",
  "farming-and-crops": "Farming",
  peoplesprouts: "Peoplesprouts",
  "companions-heroines": "Companions",
  factions: "Factions",
  endings: "Endings",
  achievements: "Achievements",
  "wiki-hub": "Wiki",
  guides: "Guides",
};

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home" } },
  { href: "/wiki", labels: { "en-US": "Wiki" } },
  { href: "/release", labels: { "en-US": "Release" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" } },
  { href: "/alchemy", labels: { "en-US": "Alchemy" } },
  { href: "/achievements", labels: { "en-US": "Achievements" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels["en-US"] ||
    Object.values(item.labels)[0]
  );
}

export { pageLabelMap };
